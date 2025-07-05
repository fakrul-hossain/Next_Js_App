"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter()
    const isLoggedIN = false;
    const handleNavigation = () =>{
        if(isLoggedIN){
            router.push("about/my-ai-thoughts")
        } else{
            router.push('/')
        }
    }
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center flex flex-col mb-8">
            <Link onClick={handleNavigation} href="about/my-ai-thoughts" className="text-purple-700 hover:text-indigo-600 font-medium text-2xl">
          My thoughts on artificial intelligence (without login)
        </Link>
            <button onClick={handleNavigation} href="about/my-ai-thoughts" className="text-purple-700 cursor-pointer hover:text-indigo-600 font-medium text-2xl">
          My thoughts on artificial intelligence
        </button>
        </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile image (optional) */}
        <img
          src="https://avatars.githubusercontent.com/u/your-github-id" // replace with your image
          alt="Fakrul Hossain"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />

        <div>
          <p className="text-gray-700 text-lg mb-4">
            Hello! I'm <span className="font-semibold text-indigo-600">Fakrul Hossain</span>, a passionate frontend developer from Shamoli, Dhaka.
            I specialize in building clean, user-friendly web interfaces using modern technologies like React, Next.js, Tailwind CSS, and TypeScript.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            I'm currently learning advanced tools like Next.js and TypeScript while also preparing for job opportunities in the tech field.
          </p>
          <p className="text-gray-700 text-lg">
            My goal is to become a full-stack developer and contribute to impactful projects that improve people's lives. Outside coding, I love learning new tech, helping others, and improving every day.
          </p>
        </div>
      </div>

      {/* Skills or Focus section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Tools</h2>
        <ul className="flex flex-wrap gap-4 text-sm text-white">
          {['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Firebase', 'MongoDB', 'Express.js'].map((skill, i) => (
            <li key={i} className="bg-indigo-600 px-4 py-1 rounded-full shadow">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
