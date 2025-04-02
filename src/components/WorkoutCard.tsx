
import React from 'react';
import { Workout } from '../data/mockData';
import { Clock, Flame } from 'lucide-react';

interface WorkoutCardProps {
  workout: Workout;
  compact?: boolean;
}

const WorkoutCard = ({ workout, compact = false }: WorkoutCardProps) => {
  const IntensityBadge = ({ level }: { level: 'Low' | 'Medium' | 'High' }) => {
    const bgColor = 
      level === 'Low' ? 'bg-green-100 text-green-800' : 
      level === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
      'bg-red-100 text-red-800';
    
    return (
      <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${bgColor}`}>
        {level}
      </span>
    );
  };
  
  const Icon = workout.icon;

  return (
    <div className="fitness-card">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="bg-fitness-primary bg-opacity-10 p-2 rounded-md">
            <Icon size={compact ? 16 : 20} className="text-fitness-primary" />
          </div>
          <div className="ml-3">
            <h3 className={`${compact ? 'text-sm' : 'text-lg'} font-semibold`}>{workout.title}</h3>
            <p className="text-xs text-gray-500">{workout.type}</p>
          </div>
        </div>
        <IntensityBadge level={workout.intensity} />
      </div>
      
      {!compact && (
        <p className="text-sm text-gray-600 mt-3">{workout.description}</p>
      )}
      
      <div className={`flex ${compact ? 'mt-2' : 'mt-4'} justify-between items-center`}>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Clock size={16} className="text-fitness-gray-dark" />
            <span className="ml-1 text-xs">{workout.duration} min</span>
          </div>
          <div className="flex items-center">
            <Flame size={16} className="text-fitness-gray-dark" />
            <span className="ml-1 text-xs">{workout.calories} cal</span>
          </div>
        </div>
        
        {!compact && (
          <div className="flex items-center">
            <img src={workout.userAvatar} alt={workout.userName} className="h-6 w-6 rounded-full" />
            <span className="ml-2 text-xs text-gray-500">{workout.userName}</span>
          </div>
        )}
      </div>
      
      {!compact && (
        <div className="mt-4 flex justify-center">
          <button className="fitness-button w-full">
            Start Workout
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;
