// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData } from '../data/intraintel';
import Hero from '../components/sections/Hero';
import TheProblem from '../components/sections/TheProblem';
import TheSolution from '../components/sections/TheSolution';
import AiSolutionsSection from '../components/sections/AiSolutionsSection';
import TrustSecurity from '../components/sections/TrustSecurity';
import HowItWorks from '../components/sections/HowItWorks';
import CloudIntegrations from '../components/sections/CloudIntegrations';
import SpotLight from '../components/sections/SpotLight';
import TestimonialsSection from '../components/sections/Testimonials';
import ComparisonSection from '../components/sections/ComparisonSection';
import Resources from '../components/sections/Resources';
import FAQSection from '../components/sections/FaqSection';
import ContactUs from '../components/sections/ContactUs';
import HomeStats from '../components/sections/HomeStats';
import FeaturesSection from '../components/sections/FeaturesSection';
import UseCasesSection from '../components/sections/UseCasesSection';


export default function HomePage() {
    const navigate = useNavigate();
    const [showHowItWorks, setShowHowItWorks] = React.useState(false);

    return (
        <>
            <SEO {...seoData.home} />
            <div className="bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white pt-24 relative">
                <Hero
                    title={
                        <>
                            <span>Your Data.</span>
                            <span className="">Your AI.</span>
                            <span>Your Way.</span>
                        </>
                    }
                    subtitle="Deploy specialized AI agents that automate technical documentation, regulatory compliance, clinical workflows, and operational processes—across all your data sources."
                    primaryCta={{ label: 'Get Started', onClick: () => navigate('/contact') }}
                />
                <HomeStats />
                <TheProblem />
                <TheSolution /> 
               

                {/* Toggle Section */}
                <AnimatePresence mode="wait">
                    {showHowItWorks ? (
                        <motion.div
                            key="how-it-works"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <HowItWorks />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="ai-solutions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AiSolutionsSection onToggle={() => setShowHowItWorks(true)} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <CloudIntegrations />


                <ComparisonSection />
                {/* <FeaturesSection /> */}
                {/* <TrustSecurity /> */}
                {/* <HowItWorks /> was here */}
                {/* <AiSolutionsSection /> was here */}
                <SpotLight />
                {/* <TestimonialsSection /> */}
                <FAQSection />
                <Resources />

                <ContactUs />
            </div>

        </>
    );
}
