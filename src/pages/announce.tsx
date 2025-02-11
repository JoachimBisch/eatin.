import React, { useState } from 'react';
import { Search, MapPin, Clock, Star } from 'lucide-react';

interface Experience {
    id: string;
    title: string;
    description: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
    image: string;
  }
  
const experiences: Experience[] = [
  {
    id: '1',
    title: 'Cours de Cuisine Française',
    description: 'Apprenez à cuisiner des plats français authentiques avec un chef expérimenté.',
    location: 'Paris, France',
    duration: '3 heures',
    price: 85,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Dégustation de Vins',
    description: 'Découvrez les meilleurs vins de Bordeaux avec un sommelier professionnel.',
    location: 'Bordeaux, France',
    duration: '2 heures',
    price: 65,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Tour en Vélo Vintage',
    description: 'Explorez la ville sur des vélos vintage avec un guide local passionné.',
    location: 'Lyon, France',
    duration: '4 heures',
    price: 45,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=800&q=80'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Expériences Uniques</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une expérience..."
                className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{experience.title}</h2>
                  <span className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{experience.rating}</span>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{experience.location}</span>
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{experience.price}€</span>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;