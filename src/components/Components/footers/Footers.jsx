import React from 'react';
import Footer1 from './Footer1';
import Footer2, { footer2Code } from './Footer2';
import Footer3, { footer3Code } from './Footer3';
import Footer4, { footer4Code } from './Footer4';
import Footer5, { footer5code } from './Footer5';
import PreviewCode from '../../Common/PreviewCode';
import { footer1Code } from './Footer1';

function Footers({ theme }) {
  const isDark = theme === "dark";
  
  const footers = [
    {
      name: "Minimal Footer",
      component: <Footer1 theme={theme} />,
      code: footer1Code,
      description: "Clean single-column footer with social links"
    },
    {
      name: "Multi-Column Footer",
      component: <Footer2 theme={theme} />,
      code: footer2Code,
      description: "Traditional footer with multiple link sections"
    },
    {
      name: "Newsletter Footer",
      component: <Footer3 theme={theme} />,
      code: footer3Code,
      description: "Footer with email subscription form"
    },
    {
      name: "Branded Footer",
      component: <Footer4 theme={theme} />,
      code: footer4Code,
      description: "Footer with company logo and mission statement"
    },
    {
      name: "Legal Footer",
      component: <Footer5 theme={theme} />,
      code: footer5code,
      description: "Compact footer with legal links and copyright"
    }
  ];

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`max-w-7xl mx-auto ${isDark ? "text-gray-100" : "text-gray-900"}`}>
        {/* Header Section */}
        <div className="text-center mb-12 pt-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>Responsive</span> Footer Components
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Ready-to-use footer designs for your React projects. Fully responsive and theme-aware.
          </p>
        </div>

        {/* Footer Components Grid */}
        <div className="space-y-12">
          {footers.map((footer, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"} shadow-md`}
            >
              <PreviewCode
                title={footer.name}
                description={footer.description}
                component={
                  <div className="w-full">
                    {footer.component}
                  </div>
                }
                code={footer.code}
                theme={isDark ? "dark" : "light"}
                fullWidth={true}
              />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`mt-16 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          <p>All footers adapt to screen size and support dark/light mode.</p>
          <p className="mt-1">Click "Code" to view and copy the implementation.</p>
        </div>
      </div>
    </div>
  );
}

export default Footers;