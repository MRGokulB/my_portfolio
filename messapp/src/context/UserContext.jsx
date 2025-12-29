import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, onSnapshot, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';
import { PLAN_TYPES } from '../utils/messConstants';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // The Auth User
    const [subscriber, setSubscriber] = useState(null); // The Database Record
    const [loading, setLoading] = useState(true);

    // 1. Listen for Auth State Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // If logged in, fetch subscriber data immediately
                // We use onSnapshot for real-time updates (e.g. if Admin adds tokens)
                const q = query(collection(db, 'subscribers'), where('email', '==', currentUser.email));

                const unsubDb = onSnapshot(q, (snapshot) => {
                    if (!snapshot.empty) {
                        // Assume email is unique, take first match
                        const doc = snapshot.docs[0];
                        setSubscriber({ id: doc.id, ...doc.data() });
                    } else {
                        setSubscriber(null); // Email auth exists, but no subscription record
                    }
                    setLoading(false);
                });

                return () => unsubDb(); // Cleanup DB listener
            } else {
                setSubscriber(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    // 2. Send Magic Link
    const sendLoginLink = async (email) => {
        // Use configured Prod URL or fallback to current window location (localhost)
        const baseUrl = import.meta.env.VITE_APP_URL || window.location.origin;

        const actionCodeSettings = {
            url: baseUrl + '/login', // Redirect back to login page to handle verification
            handleCodeInApp: true,
        };

        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', email); // Save for verification step
    };

    // 3. Verify Magic Link (Call this on Page Load of /login)
    const verifyLoginLink = async () => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn');

            if (!email) {
                // User opened link on different device/browser
                email = window.prompt('Please provide your email for confirmation');
            }

            const result = await signInWithEmailLink(auth, email, window.location.href);
            window.localStorage.removeItem('emailForSignIn');
            return result.user;
        }
        return null;
    };

    // 4. Logout
    const logout = async () => {
        await signOut(auth);
        setSubscriber(null);
        setUser(null);
    };

    // 5. Mark Attendance
    const markAttendance = async (qrData) => {
        if (!subscriber || !subscriber.id) throw new Error("Subscriber not found");

        // 1. Validate QR Code payload
        if (qrData !== "MANE_MESS_ATTENDANCE") {
            throw new Error("Invalid QR Code. Please scan the correct code.");
        }

        // 2. Validate Tokens
        const tokensLeft = (subscriber.totalTokens || 0) - (subscriber.tokensUsed || 0);
        if (tokensLeft <= 0) {
            throw new Error("No tokens remaining. Please renew your plan.");
        }

        // 3. Validate today's attendance (Using Local Time, NOT UTC)
        // Offset for IST (UTC+5:30) manually if environment doesn't support TZ, but simpler:
        // Use a function that gets YYYY-MM-DD in local time
        const getLocalDate = () => {
            const d = new Date();
            const offset = d.getTimezoneOffset() * 60000;
            const localISOTime = (new Date(d.getTime() - offset)).toISOString().slice(0, 10);
            return localISOTime;
        };

        const today = getLocalDate();
        const todaysScans = subscriber.history?.filter(date => date.startsWith(today)).length || 0;

        // Determine plan limit
        let mealsAllowed = 1; // Default
        const plan = Object.values(PLAN_TYPES).find(p => p.id === subscriber.planId);

        console.log(`[Attendance] Plan: ${subscriber.planId} | Allowed: ${plan?.mealsPerDay} | Scanned Today: ${todaysScans}`);

        if (plan) {
            mealsAllowed = plan.mealsPerDay || 1;
        }

        if (todaysScans >= mealsAllowed) {
            throw new Error(`Daily limit reached (${todaysScans}/${mealsAllowed} meals consumed today).`);
        }

        // 4. Update Firestore
        const subRef = doc(db, 'subscribers', subscriber.id);
        const timestamp = new Date().toISOString();

        await updateDoc(subRef, {
            tokensUsed: increment(1),
            history: arrayUnion(timestamp)
        });

        // Optimistic update handled by onSnapshot listener automatically
        return tokensLeft - 1;
    };

    const value = {
        user,
        subscriber,
        loading,
        sendLoginLink,
        verifyLoginLink,
        markAttendance,
        logout
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
