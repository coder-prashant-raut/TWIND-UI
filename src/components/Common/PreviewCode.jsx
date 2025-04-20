import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const PreviewCode = ({ title, description, component, code, props = [], theme, fullWidth = false }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const isLight = theme === "light" || theme === "white";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`mb-8 border rounded-lg overflow-hidden ${isLight ? "border-gray-200" : "border-gray-700"}`}>
      {/* Header */}
      <div className={`px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${isLight ? "bg-gray-50" : "bg-gray-800"}`}>
        <h2 className="text-xl font-semibold">{title}</h2>
        
        <div className="flex flex-wrap gap-2">
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
      {description && (
        <div className={`px-4 sm:px-6 py-3 border-b ${isLight ? "border-gray-200" : "border-gray-700"}`}>
          <p className={`text-sm ${isLight ? "text-gray-600" : "text-gray-300"}`}>{description}</p>
        </div>
      )}
      
      {/* Content */}
      <div className={`${isLight ? "bg-white" : "bg-gray-900"} w-full`}>
        {activeTab === "preview" && (
          <div className={`p-4 sm:p-6 flex items-center justify-center ${fullWidth ? "w-full" : "min-h-40"}`}>
            {component}
          </div>
        )}
        
        {activeTab === "code" && (
          <div className="relative w-full">
            <button
              onClick={copyToClipboard}
              className={`absolute right-2 top-2 p-2 rounded-md z-10 flex items-center justify-center ${
                isLight 
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-700" 
                  : "bg-gray-700 hover:bg-gray-600 text-gray-200"
              } transition-colors`}
              title="Copy to clipboard"
            >
              {copied ? (
                <FiCheck className="w-4 h-4 text-green-500" />
              ) : (
                <FiCopy className="w-4 h-4" />
              )}
            </button>
            <div className="p-4 pt-10 w-full overflow-x-auto">
              <SyntaxHighlighter 
                language="jsx" 
                style={isLight ? oneLight : tomorrow}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  background: isLight ? '#f8fafc' : '#1e293b',
                  maxWidth: '100%'
                }}
                wrapLongLines={true}
                className="w-full"
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
        
        {activeTab === "props" && props.length > 0 && (
          <div className="p-4 overflow-x-auto w-full">
            <div className="w-full">
              <table className={`w-full divide-y ${isLight ? "divide-gray-200" : "divide-gray-700"}`}>
                <thead className={isLight ? "bg-gray-50" : "bg-gray-800"}>
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Prop</th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Default</th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isLight ? "divide-gray-200" : "divide-gray-700"}`}>
                  {props.map((prop, index) => (
                    <tr key={index} className={index % 2 === 0 ? (isLight ? "bg-white" : "bg-gray-900") : (isLight ? "bg-gray-50" : "bg-gray-800")}>
                      <td className="px-3 sm:px-6 py-4 text-sm font-medium whitespace-nowrap">{prop.name}</td>
                      <td className="px-3 sm:px-6 py-4 text-sm whitespace-nowrap">
                        <code className={`px-2 py-1 rounded ${isLight ? "bg-gray-100" : "bg-gray-700"}`}>
                          {prop.type}
                        </code>
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-sm whitespace-nowrap">{prop.default || '-'}</td>
                      <td className="px-3 sm:px-6 py-4 text-sm">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewCode;