import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              We provide cutting-edge AI automation solutions that help businesses 
              streamline operations, boost productivity, and accelerate growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61574958779688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/furture.ai.expert/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/future-ai-automation-service-83627335a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@AIAutomationwithME" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://wa.me/918087131470" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'How It Works', 'Projects', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center transform hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Business Process Automation',
                'WhatsApp/Email Campaigns',
                'Lead Generation Bots',
                'Social Media Automation',
                'Client Onboarding Systems',
                'CRM Integrations'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center transform hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a href="tel:+918087131470" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 8087131470
                </a>
              </li>
              <li className="flex">
                <Mail size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a href="mailto:futureaiexpert470@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  futureaiexpert470@gmail.com
                </a>
              </li>
              <li className="flex">
                <MapPin size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex">
                <MessageSquare size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/918087131470" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Coming Soon: Resources */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-6 text-center transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Resources Coming Soon</h3>
            <p className="text-gray-400 mb-4">
              We're working on a knowledge base with AI automation guides, tutorials, 
              and case studies. Stay tuned!
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:futureaiexpert470@gmail.com" 
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Mail size={16} className="mr-2" />
                Get Notified
              </a>
              <a 
                href="https://www.youtube.com/@AIAutomationwithME" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Youtube size={16} className="mr-2" />
                YouTube Channel
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            &copy; {currentYear} Future AI Expert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;