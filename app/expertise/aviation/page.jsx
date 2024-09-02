import React from 'react';
import Image from 'next/image';
import practiceAreas from '../../../practiceArea';

const PracticeAreaPage = () => {
  // Find the practice area based on the title
  const practiceArea = practiceAreas.find(
    (area) => area.title.replace(/ /g, '-').toLowerCase() === 'aviation'
  );

  if (!practiceArea) return <div>Practice Area not found</div>;

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-72 sm:h-96">
        <Image
          src={practiceArea.imageSrc}
          alt={practiceArea.title}
          layout="fill"
          objectFit="cover"
          className="h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">{practiceArea.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-5 py-10">
        {/* Introductory Text */}
        <div className="mt-8">
          {practiceArea.intro.map((paragraph, index) => (
            <p key={index} className="text-lg sm:text-xl text-gray-900 dark:text-gray-400 mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Expertise Text */}
        <div className="mt-8">
          {practiceArea.experience.map((paragraph, index) => (
            <p key={index} className="text-lg sm:text-xl text-gray-900 dark:text-gray-400 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaPage;
