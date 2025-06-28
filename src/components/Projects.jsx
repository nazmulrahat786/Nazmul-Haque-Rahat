import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const projects = [
  {
    id: 1,
    name: "Potropollob",
    images: [
      "https://i.postimg.cc/85N0yxpS/Screenshot-2025-06-28-015812.png",
      "https://i.postimg.cc/MGk4BvgX/Screenshot-2025-06-28-015750.png",
      "https://i.postimg.cc/mrQnyTGj/Screenshot-2025-06-28-015822.png",
    ],
    description:
      "Potropollob is a responsive web application that helps users discover, track, and care for various plants.",
    stack: "React, Tailwind CSS, DaisyUI",
    liveLink: "https://potropollob-c7ebe.web.app",
    github: "https://github.com/nazmulrahat786/-Potropollob-",
    challenges:
      "Achieving consistent responsiveness and smooth UI animations across various screen sizes and devices.",
    improvements:
      "Integrate a blog section for plant care tips, enhance SEO for better visibility, and implement a dark/light mode toggle for improved user experience.",
  },
  {
    id: 2,
    name: "FoodFuse",
    images: [
      "https://i.postimg.cc/CMZQcCYd/Screenshot-2025-06-28-021326.png",
      "https://i.postimg.cc/VLnH8YJ8/Screenshot-2025-06-28-021340.png",
      "https://i.postimg.cc/Y2JyZ4qR/Screenshot-2025-06-28-021414.png",
    ],
    description:
      "FoodFuse is a responsive food-sharing platform that connects donors and recipients to reduce food waste. Users can donate, request, and manage food listings easily.",
    stack: "React, Node.js, Express, MongoDB",
    liveLink: "https://food786-53dd9.web.app/",
    github: "https://github.com/nazmulrahat786/FoodFuse",
    challenges:
      "Managing complex application state across multiple components and ensuring secure handling of sensitive user data.",
    improvements:
      "Introduce user review and rating features, implement wishlist functionality, and enhance overall performance through code optimization and lazy loading.",
  },
  {
    id: 3,
    name: "AppNest",
    images: [
      "https://i.postimg.cc/wxswX6cm/Screenshot-2025-06-28-021729.png",
      "https://i.postimg.cc/FsyG6D6F/Screenshot-2025-06-28-021803.png",
      "https://i.postimg.cc/L6KNvrN0/Screenshot-2025-06-28-021814.png",
    ],
    description:
      "AppNest: A modern, responsive App Store web app built with React, Tailwind CSS, DaisyUI, Firebase, and React Router. Showcases app listings with smooth UI and seamless navigation.",
    stack: "React, Socket.io, Node.js",
    liveLink: "https://appnest13.web.app/",
    github: "https://github.com/nazmulrahat786/AppNest-App-Store",
    challenges:
      "Ensuring efficient and scalable real-time communication using socket connections while maintaining UI responsiveness.",
    improvements:
      "Extend functionality with integrated video calling, implement offline message queuing and delivery, and improve real-time UX consistency.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    }
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      closeBtnRef.current?.focus();
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className=" px-4" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="card bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col"
            variants={cardVariants}
          >
            <div style={{ touchAction: "pan-y", overflow: "visible" }}>
              <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                interval={3000}
                stopOnHover={true}
                className="w-full"
              >
                {project.images.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt={`${project.name} slide ${idx + 1}`}
                      className="w-full max-h-[300px] md:max-h-[400px] lg:max-h-[480px] object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="card-body flex flex-col flex-grow">
              <h3 className="card-title text-xl font-semibold">{project.name}</h3>

              <div className="flex flex-wrap gap-2 mt-1 mb-3">
                {project.stack.split(",").map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full select-none"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <p className="flex-grow text-sm">{project.description}</p>

              <div className="card-actions justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Live Demo
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-primary btn-sm"
                  aria-label={`View details for ${project.name}`}
                >
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex px-3 items-center justify-center bg-black/40 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="
                bg-base-100
                w-full
                max-w-[95vw]
                sm:max-w-[600px]
                md:max-w-[768px]
                lg:max-w-[900px]
                xl:max-w-[1100px]
                mx-auto
                px-4 sm:px-6 md:px-8
                rounded-xl
                shadow-lg
                p-6
                relative
                overflow-y-auto
                max-h-[90vh]
              "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                ref={closeBtnRef}
                className="btn btn-sm btn-circle btn-ghost absolute top-3 right-3"
              >
                ✕
              </button>

              <h3
                id="modal-title"
                className="text-2xl font-bold mb-4 text-primary"
              >
                {selectedProject.name}
              </h3>

              <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                infiniteLoop
                className="mb-6 rounded-lg"
              >
                {selectedProject.images.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt={`${selectedProject.name} slide ${idx + 1}`}
                      className="w-full max-h-[400px] object-contain rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>

              <p
                id="modal-description"
                className="mb-4 text-base leading-relaxed"
              >
                {selectedProject.description}
              </p>

              <p className="mb-2">
                <strong className="font-semibold text-primary">Technology Stack: </strong>
                {selectedProject.stack}
              </p>

              <p className="mb-2">
                <strong className="font-semibold text-primary">Challenges: </strong>
                {selectedProject.challenges}
              </p>

              <p>
                <strong className="font-semibold text-primary">Future Improvements: </strong>
                {selectedProject.improvements}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 justify-end">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
