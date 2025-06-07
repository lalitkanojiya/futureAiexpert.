import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-all duration-300 ease-in-out transform hover:scale-105"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon size={10} className="text-gray-800" />
        ) : (
          <Sun size={10} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;