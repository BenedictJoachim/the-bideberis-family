import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, image: 'project1.jpg', title: 'Project 1' },
    { id: 2, image: 'project2.jpg', title: 'Project 2' },
    { id: 3, image: 'project3.jpg', title: 'Project 3' },
    { id: 4, image: 'project4.jpg', title: 'Project 4' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
