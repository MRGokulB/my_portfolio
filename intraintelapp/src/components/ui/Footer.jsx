import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  ArrowRight,
  Shield,
  CheckCircle2
} from 'lucide-react';
import logo from '../../assets/logo.svg';
const footerLinks = {
  product: [
    { label: 'Solutions', href: '/features' },
    { label: 'Security', href: '/security' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Changelog', href: '/changelog' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '/partners' },
  ],
  legal: [],
  social: [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/intraintel-ai/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61566526197979', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/intraintelai/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCwDIgSPbkVNvcTeBoyoHCMg', label: 'YouTube' },
  ]
};
export default function Footer() {
  return (
    <footer className="bg-dark-950 text-slate-400 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] rounded-full bg-blue-600/5 blur-3xl opacity-20" />
        <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-indigo-600/5 blur-3xl opacity-20" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay ahead of the curve</h3>
              <p className="text-slate-400">Join our newsletter for the latest AI insights and product updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg shadow-blue-900/20">
                <img src={logo} alt="IntraIntel" className="w-6 h-6 brightness-0 invert" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                IntraIntel<span className="text-blue-500">.AI</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Secure, private, and fast enterprise AI search. Transform your internal data into actionable intelligence without compromising security.
            </p>
            <div className="flex gap-4 pt-2">
              {footerLinks.social.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-6">
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} IntraIntel.AI. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Shield size={14} />
              SOC2 Compliant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
