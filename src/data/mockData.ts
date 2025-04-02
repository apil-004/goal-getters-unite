
import { 
  Dumbbell, 
  Trophy, 
  Heart, 
  Weight, 
  Activity, 
  Timer, 
  CalendarIcon 
} from "lucide-react";

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  goals: string[];
  buddyCount: number;
  workoutCount: number;
  progress: number;
}

export interface Workout {
  id: string;
  title: string;
  type: string;
  icon: any;
  duration: number;
  calories: number;
  intensity: 'Low' | 'Medium' | 'High';
  description: string;
  userId: string;
  userName: string;
  userAvatar: string;
  date: string;
}

export interface Goal {
  id: string;
  title: string;
  category: string;
  icon: any;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  completed: boolean;
}

export interface FeedItem {
  id: string;
  type: 'workout' | 'achievement' | 'goal';
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  workout?: Workout;
  goal?: Goal;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    username: '@alexfit',
    avatar: '/placeholder.svg',
    bio: 'Fitness enthusiast. Marathon runner. Love HIIT workouts!',
    goals: ['Improve endurance', 'Build muscle', 'Run a marathon'],
    buddyCount: 47,
    workoutCount: 128,
    progress: 75
  },
  {
    id: '2',
    name: 'Sarah Williams',
    username: '@sarahfitness',
    avatar: '/placeholder.svg',
    bio: 'Yoga instructor and weightlifting enthusiast.',
    goals: ['Master handstand', 'Increase flexibility', '100kg deadlift'],
    buddyCount: 89,
    workoutCount: 203,
    progress: 60
  },
  {
    id: '3',
    name: 'Mike Chen',
    username: '@mikefit',
    avatar: '/placeholder.svg',
    bio: 'Calisthenics and bodyweight training specialist.',
    goals: ['Muscle up', '100 pushups', 'One-arm pullup'],
    buddyCount: 62,
    workoutCount: 157,
    progress: 82
  },
  {
    id: '4',
    name: 'Emily Roberts',
    username: '@emilyactive',
    avatar: '/placeholder.svg',
    bio: 'Trail runner and outdoor fitness lover.',
    goals: ['Trail ultra-marathon', 'Improve hill climbs', 'Better recovery'],
    buddyCount: 35,
    workoutCount: 95,
    progress: 68
  },
];

export const mockWorkouts: Workout[] = [
  {
    id: '1',
    title: 'Morning HIIT Session',
    type: 'HIIT',
    icon: Timer,
    duration: 30,
    calories: 320,
    intensity: 'High',
    description: 'Quick morning HIIT session with focus on core and legs. 30 seconds on, 15 seconds rest.',
    userId: '1',
    userName: 'Alex Johnson',
    userAvatar: '/placeholder.svg',
    date: '2023-07-15'
  },
  {
    id: '2',
    title: 'Strength Training',
    type: 'Strength',
    icon: Dumbbell,
    duration: 60,
    calories: 450,
    intensity: 'Medium',
    description: 'Full body strength training with focus on compound movements.',
    userId: '2',
    userName: 'Sarah Williams',
    userAvatar: '/placeholder.svg',
    date: '2023-07-14'
  },
  {
    id: '3',
    title: 'Yoga Flow',
    type: 'Yoga',
    icon: Activity,
    duration: 45,
    calories: 180,
    intensity: 'Low',
    description: 'Vinyasa flow focusing on flexibility and mindfulness.',
    userId: '3',
    userName: 'Mike Chen',
    userAvatar: '/placeholder.svg',
    date: '2023-07-13'
  },
  {
    id: '4',
    title: 'Trail Run',
    type: 'Cardio',
    icon: Activity,
    duration: 75,
    calories: 650,
    intensity: 'High',
    description: 'Trail run in the hills with elevation gain.',
    userId: '4',
    userName: 'Emily Roberts',
    userAvatar: '/placeholder.svg',
    date: '2023-07-12'
  },
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Run a Marathon',
    category: 'Cardio',
    icon: Activity,
    target: 42.2,
    current: 32.0,
    unit: 'km',
    deadline: '2023-12-20',
    completed: false
  },
  {
    id: '2',
    title: 'Deadlift PR',
    category: 'Strength',
    icon: Weight,
    target: 150,
    current: 135,
    unit: 'kg',
    deadline: '2023-09-15',
    completed: false
  },
  {
    id: '3',
    title: 'Complete 30 Workouts',
    category: 'Consistency',
    icon: CalendarIcon,
    target: 30,
    current: 22,
    unit: 'workouts',
    deadline: '2023-08-01',
    completed: false
  },
  {
    id: '4',
    title: 'Lose Weight',
    category: 'Weight',
    icon: Weight,
    target: 10,
    current: 7,
    unit: 'kg',
    deadline: '2023-10-15',
    completed: false
  },
];

export const mockFeed: FeedItem[] = [
  {
    id: '1',
    type: 'workout',
    userId: '1',
    userName: 'Alex Johnson',
    userAvatar: '/placeholder.svg',
    content: 'Just crushed my morning HIIT session!',
    timestamp: '2 hours ago',
    likes: 15,
    comments: 3,
    workout: mockWorkouts[0]
  },
  {
    id: '2',
    type: 'achievement',
    userId: '2',
    userName: 'Sarah Williams',
    userAvatar: '/placeholder.svg',
    content: 'Just set a new personal record on deadlift! 140kg!',
    timestamp: '5 hours ago',
    likes: 32,
    comments: 8
  },
  {
    id: '3',
    type: 'goal',
    userId: '3',
    userName: 'Mike Chen',
    userAvatar: '/placeholder.svg',
    content: 'New goal set: Achieve muscle-up in 30 days',
    timestamp: '1 day ago',
    likes: 12,
    comments: 2,
    goal: {
      id: '5',
      title: 'Muscle-up',
      category: 'Strength',
      icon: Dumbbell,
      target: 1,
      current: 0,
      unit: 'rep',
      deadline: '2023-08-15',
      completed: false
    }
  },
  {
    id: '4',
    type: 'workout',
    userId: '4',
    userName: 'Emily Roberts',
    userAvatar: '/placeholder.svg',
    content: 'Amazing trail run today with great elevation gain!',
    timestamp: '2 days ago',
    likes: 24,
    comments: 5,
    workout: mockWorkouts[3]
  }
];

export const mockUser: User = mockUsers[0];
