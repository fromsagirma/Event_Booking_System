import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import events from '../data/events';
import EventCard from '../components/EventCard';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Event not found.
        </p>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  const related = events.filter(
    e => e.category === event.category && e.id !== event.id
  );

  const date = new Date(event.date);
  const dateFormatted = date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr] lg:items-start">
        <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="relative h-60 w-full overflow-hidden sm:h-80">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {event.category}
            </span>
          </div>

          <div className="space-y-5 p-5 sm:p-6">
            <header className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {event.title}
              </h1>
              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  📅 {dateFormatted}
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  📍 {event.location}
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
                  From ${event.price.toFixed(2)}
                </span>
              </p>
            </header>

            <section className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
              <p>
                Experience an unforgettable {event.category.toLowerCase()} with
                a premium booking experience. Seats are limited, book Now.
              </p>
              <p>
                Payments are
                not processed, but the full booking flow is implemented for
                demonstration 
              </p>
            </section>

            <footer className="flex flex-wrap gap-3">
              <Link
                to={`/booking/${event.id}`}
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                Book Now
              </Link>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-gray-50"
              >
                Go Back
              </button>
            </footer>
          </div>
        </article>

        <aside className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Similar events
          </h2>
          {related.length === 0 ? (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No similar events found.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {related.map(e => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default EventDetails;