import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Container variants with staggered children for polished UX
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // smooth cubic bezier ease-out
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export default function About() {
  return (
    <section
      className="py-16 px-4 sm:px-6 bg font-sans"
      style={{ fontFamily: "'Inter', sans-serif" }}
      id="about"
    >
      <motion.div
        className="max-w-full sm:max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="flex items-center justify-center mb-6"
          variants={childVariants}
        >
          <FaUserCircle className="text-indigo-600 text-6xl sm:text-8xl" />
        </motion.div>

        <motion.h2 
         className="text-4xl font-bold text-center mb-16 text-primary"
          variants={childVariants}
        >
          About Me
        </motion.h2>

        <motion.p 
          className="text-gray-700 text-base sm:text-xl leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify"
          variants={childVariants}
        >
          I'm <strong className="text-indigo-600 font-semibold">Nazmul Haque Rahat</strong>, a dedicated and creative web developer passionate about building fast, user-friendly, and scalable web applications.  
          I love working with the MERN stack and enjoy turning ideas into real-world products.
        </motion.p>

        <motion.p 
          className="mt-5 text-gray-600 text-sm sm:text-lg leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify"
          variants={childVariants}
        >
          My journey began with basic web technologies like HTML and CSS, and now I specialize in full-stack applications using React, Node.js, and MongoDB.
        </motion.p>

        <motion.p 
          className="mt-5 text-gray-600 text-sm sm:text-lg leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify"
          variants={childVariants}
        >
          I thrive on solving real-world problems, contributing to open-source projects, and continuously learning new technologies.
          Outside programming, I enjoy playing football, sketching, and strumming the guitar.
        </motion.p>
      </motion.div>
    </section>
  );
}
