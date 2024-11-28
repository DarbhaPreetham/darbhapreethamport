import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
"Amazon Web Services", "Amazon EC2"," AWS Lambda", "Amazon Elastic Container Service (ECS)", "Amazon Simple Storage Service (S3)", "Amazon Virtual Private Cloud (VPC)", "Amazon Route 53", "AWS Identity and Access Management (IAM)", "Amazon CodeCommit", "Microsoft Azure", "Azure Logic Apps", "Azure Pipelines", "CI/CD", "JavaScript", "Python", "Git", "HTML", "CSS", "Shell Scripting", "GitHub", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana", "Linux", "Mac OS", "Windows", "Android Studio", "iOS", "Xcode", "SDK"
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" ref={ref}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-gray-800 font-medium text-lg">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}