'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-10 top-0 bg-white border-b w-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-xl text-teal-600">
          Smart Dispatch
        </h1>

        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-slate-700 hover:text-teal-600">Features</a>
          <a href="#contact" className="text-slate-700 hover:text-teal-600">Contact</a>
        </nav>

        <button className="hidden md:block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
          Book Demo
        </button>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              // "X" Close Icon
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.83-4.828 4.83a1 1 0 0 1-1.414-1.414l4.829-4.83-4.829-4.83a1 1 0 0 1 1.414-1.414l4.828 4.83 4.829-4.83a1 1 0 0 1 1.414 1.414l-4.83 4.83 4.83 4.83z" />
            ) : (
              // Hamburger Menu Icon
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-lg absolute left-0 right-0 top-full z-20">
          <a 
            href="#features" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-700 hover:text-teal-600 py-2 font-medium"
          >
            Features
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-700 hover:text-teal-600 py-2 font-medium"
          >
            Contact
          </a>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg w-full mt-2 hover:bg-teal-700">
            Book Demo
          </button>
        </div>
      )}
    </header>
  );
}