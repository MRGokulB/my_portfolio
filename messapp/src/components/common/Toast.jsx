import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useEffect } from 'react';

const Toast = forwardRef(({ toast, removeToast }, ref) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id);
        }, 4000); // Auto close after 4s

        return () => clearTimeout(timer);
    }, [toast.id, removeToast]);

    const variants = {
        hidden: { opacity: 0, y: -20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    const icons = {
        success: <CheckCircle size={20} className="text-green-500" />,
        error: <AlertCircle size={20} className="text-red-500" />,
        info: <Info size={20} className="text-blue-500" />
    };

    const bgColors = {
        success: 'bg-green-50 border-green-100',
        error: 'bg-red-50 border-red-100',
        info: 'bg-blue-50 border-blue-100'
    };

    return (
        <motion.div
            layout
            ref={ref}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`flex items-start gap-3 p-4 rounded-xl border shadow-lg w-full max-w-sm pointer-events-auto ${bgColors[toast.type] || 'bg-white border-gray-100'}`}
        >
            <div className="shrink-0 mt-0.5">{icons[toast.type]}</div>
            <div className="flex-1">
                <p className={`text-sm font-semibold text-gray-800`}>{toast.message}</p>
            </div>
            <button onClick={() => removeToast(toast.id)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
            </button>
        </motion.div>
    );
});

Toast.displayName = 'Toast';

export default Toast;
