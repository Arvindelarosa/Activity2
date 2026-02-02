import React from 'react';

const WorkoutForm = ({
  exerciseName,
  duration,
  caloriesPerMinute,
  onExerciseChange,
  onDurationChange,
  onCaloriesChange,
  onClear
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-blue-100 p-2 rounded-lg mr-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </span>
        Log Exercise
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="exerciseName" className="block text-sm font-semibold text-gray-700 mb-1">
            Exercise Name
          </label>
          <input
            type="text"
            id="exerciseName"
            value={exerciseName}
            onChange={(e) => onExerciseChange(e.target.value)}
            placeholder="e.g. Running"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-1">
            Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            value={duration || ''}
            onChange={(e) => onDurationChange(Number(e.target.value))}
            placeholder="0"
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="caloriesPerMinute" className="block text-sm font-semibold text-gray-700 mb-1">
            Calories Per Minute
          </label>
          <input
            type="number"
            id="caloriesPerMinute"
            value={caloriesPerMinute || ''}
            onChange={(e) => onCaloriesChange(Number(e.target.value))}
            placeholder="0"
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="pt-4">
          <button
            onClick={onClear}
            className="w-full bg-red-50 text-red-600 font-bold py-3 px-4 rounded-lg border-2 border-red-100 hover:bg-red-100 active:bg-red-200 transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Clear Log</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutForm;
