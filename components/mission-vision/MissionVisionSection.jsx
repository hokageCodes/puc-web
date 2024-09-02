// src/components/VisionMission.js

import React from 'react';

const VisionMission = () => {
  return (
    <section className="relative py-16 mt-24 bg-[#01553d] overflow-hidden">
      <div className="absolute inset-0 bg-opacity-25 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white mb-6">Our Vision & Mission</h2>
          <p className="text-lg text-gray-200">Explore our commitment to innovation and impact.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div className="bg-white p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to inspire and empower individuals through innovative solutions that drive meaningful change. We envision a future where our technology contributes to a sustainable and equitable world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver exceptional solutions that address todays challenges and anticipate tomorrows needs. We are dedicated to quality, creativity, and integrity in all our endeavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
