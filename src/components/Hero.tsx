import React, { useState } from 'react';
import { Play } from 'lucide-react';
import DemoModal from './DemoModal';

const Hero: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="text-purple-600 dark:text-purple-400">Automate</span> Smarter.<br/>
              <span className="text-purple-600 dark:text-purple-400">Grow</span> Faster.
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Future AI Expert delivers cutting-edge AI automation solutions 
              to streamline your business processes and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setShowDemo(true)}
                className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Play size={18} className="mr-2" />
                Watch Demo
              </button>
              <a 
                href="#services" 
                className="px-6 py-3 border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative mx-auto max-w-md">
              <div className="w-full h-64 md:h-80 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Play size={24} className="text-purple-600 ml-1" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Automation in Action</h3>
                    <p className="text-sm">See how our solutions transform businesses</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-70 blur-2xl animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400 rounded-full opacity-70 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </section>
  );
};

export default Hero;