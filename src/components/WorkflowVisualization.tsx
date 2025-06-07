import React from 'react';
import { ArrowRight, Database, MessageSquare, Zap, CheckCircle, Users, Mail } from 'lucide-react';

const WorkflowVisualization: React.FC = () => {
  const workflowSteps = [
    {
      id: 1,
      title: "Data Input",
      description: "Customer data flows in from multiple sources",
      icon: <Database size={24} />,
      color: "bg-blue-500",
      position: "top-0 left-0"
    },
    {
      id: 2,
      title: "AI Processing",
      description: "Smart algorithms analyze and categorize information",
      icon: <Zap size={24} />,
      color: "bg-purple-500",
      position: "top-0 right-0"
    },
    {
      id: 3,
      title: "Decision Engine",
      description: "Automated decision making based on predefined rules",
      icon: <CheckCircle size={24} />,
      color: "bg-green-500",
      position: "bottom-0 left-0"
    },
    {
      id: 4,
      title: "Multi-Channel Output",
      description: "Responses sent via email, WhatsApp, or other channels",
      icon: <MessageSquare size={24} />,
      color: "bg-orange-500",
      position: "bottom-0 right-0"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Our Automation Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See how our AI automation workflows transform your business processes 
            from manual tasks to intelligent, automated systems.
          </p>
        </div>

        {/* n8n Style Workflow Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-2 gap-8 relative">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white mb-4 transform hover:rotate-12 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection Lines */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight 
                        size={24} 
                        className="text-purple-500 animate-pulse" 
                      />
                    </div>
                  )}
                </div>
              ))}
              
              {/* Central Connection */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse">
                AI
              </div>
            </div>
          </div>
        </div>

        {/* Real Workflow Example */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.01] transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Real Automation Example: Customer Onboarding
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300">
              <Users size={32} className="mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">New Customer Signs Up</p>
            </div>
            
            <ArrowRight size={20} className="mx-auto text-gray-400 hidden md:block" />
            
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300">
              <Zap size={32} className="mx-auto mb-2 text-purple-600 dark:text-purple-400" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">AI Processes Information</p>
            </div>
            
            <ArrowRight size={20} className="mx-auto text-gray-400 hidden md:block" />
            
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300">
              <Mail size={32} className="mx-auto mb-2 text-green-600 dark:text-green-400" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Automated Welcome & Setup</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This entire process happens in seconds, not hours. No manual intervention required.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageSquare size={18} className="mr-2" />
              See This in Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualization;