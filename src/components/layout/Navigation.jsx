import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Ankita Mehta</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'projects', 'blog', 'about', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="capitalize text-gray-600 hover:text-blue-600"
              >
                {section}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {['home', 'projects', 'about', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};