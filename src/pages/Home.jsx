import React from 'react';
import { Link } from 'react-router-dom';
import events from '../data/events';
import EventCard from '../components/EventCard';
import Stadiumimg from '../Assets/Stadiumimg.jpg';
import Halleluyaimg from '../Assets/Halleluyaimg.jpg';
import Saqjamimg from '../Assets/Saqjamimg.jpg';
import AddisFootballimg from '../Assets/AddisFootballimg.png';
import ArsvChelseaimg from '../Assets/ArsenalvChelsea-2.jpg';

function Home() {
  const featured = events.slice(0, 3);

  const heroImages = [
    {
      id: 1,
      label: 'Festival vibes',
      alt: 'Happy crowd celebrating at a festival',
      src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      label: 'Movie night',
      alt: 'Cinema audience watching a movie',
      src: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      label: 'Live FootBall',
      alt: 'Football stadium crowd cheering',
      src: Stadiumimg
    },
    {
      id: 4,
      label: 'Gospel concert',
      alt: 'Gospel concert with raised hands',
      src: Halleluyaimg
    },
    {
      id: 5,
      label: 'Friends Comedy night out',
      alt: 'Friends laughing together at an event',
      src: Saqjamimg
    },
    {
      id: 6,
      label: 'Outdoor concert',
      alt: 'Outdoor concert crowd at sunset',
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 7,
      label: 'FootBall Match ',
      alt: 'WATCHING FootBall Match Together',
      src: ArsvChelseaimg
    },

    {
      id: 8,
      label: 'Football Meetup',
      alt: 'Football playing Meetup',
      src: AddisFootballimg
    }
  ];

  return (
    <div className="space-y-10">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 to-teal-600 py-20 shadow-xl dark:from-indigo-800 dark:to-teal-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* LEFT SIDE TEXT */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                Event ticketing made simple
              </h1>
              <p className="max-w-xl text-base text-white/90 lg:text-lg">
                An easy-to-use event ticketing platform with fair pricing and
                dedicated human support. All the tools you need for a fraction of
                the cost charged by other platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/events"
                  className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-white/95"
                >
                  Browse Events
                </Link>
                <a
                  href="#featured"
                  className="inline-flex items-center rounded-xl border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  View Featured
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {heroImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-105 ${
                    index === 0 ? 'lg:row-span-2 aspect-[4/6]' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />

                  {/* Label */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {image.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
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

      {/* HOW IT WORKS */}
      <section className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:grid-cols-[1.6fr,1fr] lg:p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            How booking works
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            In just a few simple steps, you can go from browsing to confirmed
            tickets. No accounts, no payment integration – perfect for demos and
            learning.
          </p>
          <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white dark:bg-indigo-500">
                1
              </span>
              <div>
                <p className="font-semibold">Browse and filter events</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Use search and category filters on the Events page to quickly find what you're interested in.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white dark:bg-indigo-500">
                2
              </span>
              <div>
                <p className="font-semibold">Open details & favorite</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Explore full event details and keep your favorites handy.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white dark:bg-indigo-500">
                3
              </span>
              <div>
                <p className="font-semibold">Simulate your booking</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Choose ticket quantity, fill in details, and confirm booking.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <aside className="space-y-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Quick actions
          </h3>
          <div className="space-y-2">
            <Link
              to="/events"
              className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm transition hover:bg-indigo-50 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-indigo-900/40"
            >
              <span>Start browsing events</span>
              <span className="text-indigo-600 dark:text-indigo-400">↗</span>
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Home;