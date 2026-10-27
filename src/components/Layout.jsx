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
      <aside className="hidden md:flex w-64 fixed top-0 left-0 h-screen border-r border-black bg-white z-50 flex-col justify-between p-8">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-12 uppercase leading-[0.8]">
            {firstName}<span className="text-accent">.</span><br />
            {lastName}
          </h1>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95 ${isActive ? 'text-accent' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="text-xs text-secondary space-y-1">
          <p>© {new Date().getFullYear()}</p>
          <p>{personal.location.split('|')[0]}</p>
        </div>
      </aside>

      <main className="w-full md:ml-64 min-h-screen relative">
        <header className="h-16 border-b border-black md:flex hidden items-center justify-between px-8 bg-white sticky top-0 z-40">
          <span className="text-xs text-secondary font-medium">Available for commission</span>
          <span className="text-xs text-secondary font-mono">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </header>

        <header className="h-16 md:hidden border-b border-black flex items-center justify-between px-6 bg-white sticky top-0 z-40">
          <NavLink to="/" className="text-xl font-black tracking-tighter uppercase focus-visible:outline-2 focus-visible:outline-accent">
            {firstName}<span className="text-accent">.</span>{lastName}
          </NavLink>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="text-xs font-medium border border-black px-3 py-1.5 transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-accent active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </header>

        {mobileMenuOpen && (
          <nav className="md:hidden border-b border-black bg-white flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-bold uppercase tracking-wide transition-colors ${isActive ? 'text-accent' : 'text-black hover:text-accent'}`
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
