import React from 'react';
import Image from 'next/image';  // Import Image from next/image
import OfficesImage from '../../assets/img/our-offices-image.png';

const offices = [
  {
    name: 'LAGOS OFFICE',
    address: [
      'PUC Tower',
      'Plot 999C, 7th floor, Danmole Street',
      'P O Box 71605',
      'Victoria Island, Lagos, Nigeria.',
    ],
    tel: '+234 (01) 2714842-5',
    email: 'info@paulusoro.com',
  },
  {
    name: 'ABUJA OFFICE',
    address: [
      'Abia House',
      'Central Business District',
      'Abuja, Nigeria.',
    ],
    tel: '+234 (09) 623 2182',
    email: 'info@paulusoro.com',
  },
  {
    name: 'UYO OFFICE',
    address: [
      '1st Floor, Left Wing',
      'APICO House, Abak Road',
      'P. O. Box 2212, Uyo, Akwa Ibom State, Nigeria.',
    ],
    tel: '+234 85 203690',
    email: 'info@paulusoro.com',
  },
];

const OfficeCard = ({ office }) => (
  <div className="bg-white p-4 shadow-lg rounded-lg m-4 w-full md:w-80">
    <h3 className="font-bold text-lg mb-2">{office.name}</h3>
    {office.address.map((line, index) => (
      <p key={index} className="text-sm mb-1">{line}</p>
    ))}
    <p className="text-sm">Tel: {office.tel}</p>
    <p className="text-sm">Email: {office.email}</p>
  </div>
);

const OurOfficesSection = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">Our Offices</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="md:flex-1">
            <Image 
              src={OfficesImage} 
              alt="Our Offices" 
              layout="responsive" 
              width={800} 
              height={600} 
              className="w-full h-auto" 
            />
          </div>
          <div className="md:flex-1">
            <p className="mt-8">
              PUC operates from strategically located offices across Nigeria, including a bustling head office in Lagos, the country&#39;s commercial hub. Our expanding presence extends to Abuja, the Federal Capital, and Uyo, nestled in the oil-rich Niger Delta.
            </p>
            <p className="mt-4">
              These offices strategically position us to cater to the diverse needs of our extensive client base across Nigeria&#39;s major business hubs. Additionally, we maintain correspondent and referral relationships with leading law firms worldwide, spanning Europe, the United States, Asia, and the Middle East.
            </p>
            <p className="mt-4">
              Since our inception, PUC has garnered a strong market presence by consistently enhancing our work product&#39;s quality and timely delivery. We prioritize nurturing existing client relationships while fostering new ones.
            </p>
            <p className="mt-4">
              With our extensive network of offices in Nigeria and global partnerships, PUC embraces a forward-looking approach. This allows us to provide unparalleled professional services tailored to both local and international businesses and organizations.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-center font-bold mt-16">Office Locations</h2>
      <div className="flex flex-wrap justify-center">
        {offices.map((office, index) => (
          <OfficeCard key={index} office={office} />
        ))}
      </div>
    </>
  );
};

export default OurOfficesSection;
