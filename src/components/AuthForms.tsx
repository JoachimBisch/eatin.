import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success('Connexion réussie !');
    } catch (error) {
      toast.error('Erreur de connexion');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white/10 text-white placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white/10 text-white placeholder-gray-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
      >
        Se connecter
      </button>
    </form>
  );
}

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password, username);
      toast.success('Inscription réussie ! Vérifiez vos emails.');
    } catch (error) {
      toast.error('Erreur lors de l\'inscription');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-white">
          Nom d'utilisateur
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white/10 text-white placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white/10 text-white placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white/10 text-white placeholder-gray-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-white text-orange-500 py-2 px-4 rounded-lg hover:bg-gray-100 transition"
      >
        S'inscrire
      </button>
    </form>
  );
}