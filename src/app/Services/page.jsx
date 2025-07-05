import React from 'react'
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa'

export default function ServicesPage() {
  const services = [
    {
      icon: <FaCode className="text-4xl text-indigo-600 mb-4" />,
      title: 'Web Development',
      description: 'Building responsive and fast web apps using React, Next.js, and modern tools.'
    },
    {
      icon: <FaPaintBrush className="text-4xl text-indigo-600 mb-4" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful, user-friendly designs from Figma/XD to code.'
    },
    {
      icon: <FaMobileAlt className="text-4xl text-indigo-600 mb-4" />,
      title: 'Mobile Optimization',
      description: 'Ensuring your website looks great on all screen sizes and devices.'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition duration-300"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h2>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
