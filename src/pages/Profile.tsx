
import React from 'react';
import Layout from '../components/Layout';
import WorkoutCard from '../components/WorkoutCard';
import GoalTracker from '../components/GoalTracker';
import { mockUser, mockWorkouts, mockGoals } from '../data/mockData';
import { Edit, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Profile Info */}
          <div className="fitness-card mb-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name}
                  className="h-20 w-20 rounded-full object-cover" 
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{mockUser.name}</h3>
                  <p className="text-sm text-gray-500">{mockUser.username}</p>
                </div>
              </div>
              <button className="text-fitness-secondary hover:text-fitness-secondary-light transition-colors">
                <Edit size={20} />
              </button>
            </div>
            
            <p className="mt-4 text-sm">{mockUser.bio}</p>
            
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-fitness-gray rounded-md">
                <p className="text-xl font-bold text-fitness-primary">{mockUser.buddyCount}</p>
                <p className="text-xs text-gray-500">Buddies</p>
              </div>
              <div className="p-3 bg-fitness-gray rounded-md">
                <p className="text-xl font-bold text-fitness-primary">{mockUser.workoutCount}</p>
                <p className="text-xs text-gray-500">Workouts</p>
              </div>
              <div className="p-3 bg-fitness-gray rounded-md">
                <p className="text-xl font-bold text-fitness-primary">{mockUser.progress}%</p>
                <p className="text-xs text-gray-500">Progress</p>
              </div>
            </div>
            
            <div className="mt-5">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-medium">{mockUser.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-fitness-primary h-2.5 rounded-full" 
                  style={{ width: `${mockUser.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Recent Workouts */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-fitness-secondary">Recent Workouts</h3>
              <a href="/workouts" className="text-sm text-fitness-primary font-medium hover:underline">
                View All
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockWorkouts.slice(0, 2).map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          </div>
          
          {/* Active Goals */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-fitness-secondary">Active Goals</h3>
              <a href="/goals" className="text-sm text-fitness-primary font-medium hover:underline">
                View All
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockGoals.slice(0, 2).map((goal) => (
                <GoalTracker key={goal.id} goal={goal} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Actions */}
          <div className="fitness-card">
            <h3 className="text-lg font-semibold mb-3">Profile Actions</h3>
            <div className="space-y-2">
              <button className="fitness-button w-full">Edit Profile</button>
              <button className="fitness-button-secondary w-full">Find Buddies</button>
              <button className="bg-fitness-gray text-fitness-secondary rounded-md px-4 py-2 font-medium hover:bg-gray-200 transition-colors duration-300 w-full flex items-center justify-center">
                <Settings size={18} className="mr-2" />
                Settings
              </button>
            </div>
          </div>
          
          {/* My Goals */}
          <div className="fitness-card">
            <h3 className="text-lg font-semibold mb-3">My Goals</h3>
            <div className="space-y-2">
              {mockUser.goals.map((goal, index) => (
                <div 
                  key={index} 
                  className="bg-fitness-gray rounded-md px-3 py-2 text-sm"
                >
                  {goal}
                </div>
              ))}
            </div>
            <button className="mt-3 text-sm text-fitness-primary font-medium hover:underline w-full text-center">
              Add New Goal
            </button>
          </div>
          
          {/* Achievement Stats */}
          <div className="fitness-card">
            <h3 className="text-lg font-semibold mb-3">Achievements</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-fitness-accent bg-opacity-10 rounded-md p-3 text-center">
                <p className="text-xl font-bold text-fitness-accent">12</p>
                <p className="text-xs">Total</p>
              </div>
              <div className="bg-fitness-primary bg-opacity-10 rounded-md p-3 text-center">
                <p className="text-xl font-bold text-fitness-primary">3</p>
                <p className="text-xs">This Month</p>
              </div>
            </div>
            <button className="mt-3 text-sm text-fitness-primary font-medium hover:underline w-full text-center">
              View All Achievements
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
