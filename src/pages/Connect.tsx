
import React from 'react';
import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import { mockUsers } from '../data/mockData';
import { Search, Filter, MapPin } from 'lucide-react';

const Connect = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-fitness-secondary">Find Fitness Buddies</h1>
        <p className="text-gray-500">Connect with others who share your fitness goals</p>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative col-span-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, goals, or location..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fitness-primary focus:border-fitness-primary"
          />
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            Filter
          </button>
          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <MapPin size={18} className="mr-2" />
            Nearby
          </button>
        </div>
      </div>

      {/* Interest Tags */}
      <div className="flex overflow-x-auto space-x-2 pb-4 mb-6">
        {['All', 'Running', 'Weightlifting', 'Yoga', 'HIIT', 'Swimming', 'Cycling', 'Calisthenics'].map((interest) => (
          <button
            key={interest}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              interest === 'All' 
                ? 'bg-fitness-secondary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {interest}
          </button>
        ))}
      </div>

      {/* Featured Buddies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-fitness-secondary mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUsers.slice(0, 3).map((user) => (
            <ProfileCard key={user.id} user={user} />
          ))}
        </div>
      </div>

      {/* Browse All */}
      <div>
        <h2 className="text-xl font-semibold text-fitness-secondary mb-4">Browse All</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockUsers.map((user) => (
            <ProfileCard key={user.id} user={user} />
          ))}
        </div>
      </div>

      {/* Featured Profile */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-fitness-secondary mb-4">Featured Profile</h2>
        <ProfileCard user={mockUsers[1]} expanded={true} />
      </div>
    </Layout>
  );
};

export default Connect;
