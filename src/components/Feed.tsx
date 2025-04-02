
import React from 'react';
import { FeedItem } from '../data/mockData';
import WorkoutCard from './WorkoutCard';
import GoalTracker from './GoalTracker';
import { Heart, MessageCircle, Award } from 'lucide-react';

interface FeedProps {
  feedItems: FeedItem[];
}

const Feed = ({ feedItems }: FeedProps) => {
  return (
    <div className="space-y-6">
      {feedItems.map((item) => (
        <div key={item.id} className="fitness-card">
          <div className="flex items-center mb-3">
            <img 
              src={item.userAvatar} 
              alt={item.userName}
              className="h-10 w-10 rounded-full object-cover" 
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium">{item.userName}</h4>
              <p className="text-xs text-gray-500">{item.timestamp}</p>
            </div>
          </div>
          
          <p className="text-sm mb-4">{item.content}</p>
          
          {item.type === 'workout' && item.workout && (
            <div className="mb-4">
              <WorkoutCard workout={item.workout} compact={true} />
            </div>
          )}
          
          {item.type === 'goal' && item.goal && (
            <div className="mb-4">
              <GoalTracker goal={item.goal} compact={true} />
            </div>
          )}
          
          {item.type === 'achievement' && (
            <div className="bg-fitness-accent bg-opacity-10 p-3 rounded-md mb-4 flex items-center">
              <Award size={24} className="text-fitness-accent mr-2" />
              <span className="text-sm font-medium">Achievement Unlocked!</span>
            </div>
          )}
          
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <button className="flex items-center text-gray-500 hover:text-fitness-primary transition-colors">
                <Heart size={18} />
                <span className="ml-1 text-xs">{item.likes}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-fitness-secondary transition-colors">
                <MessageCircle size={18} />
                <span className="ml-1 text-xs">{item.comments}</span>
              </button>
            </div>
            <button className="text-xs text-fitness-secondary font-medium hover:underline">
              Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
