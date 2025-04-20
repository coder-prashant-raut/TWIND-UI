import React from 'react';
import Form1, { form1Code } from './Form1';
import Form2, { form2Code } from './Form2';
import Form3, { form3Code } from './Form3';
import Form4, { form4Code } from './Form4';
import Form5, { form5Code } from './Form5';
import PreviewCode from '../../components/Common/PreviewCode'

function Forms({ theme }) {
  const isDark = theme === "dark";
  
  const forms = [
    {
      name: "Form 1",
      component: <Form1 theme={theme} />,
      code: form1Code,
      description: "Minimalistic and clean form with basic inputs"
    },
    {
      name: "Form 2",
      component: <Form2 theme={theme} />,
      code: form2Code,
      description: "Form with multiple steps and a progress bar"
    },
    {
      name: "Form 3",
      component: <Form3 theme={theme} />,
      code: form3Code,
      description: "Advanced form with text areas and validation"
    },
    {
      name: "Form 4",
      component: <Form4 theme={theme} />,
      code: form4Code,
      description: "Beautiful form with sleek inputs and transitions"
    },
    {
      name: "Form 5",
      component: <Form5 theme={theme} />,
      code: form5Code,
      description: "Simple form with email and message fields"
    }
  ];

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`max-w-7xl mx-auto ${isDark ? "text-gray-100" : "text-gray-900"}`}>
        {/* Header Section */}
        <div className="text-center mb-12 pt-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>Responsive</span> Form Components
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Ready-to-use form designs for your React projects. Fully responsive and theme-aware.
          </p>
        </div>

        {/* Form Components Grid */}
        <div className="space-y-12">
          {forms.map((form, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"} shadow-md`}
            >
              <PreviewCode
                title={form.name}
                description={form.description}
                component={
                  <div className="w-full">
                    {form.component}
                  </div>
                }
                code={form.code}
                theme={isDark ? "dark" : "light"}
                fullWidth={true}
              />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`mt-16 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          <p>All forms adapt to screen size and support dark/light mode.</p>
          <p className="mt-1">Click "Code" to view and copy the implementation.</p>
        </div>
      </div>
    </div>
  );
}

export default Forms;
