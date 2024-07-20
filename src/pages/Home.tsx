import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'fullpage.js/dist/fullpage.css';

const Home = () => {
  useEffect(() => {
    // Dynamically import fullpage.js
    import('fullpage.js').then(fullpage => {
      new fullpage.default('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
      });

      // Destroy fullpage.js on component unmount
      return () => fullpage.default.destroy('all');
    });
  }, []);
  
  return (
    <div id="fullpage">
      <div className="section">
        {/* Hero Section */}
        <section className="bg-blue-600 flex flex-col md:flex-row items-center justify-between min-h-screen text-white p-0">
          <motion.div 
            initial={{ opacity: 0, y: 150 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="md:w-1/2 h-[50%] md:min-h-screen text-center md:text-center pl-8"
          >
            <h1 className="text-5xl font-bold">KARIBU!</h1>
            <p className="mt-4">We are the Bideberis.</p>
            <Link to="#about-us" className="mt-8 inline-block bg-white text-blue-600 px-4 py-2 rounded">
              About Us
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2"
          >
            <img src="/familiy.jpg" alt="Placeholder" className="w-full md:min-h-screen" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* About Us Section */}
        <section id="about-us" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              We are a catholic family.
            </p>
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Photography Section */}
        <section id="photography" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200 p-0">
          <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <h2 className="text-4xl font-bold">Photography</h2>
            <p className="mt-4">
              Explore our gallery of stunning photographs capturing the essence of creativity.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2"
          >
            <img src="/photogrphr.jpg" alt="Photography" className="w-full md:min-h-screen" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Fitness Section */}
        <section id="fitness" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-0">
          <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <h2 className="text-4xl font-bold">Fitness</h2>
            <p className="mt-4">
              Discover fitness tips and workouts to help you stay in shape and healthy.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2"
          >
            <img src="trainer.jpg" alt="Fitness" className="w-full md:min-h-screen" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Arts Section */}
        <section id="arts" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200">
          <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <h2 className="text-4xl font-bold">Arts</h2>
            <p className="mt-4">
              Dive into our arts section to explore various art projects and galleries.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2"
          >
            <img src="/artscrafts.jpg" alt="Arts" className="w-full md:min-h-screen" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Blog Section */}
        <section id="blog" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <h2 className="text-4xl font-bold">Blog</h2>
            <p className="mt-4">
              Stay updated with our latest blog posts covering various topics of interest.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2"
          >
            <img src="/familiy.jpg" alt="Blog" className="w-full md:min-h-screen" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
