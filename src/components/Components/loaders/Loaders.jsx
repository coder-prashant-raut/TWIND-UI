import React from "react";
import PreviewCode from "../../Common/PreviewCode";

function Loaders({ theme }) {
  const isDark = theme === "dark";

  // Code snippets for each loader
  const spinningCircleCode = `<div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>`;
  
  const dualRingCode = `<div className="relative w-12 h-12">
  <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>`;

  const dotPulseCode = `<div className="flex gap-1">
  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
</div>`;

  const rippleCode = `<div className="relative w-12 h-12">
  <div className="absolute w-full h-full border-2 border-green-500 rounded-full animate-ping"></div>
  <div className="absolute w-full h-full border-2 border-green-500 rounded-full"></div>
</div>`;

  const barsPulseCode = `<div className="flex space-x-1">
  <div className="w-1 h-6 bg-pink-500 animate-pulse"></div>
  <div className="w-1 h-6 bg-pink-500 animate-pulse delay-100"></div>
  <div className="w-1 h-6 bg-pink-500 animate-pulse delay-200"></div>
</div>`;

  const rotatingSquareCode = `<div className="w-8 h-8 bg-purple-500 animate-[spin_1s_linear_infinite]"></div>`;

  const spinningRingCode = `<div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>`;

  const pulseDotsCode = `<div className="flex gap-2">
  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-150"></div>
  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
</div>`;

  const ripplePingCode = `<span className="relative flex h-10 w-10">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-10 w-10 bg-green-500"></span>
</span>`;

  const dualBarsCode = `<div className="flex gap-1">
  <div className="w-1.5 h-6 bg-pink-500 animate-pulse"></div>
  <div className="w-1.5 h-6 bg-pink-500 animate-pulse delay-150"></div>
</div>`;

  const squareSpinCode = `<div className="w-8 h-8 bg-yellow-500 animate-spin rounded"></div>`;

  const dotRollerCode = `<div className="relative flex w-10 h-10 items-center justify-center">
  <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[0ms]"></div>
  <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[100ms] left-2"></div>
  <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[200ms] left-4"></div>
</div>`;

  const clockSpinnerCode = `<div className="w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>`;

  const miniPulseCirclesCode = `<div className="flex gap-1">
  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-150"></div>
  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-300"></div>
</div>`;

  const ringPulseCode = `<div className="w-10 h-10 rounded-full border-4 border-cyan-500 animate-pulse"></div>`;

  const ellipsisDotsCode = `<div className="flex gap-1">
  <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
  <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-100"></div>
  <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200"></div>
</div>`;

  const gapSpinnerCode = `<div className="w-12 h-12 border-4 border-l-transparent border-blue-600 rounded-full animate-spin"></div>`;

  const bounceCircleCode = `<div className="w-10 h-10 rounded-full bg-indigo-500 animate-bounce"></div>`;

  const flipDotCode = `<div className="w-6 h-6 bg-pink-600 rounded-full transform animate-spin"></div>`;

  const floatingSquareCode = `<div className="w-8 h-8 bg-green-500 rounded-md animate-bounce"></div>`;

  // Loader components
  const loaders = [
    {
      name: "Spinning Circle",
      component: <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>,
      code: spinningCircleCode
    },
    {
      name: "Dual Ring",
      component: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ),
      code: dualRingCode
    },
    {
      name: "Dot Pulse",
      component: (
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
        </div>
      ),
      code: dotPulseCode
    },
    {
      name: "Ripple Effect",
      component: (
        <div className="relative w-12 h-12">
          <div className="absolute w-full h-full border-2 border-green-500 rounded-full animate-ping"></div>
          <div className="absolute w-full h-full border-2 border-green-500 rounded-full"></div>
        </div>
      ),
      code: rippleCode
    },
    {
      name: "Bars Pulse",
      component: (
        <div className="flex space-x-1">
          <div className="w-1 h-6 bg-pink-500 animate-pulse"></div>
          <div className="w-1 h-6 bg-pink-500 animate-pulse delay-100"></div>
          <div className="w-1 h-6 bg-pink-500 animate-pulse delay-200"></div>
        </div>
      ),
      code: barsPulseCode
    },
    {
      name: "Rotating Square",
      component: <div className="w-8 h-8 bg-purple-500 animate-[spin_1s_linear_infinite]"></div>,
      code: rotatingSquareCode
    },
    {
      name: "Spinning Ring",
      component: <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>,
      code: spinningRingCode
    },
    {
      name: "Pulse Dots",
      component: (
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
        </div>
      ),
      code: pulseDotsCode
    },
    {
      name: "Ripple Ping",
      component: (
        <span className="relative flex h-10 w-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-10 w-10 bg-green-500"></span>
        </span>
      ),
      code: ripplePingCode
    },
    {
      name: "Dual Bars",
      component: (
        <div className="flex gap-1">
          <div className="w-1.5 h-6 bg-pink-500 animate-pulse"></div>
          <div className="w-1.5 h-6 bg-pink-500 animate-pulse delay-150"></div>
        </div>
      ),
      code: dualBarsCode
    },
    {
      name: "Square Spin",
      component: <div className="w-8 h-8 bg-yellow-500 animate-spin rounded"></div>,
      code: squareSpinCode
    },
    {
      name: "Dot Roller",
      component: (
        <div className="relative flex w-10 h-10 items-center justify-center">
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[0ms]"></div>
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[100ms] left-2"></div>
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[200ms] left-4"></div>
        </div>
      ),
      code: dotRollerCode
    },
    {
      name: "Clock Spinner",
      component: <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>,
      code: clockSpinnerCode
    },
    {
      name: "Mini Ping Circles",
      component: (
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-150"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-300"></div>
        </div>
      ),
      code: miniPulseCirclesCode
    },
    {
      name: "Ring Pulse",
      component: <div className="w-10 h-10 rounded-full border-4 border-cyan-500 animate-pulse"></div>,
      code: ringPulseCode
    },
    {
      name: "Ellipsis Dots",
      component: (
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200"></div>
        </div>
      ),
      code: ellipsisDotsCode
    },
    {
      name: "Gap Spinner",
      component: <div className="w-12 h-12 border-4 border-l-transparent border-blue-600 rounded-full animate-spin"></div>,
      code: gapSpinnerCode
    },
    {
      name: "Bounce Circle",
      component: <div className="w-10 h-10 rounded-full bg-indigo-500 animate-bounce"></div>,
      code: bounceCircleCode
    },
    {
      name: "Flip Dot",
      component: <div className="w-6 h-6 bg-pink-600 rounded-full transform animate-spin"></div>,
      code: flipDotCode
    },
    {
      name: "Floating Square",
      component: <div className="w-8 h-8 bg-green-500 rounded-md animate-bounce"></div>,
      code: floatingSquareCode
    }
  ];

  return (
    <div
      className={`min-h-screen mt-0 px-6 pt-20 py-24 flex flex-col items-center justify-center text-center transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Soft blurred animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-pink-400 opacity-20 blur-[150px] animate-pulse-slow rounded-full"></div>
        <div className="absolute bottom-10 right-1/2 w-[50vw] h-[50vw] bg-indigo-400 opacity-20 blur-[120px] animate-pulse-slow rounded-full"></div>
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      {/* Header */}
      <div className="max-w-6xl w-full mx-auto space-y-10">
        <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>Modern</span> Loader Components
          </h1>
          <p className="mt-2 sm:text-lg text-gray-600 dark:text-gray-300">
            A set of beautiful, smooth, and modern CSS loaders made with Tailwind and pure CSS.
          </p>
        </div>

       
        {/* Loaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loaders.map((loader, index) => (
            <PreviewCode
              key={index}
              title={loader.name}
              description="Click 'Code' to see the implementation"
              component={
                <div className="flex items-center justify-center p-10">
                  {loader.component}
                </div>
              }
              code={loader.code}
              theme={isDark ? "dark" : "light"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loaders;