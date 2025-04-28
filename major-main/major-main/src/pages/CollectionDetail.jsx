import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center p-10">

      
      <h1 className="text-5xl font-bold mb-6 text-black text-center tracking-wide">Collections</h1>

     
      <p className="text-xl text-center mb-6 text-gray-700">A championship series that raises awareness and celebrates winning.</p>
      <p className="text-lg text-center mb-12 text-gray-500">Discover the exclusive collections designed to inspire champions.</p>

      
      <div className="flex justify-center gap-6">
        
        
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-[200px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold tracking-wide">Lookbook</h2>
        </div>

        
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-[200px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold tracking-wide">Shop</h2>
        </div>

        
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-[200px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold tracking-wide">Major SZN</h2>
        </div>

      </div>
    </div>
  );
};

export default Collections;
