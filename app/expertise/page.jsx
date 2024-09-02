"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import practiceAreas from '../../practiceArea';
import AOS from 'aos';
import 'aos/dist/aos.css';

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ExpertisePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Banner Section with Background Image */}
      <div className="relative h-72 sm:h-96">
        <Image
          src="/assets/img/expertise-banner.png"
          alt="Expertise Banner"
          layout="fill"
          objectFit="cover"
          className="h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center" data-aos="fade-in">OUR EXPERTISE</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-5 py-10">
        {/* Introductory Text */}
        <div className="mt-8" data-aos="fade-left">
          <p className="text-lg sm:text-xl text-gray-900 dark:text-gray-400">
            We are a full-service law firm, providing comprehensive legal services to leading multinational and Nigerian
            companies, international and Nigerian financial institutions, international organizations, regulatory agencies
            and governments. Our core practice areas are Advocacy and Alternative Dispute Resolution, Banking and Finance,
            Communications, Project Finance, Capital Markets, Corporate Restructurings, Mergers & Acquisitions, Energy and
            Environment, Transport, Labour and Industrial Relations, and General Commercial Practice. The firm derives its
            recognition and reputation from the high level of expertise and commitment to excellence in our service delivery.
          </p>
        </div>

        {/* Practice Areas Section */}
        <section className="mt-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#01553d] mb-8" data-aos="fade-in">OUR Practice Areas</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
          >
            {practiceAreas.map((area, index) => (
              <motion.div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg" variants={childVariants}>
                <Link legacyBehavior href={`/expertise/${area.title.replace(/ /g, '-').toLowerCase()}`}>
                  <a>
                    <Image
                      src={area.imageSrc}
                      alt={area.title}
                      width={600}
                      height={400}
                      className="object-cover rounded-t-lg"
                    />
                  </a>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                  <Link legacyBehavior href={`/expertise/${area.title.replace(/ /g, '-').toLowerCase()}`}>
                    <a className="text-[#01553d] font-semibold hover:underline">See More</a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ExpertisePage;
