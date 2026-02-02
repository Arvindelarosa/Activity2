import React from 'react';

const BurnSummary = ({ duration, caloriesPerMinute }) => {
  const totalCalories = duration * caloriesPerMinute;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-orange-100 p-2 rounded-lg mr-2">
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
        Burn Summary
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Duration</p>
            <p className="text-2xl font-black text-gray-800">{duration} <span className="text-sm font-normal text-gray-500">min</span></p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Cal / Min</p>
            <p className="text-2xl font-black text-gray-800">{caloriesPerMinute} <span className="text-sm font-normal text-gray-500">kcal</span></p>
          </div>
        </div>

        <div className="bg-blue-600 p-6 rounded-xl text-white shadow-lg">
          <p className="text-sm font-medium text-blue-100 mb-1">Total Calories Burned</p>
          <p className="text-5xl font-black mb-2">{totalCalories.toLocaleString()}</p>
          <div className="mt-4 pt-4 border-t border-blue-500 text-xs italic text-blue-200">
            Calculation: {duration} min &times; {caloriesPerMinute} kcal/min
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
          <p className="text-sm font-bold text-gray-600 mb-2">Formula:</p>
          <div className="flex items-center space-x-2 text-gray-700 font-mono text-sm bg-white p-2 rounded border border-gray-200">
            <span className="text-blue-600 font-bold">Total Calories</span>
            <span>=</span>
            <span>Duration</span>
            <span>&times;</span>
            <span>Calories Per Minute</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnSummary;
