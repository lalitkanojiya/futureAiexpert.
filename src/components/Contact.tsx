import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hi! I'm interested in your AI automation services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918087131470?text=${encodedMessage}`, '_blank');
  };

  const contactOptions = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91 8087131470",
      link: "tel:+918087131470"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "futureaiexpert470@gmail.com",
      link: "mailto:futureaiexpert470@gmail.com"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      value: "+91 8087131470",
      link: "https://wa.me/918087131470"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? 
            Reach out to us today to discuss your needs and how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 p-4 rounded-md mb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Message Sent!</h3>
                    <div className="mt-1 text-sm text-green-700 dark:text-green-400">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Service Interested In
                    </label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="Business Process Automation">Business Process Automation</option>
                      <option value="WhatsApp/Email Campaigns">WhatsApp/Email Campaigns</option>
                      <option value="Lead Generation Bots">Lead Generation Bots</option>
                      <option value="Social Media Automation">Social Media Automation</option>
                      <option value="Client Onboarding Systems">Client Onboarding Systems</option>
                      <option value="CRM & Google Sheet Integrations">CRM & Google Sheet Integrations</option>
                      <option value="Custom ChatGPT Workflows">Custom ChatGPT Workflows</option>
                      <option value="E-commerce Automation">E-commerce Automation</option>
                      <option value="AI Tool Setup & Training">AI Tool Setup & Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="bg-[#25D366] text-white py-2 px-4 rounded-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <MessageSquare size={16} className="mr-2" />
                    WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactOptions.map((option, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-md flex items-center justify-center text-purple-600 dark:text-purple-400 transform hover:scale-110 transition-transform duration-300">
                        {option.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{option.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{option.description}</p>
                      <a 
                        href={option.link} 
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
                      >
                        {option.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Ready to Automate?</h3>
              <p className="mb-6">
                Schedule a free consultation to discuss how our AI automation 
                solutions can help your business grow.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="tel:+918087131470" 
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/918087131470" 
                  className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <MessageSquare size={16} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;