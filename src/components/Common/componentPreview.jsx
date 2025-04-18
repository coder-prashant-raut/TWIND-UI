import { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ComponentPreview  = ({ title, children, code }) => {
    const [activeTab, setActiveTab] = useState('preview');
    
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-8 dark:border-gray-700">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          {title && (
            <div className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200">
              {title}
            </div>
          )}
          <div className="flex">
            <button
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'preview' 
                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'code' 
                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800">
          {activeTab === 'preview' ? (
            <div className="p-4">
              {children}
            </div>
          ) : (
            <div className="p-4 bg-gray-50 dark:bg-gray-900">
              {/* <SyntaxHighlighter
                language="jsx"
                style={oneDark}
                customStyle={{ background: 'transparent', padding: 0 }}
                className="rounded-md text-sm"
              >
                {code}
              </SyntaxHighlighter> */}
              {code}
            </div>
          )}
        </div>
      </div>
    );
  };

export default ComponentPreview;
