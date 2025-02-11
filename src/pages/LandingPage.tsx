import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { SignInForm, SignUpForm } from '../components/AuthForms';

const LandingPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="flex-1 bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <div className="flex items-center space-x-2 mb-8">
            <ChefHat size={40} className="text-orange-500" />
            <h1 className="text-4xl font-bold text-white">Eat'in</h1>
          </div>
          <p className="text-xl text-white text-center mb-12">
            Découvrez des repas uniques chez des particuliers passionnés
          </p>
          
          <div className="w-full max-w-md">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex mb-6">
                <button
                  onClick={() => setShowSignIn(true)}
                  className={`flex-1 py-2 text-center ${
                    showSignIn ? 'text-orange-500 border-b-2 border-orange-500' : 'text-white'
                  }`}
                >
                  Connexion
                </button>
                <button
                  onClick={() => setShowSignIn(false)}
                  className={`flex-1 py-2 text-center ${
                    !showSignIn ? 'text-orange-500 border-b-2 border-orange-500' : 'text-white'
                  }`}
                >
                  Inscription
                </button>
              </div>
              
              {showSignIn ? <SignInForm /> : <SignUpForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;