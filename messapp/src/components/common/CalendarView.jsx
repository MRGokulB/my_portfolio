import React from 'react';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

const CalendarView = ({
    history = [],
    renewalHistory = [],
    currentMonth = new Date(),
    onMonthChange
}) => {
    const today = new Date();

    // Derived Date Info
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay(); // 0 is Sunday
    const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
    const currentMonthKey = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}`;

    // History Frequency Map
    const historyMap = history.reduce((acc, dateStr) => {
        // Handle both full ISO strings and YYYY-MM-DD
        const dateKey = dateStr.split('T')[0];
        acc[dateKey] = (acc[dateKey] || 0) + 1;
        return acc;
    }, {});

    // Renewal Map
    const renewalMap = renewalHistory.reduce((acc, event) => {
        const dateKey = event.date.split('T')[0];
        acc[dateKey] = event;
        return acc;
    }, {});

    // Helpers
    const handlePrev = () => onMonthChange && onMonthChange(-1);
    const handleNext = () => onMonthChange && onMonthChange(1);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                <button onClick={handlePrev} className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-gray-200 shadow-sm text-gray-600">
                    <ChevronLeft size={20} />
                </button>
                <span className="font-bold text-lg text-dark-900">{monthName}</span>
                <button onClick={handleNext} className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-gray-200 shadow-sm text-gray-600">
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Grid */}
            <div className="p-4 md:p-6">
                <div className="grid grid-cols-7 gap-1 mb-3 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i}>{d}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-2 md:gap-3">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}

                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const date = i + 1;
                        const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
                        const dateStr = dateObj.toISOString().split('T')[0];

                        const count = historyMap[dateStr] || 0;
                        const isPresent = count > 0;
                        const isToday = today.toISOString().split('T')[0] === dateStr;
                        const hasRenewal = !!renewalMap[dateStr];

                        // Visual Styles
                        let bgClass = isToday ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-gray-50 text-gray-700 border-gray-100';

                        if (isPresent) {
                            if (count === 1) bgClass = 'bg-green-500 text-white border-green-600 shadow-sm';
                            else if (count === 2) bgClass = 'bg-purple-600 text-white border-purple-700 shadow-sm';
                            else bgClass = 'bg-orange-500 text-white border-orange-600 shadow-sm'; // 3+
                        }

                        // Renewal Override (Indicator on top, doesn't change full bg usually, but let's add a marker)

                        return (
                            <div
                                key={date}
                                className={`aspect-square rounded-xl flex items-center justify-center text-xs md:text-sm font-bold border relative transition-transform hover:scale-105 cursor-default ${bgClass}`}
                                title={isPresent ? `Meals: ${count}` : ''}
                            >
                                {date}
                                {count > 2 && (
                                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-white shadow-sm">
                                        {count}
                                    </span>
                                )}
                                {hasRenewal && (
                                    <span className="absolute -bottom-1 -right-1 bg-white text-secondary-600 p-0.5 rounded-full shadow border border-gray-100">
                                        <RefreshCw size={10} />
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 text-[10px] md:text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-green-500 rounded-sm shadow-sm"></div> 1 Meal</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-purple-600 rounded-sm shadow-sm"></div> 2 Meals</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-orange-500 rounded-sm shadow-sm"></div> 3+</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 flex items-center justify-center"><RefreshCw size={10} className="text-secondary-600" /></div> Renewal</div>
                </div>
            </div>

            {/* Monthly Renewals List (Internal) */}
            <div className="px-4 md:px-6 pb-4">
                {renewalHistory
                    .filter(e => e.date.startsWith(currentMonthKey))
                    .map((event, idx) => (
                        <div key={idx} className="bg-orange-50 p-3 rounded-xl border border-orange-100 text-xs mb-2">
                            <div className="flex items-center gap-2 mb-1">
                                <RefreshCw size={12} className="text-orange-600" />
                                <span className="font-bold text-orange-800">Plan Renewed: {new Date(event.date).toLocaleDateString('en-IN')}</span>
                            </div>
                            <div className="text-gray-600 ml-5">
                                {event.oldPlanName} → <strong>{event.newPlanName}</strong>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CalendarView;
