import React, { useState } from "react";
import { FaBook, FaCode, FaArrowRight, FaSearch, FaCopy, FaCheck, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Documentation = ({ theme }) => {
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState("introduction");
  const [copiedCode, setCopiedCode] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const menuItems = [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "basic-usage", label: "Basic Usage" },
 
  ];

  const CodeBlock = ({ code, language = "jsx", id }) => (
    <div className={`relative mt-4 rounded-lg overflow-hidden ${
      isDark ? "bg-gray-900" : "bg-gray-100"
    }`}>
      <div className={`flex justify-between items-center px-4 py-2 text-xs ${
        isDark ? "bg-gray-800" : "bg-gray-200"
      }`}>
        <span>{language}</span>
        <button 
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-1 hover:text-blue-500 transition-colors"
        >
          {copiedCode === id ? <FaCheck /> : <FaCopy />}
          {copiedCode === id ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className={`p-4 overflow-x-auto font-mono text-sm ${
        isDark ? "text-gray-300" : "text-gray-800"
      }`}>
        <code>{code}</code>
      </pre>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "introduction":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">BRAMHA-UI Documentation</h2>
            <p className="mb-6">
              BRAMHA-UI is a collection of beautifully designed React components built with Tailwind CSS that can be easily customized to match your brand's look and feel.
            </p>
            
            <div className={`p-6 rounded-3xl border backdrop-blur-lg bg-opacity-60 shadow-xl mb-8 ${
              isDark ? "bg-gray-900/60 border-gray-700" : "bg-white/70 border-gray-200"
            }`}>
              <h3 className="text-xl font-bold mb-4 font-mono">Key Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">40+ Components</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A comprehensive library of customizable UI components</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Tailwind CSS</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Built with the utility-first CSS framework for rapid development</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Clean and Consistent Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Built-in support for a modern, minimalist theme with consistent styling across all components</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Built for Everyone</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Designed with accessibility best practices to support all users</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Get Started</h3>
            <p className="mb-6">Start by checking our Installation Guide and then dive into Components.</p>
            
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => setActiveTab("installation")}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Installation <FaArrowRight />
              </button>
              
              <button 
                onClick={() => setActiveTab("basic-usage")}
                className="flex items-center gap-2 px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
              >
               Basic Usages <FaArrowRight />
              </button>
            </div>
          </div>
        );
      
      case "installation":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Installation</h2>
            <p className="mb-6">BRAMHA-UI doesn't require installation. All components are copy-paste ready. But make sure your project is setup with Tailwind CSS + Vite.</p>
            
            <h3 className="text-xl font-bold mb-4">If you're starting fresh:</h3>
            
            <CodeBlock 
              id="create-vite"
              code="npm create vite@latest my-app"
            />
            
            <CodeBlock 
              id="cd-app"
              code="cd my-app"
            />
            
            <CodeBlock 
              id="install"
              code="npm install"
            />
            
            <CodeBlock 
              id="tailwind-deps"
              code="npm install -D tailwindcss postcss autoprefixer"
            />
            
            <CodeBlock 
              id="tailwind-init"
              code="npx tailwindcss init -p"
            />
            
            <h3 className="text-xl font-bold mt-8 mb-4">Configure Tailwind</h3>
            
            <CodeBlock 
              id="tailwind-config"
              code={`// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            />
            
            <h3 className="text-xl font-bold mt-8 mb-4">Add Tailwind to CSS</h3>
            
            <CodeBlock 
              id="tailwind-css"
              code={`/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
            />
            
            <div className="mt-8 p-6 rounded-lg border border-yellow-500 bg-yellow-50 dark:bg-white-900/20 dark:border-yellow-600/50">
              <h4 className="font-bold mb-2">Ready to Use</h4>
              <p>
                After setting up your project with Tailwind CSS, you can start copying and using BRAMHA-UI components in your project.
              </p>
            </div>
          </div>
        );
      
      case "basic-usage":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Basic Usage</h2>
            
            <p className="mb-6">
              Using BRAMHA-UI components is straightforward. Simply copy the component code and paste it into your project.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Simple Example</h3>
            
            <CodeBlock 
              id="basic-button"
              code={`import React from 'react';

// A simple BRAMHA-UI button
const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-8 text-lg'
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;`}
            />
            
            <h3 className="text-xl font-bold mt-8 mb-4">Using the Component</h3>
            
            <CodeBlock 
              id="using-button"
              code={`import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">BRAMHA-UI Demo</h1>
      
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary" size="md">
          Primary Button
        </Button>
        
        <Button variant="secondary" size="md">
          Secondary Button
        </Button>
        
        <Button variant="outline" size="md">
          Outline Button
        </Button>
      </div>
    </div>
  );
};

export default App;`}
            />
            
            <p className="mt-6">
              This is just a simple example of how to use a BRAMHA-UI component. Browse our components section to explore more complex components.
            </p>
          </div>
        );
        
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg">Content for {activeTab} is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <section
      className={`min-h-screen pt-20 transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Glow Background Effects */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full top-[-150px] right-[-150px] animate-pulse"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px] animate-pulse"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Navigation Pills */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold font-mono flex items-center">
              <FaBook className="inline-block mr-2" />
              BRAMHA-UI Docs
            </h1>
            
            {/* Mobile navigation dropdown */}
            <div className="relative md:hidden">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center justify-between w-full px-4 py-2 rounded-lg ${
                  isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } border border-gray-300 dark:border-gray-700`}
              >
                <span>{menuItems.find(item => item.id === activeTab)?.label}</span>
                <FaChevronDown className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {dropdownOpen && (
                <div className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${
                  isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                } border`}>
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 ${
                        activeTab === item.id
                          ? isDark 
                            ? "bg-blue-600 text-white" 
                            : "bg-blue-100 text-blue-800"
                          : ""
                      } hover:bg-gray-100 dark:hover:bg-gray-700`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop navigation pills */}
          <div className="hidden md:flex md:flex-wrap gap-2 overflow-x-auto pb-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === item.id
                    ? isDark 
                      ? "bg-blue-600 text-white" 
                      : "bg-blue-100 text-blue-800"
                    : isDark
                      ? "bg-gray-800 hover:bg-gray-700" 
                      : "bg-white hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <motion.div
          className={`p-6 lg:p-8 rounded-2xl backdrop-blur-sm shadow-xl border ${
            isDark ? "bg-gray-900/60 border-gray-700" : "bg-white/80 border-gray-200"
          }`}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
        
        {/* Quick navigation footer */}
        {/* <div className="mt-8 flex justify-between items-center">
          <button 
            onClick={() => {
              const currentIndex = menuItems.findIndex(item => item.id === activeTab);
              if (currentIndex > 0) {
                setActiveTab(menuItems[currentIndex - 1].id);
              }
            }}
            disabled={menuItems.findIndex(item => item.id === activeTab) === 0}
            className={`px-4 py-2 rounded-lg ${
              menuItems.findIndex(item => item.id === activeTab) === 0 
                ? "opacity-50 cursor-not-allowed" 
                : isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            ← Previous: {
              menuItems.findIndex(item => item.id === activeTab) > 0 
                ? menuItems[menuItems.findIndex(item => item.id === activeTab) - 1].label
                : ""
            }
          </button>
          
          <button 
            onClick={() => {
              const currentIndex = menuItems.findIndex(item => item.id === activeTab);
              if (currentIndex < menuItems.length - 1) {
                setActiveTab(menuItems[currentIndex + 1].id);
              }
            }}
            disabled={menuItems.findIndex(item => item.id === activeTab) === menuItems.length - 1}
            className={`px-4 py-2 rounded-lg ${
              menuItems.findIndex(item => item.id === activeTab) === menuItems.length - 1 
                ? "opacity-50 cursor-not-allowed" 
                : isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            Next: {
              menuItems.findIndex(item => item.id === activeTab) < menuItems.length - 1 
                ? menuItems[menuItems.findIndex(item => item.id === activeTab) + 1].label
                : ""
            } →
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Documentation;