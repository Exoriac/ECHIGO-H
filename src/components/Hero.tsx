import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Authentic Japanese home cooking, made with love
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience the true essence of Japanese cuisine
          </p>
          <a 
            href="#menu"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full
                     text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;