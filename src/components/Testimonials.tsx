import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Vishal",
      position: "Operations Director",
      company: "TechSolutions Inc.",
      content: "Future AI Expert transformed our customer service operations with their automation solution. We've seen a 40% reduction in response times and our team can now focus on complex issues while the AI handles routine inquiries. The ROI has been tremendous.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "E-commerce Manager",
      company: "GlobalRetail",
      content: "The WhatsApp automation system that Future AI Expert built for our business has revolutionized how we communicate with customers. Order confirmations, shipping updates, and follow-ups are now fully automated, and our customer satisfaction scores have never been higher.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Marketing Director",
      company: "Growth Partners",
      content: "We hired Future AI Expert to create a lead generation system, and the results exceeded our expectations. The solution they developed not only captures leads but also qualifies and nurtures them automatically. Our sales team now receives higher quality leads that convert at twice the previous rate.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses that have 
            transformed their operations with our AI automation solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 mb-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-center mb-6">
                <MessageSquare size={40} className="text-purple-400 dark:text-purple-300" />
              </div>
              
              <blockquote className="text-center mb-8">
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <footer>
                  <div className="font-bold text-lg text-gray-900 dark:text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="flex justify-center space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-purple-600 dark:bg-purple-400' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;