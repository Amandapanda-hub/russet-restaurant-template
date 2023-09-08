import React from 'react';
import PeopleNumberOptions from './components/PeopleNumberOptions';

export default function ReservationMaker() {
  return (
    <div className="flex items-center justify-center py-4 md:py-10 lg:py-20">
      <div className="bg-gray-200 p-4 md:p-8 rounded-lg shadow-lg text-center space-y-4 md:space-y-8">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Make a reservation</h1>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mb-4 justify-center">
          {/* Number of People */}
          <select 
            className="p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <PeopleNumberOptions/>
          </select>

          {/* Date Picker */}
          <input 
            type="date" 
            className="p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />

          {/* Time Picker */}
          <input 
            type="time" 
            className="p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        <button 
          className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}
