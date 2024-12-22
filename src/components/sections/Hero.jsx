import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">Software Developer</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-600">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};