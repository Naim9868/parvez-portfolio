"use client"

import { FaYoutube, FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function SocialIcons(){

    return(
        <div>
            <div className="mt-12 flex justify-center lg:justify-start items-center space-x-4 md:space-x-6 scroll-animate delay-400 social-icon-list">
                {/* YouTube */}
                <a
                    href="https://www.youtube.com/@thinkwithpervez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-1 bg-gradient-to-br from-red-500 to-red-600 rounded-[10px] hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 border border-red-400/30"
                    title="YouTube Channel"
                >
                    <FaYoutube className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white/90 transition-colors" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    YouTube
                    </div>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/thinkwithpervez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-1 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[10px] hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/30"
                    title="LinkedIn Profile"
                >
                    <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white/90 transition-colors" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    LinkedIn
                    </div>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/pervez72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[10px] hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 border border-gray-600/30"
                    title="GitHub Profile"
                >
                    <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white/90 transition-colors" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitHub
                    </div>
                </a>

                {/* LeetCode */}
                <a
                    href="https://leetcode.com/u/pervez25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-1 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-[10px] hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 border border-yellow-400/30"
                    title="LeetCode Profile"
                >
                    <SiLeetcode className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white/90 transition-colors" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    LeetCode
                    </div>
                </a>

                {/* Facebook */}
                <a
                    href="#"
                    className="group relative p-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[10px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/30 opacity-70 hover:opacity-100"
                    title="Facebook (Coming Soon)"
                >
                    <FaFacebookF className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white/90 transition-colors" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Facebook
                    </div>
                </a>

                {/* Twitter/X */}
                <a
                    href="#"
                    className="group relative p-1 bg-gradient-to-br from-gray-800 to-black rounded-[10px] hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 border border-gray-600/30 opacity-70 hover:opacity-100"
                    title="Twitter/X (Coming Soon)"
                >
                    <FaTwitter className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white/90 transition-colors" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Twitter/X
                    </div>
                </a>
                </div>
        </div>
    )
}