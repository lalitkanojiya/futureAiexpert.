import React from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className="relative bg-white rounded-lg w-full max-w-4xl mx-4 p-4 max-h-[90vh] overflow-y-auto">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div className="pt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Automation Demo</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <div className="w-full h-0 pb-[56.25%] bg-gray-100 relative flex items-center justify-center rounded-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <p className="text-lg font-medium mb-2">Demo Video</p>
                <p className="text-sm">This is a placeholder for your automation demo video</p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <h3 className="text-xl font-semibold mb-2">What You're Seeing</h3>
            <p className="text-gray-700 mb-4">
              This demonstration shows how our AI automation solutions can streamline your business 
              processes, reduce manual work, and improve efficiency. The workflow demonstrates:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Automatic data extraction from multiple sources</li>
              <li>Smart processing and categorization of information</li>
              <li>Automated response generation and distribution</li>
              <li>Real-time analytics and reporting</li>
            </ul>
            <p className="text-gray-700">
              Contact us today to learn how we can customize this solution for your specific needs.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 mr-2"
            >
              Close
            </button>
            <a 
              href="#contact" 
              onClick={onClose}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;