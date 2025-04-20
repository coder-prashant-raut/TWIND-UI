import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * UIDocsPanel - A documentation component for UI libraries
 * @param {object} props - Component props
 * @param {string} props.title - Title of the component being documented
 * @param {string} props.description - Description of the component
 * @param {React.ReactNode} props.component - The component to display as example
 * @param {string} props.code - Code snippet for the component
 * @param {Array} props.props - Properties documentation (optional)
 * @param {string} props.theme - Current theme ('light' or 'dark')
 */
const UIDocsPanel = ({ 
  title, 
  description, 
  component, 
  code, 
  props = [],
  theme 
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  
  const isLight = theme === "light";
  
  return (
    <div className={`mb-8 border rounded-lg overflow-hidden ${isLight ? "border-gray-200" : "border-gray-700"}`}>
      {/* Header */}
      <div className={`px-6 py-4 flex items-center justify-between ${isLight ? "bg-gray-50" : "bg-gray-800"}`}>
        <h2 className="text-xl font-semibold">{title}</h2>
        
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              activeTab === "preview" 
                ? (isLight ? "bg-blue-500 text-white" : "bg-blue-600 text-white") 
                : (isLight ? "text-gray-600 hover:bg-gray-200" : "text-gray-300 hover:bg-gray-700")
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              activeTab === "code" 
                ? (isLight ? "bg-blue-500 text-white" : "bg-blue-600 text-white") 
                : (isLight ? "text-gray-600 hover:bg-gray-200" : "text-gray-300 hover:bg-gray-700")
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
          {props.length > 0 && (
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                activeTab === "props" 
                  ? (isLight ? "bg-blue-500 text-white" : "bg-blue-600 text-white") 
                  : (isLight ? "text-gray-600 hover:bg-gray-200" : "text-gray-300 hover:bg-gray-700")
              }`}
              onClick={() => setActiveTab("props")}
            >
              Props
            </button>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className={`px-6 py-3 border-b ${isLight ? "border-gray-200" : "border-gray-700"}`}>
        <p className={`text-sm ${isLight ? "text-gray-600" : "text-gray-300"}`}>{description}</p>
      </div>
      
      {/* Content */}
      <div className={`${isLight ? "bg-white" : "bg-gray-900"}`}>
        {activeTab === "preview" && (
          <div className="p-6 flex items-center justify-center min-h-40">
            {component}
          </div>
        )}
        
        {activeTab === "code" && (
          <div className="p-4">
            <SyntaxHighlighter 
              language="jsx" 
              style={isLight ? oneLight : tomorrow}
              customStyle={{
                margin: 0,
                borderRadius: '0.375rem',
                fontSize: '0.875rem'
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
        
        {activeTab === "props" && props.length > 0 && (
          <div className="p-4 overflow-x-auto">
            <table className={`min-w-full divide-y ${isLight ? "divide-gray-200" : "divide-gray-700"}`}>
              <thead className={isLight ? "bg-gray-50" : "bg-gray-800"}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? "divide-gray-200" : "divide-gray-700"}`}>
                {props.map((prop, index) => (
                  <tr key={index} className={index % 2 === 0 ? (isLight ? "bg-white" : "bg-gray-900") : (isLight ? "bg-gray-50" : "bg-gray-800")}>
                    <td className="px-6 py-4 text-sm font-medium">{prop.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <code className={`px-2 py-1 rounded ${isLight ? "bg-gray-100" : "bg-gray-700"}`}>
                        {prop.type}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-sm">{prop.default || '-'}</td>
                    <td className="px-6 py-4 text-sm">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * ComponentDocs - A page layout for component documentation
 * @param {object} props - Component props
 * @param {string} props.category - Component category
 * @param {Array} props.components - Array of component documentation objects
 * @param {string} props.theme - Current theme ('light' or 'dark')
 */
const ComponentDocs = ({ category, components, theme }) => {
  const isLight = theme === "light";
  
  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{category}</h1>
          <div className={`h-1 w-24 ${isLight ? "bg-blue-500" : "bg-blue-600"}`}></div>
        </div>
        
        {components.map((component, index) => (
          <UIDocsPanel
            key={index}
            title={component.title}
            description={component.description}
            component={component.component}
            code={component.code}
            props={component.props}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * DocsNav - Side navigation for documentation
 * @param {object} props - Component props
 * @param {Array} props.categories - Documentation categories with links
 * @param {string} props.theme - Current theme ('light' or 'dark')
 */
const DocsNav = ({ categories, theme }) => {
  const isLight = theme === "light";
  
  return (
    <div className={`w-64 h-screen sticky top-0 overflow-auto ${isLight ? "bg-white border-r border-gray-200" : "bg-gray-900 border-r border-gray-700"}`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6">Documentation</h2>
        
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className={`text-sm font-medium uppercase tracking-wider mb-2 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                {category.name}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className={`block px-2 py-1 rounded-md text-sm ${
                        item.active 
                          ? (isLight ? "bg-blue-50 text-blue-700" : "bg-blue-900 bg-opacity-30 text-blue-400") 
                          : (isLight ? "text-gray-700 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800")
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * DocsLayout - Main documentation layout component
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Documentation content
 * @param {string} props.theme - Current theme ('light' or 'dark')
 */
const DocsLayout = ({ children, theme }) => {
  const isLight = theme === "light";
  
  const categories = [
    {
      name: "Getting Started",
      items: [
        { name: "Introduction", href: "#introduction", active: false },
        { name: "Installation", href: "#installation", active: false },
        { name: "Theming", href: "#theming", active: true }
      ]
    },
    {
      name: "Components",
      items: [
        { name: "Buttons", href: "/buttons", active: false },
        { name: "Cards", href: "/cards", active: false },
        { name: "Navbars", href: "/navbars", active: false },
        { name: "Footers", href: "/footers", active: false },
        { name: "Heroes", href: "/heros", active: false },
        { name: "Testimonials", href: "/testimonials", active: false },
        { name: "Loaders", href: "/loaders", active: false }
      ]
    },
    {
      name: "Utilities",
      items: [
        { name: "Colors", href: "#colors", active: false },
        { name: "Typography", href: "#typography", active: false },
        { name: "Spacing", href: "#spacing", active: false }
      ]
    }
  ];
  
  return (
    <div className={`min-h-screen ${isLight ? "bg-gray-50" : "bg-black"}`}>
      <div className="flex">
        <DocsNav categories={categories} theme={theme} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

// Usage Example for a Button component page
const ButtonDocsPage = ({ theme }) => {
  // Example button variants for documentation
  const PrimaryButton = () => (
    <button className={`px-4 py-2 rounded-md font-medium ${theme === "light" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
      Primary Button
    </button>
  );
  
  const SecondaryButton = () => (
    <button className={`px-4 py-2 rounded-md font-medium border ${theme === "light" ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50" : "border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700"}`}>
      Secondary Button
    </button>
  );

  const primaryButtonCode = `<button className={\`px-4 py-2 rounded-md font-medium \${theme === "light" 
  ? "bg-blue-500 text-white hover:bg-blue-600" 
  : "bg-blue-600 text-white hover:bg-blue-700"}\`}>
  Primary Button
</button>`;

  const secondaryButtonCode = `<button className={\`px-4 py-2 rounded-md font-medium border \${theme === "light" 
  ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50" 
  : "border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700"}\`}>
  Secondary Button
</button>`;

  const componentData = [
    {
      title: "Primary Button",
      description: "The primary button is used for main actions and emphasizes the most important action on a page.",
      component: <PrimaryButton />,
      code: primaryButtonCode,
      props: [
        { name: "size", type: "string", default: "md", description: "Button size (sm, md, lg)" },
        { name: "variant", type: "string", default: "solid", description: "Button style variant (solid, outline, ghost)" },
        { name: "disabled", type: "boolean", default: "false", description: "Whether the button is disabled" },
        { name: "onClick", type: "function", default: null, description: "Function called when button is clicked" }
      ]
    },
    {
      title: "Secondary Button",
      description: "Secondary buttons are used for less important actions that still require prominence.",
      component: <SecondaryButton />,
      code: secondaryButtonCode,
      props: [
        { name: "size", type: "string", default: "md", description: "Button size (sm, md, lg)" },
        { name: "variant", type: "string", default: "outline", description: "Button style variant (solid, outline, ghost)" },
        { name: "disabled", type: "boolean", default: "false", description: "Whether the button is disabled" },
        { name: "onClick", type: "function", default: null, description: "Function called when button is clicked" }
      ]
    }
  ];
  
  return (
    <DocsLayout theme={theme}>
      <ComponentDocs 
        category="Buttons" 
        components={componentData}
        theme={theme}
      />
    </DocsLayout>
  );
};

export default ButtonDocsPage;