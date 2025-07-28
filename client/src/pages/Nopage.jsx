import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nopage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#B9FF66] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-[#B9FF66]/20 to-[#9AFF33]/20 rounded-full blur-3xl animate-pulse"
        style={{
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          transition: 'all 0.3s ease-out'
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          {/* Glitchy 404 Effect */}
          <div className="relative">
            <h1
              className={`text-9xl font-extrabold text-transparent drop-shadow-2xl transition-all duration-300 ${
                glitchActive ? 'animate-pulse' : ''
              }`}
              style={{
                WebkitTextStroke: '3px #B9FF66',
                textShadow: glitchActive 
                  ? '2px 0 #ff0000, -2px 0 #00ff00, 0 2px #0000ff' 
                  : '0 0 20px rgba(185, 255, 102, 0.5)'
              }}
            >
              404
            </h1>
            
            {/* Glitch overlay */}
            {glitchActive && (
              <>
                <h1
                  className="absolute inset-0 text-9xl font-extrabold text-red-500 opacity-50 animate-pulse"
                  style={{ transform: 'translate(2px, 0)' }}
                >
                  404
                </h1>
                <h1
                  className="absolute inset-0 text-9xl font-extrabold text-green-500 opacity-50 animate-pulse"
                  style={{ transform: 'translate(-2px, 0)' }}
                >
                  404
                </h1>
              </>
            )}
          </div>

          {/* Floating Title */}
          <h2 className="text-4xl font-bold mt-8 text-white animate-bounce">
            Oops! Page Not Found
          </h2>
          
          {/* Animated Subtitle */}
          <p className="mt-4 text-xl text-gray-200 max-w-md mx-auto leading-relaxed">
            Looks like you've ventured into the digital void. 
            <span className="block mt-2 text-[#B9FF66] animate-pulse">
              Don't worry, even astronauts get lost sometimes!
            </span>
          </p>

          {/* Interactive Buttons */}
          <div className="mt-12 space-y-4">
            <Link
              to="/"
              className="group relative inline-block px-8 py-4 bg-gradient-to-r from-[#B9FF66] to-[#9AFF33] text-black font-bold rounded-full shadow-2xl hover:shadow-[#B9FF66]/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Go Back Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9AFF33] to-[#B9FF66] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <div className="mt-6">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                ← Go Back
              </button>
            </div>
          </div>

          {/* Fun Floating Icons */}
          <div className="mt-16 flex justify-center space-x-8">
            {['●', '◆', '■', '▲', '★'].map((symbol, index) => (
              <div
                key={index}
                className="text-3xl text-[#B9FF66] animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {symbol}
              </div>
            ))}
          </div>

          {/* Easter Egg */}
          <div className="mt-8 text-sm text-gray-400 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <p>Tip: Try clicking around for hidden surprises!</p>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 text-6xl text-[#B9FF66] animate-spin" style={{ animationDuration: '20s' }}>
        ●
      </div>
      <div className="absolute top-10 right-10 text-6xl text-[#B9FF66] animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
        ◆
      </div>
      <div className="absolute bottom-10 left-10 text-6xl text-[#B9FF66] animate-bounce">
        ■
      </div>
      <div className="absolute bottom-10 right-10 text-6xl text-[#B9FF66] animate-pulse">
        ▲
      </div>
    </div>
  );
};

export default Nopage;
