"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm transition-all duration-300">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <a href="#" className="text-headline-md font-headline-md font-bold text-primary hover:opacity-90 transition-opacity">
          Bodha AI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="text-on-surface-variant font-label-md hover:text-secondary transition-colors duration-300"
            href="#solutions"
          >
            Solutions
          </a>
          <a
            className="text-on-surface-variant font-label-md hover:text-secondary transition-colors duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant font-label-md hover:text-secondary transition-colors duration-300"
            href="#why"
          >
            Why Choose Us
          </a>
        </nav>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary hover:text-secondary focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface/95 border-b border-outline-variant/10 backdrop-blur-xl px-margin-mobile py-4 flex flex-col gap-4 animate-fade-in">
          <a
            className="text-on-surface-variant font-label-md hover:text-secondary py-2 border-b border-outline-variant/5 transition-colors"
            href="#solutions"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </a>
          <a
            className="text-on-surface-variant font-label-md hover:text-secondary py-2 border-b border-outline-variant/5 transition-colors"
            href="#about"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            className="text-on-surface-variant font-label-md hover:text-secondary py-2 border-b border-outline-variant/5 transition-colors"
            href="#why"
            onClick={() => setIsOpen(false)}
          >
            Why Choose Us
          </a>
          <button
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all mt-2 w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
