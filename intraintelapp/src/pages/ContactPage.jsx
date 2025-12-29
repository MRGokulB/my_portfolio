// src/pages/ContactPage.jsx
import React from 'react';
import SEO from '../components/SEO';
import { seoData } from '../data/intraintel';
import ContactUs from '../components/sections/ContactUs';

export default function ContactPage() {
    return (
        <>
            <SEO {...seoData.contact} />
            <div className="bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white pt-24">
                <ContactUs />
            </div>
        </>
    );
}
