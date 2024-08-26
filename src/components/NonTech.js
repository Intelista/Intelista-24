import React from 'react';
import { useNavigate } from "react-router-dom";
const baloon = '/images/baloon.gif';
const chess = '/images/chess.gif';

const bioscope = '/images/bioscope.gif';
const Freefire = '/images/Freefire.gif';
const treasurehunt = '/images/treasurehunt.gif'

export default function NonTech(){
  const navigate = useNavigate();

  const handleNavigation = (hash) => {
      navigate('/cardnontech');
      setTimeout(() => {
          window.location.hash = hash;
      }, 100); // Delay to ensure navigation has occurred
  };
    return(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-4 md:ml-9">
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 bg-opacity-50  dark:bg -gray-50 text-gray-100 dark:text-gray-800">
          <img src={baloon} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="pirate text-3xl font-semibold text-center tracking-wide">Bounceblitz</h2>
              <p className="text-gray-100 text-center dark:text-gray-800">( Balloon )</p>
            </div>
            <button 
                        type="button" 
                        onClick={() => handleNavigation('#bounceblitz')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
          </div>
        </div>
      
        <div className="max-w-xs rounded-md shadow-md   bg-gray-900 bg-opacity-50  dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src={chess} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="pirate text-3xl font-semibold text-center tracking-wide">Chess Island</h2>
              <p className="text-gray-100 text-center dark:text-gray-800">( Chess )</p>
            </div>
            <button 
                        type="button" 
                        onClick={() => handleNavigation('#chess-sparrow')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
          </div>
        </div>
      
        <div className="max-w-xs rounded-md shadow-md  bg-gray-900 bg-opacity-50  dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src={bioscope} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8">
            <div className="space-y-2">
              <h2 className="pirate text-2xl font-semibold text-center tracking-wide">Pirate's Vision</h2>
              <p className="text-gray-100 text-center dark:text-gray-800">( Connections )</p>
            </div>
            <button 
                        type="button" 
                        onClick={() => handleNavigation('#pirates-vision')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
          </div>
        </div>
      
        <div className="max-w-xs rounded-md shadow-md   bg-gray-900 bg-opacity-50  dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src={treasurehunt} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="pirate text-3xl font-semibold  text-center tracking-wide">Pirate's Hunt</h2>
               <p className="text-gray-100 text-center dark:text-gray-800">( Treasure Hunt )</p>
            </div>
            <button 
                        type="button" 
                        onClick={() => handleNavigation('#treasure-hunt')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
          </div>
        </div>

        <div className="max-w-xs rounded-md shadow-md  bg-gray-900  bg-opacity-50  dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src={Freefire} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="pirate text-3xl font-semibold  text-center tracking-wide">Rogue Seas</h2>
              <p className="text-gray-100 text-center dark:text-gray-800">( Free Fire )</p>
            </div>
            <button
                        type="button" 
                        onClick={() => handleNavigation('#free-fire')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
          </div>
        </div>
      
        
      </div>
      
            
    );
}