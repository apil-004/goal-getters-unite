
import React from 'react';
import Layout from '../components/Layout';
import WorkoutCard from '../components/WorkoutCard';
import { mockWorkouts } from '../data/mockData';
import { Plus, Filter, Search } from 'lucide-react';

const Workouts = () => {
  return (
    <Layout>
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-fitness-secondary">My Workouts</h1>
          <p className="text-gray-500">Manage and track your workout routines</p>
        </div>
        <div className="mt-3 md:mt-0">
          <button className="fitness-button flex items-center">
            <Plus size={18} className="mr-1" />
            Add New Workout
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search workouts..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fitness-primary focus:border-fitness-primary"
          />
        </div>
        <div>
          <button className="w-full md:w-auto flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Workout Categories */}
      <div className="flex overflow-x-auto space-x-2 pb-4 mb-6">
        {['All', 'HIIT', 'Strength', 'Cardio', 'Yoga', 'Running', 'Cycling'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              category === 'All' 
                ? 'bg-fitness-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Workouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
        
        {/* Add a few more workouts to the grid */}
        {mockWorkouts.map((workout) => (
          <WorkoutCard 
            key={`${workout.id}-duplicate`} 
            workout={{
              ...workout,
              id: `${workout.id}-duplicate`,
              title: `${workout.title} 2`,
            }} 
          />
        ))}
      </div>
    </Layout>
  );
};

export default Workouts;
