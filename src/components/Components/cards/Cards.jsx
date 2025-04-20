import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import PreviewCode from '../../Common/PreviewCode';
import { card1Code } from './Card1';
import {card2Code} from './Card2';
import {card3Code} from './Card3';
import {card4Code} from './Card4';
import {card5Code} from './Card5';
import {card6Code} from './Card6';
import Card8, { Card8Code } from './Card8';
import Card9, { card9Code } from './Card9';
import Card7, { card7Code } from './Card7';

function Cards({ theme }) {
  const isDark = theme === "dark";
  const cards =
  [
    {
      name: "Card 1",
      component: <Card1 />,
      code: card1Code
    },
    {
      name: "Card 2",
      component: <Card2 />,
      code: card2Code
    },
    {
      name: "Card 3",
      component: <Card3 />,
      code: card3Code
    },
    {
      name: "Card 4",
      component: <Card4 />,
      code: card4Code
    },
    {
      name: "Card 5",
      component: <Card5 />,
      code: card5Code
    },
    {
      name: "Card 6",
      component: <Card6 />,
      code: card6Code
    },
    {
      name: "Card 7",
      component: <Card7 />,
      code: card7Code
    }, {
      name: "Card 8",
      component: <Card8 />,
      code: Card8Code
    }, {
      name: "Card 9",
      component: <Card9 />,
      code: card9Code
    },

  ]


  return (
    <div 
      className={ ` pt-20 p-10  ${
        theme === "dark" ? "bg-transparent text-white" : "bg-white text-gray-900"
      } max-w-6xl mx-auto space-y-10 py-10`}
    >
      {/* Header Section */}
      <div className="text-center">
       <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>Responsive</span> Cards Components
          </h1>
        <p className="sm:text-lg px-4 mt-2">
          Below are different modern card designs that you can use in your React projects. Each card component is
          responsive and customizable.
        </p>
      </div>

   


      {/* Card Components */}
      <div className="grid sm:grid-cols-1 gap-8">
      {cards.map((loader, index) => (
            <PreviewCode
              key={index}
              title={loader.name}
              description="Click 'Code' to see the implementation"
              component={
                <div className="w-full flex items-center justify-center min-h-40">
                  {loader.component}
                </div>
              }
              code={loader.code}
              fullWidth={true}
              theme={isDark ? "dark" : "light"}
            />
          ))}
        
      </div>
    </div>
  );
}

export default Cards;
