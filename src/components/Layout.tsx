
import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Get the current page title based on the route
  const getPageTitle = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/':
        return 'Home';
      case '/profile':
        return 'Profile';
      case '/workouts':
        return 'Workouts';
      case '/goals':
        return 'Goals';
      case '/connect':
        return 'Find Buddies';
      default:
        return 'Fitness Buddy';
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-fitness-secondary">{getPageTitle()}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
