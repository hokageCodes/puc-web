"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SharedValues() {
  const values = [
    {
      title: "TEAMWORK",
      description: "Fostering collaboration, mutual respect, and shared success within our dynamic and innovative law firm.",
    },
    {
      title: "INTEGRITY",
      description: "Integrity is fundamental. It guides our ethical conduct, actions, and commitment to transparency within our law firm.",
    },
    {
      title: "MASTERY",
      description: "Mastery is paramount, driving our pursuit of excellence, continuous learning, and expertise in delivering exceptional legal services and counsel.",
    },
    {
      title: "EXCELLENCE",
      description: "Excellence defines us, inspiring our relentless pursuit of quality, innovation, and client satisfaction in every aspect of our practice.",
    },
    {
      title: "ENTREPRENEURIAL ORIENTATION",
      description: "By embracing entrepreneurial spirit, we foster a culture of innovation, risk-taking, and initiative, empowering our team to pioneer new solutions and drive transformative change in the legal industry.",
    }
  ];

  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="mt-12 container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-[#01553d]">Our Shared Values</h2>
      <p className="mb-12 text-lg text-gray-500">Here are a few of the core values that define our firm.</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          {values.slice(0, 2).map((value, index) => (
            <motion.div
              key={index}
              className="w-full mb-10 sm:mb-0 sm:w-1/2 card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#01553d] rounded-xl"></span>
                <div className="relative h-full p-5 bg-white border-2 border-[#01553d] rounded-xl">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="mb-2 text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          {values.slice(2).map((value, index) => (
            <motion.div
              key={index + 2}
              className="w-full mb-10 sm:mb-0 sm:w-1/2 card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.3 }}
            >
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#01553d] rounded-xl"></span>
                <div className="relative h-full p-5 bg-white border-2 border-[#01553d] rounded-xl">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="mb-2 text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
