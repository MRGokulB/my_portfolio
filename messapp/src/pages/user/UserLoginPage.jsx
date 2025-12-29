import { useState, useEffect, useRef } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle, ChefHat, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '../../context/ToastContext';
import { cn } from '../../lib/utils';

const UserLoginPage = () => {
    const { sendLoginLink, verifyLoginLink, user, subscriber, loading } = useUser();
    const navigate = useNavigate();
    const toast = useToast();

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, sending, sent, verifying, success

    const processedRef = useRef(false);

    useEffect(() => {
        const checkVerification = async () => {
            // Wait for global auth state to initialize
            if (loading) return;

            // If already logged in, no need to verify again
            if (user) {
                setStatus('success');
                return;
            }

            if (window.location.href.includes('apiKey') && !processedRef.current) {
                processedRef.current = true;
                setStatus('verifying');
                try {
                    await verifyLoginLink();
                    setStatus('success');
                    toast.success("Login Verified! Redirecting...");
                } catch (error) {
                    console.error("Link Verification Error", error);
                    if (error.code === 'auth/invalid-action-code') {
                        console.warn("Invalid action code. Checking logic...");
                        // Even if code is invalid, we might be logged in (race condition resolved late)
                        // But if we are here, 'user' was null a moment ago.
                        // Let the user rely on the 'user' effect to redirect if it works out.
                    } else {
                        setStatus('idle');
                        toast.error("Invalid or Expired Link.");
                    }
                }
            }
        };
        checkVerification();
    }, [user, loading]); // Added dependencies to re-run when loading finishes

    useEffect(() => {
        if (user && subscriber) {
            navigate('/portal');
        } else if (user && !subscriber && status !== 'verifying') {
            toast.error("No subscription found for this email. Please contact Admin.");
        }
    }, [user, subscriber, navigate, status]);


    const handleSendLink = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('sending');
        try {
            await sendLoginLink(email);
            setStatus('sent');
            toast.success("Magic Link Sent! Check your email.");
        } catch (error) {
            console.error(error);
            setStatus('idle');
            let msg = "Failed to send link.";
            if (error.code === 'auth/operation-not-allowed') {
                msg = "Email Login is not enabled in Firebase Console. Please contact Admin.";
            } else if (error.message) {
                msg = error.message;
            }
            toast.error(msg);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-100/40 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            {/* Navigation Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 z-20 p-2 bg-white hover:bg-gray-100 rounded-full border border-gray-200 shadow-sm transition-all text-gray-600 hover:text-black group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Left Side - Visual */}
            <div className="hidden md:flex w-1/2 bg-zinc-900 relative items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-zinc-900/90 z-0"></div>
                <div className="relative z-10 text-white max-w-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-yellow-400 mb-6">
                        <ChefHat size={14} />
                        <span>Mane Mess Portal</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                        Quality Food, <br />
                        <span className="text-yellow-400">Delivered Daily.</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Manage your subscription, track meals, and renew plans effortlessly.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10 bg-white md:bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-md bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-3xl p-8 md:p-10"
                >
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                            <Mail size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-500">Enter your email to access your account.</p>
                    </div>

                    {status === 'idle' && (
                        <form onSubmit={handleSendLink} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <span>Send Login Link</span>
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    )}

                    {status === 'sending' && (
                        <div className="text-center py-8">
                            <div className="w-12 h-12 border-4 border-yellow-100 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600 font-medium">Sending magic link...</p>
                        </div>
                    )}

                    {status === 'sent' && (
                        <div className="text-center py-4">
                            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                                <Mail size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Check your Email</h3>
                            <p className="text-gray-500 mb-8 mx-auto">We've sent a login link to <br /><strong className="text-gray-900">{email}</strong></p>

                            <button
                                onClick={() => setStatus('idle')}
                                className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors"
                            >
                                ← Use a different email
                            </button>
                        </div>
                    )}

                    {status === 'verifying' && (
                        <div className="text-center py-8">
                            <div className="w-12 h-12 border-4 border-yellow-100 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600 font-medium">Verifying your link...</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                            <p className="text-gray-500">Redirecting to portal...</p>
                        </div>
                    )}

                    <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">
                            By logging in, you agree to our Terms of Service & Privacy Policy found on the main website.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default UserLoginPage;
