import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import image from '../assets/myphoto.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';  


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
    },
  },
};

const checkmarkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setShowCheckmark(false);

    setTimeout(() => {
      setShowCheckmark(true);
      toast.success('Resume downloaded successfully! 🎉');  
    }, 300);

    setTimeout(() => {
      setIsDownloading(false);
      setShowCheckmark(false);
    }, 2000);
  };

  return (
    <>
 
      <Toaster position="top-center" reverseOrder={false} />

      <motion.section
        id="home"
      
        className="hero min-h-[70vh] pt-22 pb-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <img
              src={image}
              alt="Developer Profile"
              className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-primary"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-xl"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-primary mb-2"
              variants={itemVariants}
            >
              Nazmul Haque Rahat
            </motion.h1>

            <motion.p
              className="text-xl text-secondary font-medium mb-4"
              variants={itemVariants}
            >
              Frontend Developer | Full Stack Enthusiast
            </motion.p>

            <motion.p
              className="text-base text-black mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm Nazmul Haque Rahat, a passionate MERN stack developer who loves creating fast, user-friendly, and scalable web applications.
            </motion.p>

            {/* Resume & Social Links */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
              variants={itemVariants}
            >
              <motion.a
                href="/path/to/your_resume.pdf" 
                download
                className="btn btn-primary relative flex items-center justify-center overflow-hidden"
                onClick={handleDownloadClick}
                whileTap={{ scale: 0.9 }}
              >
              
                <span style={{ visibility: showCheckmark ? 'hidden' : 'visible' }}>
                  {isDownloading ? "Downloading..." : "Download Resume"}
                </span>

                <AnimatePresence>
                  {showCheckmark && (
                    <motion.svg
                      key="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 absolute"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={checkmarkVariants}
                    >
                      <motion.path
                        d="M4 12l6 6L20 6"
                        variants={checkmarkVariants}
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.a>

              <a
                href="https://github.com/nazmulrahat786"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-square text-gray-800 border-gray-300 hover:bg-gray-100"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/nazmul-rahat-2654262a7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-square text-gray-800 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
