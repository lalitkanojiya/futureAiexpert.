import React from 'react';
import { 
  Workflow, 
  MessageSquare, 
  Users, 
  Share2, 
  UserCheck, 
  Database, 
  Bot, 
  ShoppingBag, 
  Sparkles 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full transform hover:scale-105 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4 transform hover:rotate-12 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <a href="#contact" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium flex items-center transition-colors duration-300">
          Learn more
          <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Workflow size={24} />,
      title: "Business Process Automation",
      description: "Streamline your operations with custom workflows that reduce manual tasks and improve efficiency."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "WhatsApp/Email Campaigns",
      description: "Engage customers with personalized, automated messaging campaigns that drive conversions."
    },
    {
      icon: <Users size={24} />,
      title: "Lead Generation Bots",
      description: "Capture and qualify leads 24/7 with intelligent chatbots that engage prospects at the perfect moment."
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media Automation",
      description: "Maintain a consistent presence across platforms with scheduled posts and automated engagement."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Client Onboarding Systems",
      description: "Create seamless onboarding experiences with automated workflows that save time and reduce errors."
    },
    {
      icon: <Database size={24} />,
      title: "CRM & Google Sheet Integrations",
      description: "Connect your data sources for streamlined operations and comprehensive business insights."
    },
    {
      icon: <Bot size={24} />,
      title: "Custom ChatGPT Workflows",
      description: "Leverage the power of AI with tailored ChatGPT solutions for customer service, content creation, and more."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "E-commerce Automation",
      description: "Automate inventory management, order processing, and customer communications for your online store."
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI Tool Setup & Training",
      description: "Get expert setup and training for AI tools that will transform how your business operates."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore Our Services</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI automation solutions designed to 
            help your business operate more efficiently and grow faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;