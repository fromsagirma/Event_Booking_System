import React from 'react';

function TicketSelector({ quantity, onChange }) {
  const decrement = () => {
    if (quantity > 1) onChange(quantity - 1);
  };

  const increment = () => {
    onChange(quantity + 1);
  };

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-900">
      <button
        type="button"
        onClick={decrement}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-lg leading-none text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-800"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-[2rem] text-center font-semibold">{quantity}</span>
      <button
        type="button"
        onClick={increment}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-lg leading-none text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-800"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default TicketSelector;