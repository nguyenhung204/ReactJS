import React from 'react';
import { Users } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const Teams = () => {
  return (
    <div className="p-6">
      <Breadcrumb />
      
      <h2 className="flex items-center mb-6 text-lg font-semibold">
        <span className="mr-2 p-1.5 bg-pink-100 rounded-md text-pink-500">
          <Users size={16} />
        </span>
        Teams
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="text-center py-8">
          <div className="mx-auto bg-pink-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
            <Users className="text-pink-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Team Management</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Manage your teams, assign members to projects, and track team performance metrics.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
            Create Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;