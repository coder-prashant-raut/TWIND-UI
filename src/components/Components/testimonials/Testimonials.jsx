import React from "react";
import Testimonial1, { testimonial1Code } from "./Testimonial1";
import Testimonial2, { testimonial2Code } from "./Testimonial2";
import Testimonial3, { testimonial3Code } from "./Testimonial3";
import Testimonial4, { testimonial4Code } from "./Testimonial4";
import Testimonial5, { testimonialCode5 } from "./Testimonial5";
import PreviewCode from "../../Common/PreviewCode";

function Testimonials({ theme }) {
  const isDark = theme === "dark";
  const testimonials = [
    {
      name : "Testimonial 1",
      component: <Testimonial1 />,
      code: testimonial1Code,
    },
    {
      name : "Testimonial 2",
      component: <Testimonial2 />,
      code: testimonial2Code,
    },
    {
      name : "Testimonial 3",
      component: <Testimonial3 />,
      code: testimonial3Code,
    },
    {
      name : "Testimonial 4",
      component: <Testimonial4 />,
      code:testimonial4Code,
    },
    {
      name : "Testimonial 5",
      component: <Testimonial5 />,
      code: testimonialCode5,
    },
    {
      name : "Testimonial 6",
      component: <Testimonial5 />,
      code: testimonialCode5,
    },
  

  ]

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

      <div className="max-w-6xl w-full space-y-12">
        {/* Page Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold drop-shadow-md font-mono">
            🚀 What People Are Saying
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            See how our UI Library is making a difference in the development community!
          </p>
        </div>


          

        {/* Navbar Components */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((hero, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"} shadow-md transition-all hover:shadow-lg max-w-full`}
          >
            <PreviewCode
              title={hero.name}
              description={hero.description || ""}
              component={
                <div className="w-full max-w-full">
                  {hero.component}
                </div>
              }
              code={hero.code}
              theme={isDark ? "dark" : "light"}
              fullWidth={true}
            />
          </div>
        ))}
         
         
          
        </div>

     
      </div>
    </div>
  );
}

export default Testimonials;
