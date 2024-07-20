import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Hello, I'm James Bideberi</h2>
          <p className="text-gray-700 mb-4">
            I am a professional photographer with over 10 years of experience in capturing the beauty of the world.
            My passion is to create stunning visual stories through my lens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
