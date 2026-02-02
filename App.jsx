import React, { useState, useCallback } from 'react';
import WorkoutForm from './components/WorkoutForm';
import BurnSummary from './components/BurnSummary';

const App = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [duration, setDuration] = useState(0);
  const [caloriesPerMinute, setCaloriesPerMinute] = useState(0);

  const handleClearLog = useCallback(() => {
    setExerciseName('');
    setDuration(0);
    setCaloriesPerMinute(0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Activity 2 - Workout Tracker
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Track your fitness progress effortlessly.
        </p>
      </header>

      <main className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <WorkoutForm 
            exerciseName={exerciseName}
            duration={duration}
            caloriesPerMinute={caloriesPerMinute}
            onExerciseChange={setExerciseName}
            onDurationChange={setDuration}
            onCaloriesChange={setCaloriesPerMinute}
            onClear={handleClearLog}
          />
          <BurnSummary 
            duration={duration}
            caloriesPerMinute={caloriesPerMinute}
          />
        </div>
      </main>

      <footer className="mt-auto py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Workout Tracker App
      </footer>
    </div>
  );
};

export default App;
