import React from 'react';
import { motion } from 'framer-motion';

function Skils() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-lg text-center md:text-left"
          >
            <h2 className="text-3xl font-semibold mb-4">Professional Skills</h2>
            <p className="mb-6">
              I have a diverse set of skills, ranging from design to development, allowing me to create engaging and user-friendly experiences.
            </p>

            {[
              { name: "HTML5", icon: "bxl-html5", percentage: 95 },
              { name: "CSS3", icon: "bxl-css3", percentage: 85 },
              { name: "JavaScript", icon: "bxl-javascript", percentage: 75 },
              { name: "UX/UI", icon: "bxs-paint", percentage: 85 }
            ].map(skill => (
              <motion.div
                key={skill.name}
                className="mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className={`bx ${skill.icon} text-3xl text-yellow-300`}></i>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <span className="font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-white h-2 rounded-lg mt-2">
                  <motion.div
                    className="bg-yellow-400 h-2 rounded-lg"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-lg border-4 border-yellow-300"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Work showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skils;
