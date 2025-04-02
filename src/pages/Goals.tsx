
import React from 'react';
import Layout from '../components/Layout';
import GoalTracker from '../components/GoalTracker';
import { mockGoals } from '../data/mockData';
import { Plus, Filter, CheckCircle } from 'lucide-react';

const Goals = () => {
  return (
    <Layout>
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-fitness-secondary">My Goals</h1>
          <p className="text-gray-500">Track and achieve your fitness goals</p>
        </div>
        <div className="mt-3 md:mt-0">
          <button className="fitness-button flex items-center">
            <Plus size={18} className="mr-1" />
            Create New Goal
          </button>
        </div>
      </div>

      {/* Goal Status Filter */}
      <div className="mb-6 flex overflow-x-auto space-x-3 pb-2">
        <button className="px-4 py-2 bg-fitness-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
          All Goals
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200">
          In Progress
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 flex items-center">
          <CheckCircle size={16} className="mr-1" />
          Completed
        </button>
      </div>

      {/* Goals Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="fitness-card flex flex-col items-center justify-center p-4">
          <p className="text-2xl font-bold text-fitness-secondary">{mockGoals.length}</p>
          <p className="text-sm text-gray-500">Total Goals</p>
        </div>
        <div className="fitness-card flex flex-col items-center justify-center p-4">
          <p className="text-2xl font-bold text-fitness-primary">
            {mockGoals.filter(g => !g.completed).length}
          </p>
          <p className="text-sm text-gray-500">In Progress</p>
        </div>
        <div className="fitness-card flex flex-col items-center justify-center p-4">
          <p className="text-2xl font-bold text-green-500">
            {mockGoals.filter(g => g.completed).length}
          </p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
        <div className="fitness-card flex flex-col items-center justify-center p-4">
          <p className="text-2xl font-bold text-fitness-accent">65%</p>
          <p className="text-sm text-gray-500">Success Rate</p>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGoals.map((goal) => (
          <GoalTracker key={goal.id} goal={goal} />
        ))}
        
        {/* Add a completed goal for demonstration */}
        <GoalTracker 
          goal={{
            ...mockGoals[0],
            id: 'completed-goal',
            title: '10K Steps Daily',
            current: 10000,
            target: 10000,
            completed: true
          }} 
        />
      </div>
    </Layout>
  );
};

export default Goals;
