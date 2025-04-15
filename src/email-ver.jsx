import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const emailver = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[400px] bg-[#e9dfdf] rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Verification</h2>

        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 mt-1 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
        />

    
        <button 
          className="w-full bg-rose-500 text-white py-2 rounded-md font-semibold hover:bg-rose-800 transition duration-300"
        >
          <Link to="/ver-code">Continue</Link>
        </button>
      </div>
    </div>
  );
};

export default emailver;