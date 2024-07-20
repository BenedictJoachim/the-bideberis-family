import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">My Name is James Bideberi</h1>
        <p className="mt-4 text-2xl">I'm a Professional Photographer</p>
      </motion.div>
    </section>
  );
};

export default Hero;
