import React from 'react';
import { Settings, Edit, Star, MapPin } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header avec photo de profil */}
        <div className="relative h-32 bg-orange-500">
          <div className="absolute -bottom-16 left-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
                <Edit size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
          <button className="absolute top-4 right-4 text-white">
            <Settings size={24} />
          </button>
        </div>

        {/* Informations du profil */}
        <div className="pt-20 px-4 pb-4">
          <h1 className="text-2xl font-bold">Jean Dupont</h1>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <MapPin size={16} />
            <span>Paris, France</span>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 border-t border-b border-gray-200">
          <div className="p-4 text-center">
            <div className="font-semibold">12</div>
            <div className="text-sm text-gray-600">Tables proposées</div>
          </div>
          <div className="p-4 text-center border-l border-r border-gray-200">
            <div className="font-semibold">48</div>
            <div className="text-sm text-gray-600">Convives reçus</div>
          </div>
          <div className="p-4 text-center">
            <div className="font-semibold flex items-center justify-center gap-1">
              4.8 <Star size={16} className="text-yellow-400" />
            </div>
            <div className="text-sm text-gray-600">Note moyenne</div>
          </div>
        </div>

        {/* Mes propositions */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Mes propositions</h2>
          <div className="space-y-4">
            {/* Exemple de proposition */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Dîner gastronomique français</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Samedi 20 avril 2024 · 20h00
                  </p>
                  <p className="text-sm text-gray-600">6 places disponibles</p>
                </div>
                <button className="text-orange-500">
                  <Edit size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;