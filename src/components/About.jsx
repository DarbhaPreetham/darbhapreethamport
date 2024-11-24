import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="lg:text-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
            About Me
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
          Results-driven DevOps professional with over 3 years (total experience) of hands-on experience, specializing in AWS cloud services and Microsoft Azure services and holding certification as an AWS Certified Cloud Practitioner and Microsoft Certified Azure Fundamentals (AZ-900). Proven track record in optimizing development workflows, implementing and enhancing overall system reliability.          </p>
        </motion.div>
      </div>
    </section>
  );
}