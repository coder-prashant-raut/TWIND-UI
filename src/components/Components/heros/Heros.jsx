import React from 'react';
import Hero1, { hero1Code } from './Hero1';
import Hero2, { hero2Code } from './Hero2';
import Hero3, { hero3Code } from './Hero3';
import Hero4, { hero4Code } from './Hero4';
import Hero5, { hero5Code } from './Hero5';
import Hero6, { hero6Code } from './Hero6';
import Hero7, { hero7Code } from './Hero7';
import Hero8, { hero8Code } from './Hero8';
import PreviewCode from '../../Common/PreviewCode';

function Heros({ theme }) {
  const isDark = theme === "dark";
  
  const heros = [
    {
      name: "Hero Section 1",
      component: <Hero1 />,
      code: hero1Code,
      description: "A modern hero section with centered content and CTA buttons."
    },
    {
      name: "Hero Section 2",
      component: <Hero2 />,
      code: hero2Code,
      description: "Split layout hero with image and content side by side."
    },
    {
      name: "Hero Section 3",
      component: <Hero3 />,
      code: hero3Code,
      description: "Hero section with background image and overlay text."
    },
    {
      name: "Hero Section 4",
      component: <Hero4 />,
      code: hero4Code,
      description: "Minimalist hero design with focus on typography."
    },
    {
      name: "Hero Section 5",
      component: <Hero5 />,
      code: hero5Code,
      description: "Hero with animated elements and gradient background."
    },
    {
      name: "Hero Section 6",
      component: <Hero6 />,
      code: hero6Code,
      description: "Video background hero with text overlay."
    },
    {
      name: "Hero Section 7",
      component: <Hero7 />,
      code: hero7Code,
      description: "Hero section with multiple CTA options and features list."
    },
    {
      name: "Hero Section 8",
      component: <Hero8 />,
      code: hero8Code,
      description: "Hero with testimonial integration and social proof."
    },
  ];
  
  return (
    <div
      className={`w-full px-4 sm:px-6 md:px-8 pt-16 md:pt-20 ${
        theme === "dark" ? "bg-transparent text-white" : "bg-white text-gray-900"
      } max-w-6xl mx-auto space-y-8 md:space-y-10 py-6 md:py-10`}
    >
      {/* Header Section */}
      <div className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>Modern Hero</span>  Components
          </h1>
        <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-2xl mx-auto">
          Below are different modern hero section designs that you can use in your React projects. Each hero component is
          responsive and engaging.
        </p>
      </div>
      
      {/* Hero Components */}
      <div className="space-y-6 md:space-y-10">
        {heros.map((hero, index) => (
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
  );
}

export default Heros;