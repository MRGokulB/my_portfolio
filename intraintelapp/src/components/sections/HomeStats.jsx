import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { homeStats } from "../../data/intraintel";
import { Globe } from 'lucide-react';

const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    useEffect(() => {
        if (!inView) return;
        let startTime = null;
        const animate = (ts) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [inView, end, duration]);
    return [ref, count];
};

const StatCard = ({ stat, i }) => {
    const [ref, count] = useCounter(stat.value);
    const Icon = stat.icon || Globe;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center py-12 px-6 group"
        >
            {/* Vertical Divider */}
            {i !== 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden md:block" />
            )}

            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 ease-out origin-center">
                {stat.prefix}{count}{stat.suffix}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                {stat.label}
            </div>
        </motion.div>
    );
};

export default function HomeStats() {
    return (
        <section className="relative py-24 bg-transparent">
            {/* Background Texture - Mesh */}
            <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-multiply">
                <img
                    src="/assets/texture_mesh_white.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-[-1]" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
                    {homeStats.map((stat, i) => (
                        <StatCard key={i} stat={stat} i={i} />
                    ))}
                </div>
            </div>
        </section >
    );
}
