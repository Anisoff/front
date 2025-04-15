import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';






const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[400px] bg-[#e9dfdf] rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Create account</h2>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">First name</label>
            <input
              placeholder='Enter your first name'
              type="text"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              placeholder='Enter your last name'
              type="text"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"

            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            placeholder='Enter your email'

            type="email"
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            placeholder='Enter your password'

            type="password"
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
          />
        </div>

       

        <button 
          className="w-full bg-rose-500 text-white py-2 rounded-md font-semibold hover:bg-rose-800 transition duration-300 mb-4"
        >
          <a href="/ver-code" className="text-rose-500 font-semibold hover:underline">Continue</a>
        </button>

        <div className="text-center text-sm text-gray-600 mb-4">
          Already have an account? <a href="/login" className="text-rose-500 font-semibold hover:underline">Log in</a>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex gap-3 mt-2 mb-4">
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 bg-white hover:bg-gray-100 transition">
            
            Facebook
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 bg-white hover:bg-gray-100 transition">
           
            Google
          </button>
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          Return to{' '}
          <a href="/" className="text-rose-500 font-semibold hover:underline">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;