import React, { useState } from 'react';
import PreviewCode from '../../Common/PreviewCode';

// Syntax highlighting components (you'll need to install these)


function Buttons({ theme }) {
  const isDark = theme === 'dark';
  
  // Button components and their code
  const buttonComponents = [
    {
      title: "Neon Glow Button",
      description: "A button with a soft neon glow effect that intensifies on hover.",
      component: (
        <button className="px-6 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 bg-blue-600 shadow-blue-500/50 hover:shadow-blue-400/70">
          Neon Glow
        </button>
      ),
      code: `<button className="px-6 py-3 text-white font-semibold rounded-lg 
  overflow-hidden transition-all duration-300 
  bg-blue-600 shadow-blue-500/50 hover:shadow-blue-400/70">
  Neon Glow
</button>`,
      props: [
        { name: "onClick", type: "function", default: "() => {}", description: "Function to call when button is clicked" },
        { name: "className", type: "string", default: "", description: "Additional CSS classes to apply" },
        { name: "children", type: "node", default: "", description: "Content to display inside the button" }
      ]
    },
    {
      title: "Flip Effect Button",
      description: "A button that rotates 180 degrees when hovered.",
      component: (
        <button className="px-6 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 bg-purple-500 hover:rotate-180">
          Flip Effect
        </button>
      ),
      code: `<button className="px-6 py-3 text-white font-semibold rounded-lg 
  overflow-hidden transition-all duration-300 
  bg-purple-500 hover:rotate-180">
  Flip Effect
</button>`,
      props: [
        { name: "onClick", type: "function", default: "() => {}", description: "Function to call when button is clicked" },
        { name: "className", type: "string", default: "", description: "Additional CSS classes to apply" },
        { name: "children", type: "node", default: "", description: "Content to display inside the button" }
      ]
    },
    {
      title: "Slide Background Button",
      description: "A button with a background that slides from left to right on hover.",
      component: (
        <button className="relative px-6 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 border-2 border-green-500 group">
          <span className="absolute inset-0 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          <span className="relative z-10">Slide Background</span>
        </button>
      ),
      code: `<button className="relative px-6 py-3 text-white font-semibold rounded-lg 
  overflow-hidden transition-all duration-300 border-2 border-green-500 group">
  <span className="absolute inset-0 bg-current transform scale-x-0 
    group-hover:scale-x-100 transition-transform origin-left"></span>
  <span className="relative z-10">Slide Background</span>
</button>`,
      props: [
        { name: "onClick", type: "function", default: "() => {}", description: "Function to call when button is clicked" },
        { name: "className", type: "string", default: "", description: "Additional CSS classes to apply" },
        { name: "children", type: "node", default: "", description: "Content to display inside the button" }
      ]
    },
    {
      title: "Scale Bounce Button",
      description: "A button that scales up and bounces slightly when hovered.",
      component: (
        <button className="px-6 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 bg-red-500 hover:scale-110 hover:-translate-y-1">
          Scale Bounce
        </button>
      ),
      code: `<button className="px-6 py-3 text-white font-semibold rounded-lg 
  overflow-hidden transition-all duration-300 
  bg-red-500 hover:scale-110 hover:-translate-y-1">
  Scale Bounce
</button>`,
      props: [
        { name: "onClick", type: "function", default: "() => {}", description: "Function to call when button is clicked" },
        { name: "className", type: "string", default: "", description: "Additional CSS classes to apply" },
        { name: "children", type: "node", default: "", description: "Content to display inside the button" }
      ]
    },
    {
      title: "Text Stroke Effect Button",
      description: "A button with text that uses gradient colors and transitions to solid on hover.",
      component: (
        <button className="px-6 py-3 font-semibold rounded-lg overflow-hidden transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 border border-yellow-400 hover:bg-yellow-500 hover:text-white">
          Text Stroke Effect
        </button>
      ),
      code: `<button className="px-6 py-3 font-semibold rounded-lg 
  overflow-hidden transition-all duration-300 
  text-transparent bg-clip-text bg-gradient-to-r 
  from-yellow-400 to-orange-500 border border-yellow-400 
  hover:bg-yellow-500 hover:text-white">
  Text Stroke Effect
</button>`,
      props: [
        { name: "onClick", type: "function", default: "() => {}", description: "Function to call when button is clicked" },
        { name: "className", type: "string", default: "", description: "Additional CSS classes to apply" },
        { name: "children", type: "node", default: "", description: "Content to display inside the button" }
      ]
    },
    {
      title: "Glass Effect Button",
      description: "A button with a translucent glass-like appearance using backdrop blur.",
      component: (
        <button className="px-6 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/20">
          Glass Effect
        </button>
      ),
      code: `<button className="px-6 py-3 text-white font-semibold rounded-lg 
  overflow-hidden transition-all duration-300 
  bg-white/10 backdrop-blur-lg border border-white/20">
  Glass Effect
</button>`,
      props: [
        { name: "onClick", type: "function", default: "() => {}", description: "Function to call when button is clicked" },
        { name: "className", type: "string", default: "", description: "Additional CSS classes to apply" },
        { name: "children", type: "node", default: "", description: "Content to display inside the button" }
      ]
    }
  ];

  return (
    <div
      className={`min-h-screen px-6 pt-20 py-24 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="max-w-6xl w-full mx-auto space-y-10">
        <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>Modern</span> Stylish Buttons
          </h1>
          <p className="mt-2 sm:text-lg text-gray-600 dark:text-gray-300">
            Below are different modern button designs that you can use in your React projects. Each button is responsive and customizable.
          </p>
        </div>

        {/* How to Use Section */}
       

        {/* Button Documentation */}
        <div className="space-y-8">
          {buttonComponents.map((button, index) => (
            <PreviewCode
              key={index}
              title={button.title}
              description={button.description}
              component={button.component}
              code={button.code}
              props={button.props}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buttons;