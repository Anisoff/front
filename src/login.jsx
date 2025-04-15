import React from 'react';
import Google from './assets/google.png';
import { useNavigate } from 'react-router-dom';

function Login  () {


  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[400px] bg-[#e9dfdf] rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Log in</h2>

        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 mt-1 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
        />

        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 mt-1 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
        />

      
        <button 
          className="w-full bg-rose-500 text-white py-2 rounded-md font-semibold hover:bg-rose-800 transition duration-300"
        >
          Continue
        </button>

        <div className="text-center text-sm mt-3">
          Forgot your password?{' '}
          <a href="/email-ver" className="text-red-600 font-semibold hover:underline">
            Change Password
          </a>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex gap-3 mt-2">
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 bg-white hover:bg-gray-100 transition">
            <img
              src={Google}
              alt="google"
              className="w-5 h-5"
            />
            Google
          </button>
        </div>

        <div className="text-center mt-4 text-sm text-gray-600">
          Return to{' '}
        
          {' '}•{' '}
<a href="/" className="text-rose-500 font-semibold hover:underline">
  Home
</a>
        </div>
      </div>
    </div>
  );
};

export default Login;