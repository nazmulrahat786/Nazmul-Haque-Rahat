import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'https://cdn-icons-png.flaticon.com/128/174/174854.png', 
      'https://cdn-icons-png.flaticon.com/128/732/732190.png', 
      'https://cdn-icons-png.flaticon.com/128/875/875209.png', 
      'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', 
    ],
  },
  {
    title: 'Backend',
    skills: [
      'https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tVeH30JNbVbeRd72gFWPWYkSqBDgdQ-pog&s', 
      'https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png', 
      'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png', 
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      'https://cdn-icons-png.flaticon.com/128/733/733609.png', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJNnjZv36ijogi3aM_xcSMy26_QeOWrVmJQ&s', 
      'https://cdn-icons-png.flaticon.com/128/5968/5968705.png', 
      'https://pipedream.com/s.v0/app_XaLh2x/logo/orig', 
    ],
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};


const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};

export default function Skills() {
  return (
    <section className=" " id="skills">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">My Skills</h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {skillCategories.map(({ title, skills }, i) => (
          <motion.div
            key={title}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">{title}</h3>
            <ul className="flex flex-wrap justify-center items-center gap-4">
              {skills.map((skill, index) => (
                <motion.li 
                  key={index}
                  variants={skillVariants}
                  className="w-14 h-14 p-1 bg-white rounded-md shadow-sm"
                  whileHover={{ scale: 1.15 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={skill}
                    alt={`${title} skill ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
