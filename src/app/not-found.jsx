'use client';

import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4">
      <h1 className="text-7xl font-bold text-indigo-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition font-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage404;
