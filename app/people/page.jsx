// components/TeamsPage.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../teamData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const TeamsPage = () => {
  const [filters, setFilters] = useState({
    name: '',
    practiceArea: '',
    position: ''
  });

  const filteredTeamMembers = teamMembers.filter(member => {
    return (
      (filters.name === '' || member.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.practiceArea === '' || member.practiceArea === filters.practiceArea) &&
      (filters.position === '' || member.position === filters.position)
    );
  });

  const uniquePracticeAreas = [...new Set(teamMembers.map(member => member.practiceArea))];
  const uniquePositions = [...new Set(teamMembers.map(member => member.position))];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-in">Meet Our Team</h2>

        <div className="flex flex-col items-center mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by name"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          />
          <select
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={filters.practiceArea}
            onChange={(e) => setFilters({ ...filters, practiceArea: e.target.value })}
          >
            <option value="">All Practice Areas</option>
            {uniquePracticeAreas.map((area, index) => (
              <option key={index} value={area}>{area}</option>
            ))}
          </select>
          <select
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={filters.position}
            onChange={(e) => setFilters({ ...filters, position: e.target.value })}
          >
            <option value="">All Positions</option>
            {uniquePositions.map((position, index) => (
              <option key={index} value={position}>{position}</option>
            ))}
          </select>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          {filteredTeamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col transition-transform duration-300 hover:scale-105"
              variants={imageVariants}
            >
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-full h-64 object-cover"
                data-aos="fade-up"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-500 mb-4">{member.practiceArea}</p>
                <div className="mt-auto flex space-x-4">
                  <a href={member.links.profile} className="text-blue-600 hover:underline">Profile</a>
                  <a href={member.links.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamsPage;
