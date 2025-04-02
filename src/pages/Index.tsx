
import React from 'react';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import WorkoutCard from '../components/WorkoutCard';
import GoalTracker from '../components/GoalTracker';
import { mockFeed, mockWorkouts, mockGoals } from '../data/mockData';
import { Plus } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-fitness-secondary">Activity Feed</h2>
            <button className="fitness-button flex items-center">
              <Plus size={18} className="mr-1" />
              <span>Post Update</span>
            </button>
          </div>
          <Feed feedItems={mockFeed} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Workouts */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-fitness-secondary">Recent Workouts</h2>
              <a href="/workouts" className="text-sm text-fitness-primary font-medium hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {mockWorkouts.slice(0, 2).map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} compact />
              ))}
            </div>
          </div>

          {/* Active Goals */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-fitness-secondary">Active Goals</h2>
              <a href="/goals" className="text-sm text-fitness-primary font-medium hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {mockGoals.slice(0, 2).map((goal) => (
                <GoalTracker key={goal.id} goal={goal} compact />
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="fitness-card">
            <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="fitness-button w-full flex justify-center items-center">
                <Plus size={18} className="mr-2" />
                New Workout
              </button>
              <button className="fitness-button-secondary w-full">Set New Goal</button>
              <button className="bg-fitness-gray text-fitness-secondary rounded-md px-4 py-2 font-medium hover:bg-gray-200 transition-colors duration-300 w-full">
                Find Buddies
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
