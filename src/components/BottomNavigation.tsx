import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, MessageCircle } from 'lucide-react';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => navigate('/home')}
          className={`flex flex-col items-center space-y-1 ${
            isActive('/home') ? 'text-orange-500' : 'text-gray-600'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Accueil</span>
        </button>
        
        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center space-y-1 ${
            isActive('/profile') ? 'text-orange-500' : 'text-gray-600'
          }`}
        >
          <User size={24} />
          <span className="text-xs">Profil</span>
        </button>

        <button
          onClick={() => navigate('/messages')}
          className={`flex flex-col items-center space-y-1 ${
            isActive('/messages') ? 'text-orange-500' : 'text-gray-600'
          }`}
        >
          <MessageCircle size={24} />
          <span className="text-xs">Messages</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;