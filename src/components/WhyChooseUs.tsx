import React from 'react';
import { CheckCircle, Clock, Zap, DollarSign, LucideHeading as HeadSide, Shield } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
      <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 transform hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <DollarSign size={24} />,
      title: "Affordable Solutions",
      description: "We offer competitive pricing with flexible packages designed to meet your budget without compromising on quality."
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Delivery",
      description: "Our streamlined development process ensures quick implementation and deployment of your automation solutions."
    },
    {
      icon: <Zap size={24} />,
      title: "Powerful Results",
      description: "Our solutions deliver measurable improvements in efficiency, productivity, and business growth."
    },
    {
      icon: <HeadSide size={24} />,
      title: "Expert Team",
      description: "Led by founder Lalit Kanojiya, our team brings deep expertise in AI and automation technologies."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Customized Approach",
      description: "We create tailored solutions that address your specific business challenges and objectives."
    },
    {
      icon: <Shield size={24} />,
      title: "Ongoing Support",
      description: "We provide continuous support and optimization to ensure your automation systems evolve with your business."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Future AI Expert delivers exceptional automation solutions that transform 
            how your business operates. Here's why clients choose to work with us:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard 
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <img 
                  src="/WhatsApp Image 2025-05-22 at 5.38.06 PM.jpeg" 
                  alt="Lalit Kanojiya - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Meet Our Founder</h3>
              <h4 className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">Lalit Kanojiya</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With a passion for leveraging AI to solve business challenges, Lalit founded Future AI Expert 
                to help companies harness the power of automation. His expertise in AI systems and business 
                process optimization has helped numerous organizations transform their operations and achieve 
                significant growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Under his leadership, Future AI Expert has become synonymous with innovative, 
                effective automation solutions that deliver real business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;