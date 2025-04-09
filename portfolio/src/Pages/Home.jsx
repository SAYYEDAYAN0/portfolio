import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 0px 12px rgba(0, 255, 255, 0.7)',
    },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
        delay: 0.7,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: 'spring',
        stiffness: 200,
      },
    },
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 bg-gradient-to-r from-blue-600 via-green-400 to-teal-500"
      id="home"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left md:w-1/2 space-y-6 text-white"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi,
          <br />
          I'm <span className="text-cyan-300">SAYYED AYAN ALI</span>
          <br />
          Full Stack Web Developer
        </motion.h1>

        <motion.a
          href="#"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="inline-block bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg shadow-md transition"
        >
          Contact
        </motion.a>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative w-64 h-64 md:w-96 md:h-96"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0" maskType="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" fill="white" />
          </mask>
          <g mask="url(#mask0)">
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              fill="cyan"
            />
            <image className="w-full h-full" x="0" y="0" href="https://raw.githubusercontent.com/SAYYEDAYAN0/my-first-react-project/refs/heads/main/IMG_20230318_014456_415.jpg" />
          </g>
        </svg>
      </motion.div>
    </section>
  );
}

export default Home;
