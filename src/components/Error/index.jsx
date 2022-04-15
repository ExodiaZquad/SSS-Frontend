import React from 'react';

const Error = ({ header, tagline }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-32 ">
      <div className="text-7xl text-red-600">{header}</div>

      <div className="text-2xl text-center mt-4 text-red-500">{tagline}</div>
    </div>
  );
};

export default Error;
