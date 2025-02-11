import React from 'react';
import { Search } from 'lucide-react';

const MessagesPage = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Barre de recherche */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Rechercher une conversation..."
          className="w-full pl-10 pr-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      {/* Liste des conversations */}
      <div className="space-y-2">
        {/* Conversation active */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Sophie Martin"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Sophie Martin</h3>
                <span className="text-sm text-gray-500">14:30</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                Parfait ! Je serai là à l'heure convenue...
              </p>
            </div>
          </div>
        </div>

        {/* Conversation normale */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Pierre Dubois"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Pierre Dubois</h3>
                <span className="text-sm text-gray-500">Hier</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                Merci pour cette soirée, c'était délicieux !
              </p>
            </div>
          </div>
        </div>

        {/* Conversation avec notification */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Marie Bernard"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Marie Bernard</h3>
                <span className="text-sm text-gray-500">Lun</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                Est-ce que la table est toujours disponible ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;