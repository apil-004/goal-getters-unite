
import React from 'react';
import { Goal } from '../data/mockData';
import { Calendar, CheckCircle } from 'lucide-react';

interface GoalTrackerProps {
  goal: Goal;
  compact?: boolean;
}

const GoalTracker = ({ goal, compact = false }: GoalTrackerProps) => {
  const Icon = goal.icon;
  const progress = Math.min(Math.round((goal.current / goal.target) * 100), 100);
  const formattedDeadline = new Date(goal.deadline).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="fitness-card">
      <div className="flex items-start">
        <div className="bg-fitness-secondary bg-opacity-10 p-2 rounded-md">
          <Icon size={compact ? 16 : 20} className="text-fitness-secondary" />
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between">
            <h3 className={`${compact ? 'text-sm' : 'text-lg'} font-semibold`}>{goal.title}</h3>
            {goal.completed && <CheckCircle size={18} className="text-fitness-primary" />}
          </div>
          <p className="text-xs text-gray-500">{goal.category}</p>
          
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">
                {goal.current} / {goal.target} {goal.unit}
              </span>
              <span className="text-xs font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-fitness-secondary h-2 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {!compact && (
            <div className="mt-3 flex items-center">
              <Calendar size={14} className="text-fitness-gray-dark" />
              <span className="ml-1 text-xs text-gray-500">Deadline: {formattedDeadline}</span>
            </div>
          )}
        </div>
      </div>
      
      {!compact && !goal.completed && (
        <div className="mt-4 flex justify-center">
          <button className="fitness-button w-full">
            Update Progress
          </button>
        </div>
      )}
      
      {!compact && goal.completed && (
        <div className="mt-4 flex justify-center">
          <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 font-medium w-full flex items-center justify-center cursor-default">
            <CheckCircle size={18} className="mr-2" />
            Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalTracker;
