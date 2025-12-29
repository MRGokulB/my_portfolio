import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, updateDoc, doc, onSnapshot, query, orderBy, setDoc } from 'firebase/firestore';
import { PLAN_TYPES, CONSTANTS, calculateRemainingValue, calculateNewTokensFromValue, generateMemberId } from '../utils/messConstants';
import { useToast } from './ToastContext';
import { useLocation } from 'react-router-dom';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [useFirebase, setUseFirebase] = useState(false);
    const toast = useToast();
    const location = useLocation();

    // --- State ---
    const [subscribers, setSubscribers] = useState([]);
    const [dailyMenu, setDailyMenu] = useState({
        special: 'Loading...', items: [], priceFull: 0, priceHalf: 0, imageUrl: ''
    });
    const [sales, setSales] = useState([]);
    const [adminNotes, setAdminNotes] = useState('');
    const [adminAudioEnabled, setAdminAudioEnabled] = useState(() => {
        return localStorage.getItem('adminAudioEnabled') !== 'false';
    });
    const [planSettings, setPlanSettings] = useState(PLAN_TYPES); // Dynamic Plans

    // --- Mock Data Fallback (Initial) ---
    const [mockSubscribers, setMockSubscribers] = useState([
        {
            id: 1,
            uniqueId: 'M-001',
            name: 'Aditya Patil',
            phone: '9876543210',
            planId: PLAN_TYPES.FULL_TIFFIN_1M.id,
            planName: PLAN_TYPES.FULL_TIFFIN_1M.name,
            status: 'Active',
            totalTokens: 30,
            tokensUsed: 12,
            startDate: '2023-11-01',
            history: []
        },
        {
            id: 2,
            uniqueId: 'M-002',
            name: 'Priya Deshmukh',
            phone: '9876543211',
            planId: PLAN_TYPES.HALF_TIFFIN_1M.id,
            planName: PLAN_TYPES.HALF_TIFFIN_1M.name,
            status: 'Active',
            totalTokens: 30,
            tokensUsed: 28,
            startDate: '2023-10-15',
            history: []
        },
    ]);
    // Mock Menu and Sales remain same...
    const [mockDailyMenu, setMockDailyMenu] = useState({
        date: new Date().toLocaleDateString('en-IN'),
        items: ['Masala Bhindi', 'Dal Tadka', 'Jeera Rice', 'Chapati (3)'],
        special: 'Gulab Jamun',
        priceFull: 120,
        priceHalf: 80,
        imageUrl: 'https://images.unsplash.com/photo-1593701461250-d716565a471e?q=80&w=800&auto=format&fit=crop'
    });
    const [mockSales, setMockSales] = useState([]);

    // --- Check if Firebase is Configured ---
    useEffect(() => {
        if (import.meta.env.VITE_FIREBASE_API_KEY) {
            console.log("🔥 Firebase Configured. Syncing...");
            setUseFirebase(true);
        } else {
            console.log("⚠️ No Firebase Keys. Using Mock Data.");
            setSubscribers(mockSubscribers);
            setDailyMenu(mockDailyMenu);
            setSales(mockSales);
            setAdminNotes("Shared Team Notepad\n- Remember to order more rice\n- Check gas cylinder");
        }
    }, []);

    // --- Firebase Listeners ---
    // --- Firebase Listeners ---
    // --- Firebase Listeners ---
    useEffect(() => {
        if (!useFirebase) return;

        // Reactive check: updates whenever location changes
        const currentPath = location.pathname;
        const isAdminRoute = currentPath.startsWith('/admin');

        console.log(`[AdminContext] Route changed to: ${currentPath} | Is Admin? ${isAdminRoute}`);

        // 1. Menu is Public (Everyone needs this)
        const unsubMenu = onSnapshot(doc(db, 'dailyMenu', 'today'), (docSnap) => {
            if (docSnap.exists()) setDailyMenu(docSnap.data());
            else setDoc(doc(db, 'dailyMenu', 'today'), mockDailyMenu);
        });

        // If NOT admin, stop here (prevents permission-denied on subscribers/sales)
        if (!isAdminRoute) {
            console.log("[AdminContext] Skipping sensitive data sync (Not admin route)");
            // We still need to return cleanup for menu
            return () => { unsubMenu(); };
        }

        console.log("[AdminContext] Starting Sensitive Data Sync...");

        // 2. Sensitive Admin Data (Subscribers, Sales, Notes)
        const unsubSub = onSnapshot(collection(db, 'subscribers'), (snapshot) => {
            const subsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            // Audio Feedback for Changes
            snapshot.docChanges().forEach((change) => {
                if (change.type === "modified") {
                    const newData = change.doc.data();
                    // We can't easily access 'oldData' here without maintaining a ref or map,
                    // but we can check if 'lastActive' is very recent (within 5 seconds)
                    // This prevents audio on page reload
                    const lastActive = newData.lastActive ? new Date(newData.lastActive).getTime() : 0;
                    const now = Date.now();
                    if (now - lastActive < 10000 && adminAudioEnabled) { // 10s window to be safe
                        // Play simple ping
                        const audio = new Audio('/notification.mp3'); // Smooth ding
                        audio.volume = 0.5;
                        audio.play().catch(e => console.log("Audio play failed", e));
                    }
                }
            });

            setSubscribers(subsData);
        }, (err) => console.log("Subscribers Sync Paused (Restricted)"));

        const q = query(collection(db, 'sales'), orderBy('timestamp', 'desc'));
        const unsubSales = onSnapshot(q, (snapshot) => {
            const salesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSales(salesData);
        }, (err) => console.log("Sales Sync Paused (Restricted)"));

        const unsubNotes = onSnapshot(doc(db, 'settings', 'adminNotes'), (docSnap) => {
            if (docSnap.exists()) setAdminNotes(docSnap.data().content || '');
        }, (err) => console.log("Notes Sync Paused"));

        const unsubPlans = onSnapshot(doc(db, 'settings', 'planPrices'), (docSnap) => {
            if (docSnap.exists()) {
                // Merge with default to ensure structural integrity
                setPlanSettings(prev => ({ ...prev, ...docSnap.data() }));
            }
        }, (err) => console.log("Plan Settings Sync Paused"));

        return () => {
            unsubMenu();
            unsubSub();
            unsubSales();
            unsubNotes();
            unsubPlans();
        };
    }, [useFirebase, location.pathname]); // Re-run when route changes


    // --- Actions ---

    // 1. Mark Attendance (Token Logic)
    const markAttendance = async (id) => {
        const sub = subscribers.find(s => s.id === id);
        if (!sub) return;

        // Use token logic similar to existing "daysUsed" but now we call it tokens
        // Check if plan allows more meals today is done in UI or checked here
        // We simple deduct a token (increment used)

        const newUsed = (sub.tokensUsed || 0) + 1;
        const status = newUsed >= sub.totalTokens ? 'Expired' : 'Active';
        const history = [...(sub.history || []), new Date().toISOString()];

        const updateData = {
            tokensUsed: newUsed,
            status,
            history
        };

        if (useFirebase) {
            await updateDoc(doc(db, 'subscribers', id), updateData);
        } else {
            setSubscribers(prev => prev.map(s => s.id === id ? { ...s, ...updateData } : s));
        }
    };

    // 2. Renew / Change Subscription
    // 2. Renew / Change Subscription
    const renewSubscription = async (id, newPlanId, financialDetails) => {
        const sub = subscribers.find(s => s.id === id);
        if (!sub) return;

        const newPlan = Object.values(PLAN_TYPES).find(p => p.id === newPlanId);
        if (!newPlan) {
            toast.error("Invalid Plan Selected");
            return;
        }

        try {
            const now = new Date();
            const renewalEvent = {
                date: now.toISOString(),
                type: 'RENEWAL',
                oldPlanName: sub.planName || 'Unknown',
                newPlanName: newPlan.name,
                amountPaid: financialDetails?.netPayable || 0,
                creditApplied: financialDetails?.creditValue || 0,
                tokensAdded: financialDetails?.newTotalTokens || 0
            };

            const renewalHistory = [...(sub.renewalHistory || []), renewalEvent];

            const updateData = {
                status: 'Active',
                tokensUsed: 0,
                totalTokens: financialDetails?.newTotalTokens || (newPlan.mealsPerDay * 30),
                planId: newPlan.id,
                planName: newPlan.name,
                subscriptionPrice: newPlan.basePrice, // SNAPSHOT: Lock in the price for this term
                startDate: now.toLocaleDateString('en-IN'),
                renewalHistory, // Append new history
                uniqueId: sub.uniqueId // Ensure ID persists
            };

            if (useFirebase) {
                await updateDoc(doc(db, 'subscribers', id), updateData);
            } else {
                setSubscribers(prev => prev.map(s => s.id === id ? { ...s, ...updateData } : s));
            }

            // Optional: Auto-log a Sale record for the payment
            if (financialDetails?.netPayable > 0) {
                addSale({
                    items: [{ name: `RENEWAL: ${newPlan.name}`, qty: 1, price: financialDetails.netPayable }],
                    total: financialDetails.netPayable,
                    timestamp: now.toISOString(),
                    type: 'SUBSCRIPTION',
                    subscriberId: id,
                    subscriberName: sub.name
                });
            }
            toast.success(`Successfully renewed plan for ${sub.name}!`);
        } catch (error) {
            console.error("Renewal Error:", error);
            toast.error("Renewal Failed: " + error.message);
        }
    };

    // 3. Add Subscriber
    const addSubscriber = async (memberData) => {
        // memberData should contain { name, phone, planId }
        // Use Dynamic planSettings instead of static PLAN_TYPES
        const plan = Object.values(planSettings).find(p => p.id === memberData.planId);
        if (!plan) return;

        // Generate Unique ID (Simple logic: Count + 1)
        // In real firebase, we might need a transaction or a counter doc. 
        // For now, based on current array length is "good enough" for single admin.
        const nextId = generateMemberId(subscribers.length);

        const newMember = {
            uniqueId: nextId,
            name: memberData.name,
            email: memberData.email || '', // Optional but recommended for login
            phone: memberData.phone,
            planId: plan.id,
            planName: plan.name,
            subscriptionPrice: plan.basePrice, // SNAPSHOT: Lock in the price
            status: 'Active',
            tokensUsed: 0,
            totalTokens: plan.mealsPerDay * 30, // Default 30 days
            history: [],
            createdAt: new Date().toISOString()
        };

        if (useFirebase) {
            try {
                await addDoc(collection(db, 'subscribers'), newMember);
                toast.success("New subscriber added successfully!");
            } catch (error) {
                console.error("Add Sub Error:", error);
                toast.error("Failed to add subscriber: " + error.message);
            }
        } else {
            setSubscribers(prev => [{ ...newMember, id: Date.now() }, ...prev]);
            toast.success("Dev Mode: Subscriber added locally.");
        }
    };

    // 4. Add Sale
    const addSale = async (saleData) => {
        if (useFirebase) {
            await addDoc(collection(db, 'sales'), saleData);
        } else {
            setSales(prev => [{ ...saleData, id: Date.now(), timestamp: new Date().toISOString() }, ...prev]);
        }
    };

    // 5. Update Menu
    const updateMenu = async (newMenu) => {
        if (useFirebase) {
            await setDoc(doc(db, 'dailyMenu', 'today'), newMenu, { merge: true });
        } else {
            setDailyMenu(prev => ({ ...prev, ...newMenu }));
        }
    };

    // 6. Update Notes
    const updateNotes = async (content) => {
        if (useFirebase) {
            await setDoc(doc(db, 'settings', 'adminNotes'), { content }, { merge: true });
        } else {
            setAdminNotes(content);
        }
    };

    // 7. Update Plan Price
    const updatePlanPrice = async (planId, newPrice) => {
        const updatedPlans = {
            ...planSettings,
            [planId]: { ...planSettings[planId], basePrice: Number(newPrice) }
        };

        if (useFirebase) {
            try {
                await setDoc(doc(db, 'settings', 'planPrices'), updatedPlans, { merge: true });
                toast.success("Plan Price Updated Successfully");
            } catch (error) {
                console.error("Plan Update Error:", error);
                toast.error("Failed to update plan: " + error.message);
            }
        } else {
            setPlanSettings(updatedPlans);
            toast.success("Dev Mode: Price updated locally.");
        }
    };

    const value = React.useMemo(() => ({
        subscribers: useFirebase ? subscribers : mockSubscribers,
        dailyMenu: useFirebase ? dailyMenu : mockDailyMenu,
        sales: useFirebase ? sales : mockSales,
        adminNotes,
        markAttendance,
        renewSubscription,
        addSubscriber,
        addSale,
        updateMenu,
        updateNotes,
        planSettings,
        updatePlanPrice,
        adminAudioEnabled,
        setAdminAudioEnabled
    }), [
        useFirebase, subscribers, mockSubscribers, dailyMenu, mockDailyMenu,
        sales, mockSales, adminNotes, planSettings, adminAudioEnabled
    ]);

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};
