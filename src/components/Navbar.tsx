import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-neutral-900">
            Echigo Home Cook
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-neutral-700 hover:text-neutral-900">About</a>
            <a href="#menu" className="text-neutral-700 hover:text-neutral-900">Menu</a>
            <a href="#reviews" className="text-neutral-700 hover:text-neutral-900">Reviews</a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-neutral-700">About</a>
            <a href="#menu" className="block px-3 py-2 text-neutral-700">Menu</a>
            <a href="#reviews" className="block px-3 py-2 text-neutral-700">Reviews</a>
            <a href="#contact" className="block px-3 py-2 text-neutral-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;