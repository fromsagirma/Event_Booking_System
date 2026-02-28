import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../context/FavoriteContext';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function EventCard({ event }) {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext);
  const favorite = isFavorite(event.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {event.category}
        </span>
        <button
          type="button"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => toggleFavorite(event.id)}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-pink-500 shadow-sm transition hover:bg-pink-50 dark:bg-gray-900/90 dark:text-pink-400"
        >
          <span className="text-lg">{favorite ? '♥' : '♡'}</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <header className="flex flex-col gap-1">
          <h3 className="line-clamp-2 text-base font-semibold text-gray-900 dark:text-gray-100">
            {event.title}
          </h3>
          <p className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span className="mr-2 inline-flex h-6 items-center rounded-full bg-gray-100 px-2 text-[11px] font-medium uppercase tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {formatDate(event.date)}
            </span>
            <span className="truncate">{event.location}</span>
          </p>
        </header>

        <div className="mt-auto flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-gray-200">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              From
            </span>
            <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              ${event.price.toFixed(2)}
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              to={`/events/${event.id}`}
              className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              Details
            </Link>
            <Link
              to={`/booking/${event.id}`}
              className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;