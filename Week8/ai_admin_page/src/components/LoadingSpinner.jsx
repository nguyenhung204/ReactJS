import React from 'react';

const LoadingSpinner = ({ size = "medium" }) => {
  const sizeClass = {
    small: "h-4 w-4 border-2",
    medium: "h-8 w-8 border-2",
    large: "h-12 w-12 border-3"
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className={`${sizeClass[size]} animate-spin rounded-full border-b-transparent border-pink-500`}></div>
    </div>
  );
};

export default LoadingSpinner;