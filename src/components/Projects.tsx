import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "Automated Customer Support System",
      category: "AI Chatbot",
      description: "Developed an intelligent chatbot system for a tech company that handles 80% of customer inquiries automatically, reducing response time and support costs.",
      results: [
        "80% reduction in response time",
        "Cost savings of $45,000 annually",
        "Improved customer satisfaction ratings by 25%",
        "Seamless integration with existing CRM"
      ],
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "E-commerce Order Processing Workflow",
      category: "Business Process Automation",
      description: "Created an end-to-end automated workflow for an online retailer that handles everything from order confirmation to shipping notifications and inventory updates.",
      results: [
        "Processing time reduced by 65%",
        "Error rate dropped from 5% to <0.5%",
        "Inventory accuracy improved to 99.8%",
        "Staff time reallocated to growth initiatives"
      ],
      image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Lead Generation & Nurturing System",
      category: "Marketing Automation",
      description: "Implemented an AI-powered lead generation system for a B2B service provider that automatically identifies, qualifies, and nurtures potential clients.",
      results: [
        "150% increase in qualified leads",
        "12% improvement in conversion rate",
        "Personalized follow-up for every prospect",
        "Detailed analytics on customer journey"
      ],
      image: "https://images.pexels.com/photos/8353834/pexels-photo-8353834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our successful implementations and the results 
            they've delivered for our clients.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Featured Work</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      activeProject === project.id
                        ? 'bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-600 dark:border-purple-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">{project.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.category}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:w-2/3">
            {projects
              .filter((project) => project.id === activeProject)
              .map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2 mb-6">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                    >
                      <span>Get similar results for your business</span>
                      <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;