import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white" id="about">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-lg border-4 border-white"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Marlon"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="max-w-lg text-center md:text-left"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">I'm Marlon</h2>
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora,
                assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis!
                Recusandae alias accusamus atque.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
