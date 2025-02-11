import React, { useState } from 'react';
import { Search, PlusCircle, MapPin } from 'lucide-react';
import Announce from './announce.tsx';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'propose'>('search');

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
        <button
          onClick={() => setActiveTab('search')}
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${
            activeTab === 'search'
              ? 'bg-white text-orange-500 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          Rechercher
        </button>
        <button
          onClick={() => setActiveTab('propose')}
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${
            activeTab === 'propose'
              ? 'bg-white text-orange-500 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          Proposer
        </button>
      </div>

      {activeTab === 'search' ? (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Rechercher une table</h2>
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Où ?"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <select className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option>2 personnes</option>
                  <option>4 personnes</option>
                  <option>6 personnes</option>
                  <option>8+ personnes</option>
                </select>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                Rechercher
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Quelques annonces</h2>
            <Announce />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Tables à proximité</h2>
            <div className="space-y-4">
              {/* Placeholder pour la carte */}
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                Carte interactive
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Proposer une table</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type d'événement
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Dîner</option>
                <option>Apéro</option>
                <option>Repas sur le pouce</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Votre adresse"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de places
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                rows={4}
                placeholder="Décrivez votre proposition..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Publier
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;