import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#workflow' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-105 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
          <a 
            href="tel:+918087131470" 
            className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg ml-4"
          >
            <Phone size={16} className="mr-2" />
            <span>Contact</span>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="tel:+918087131470" 
              className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 w-full justify-center"
            >
              <Phone size={16} className="mr-2" />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;