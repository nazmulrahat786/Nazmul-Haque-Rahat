import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// Animation variants for checkmark
const checkmarkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Navbar() {
  const navItems = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ];

  const [isDownloading, setIsDownloading] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();

    setIsDownloading(true);
    setShowCheckmark(false);

    setTimeout(() => {
      setShowCheckmark(true);
      toast.success("Resume downloaded successfully! 🎉");

      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300);

    setTimeout(() => {
      setIsDownloading(false);
      setShowCheckmark(false);
    }, 2000);
  };

  return (
    <>
    

      <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md backdrop-blur-md">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-4 flex items-center relative py-3">
          {/* Left - Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/NRH.png"
              alt="Logo"
              className="h-10 rounded-sm w-auto object-contain cursor-pointer select-none"
            />
          </div>

          {/* Center - Nav Links */}
          <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-8 font-medium text-black dark:text-white">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-primary font-semibold"
                className="capitalize cursor-pointer hover:text-primary transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right - Download Button */}
          <div className="ml-auto hidden md:flex">
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition relative overflow-hidden min-w-[160px]"
              onClick={handleDownloadClick}
              whileTap={{ scale: 0.9 }}
            >
              <span
                className={`transition-opacity duration-300 ${
                  showCheckmark ? "opacity-0" : "opacity-100"
                }`}
              >
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
          </div>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end md:hidden ml-auto">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-3 shadow-lg bg-base-100 rounded-lg w-56 space-y-1 text-black dark:text-white"
            >
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-primary font-semibold"
                    className="capitalize cursor-pointer hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="btn btn-primary relative flex items-center justify-center overflow-hidden"
                  onClick={handleDownloadClick}
                  whileTap={{ scale: 0.9 }}
                >
                  {!showCheckmark && (
                    <span>
                      {isDownloading ? "Downloading..." : "Download Resume"}
                    </span>
                  )}
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
