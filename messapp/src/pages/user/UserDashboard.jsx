import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import CalendarView from '../../components/common/CalendarView';
import { LogOut, User, CalendarCheck, Utensils, AlertCircle, ScanLine, Clock, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QRScanner from '../../components/common/QRScanner';
import TokenSuccessModal from '../../components/user/TokenSuccessModal';
import { useToast } from '../../context/ToastContext';

const UserDashboard = () => {
    const { subscriber, logout, markAttendance } = useUser();
    const navigate = useNavigate();
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showScanner, setShowScanner] = useState(false);
    const [showSuccessToken, setShowSuccessToken] = useState(false);
    const [selectedTokenTime, setSelectedTokenTime] = useState(null); // For viewing history
    const [audioEnabled, setAudioEnabled] = useState(() => {
        return localStorage.getItem('userAudioEnabled') !== 'false';
    });
    const toast = useToast();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const handleScanSuccess = async (decodedText) => {
        setShowScanner(false);
        try {
            await markAttendance(decodedText);
            // toast.success(`Attendance Marked!`); // Replaced by Modal
            setSelectedTokenTime(null); // New scan, so use current time (default)
            setShowSuccessToken(true);
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Failed to mark attendance");
        }
    };

    if (!subscriber) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-400">Loading profile...</div>
        </div>
    );

    const tokensLeft = (subscriber.totalTokens || 0) - (subscriber.tokensUsed || 0);
    const progress = Math.min(100, Math.max(0, (tokensLeft / (subscriber.totalTokens || 30)) * 100));

    // Status visual
    const isLow = tokensLeft <= 5;
    const isExpired = tokensLeft <= 0;

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <header className="bg-dark-900 text-white p-6 pb-12 rounded-b-[2.5rem] relative z-10 shadow-xl">
                <div className="max-w-md mx-auto flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                            <User size={24} className="text-primary-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Welcome Back</p>
                            <h1 className="text-xl font-bold text-white">{subscriber.name}</h1>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                const newState = !audioEnabled;
                                setAudioEnabled(newState);
                                localStorage.setItem('userAudioEnabled', newState);
                                if (newState) {
                                    const audio = new Audio('/notification.mp3');
                                    audio.volume = 0.5;
                                    audio.play().catch(e => console.log(e));
                                }
                            }}
                            className={`p-2 rounded-xl transition-colors ${audioEnabled ? 'bg-primary-500/20 text-primary-400' : 'bg-white/5 text-gray-400'}`}
                            title={audioEnabled ? "Mute Feedback" : "Enable Feedback"}
                        >
                            {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-gray-400 hover:text-white"
                            title="Logout"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                {/* Main Stats Card */}
                <div className="max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 flex justify-between items-center text-white shadow-inner">
                        <div>
                            <div className="text-gray-300 text-xs mb-1 font-medium">Current Plan</div>
                            <div className="font-bold text-lg leading-tight text-white">{subscriber.planName}</div>
                            <div className="text-xs text-yellow-500 mt-1 font-bold bg-black/20 px-2 py-0.5 rounded-lg inline-block border border-white/10">
                                {subscriber.uniqueId}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-white">{tokensLeft}</div>
                            <div className="text-xs text-gray-300 font-medium">Tokens Left</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Body */}
            <div className="max-w-md mx-auto px-4 -mt-6 relative z-20 space-y-6">

                {/* Progress Card */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                >
                    <div className="flex justify-between items-end mb-2">
                        <div className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <CalendarCheck size={16} className="text-primary-500" /> Attendance
                        </div>
                        <div className="text-xs font-bold text-gray-400">{subscriber.tokensUsed} Used / {subscriber.totalTokens} Total</div>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className={`h-full rounded-full ${isLow ? 'bg-red-500' : 'bg-primary-500'}`}
                        />
                    </div>
                    {isLow && !isExpired && (
                        <div className="mt-3 flex items-start gap-2 text-xs text-orange-600 bg-orange-50 p-2 rounded-lg">
                            <AlertCircle size={14} className="mt-0.5 shrink-0" />
                            <span>Your tokens are running low. Please contact admin to renew soon.</span>
                        </div>
                    )}
                    {isExpired && (
                        <div className="mt-3 flex items-start gap-2 text-xs text-red-600 bg-red-50 p-2 rounded-lg">
                            <AlertCircle size={14} className="mt-0.5 shrink-0" />
                            <span>Plan expired. Please renew to continue.</span>
                        </div>
                    )}
                </motion.div>


                {/* Digital Wallet / Recent Tokens */}
                <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3 px-1 flex items-center gap-2">
                        <Clock size={16} /> Recent Tokens
                    </h3>
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        {subscriber.history && subscriber.history.length > 0 ? (
                            <div className="space-y-3">
                                {subscriber.history.slice().reverse().slice(0, 3).map((dateStr, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => { setSelectedTokenTime(dateStr); setShowSuccessToken(true); }}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl active:scale-95 transition-transform cursor-pointer hover:bg-green-50 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-green-100 text-green-600 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <Utensils size={16} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-dark-900 text-sm">Meal Token</p>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(dateStr).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-dark-900 text-sm">
                                                {new Date(dateStr).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                            <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">View</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-400 text-sm py-4">No recent scans</p>
                        )}
                    </div>
                </div>

                {/* Calendar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="font-bold text-gray-800 mb-3 px-1">Meal History</h3>
                    <CalendarView
                        history={subscriber.history}
                        renewalHistory={subscriber.renewalHistory}
                        currentMonth={currentMonth}
                        onMonthChange={(offset) => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1))}
                    />
                </motion.div>

                {/* Scan Action Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowScanner(true)}
                    className="w-full py-4 bg-dark-900 text-white rounded-2xl font-bold shadow-xl shadow-dark-900/20 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <ScanLine size={24} className="text-primary-400" />
                    <span>Scan to Eat</span>
                </motion.button>

                {/* Scanner Modal */}
                {showScanner && (
                    <QRScanner
                        onScanSuccess={handleScanSuccess}
                        onClose={() => setShowScanner(false)}
                    />
                )}

                {/* Success Token Modal */}
                <AnimatePresence>
                    {showSuccessToken && (
                        <TokenSuccessModal
                            subscriber={subscriber}
                            planName={subscriber.planName}
                            scanTime={selectedTokenTime}
                            audioEnabled={audioEnabled}
                            onClose={() => {
                                setShowSuccessToken(false);
                                setSelectedTokenTime(null);
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Info Footer */}
                <div className="text-center text-xs text-gray-400 pb-4 pt-2">
                    <p>Issues with attendance? Contact Clean Eat Mess at +91 98765 43210</p>
                </div>

            </div>
        </div >
    );
};

export default UserDashboard;
