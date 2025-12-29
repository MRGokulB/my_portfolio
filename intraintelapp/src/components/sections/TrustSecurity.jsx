import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Shield,
    Lock,
    Eye,
    CheckCircle,
    FileCheck,
    Server,
    Globe
} from 'lucide-react';

const securityFeatures = [
    {
        icon: Lock,
        title: "Zero External Access",
        description: "Your data never leaves your infrastructure. All AI processing happens within your security boundaries."
    },
    {
        icon: Shield,
        title: "Military-Grade Encryption",
        description: "End-to-end encryption at rest and in transit using AES-256 standards."
    },
    {
        icon: Eye,
        title: "Complete Transparency",
        description: "Full audit trails and real-time monitoring of every AI interaction."
    },
    {
        icon: FileCheck,
        title: "Multi-Compliance",
        description: "Pre-built frameworks for HIPAA, GDPR, SOC 2, and ISO 27001."
    }
];

const certifications = [
    "SOC 2 Type II",
    "HIPAA Compliant",
    "GDPR Ready",
    "ISO 27001"
];

const TrustSecurity = () => {
    const sectionRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    return (
        <section
            id="security"
            ref={sectionRef}
            className="relative py-20 px-6 lg:px-12 overflow-hidden bg-transparent"
        >
            {/* Background Gradients removed as per user request */}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-8 bg-blue-600" />
                                <span className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                                    Security First
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
                                Built on <span className="font-medium text-blue-600">Trust.</span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-12 font-light">
                                Your data sovereignty is non-negotiable. Every architectural decision prioritizes security, compliance, and your absolute control.
                            </p>

                            <div className="grid gap-8">
                                {securityFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                                            <feature.icon size={20} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-slate-900 mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                                {certifications.map((cert, i) => (
                                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-slate-600 text-xs font-medium uppercase tracking-wider border border-blue-100">
                                        <CheckCircle size={12} className="text-teal-500" />
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Minimal Interactive Card */}
                    <div className="perspective-1000 relative h-[600px] flex items-center justify-center" onMouseMove={onMouseMove}>
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative w-full max-w-md aspect-[3/4] bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Card Content */}
                            <div className="relative z-10 transform translate-z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                        <Shield className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium uppercase tracking-widest border border-blue-100">
                                        System Secure
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-500 text-xs uppercase tracking-wider">Encryption Status</span>
                                            <Lock size={14} className="text-slate-900" />
                                        </div>
                                        <div className="text-slate-900 font-mono text-sm">AES-256-GCM Active</div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-500 text-xs uppercase tracking-wider">Data Residency</span>
                                            <Server size={14} className="text-slate-900" />
                                        </div>
                                        <div className="text-slate-900 font-mono text-sm">Local / On-Premise</div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-500 text-xs uppercase tracking-wider">Access Control</span>
                                            <Globe size={14} className="text-slate-900" />
                                        </div>
                                        <div className="text-slate-900 font-mono text-sm">RBAC Enforced</div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Status */}
                            <div className="relative z-10 transform translate-z-10 pt-8 border-t border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                                    </div>
                                    <div>
                                        <div className="text-slate-900 font-medium">Real-time Protection</div>
                                        <div className="text-slate-500 text-xs">Monitoring active threats</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustSecurity;