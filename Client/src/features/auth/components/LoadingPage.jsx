import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      
      <div className="flex flex-col items-center space-y-6">
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-white tracking-widest animate-pulse">
          Loading...
        </h1>

        {/* Dots animation */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></span>
        </div>

      </div>

    </div>
  );
};

export default LoadingPage;