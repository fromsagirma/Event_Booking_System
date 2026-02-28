import React from 'react';
import { Link } from 'react-router-dom';
import events from '../data/events';
import EventCard from '../components/EventCard';

function Home() {
  const featured = events.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
            Book Your Happiness Now
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Discover and book tickets for movies, sports, and live concerts.
          </h1>
          <p className="max-w-xl text-sm text-gray-600 dark:text-gray-300">
            Browse curated events, mark your favorites, and complete a seamless
            booking experience in just a few clicks. All in a modern, responsive
            interface with dark mode support. 
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/events"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Browse Events
            </Link>
            <a
              href="#featured"
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              View Featured
            </a>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-4 text-xs text-gray-600 dark:text-gray-300 sm:max-w-md">
            <div>
              <dt className="font-semibold text-gray-800 dark:text-gray-100">
                Real-time search
              </dt>
              <dd>Filter events instantly by title and category.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 dark:text-gray-100">
                Favorites
              </dt>
              <dd>Save events you love for quick access.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 dark:text-gray-100">
                Dark mode
              </dt>
              <dd>Persisted theme with smooth transitions.</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-3">
            {featured.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Featured Events
          </h2>
          <Link
            to="/events"
            className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View all events →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;