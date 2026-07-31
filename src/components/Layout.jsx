import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigationGroups } from '../data/navigation.js';
import { CloseIcon, MenuIcon, SearchIcon, SunIcon } from './icons.jsx';
import SearchDialog from './SearchDialog.jsx';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        target?.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo({ top: 0 });
      }
    }, 40);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash, location.search]);

  useEffect(() => {
    function onKeyDown(event) {
      const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
      }
      if ((event.key === '/' && !typing) || ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'k')) {
        event.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
          <MenuIcon />
        </button>
        <NavLink className="brand" to="/">
          <span className="brand-sun"><SunIcon size={27} /></span>
          <span>
            <strong>HEÖFON</strong>
            <small>Archive of Radiance</small>
          </span>
        </NavLink>
        <button className="top-search" onClick={() => setSearchOpen(true)}>
          <SearchIcon size={18} />
          <span>Search the archive</span>
          <kbd>Ctrl K</kbd>
        </button>
      </header>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-mobile-head">
          <span>Archive Navigation</span>
          <button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><CloseIcon /></button>
        </div>
        <div className="sidebar-intro">
          <span className="fine-rule" />
          <p>The Kingdom in the Sky</p>
          <small>Current Year · 269</small>
        </div>
        {navigationGroups.map((group) => (
          <nav key={group.label} className="sidebar-group" aria-label={group.label}>
            <span className="sidebar-label">{group.label}</span>
            {group.items.map(([label, path]) => (
              <NavLink key={`${label}-${path}`} to={path} className={({ isActive }) => isActive ? 'active' : undefined}>
                {label}
              </NavLink>
            ))}
          </nav>
        ))}
        <div className="sidebar-verse">
          <span>Book III · 18</span>
          <p>“Question Me without fear, My child, for truth does not tremble before examination.”</p>
        </div>
      </aside>
      {menuOpen && <button className="mobile-scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}

      <main className="site-main">
        <Outlet />
        <footer className="site-footer">
          <span>Heöfon · Archive of Radiance</span>
          <span>Knowledge Illuminates. Wisdom Guides.</span>
        </footer>
      </main>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
