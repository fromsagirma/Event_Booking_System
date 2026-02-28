import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FavoriteContext } from '../context/FavoriteContext';
import Logo from '../Assets/Logo.jpg';
import Logo2 from '../Assets/Logo2.png'

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { favorites } = useContext(FavoriteContext);
  const location = useLocation();

  const base =
    'rounded-full px-3 py-1 text-sm font-medium transition-colors hover:bg-indigo-100 hover:text-indigo-700 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-300';
  const active = 'bg-indigo-600 text-white dark:bg-indigo-500';

  const navClass = ({ isActive }) => `${base} ${isActive ? active : ''}`;

  const handleFavoritesClick = () => {
    if (location.pathname === '/events') {
      const el = document.getElementById('favorites-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/events';
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-10 w-10 overflow-hidden rounded-full shadow-md ring-2 ring-indigo-500">
           <img
            src={Logo}
            alt="Event Booking Logo"
            className="h-full w-full object-cover"
           />
          </span>
          <span>Event Booking System</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 rounded-full bg-gray-100 p-1 text-sm font-medium dark:bg-gray-800 sm:flex">
            <NavLink to="/" className={navClass} end>
              Home
            </NavLink>
            <NavLink to="/events" className={navClass}>
              Events
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/events"
              className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:hidden"
            >
              Browse
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              {theme === 'dark' ? <span>🌙</span> : <span>☀️</span>}
            </button>

            <button
              type="button"
              onClick={handleFavoritesClick}
              className="relative inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-pink-500 hover:text-pink-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-pink-400 dark:hover:text-pink-300"
            >
              <span className="mr-1 text-base text-pink-500">♥</span>
              <span className="hidden sm:inline">Favorites</span>
              <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-pink-500 px-1 text-xs font-semibold text-white">
                {favorites.length}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;