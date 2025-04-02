
import React from 'react';
import { User } from '../data/mockData';
import { Award, Users, CalendarIcon, ChevronRight } from 'lucide-react';

interface ProfileCardProps {
  user: User;
  expanded?: boolean;
}

const ProfileCard = ({ user, expanded = false }: ProfileCardProps) => {
  return (
    <div className="fitness-card">
      <div className="flex items-start">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.username}</p>
          
          {expanded && (
            <p className="text-sm text-gray-600 mt-2">{user.bio}</p>
          )}
          
          <div className="mt-3 flex items-center justify-between">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Users size={16} className="text-fitness-secondary" />
                <span className="ml-1 text-sm font-medium">{user.buddyCount}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="text-fitness-secondary" />
                <span className="ml-1 text-sm font-medium">{user.workoutCount}</span>
              </div>
              <div className="flex items-center">
                <Award size={16} className="text-fitness-secondary" />
                <span className="ml-1 text-sm font-medium">{user.progress}%</span>
              </div>
            </div>
            
            {!expanded && (
              <div>
                <ChevronRight size={20} className="text-fitness-gray-dark" />
              </div>
            )}
          </div>
          
          {expanded && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Goals:</h4>
              <div className="flex flex-wrap gap-2">
                {user.goals.map((goal, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-fitness-gray rounded-full text-xs font-medium text-fitness-secondary"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {expanded && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium">Overall Progress</span>
                <span className="text-xs font-medium">{user.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-fitness-primary h-2 rounded-full" 
                  style={{ width: `${user.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {expanded && (
        <div className="mt-4 flex justify-center">
          <button className="fitness-button-secondary w-full">
            <Users size={18} className="inline mr-2" />
            Become Fitness Buddies
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
