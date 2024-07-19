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
        <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-blue-600 text-white p-8">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold">Software</h1>
            <p className="mt-4">Enterprise IT Management Software</p>
            <Link to="#about-us" className="mt-8 inline-block bg-white text-blue-600 px-4 py-2 rounded">
              About Us
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 md:mt-0"
          >
            <img src="path/to/your/image.jpg" alt="Placeholder" className="w-full md:w-96" />
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
              We are dedicated to providing top-notch enterprise IT management software.
              Our solutions help you manage, monitor, and optimize your infrastructure.
            </p>
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Photography Section */}
        <section id="photography" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200 p-8">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
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
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <img src="path/to/placeholder.jpg" alt="Photography" className="w-full" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Fitness Section */}
        <section id="fitness" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-8">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
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
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <img src="path/to/placeholder.jpg" alt="Fitness" className="w-full" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Arts Section */}
        <section id="arts" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200 p-8">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
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
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <img src="path/to/placeholder.jpg" alt="Arts" className="w-full" />
          </motion.div>
        </section>
      </div>

      <div className="section">
        {/* Blog Section */}
        <section id="blog" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-8">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
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
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2 p-4"
          >
            <img src="path/to/placeholder.jpg" alt="Blog" className="w-full" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
