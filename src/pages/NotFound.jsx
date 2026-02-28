import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        404 • Page not found
      </p>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        We couldn&apos;t find that page.
      </h1>
      <p className="max-w-md text-sm text-gray-600 dark:text-gray-300">
        The page you&apos;re looking for may have been moved or no longer
        exists. Use the links below to get back on track.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Go to Home
        </Link>
        <Link
          to="/events"
          className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-gray-50"
        >
          Browse Events
        </Link>
      </div>
    </div>
  );
}

export default NotFound;