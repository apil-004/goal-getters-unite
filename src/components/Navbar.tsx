
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, User, CalendarIcon, Award, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { mockUser } from '../data/mockData';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Dumbbell size={20} />, label: 'Home', path: '/' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <CalendarIcon size={20} />, label: 'Workouts', path: '/workouts' },
    { icon: <Award size={20} />, label: 'Goals', path: '/goals' },
    { icon: <Users size={20} />, label: 'Connect', path: '/connect' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-fitness-primary" />
              <span className="ml-2 text-xl font-bold text-fitness-secondary">FitnessBuddy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-fitness-primary text-white'
                    : 'text-gray-700 hover:bg-fitness-primary-light hover:text-white'
                }`}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-4 flex items-center">
              <div className="flex items-center">
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name}
                  className="h-8 w-8 rounded-full object-cover" 
                />
                <span className="ml-2 text-sm font-medium text-gray-700">{mockUser.name}</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-fitness-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-fitness-primary text-white'
                    : 'text-gray-700 hover:bg-fitness-primary-light hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <div className="flex items-center px-3 py-2">
              <img 
                src={mockUser.avatar} 
                alt={mockUser.name}
                className="h-8 w-8 rounded-full object-cover" 
              />
              <span className="ml-2 font-medium text-gray-700">{mockUser.name}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
