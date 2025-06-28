import React from 'react';
import { FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export default function Education() {
  return (
    <section
      id="education"
      className="pt-20 px-4 md:px-8 lg:px-12 text-base-content"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        Education
      </h2>

      <div className="relative max-w-4xl mx-auto before:absolute before:left-6 md:before:left-8 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary before:via-primary/40 before:to-transparent before:rounded-full">

        {/* Timeline Item */}
        <motion.div
          className="relative mb-16 pl-14 md:pl-20 group"
          variants={timelineItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Icon */}
          <div className="absolute top-1 left-0 w-10 h-10 md:w-12 md:h-12 bg-primary text-white flex items-center justify-center rounded-full shadow-lg ring-4 ring-base-100 dark:ring-neutral transition-transform duration-300 group-hover:scale-110 z-10">
            <FaBook className="w-5 h-5 md:w-6 md:h-6" />
          </div>

          {/* Content Box */}
          <div className="bg-white dark:bg-neutral rounded-xl shadow-xl border border-primary/20 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-1">
              Computer Science and Technology
            </h3>
            <p className="text-lg font-medium text-base-content">
              Sherpur Polytechnic Institute
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
              Currently Pursuing
            </p>
          </div>
        </motion.div>

        {/* Add more items below if needed */}
      </div>
    </section>
  );
}
