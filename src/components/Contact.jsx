"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="section-title text-center mb-16 scroll-animate">
          <h2>Let's Discuss Your Project</h2>
          <p className="mt-2 text-lg">
            I'm available for freelance work. Drop me a line!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact info */}
          <div className="lg:w-1/3 scroll-animate">
            <div className="flex items-start space-x-4 mb-8">
              <FaMapMarkerAlt className="text-purple-400 text-2xl mt-1" />
              <div>
                <h4 className="text-white font-bold">Address:</h4>
                <p className="text-gray-300">Gazipur, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <FaEnvelope className="text-purple-400 text-2xl mt-1" />
              <div>
                <h4 className="text-white font-bold">My Email:</h4>
                <p className="text-gray-300">contact@pervezhasan.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-purple-400 text-2xl mt-1" />
              <div>
                <h4 className="text-white font-bold">Call Me Now:</h4>
                <p className="text-gray-300">+880 1304622164</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex justify-center lg:justify-start items-center space-x-6 scroll-animate delay-400">
              <a
                href="https://www.youtube.com/@thinkwithpervez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/thinkwithpervez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/pervez72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-200 hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/pervez25/"
                target="_blank"
                rel="noopener noreferrer"
                title="My LeetCode Profile"
                className="text-gray-400 hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-7 h-7 filter invert"
                />
              </a>
              <a 
                href="#" 
                className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <form
            className="lg:w-2/3 space-y-6 scroll-animate delay-100"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted (form backend not yet connected)");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject*"
              required
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Message*"
              rows="5"
              required
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="btn-primary text-white font-bold py-3 px-8 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;