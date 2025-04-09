import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:flex lg:gap-5 py-10 lg:px-20 md:px-10 px-5 text-gray-900 bg-gradient-to-br from-emerald-500 to-teal-600 min-h-screen flex items-center"
    >
      <div className="lg:w-1/2 lg:pb-0 pb-10">
        <h2 className="text-[38px] font-bold text-white mb-5">
          Contact <span className="text-yellow-300">Info</span>
        </h2>
        <p className="pb-5 lg:pr-20 text-gray-200">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nostrum, fugiat accusantium reiciendis magnam dolorem"
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-normal text-white">Corporate Office:</h4>
            <address className="flex items-start gap-1 pt-3 text-gray-100">
              <IoLocationOutline className="text-yellow-300 text-2xl" />
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Email</h4>
            <p className="flex items-center gap-2 text-gray-200 hover:text-yellow-300 transition-all">
              <MdOutlineEmail className="text-yellow-300" /> example@gmail.com
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <p className="flex items-center gap-2 text-gray-200">
              <FaPhoneAlt className="text-yellow-300" /> +91 404******
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2 flex flex-col text-gray-900 py-6 rounded-xl pt-16 lg:px-10 md:px-16 px-5 bg-white/90 lg:pt-7 shadow-xl backdrop-blur-lg"
      >
        <h2 className="text-xl font-light text-emerald-700 mb-6">
          Have Questions? Contact Our Highway Consultancy Team
        </h2>
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border-gray-300 rounded-xl px-4 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="tel" className="block text-gray-700 font-semibold mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Enter your phone number"
              required
              className="w-full border-gray-300 rounded-xl px-4 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border-gray-300 rounded-xl px-4 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="w-full border-gray-300 rounded-xl px-4 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all h-24"
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="py-2 px-6 rounded-xl bg-emerald-500 text-white border-2 border-emerald-500 transition-all duration-200 hover:bg-yellow-300 hover:text-gray-900 hover:border-yellow-300"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
