'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'My Profile', path: '/dashboard/profile' },
  { name: 'Projects', path: '/dashboard/projects' },
  { name: 'Settings', path: '/dashboard/settings' },
  { name: 'Logout', path: '/logout' },
];

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 mt-8 bg-white shadow-md border-r border-gray-200 fixed md:static top-0 left-0 h-full z-10">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-700">Dashboard</h1>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-md font-medium text-sm ${
                pathname === item.path
                  ? 'bg-indigo-100 text-indigo-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        <div className="bg-white rounded-xl shadow-md p-6 min-h-[calc(100vh-48px)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
