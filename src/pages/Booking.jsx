import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import events from '../data/events';
import TicketSelector from '../components/TicketSelector';
import Modal from '../components/Modal';

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === id);

  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const totalPrice = useMemo(
    () => (event ? quantity * event.price : 0),
    [quantity, event]
  );

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

  const isEmailValid = value =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const fullNameError =
    touched && !fullName.trim() ? 'Full name is required.' : '';
  const emailError =
    touched && !email.trim()
      ? 'Email is required.'
      : touched && email.trim() && !isEmailValid(email)
      ? 'Enter a valid email address.'
      : '';

  const handleSubmit = e => {
    e.preventDefault();
    setTouched(true);

    if (!fullName.trim() || !email.trim() || !isEmailValid(email)) {
      return;
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:items-start">
        <section className="space-y-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6">
          <header className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Booking for {event.title}
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Complete the form to simulate your booking. No real payments are
              processed.
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1">
              <label
                htmlFor="quantity"
                className="text-sm font-medium text-gray-800 dark:text-gray-100"
              >
                Ticket quantity
              </label>
              <div className="flex items-center justify-between">
                <TicketSelector quantity={quantity} onChange={setQuantity} />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Total:{' '}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    ${totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-800 dark:text-gray-100"
              >
                Full Name<span className="text-pink-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              />
              {fullNameError && (
                <p className="text-xs text-pink-500">{fullNameError}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-800 dark:text-gray-100"
              >
                Email<span className="text-pink-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              />
              {emailError && (
                <p className="text-xs text-pink-500">{emailError}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                Confirm Booking
              </button>
              <Link
                to={`/events/${event.id}`}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-gray-50"
              >
                Back to details
              </Link>
            </div>
          </form>
        </section>

        <aside className="space-y-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Booking summary
          </h2>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
            <p className="font-semibold">{event.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {event.category} • {event.location}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Base price: ${event.price.toFixed(2)} per ticket
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-dashed border-gray-200 pt-3 text-sm dark:border-gray-700">
              <span>
                {quantity} ticket{quantity > 1 ? 's' : ''}
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </aside>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Booking Confirmed"
      >
        <p className="mb-3">
          Thank you, <span className="font-semibold">{fullName}</span>! Your
          booking has been successfully simulated.
        </p>
        <ul className="mb-3 space-y-1 text-sm">
          <li>
            <span className="font-medium">Event:</span> {event.title}
          </li>
          <li>
            <span className="font-medium">Tickets:</span> {quantity}
          </li>
          <li>
            <span className="font-medium">Total:</span>{' '}
            ${totalPrice.toFixed(2)}
          </li>
          <li>
            <span className="font-medium">Email:</span> {email}
          </li>
        </ul>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          This is a front-end only application. No real tickets have been
          issued and no payment has been processed.
        </p>
      </Modal>
    </>
  );
}

export default Booking;