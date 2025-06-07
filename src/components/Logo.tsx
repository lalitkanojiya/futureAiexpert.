import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-2 transform hover:scale-110 transition-transform duration-300">
        F
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          Future <span className="text-purple-600 dark:text-purple-400">AI</span> Expert
        </h1>
      </div>
    </div>
  );
};

export default Logo;