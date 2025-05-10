import React from 'react';
import { Link } from 'react-router-dom';

const Nopage = () => {
  return (
    <div className="mb-50 flex items-center justify-center bg-gradient-to-br  text-gray-800 px-4">
      <div className="text-center">
        <h1
          className="text-8xl bg-[#191A23] font-extrabold text-transparent drop-shadow-md"
          style={{
            WebkitTextStroke: '2px #B9FF66'
          }}
        >
          404
        </h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#B9FF66] text-black border-b-4 border-1 font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Nopage;
