import React from 'react';

const ServiceDetails = ({params}) => {
     const services = [
      {
        id: 1,
        icon: <FaCode className="text-4xl text-indigo-600 mb-4" />,
        title: 'Web Development',
        description: 'Building responsive and fast web apps using React, Next.js, and modern tools.',
      },
      {
        id: 2,
        icon: <FaPaintBrush className="text-4xl text-indigo-600 mb-4" />,
        title: 'UI/UX Design',
        description: 'Creating beautiful, user-friendly designs from Figma/XD to code.',
      },
      {
        id: 3,
        icon: <FaMobileAlt className="text-4xl text-indigo-600 mb-4" />,
        title: 'Mobile Optimization',
        description: 'Ensuring your website looks great on all screen sizes and devices.',
      },
    ];
    const id = params.id;
    singleData = services.find((service) => service.id === parseInt(id));
    return (
        <div>
        <h1>Services Details Page</h1>
    
            <p>ID : {id}</p>
        </div>
    );
};

export default ServiceDetails;