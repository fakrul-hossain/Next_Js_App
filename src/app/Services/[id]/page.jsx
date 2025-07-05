'use client';

import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const ServiceDetails = ({ params }) => {
  const services = [
    {
      id: 1,
      icon: <FaCode className="text-6xl text-indigo-600 mb-4" />,
      title: 'Web Development',
      description:
        'Building responsive and fast web apps using React, Next.js, and modern tools.',
    },
    {
      id: 2,
      icon: <FaPaintBrush className="text-6xl text-indigo-600 mb-4" />,
      title: 'UI/UX Design',
      description:
        'Creating beautiful, user-friendly designs from Figma/XD to code.',
    },
    {
      id: 3,
      icon: <FaMobileAlt className="text-6xl text-indigo-600 mb-4" />,
      title: 'Mobile Optimization',
      description:
        'Ensuring your website looks great on all screen sizes and devices.',
    },
  ];

  const id = parseInt(params?.id);
  const singleData = services.find((service) => service.id === id);

  if (!singleData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Service not found!
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col items-center">
          {singleData.icon}
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">
            {singleData.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {singleData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
export async function generatestaticParams(){
    const services = [
        {id : 1},
        {id : 2},
        {id : 3},
    ]
}