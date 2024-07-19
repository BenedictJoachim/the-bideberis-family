import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

 
const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-blue-600 text-white md-p-0">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center md:text-left p-4"
        >
          <h1 className="text-5xl font-bold">Karibu</h1>
          <p className="mt-4">The Bideberis Family Hustle</p>
          <Link to="#about-us" className="mt-8 inline-block bg-white text-blue-600 px-4 py-2 rounded">
            About Us
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-0 md:w-1/2"
        >
          <img src="/familiy.jpg" alt="Placeholder" className="w-full md:min-h-screen" />
        </motion.div>
      </section>

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

            {/* Photography Section */}
            <section id="photography" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200 p-0">
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
                className="md:w-1/2 p-0"
              >
                <img src="/photogrphr.jpg" alt="Photography" className="w-full min-h-screen" />
              </motion.div>
            </section>

            {/* Fitness Section */}
            <section id="fitness" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-0">
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
                className="md:w-1/2 p-0"
              >
                <img src="/trainer.jpg" alt="Fitness" className="w-full min-h-screen" />
              </motion.div>
            </section>

            {/* Arts Section */}
            <section id="arts" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200 p-0">
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
                className="md:w-1/2 p-0"
              >
                <img src="/artscrafts.jpg" alt="Arts" className="w-full min-h-screen" />
              </motion.div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-0">
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
                className="md:w-1/2 p-0 basis-1/2"
              >
                <img src="/arts.jpg" alt="Blog" className="w-full min-h-screen" />
              </motion.div>
            </section>
          </div>
        );
      };

      export default Home;

