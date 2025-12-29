import { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import CalendarView from '../common/CalendarView';

const CalendarHistoryModal = ({ user, onClose }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const changeMonth = (offset) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            >
                <div className="p-4 bg-primary-600 text-white flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg">{user.name}</h3>
                        <p className="text-xs text-primary-100 opacity-80">{user.planName}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-2">
                    <CalendarView
                        history={user.history}
                        renewalHistory={user.renewalHistory}
                        currentMonth={currentMonth}
                        onMonthChange={changeMonth}
                    />
                </div>

                <div className="p-4 bg-gray-50 flex justify-between items-center text-xs text-gray-500 border-t border-gray-100">
                    <div>Total Used (All Time): <strong>{user.tokensUsed}</strong> / {user.totalTokens}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default CalendarHistoryModal;
