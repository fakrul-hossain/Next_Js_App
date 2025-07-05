import Link from 'next/link';
import React from 'react';

const Naavbar = () => {
    return (
        <div>
              <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-600">
        <Link href="/">Next-JS App</Link>
      </div>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
          About
        </Link>
        <Link href="/Services" className="text-gray-700 hover:text-indigo-600 font-medium">
          Services
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
          Contact
        </Link>
      </div>
    </nav>
        </div>
    );
};

export default Naavbar;