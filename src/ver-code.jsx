import React, { useState, useEffect } from 'react';

function Vercode  ()  {
  const [password, setPassword] = useState('');
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0); // Start with 30 seconds

  const resendOTP = () => {
    setSeconds(0); // Reset to 30 seconds
    setMinutes(2);
    // Add your OTP resend logic here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  const formatTime = () => {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[500px] bg-[#e9dfdf] rounded-2xl shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4">Enter the verification code</h2>

        {/* Password Input with Timer */}
        <div className="relative mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300 pr-16"
          />
          <div className="absolute right-3 top-9 text-sm text-gray-500 font-medium">
            {formatTime()}
          </div>
        </div>

        <div className="text-sm my-4">
          Code not received?{' '}
          <button 
            onClick={resendOTP}
            disabled={seconds > 0 || minutes > 0}
            className={`text-rose-500 font-semibold hover:underline ${
              (seconds > 0 || minutes > 0) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Resend OTP
          </button>
        </div>

        <button className="w-full bg-rose-500 text-white py-2 rounded-md font-semibold hover:bg-rose-800 transition duration-300">
          Continue
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Maybe later?{' '}
          <a href="/" className="text-rose-500 font-semibold hover:underline">
            Back to home page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vercode;