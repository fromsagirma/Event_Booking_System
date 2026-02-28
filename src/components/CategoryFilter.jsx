import React from 'react';

const categories = ['All', 'Movie', 'Sport', 'Concert'];

function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => {
        const isActive = value === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition ${
              isActive
                ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm dark:border-indigo-500 dark:bg-indigo-500'
                : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;