import React, { useMemo, useState } from 'react';
import events from '../data/events';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

function Events() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredEvents = useMemo(
    () =>
      events.filter(event => {
        const matchesCategory =
          category === 'All' ? true : event.category === category;
        const matchesSearch = event.title
          .toLowerCase()
          .includes(search.trim().toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [search, category]
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Browse Events
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Filter by category, search by title, mark favorites, and book tickets
          in a few clicks.
        </p>
      </header>

      <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter value={category} onChange={setCategory} />
      </section>

      <section id="favorites-section" className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Results
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Showing {filteredEvents.length} of {events.length} events
          </p>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
            No events found. Try adjusting your search or category filters.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Events;