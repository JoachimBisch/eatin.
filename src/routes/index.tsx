import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import MessagesPage from '../pages/MessagesPage';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={user ? <Navigate to="/home" /> : <LandingPage />} 
      />
      <Route 
        path="/home" 
        element={user ? <HomePage /> : <Navigate to="/" />} 
      />
      <Route 
        path="/profile" 
        element={user ? <ProfilePage /> : <Navigate to="/" />} 
      />
      <Route 
        path="/messages" 
        element={user ? <MessagesPage /> : <Navigate to="/" />} 
      />
    </Routes>
  );
};

export default AppRoutes;