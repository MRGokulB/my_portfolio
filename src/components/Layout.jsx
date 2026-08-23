import { motion } from 'framer-motion';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Layout = () => {
  const { personal } = portfolioData;

  // Split name logically for the logo e.g. "GOKUL.B"
  const firstName = personal.name.split(' ')[0].toUpperCase();
  const lastName = personal.name.split(' ').slice(1).join(' ').toUpperCase();

  return (
    <div className="min-h-screen bg-background text-primary flex">
      {/* Fixed Sidebar */}
      <aside className="hidden md:flex w-64 fixed top-0 left-0 h-screen border-r border-black bg-white z-50 flex-col justify-between p-8">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-12 uppercase leading-[0.8]">
            {firstName}<span className="text-accent">.</span><br />
            {lastName}
          </h1>

          <nav className="flex flex-col gap-4">
            {[
              { name: 'Index', path: '/' },
              { name: 'Works', path: '/works' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors ${isActive ? 'text-accent' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="text-xs font-mono text-secondary uppercase">
          <p>© {new Date().getFullYear()}</p>
          <p>{personal.location.split('|')[0]}</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="w-full md:ml-64 min-h-screen relative">
        {/* Top Bar for Meta Info */}
        <header className="h-16 border-b border-black md:flex hidden items-center justify-between px-8 bg-white sticky top-0 z-40">
          <span className="font-mono text-xs uppercase tracking-widest">Available for Commission</span>
          <span className="font-mono text-xs uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </header>

        {/* Mobile Header (Temporary simple fallback) */}
        <header className="h-16 md:hidden border-b border-black flex items-center justify-center bg-white sticky top-0 z-40">
          <h1 className="text-xl font-black tracking-tighter uppercase">
            {firstName}<span className="text-accent">.</span>{lastName}
          </h1>
        </header>

        <div className="p-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;