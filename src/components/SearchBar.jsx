import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="event-search" className="sr-only">
        Search events
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>
        <input
          id="event-search"
          type="text"
          placeholder="Search events by title..."
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;