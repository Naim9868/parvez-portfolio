"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        {/* Social icons */}
        <div className="mt-8 mb-4 flex justify-center items-center space-x-6 delay-400">
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

        <p>&copy; 2025 Pervez Hasan. All Rights Reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://asuxai.com"
            className="text-purple-400 hover:underline"
          >
            AsuX AI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
