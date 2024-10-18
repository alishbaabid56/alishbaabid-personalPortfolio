
"use client";

import React from 'react';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: 'TODO LIST',
      description: 'Todo List using Typescript.',
      image: '/images/project1.png',
      techStack: 'Typescript',
    },
    {
      id: 2,
      name: 'E-COMMERCE WEBSITE',
      description: 'An e-commerce website built with Next.js and TailwindCSS.',
      image: '/images/project2.png',
      techStack: 'Next.js, Tailwind',
    },
    {
      id: 3,
      name: 'ATM MACHINE',
      description: 'ATM Machine using Typescript.',
      image: '/images/project3.png',
      techStack: 'Typescript',
    },
    {
      id: 4,
      name: 'CALCULATOR',
      description: 'Calculator using Typescript, Html, CSS',
      image: '/images/project4.png',
      techStack: 'Typescript, Html, CSS',
    },
    {
      id: 5,
      name: 'CURRENCY CONVERTOR',
      description: 'Currency converter using TypeScript',
      image: '/images/project5.png',
      techStack: 'Typescript',
    },
    {
      id: 6,
      name: 'PERSONAL PORTFOLIO',
      description: 'Personal Portfolio using HTML, CSS',
      image: '/images/project6.png',
      techStack: 'HTML, CSS',
    },
  ];

  return (
    <section className="py-10 mt-20 " id='projects'>
      <div className="container mx-auto text-center">
        <h2 className="text-6xl mb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="w-full h-[250px]"> {/* Fixed container for uniform size */}
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center text-center">
                <div className="text-white p-4">
                  <h3 className="text-3xl font-extrabold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-lg mb-4">{project.description}</p>
                  <p className="text-sm font-light">{project.techStack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;