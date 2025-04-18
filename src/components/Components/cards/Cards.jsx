import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import ComponentPreview from "../../Common/componentPreview";

// Store the code as strings
const card1Code = `import React from "react";

const Card1 = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Card Title</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This is a simple card component with content.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card1;`;

const card2Code = `import React from "react";

const Card2 = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <img 
        src="/api/placeholder/500/300" 
        alt="Card image" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Card with Image</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This card includes an image at the top.
        </p>
        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            View
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;`;

const Cards = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
        Cards Component Library
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ComponentPreview
          title="Card 1"
          code={card1Code}
        >
          <Card1 />
        </ComponentPreview>
        
        <ComponentPreview
          title="Card 2"
          code={card2Code}
        >
          <Card2 />
        </ComponentPreview>
        
        <ComponentPreview
          title="Card 3"
          code={`<Card3 />`}
        >
          <Card3 />
        </ComponentPreview>
        
        <ComponentPreview
          title="Card 4"
          code={`<Card4 />`}
        >
          <Card4 />
        </ComponentPreview>
      </div>
    </div>
  );
};

export default Cards;