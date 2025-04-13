import React from 'react';
import { BarChart2 } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="flex items-center mb-6 text-lg font-semibold">
        <span className="mr-2 p-1.5 bg-pink-100 rounded-md text-pink-500">
          <BarChart2 size={16} />
        </span>
        Analytics
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="text-center py-8">
          <div className="mx-auto bg-pink-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
            <BarChart2 className="text-pink-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            View and analyze performance metrics across all your business areas with customizable reports.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;