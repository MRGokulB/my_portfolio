import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Layout = () => {
  const { personal } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const firstName = personal.name.split(' ')[0].toUpperCase();
  const lastName = personal.name.split(' ').slice(1).join(' ').toUpperCase();

  const navItems = [
    { name: 'Index', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-background text-primary flex">
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex w-64 fixed top-0 left-0 h-screen border-r border-black/10 bg-white/95 backdrop-blur-md z-50 flex-col justify-between p-8">
        <div>
          <NavLink to="/" className="block group">
            <h1 className="text-3xl font-black tracking-tighter mb-10 uppercase leading-[0.85] text-primary">
              {firstName}
              <span className="text-accent">.</span><br />
              <span className="text-secondary/80 group-hover:text-primary transition-colors">{lastName}</span>
            </h1>
          </NavLink>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-accent active:scale-95 ${
                    isActive
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-secondary hover:text-primary hover:bg-black/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="text-xs text-muted space-y-1.5 pt-6 border-t border-black/5 font-mono">
          <p>© {new Date().getFullYear()} GANGAPRASAD</p>
          <p className="truncate">{personal.location.split('|')[0]}</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="w-full md:ml-64 min-h-screen relative">
        {/* Desktop Sticky Header */}
        <header className="h-16 border-b border-black/10 md:flex hidden items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-secondary uppercase">
              Available for Architecture & Consulting
            </span>
          </div>
          <span className="text-xs text-muted font-mono">
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
        </header>

        {/* Mobile Sticky Header */}
        <header className="h-16 md:hidden border-b border-black/10 flex items-center justify-between px-6 bg-white/90 backdrop-blur-md sticky top-0 z-40">
          <NavLink to="/" className="text-lg font-black tracking-tighter uppercase focus-visible:outline-2 focus-visible:outline-accent">
            {firstName}<span className="text-accent">.</span>{lastName}
          </NavLink>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-black/15 bg-white transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </header>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-b border-black/10 bg-white/95 backdrop-blur-lg flex flex-col p-6 space-y-3 sticky top-16 z-30 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'bg-accent text-white' : 'text-primary hover:bg-black/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="p-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
