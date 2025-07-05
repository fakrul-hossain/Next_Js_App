import React from 'react';

const ContractPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Contract & Collaboration
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Availability</h2>
          <p className="text-gray-700 leading-relaxed">
            I am currently open to frontend development roles, freelance opportunities, and collaborative tech projects. My preferred stack includes React.js, Next.js, Tailwind CSS, and Firebase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Contract Terms</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Part-time / full-time availability (remote or on-site in Dhaka)</li>
            <li>Hourly or project-based contract options</li>
            <li>Communication via email, Zoom, or in-person meetups (if local)</li>
            <li>Clear deliverables, deadline, and payment structure upfront</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Let's Work Together</h2>
          <p className="text-gray-700 leading-relaxed">
            If you're interested in working with me or hiring me for a project, feel free to reach out. I'm excited to collaborate and bring value to your team or product.
          </p>

          <div className="mt-4">
            <p className="text-gray-600 font-medium">📧 Email:</p>
            <a
              href="mailto:dev.fakrulhossain@gmail.com"
              className="text-indigo-600 underline hover:text-indigo-800 transition"
            >
              dev.fakrulhossain@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContractPage;
