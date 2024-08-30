// import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
