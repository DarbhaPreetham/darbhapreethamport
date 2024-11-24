import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Preetham Darbha
        </motion.h1>

        <div className="text-xl md:text-2xl text-gray-600 mb-8 h-[60px]">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'Full Stack Developer',
              1000,
              'Cloud Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a 
            href="#about"
            className="px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}