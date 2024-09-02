'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const expertiseAreas = [
  {
    imgSrc: "/assets/img/adr.jpg",
    title: "ADR and Advocacy",
    link: "/expertise/area1"
  },
  {
    imgSrc: "/assets/img/road.jpg",
    title: "Transportation Law",
    link: "/expertise/area2"
  },
  {
    imgSrc: "/assets/img/banking.jpg",
    title: "Banking & Finance",
    link: "/expertise/area3"
  },
  {
    imgSrc: "/assets/img/capital.jpg",
    title: "Capital Market Law",
    link: "/expertise/area4"
  },
  {
    imgSrc: "/assets/img/comms.jpg",
    title: "Communication Law",
    link: "/expertise/area5"
  },
  {
    imgSrc: "/assets/img/energy.jpg",
    title: "Energy & Environmental Law",
    link: "/expertise/area6"
  }
];

const OurExpertiseSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-12">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 sm:mb-0 text-center sm:text-left">
                        Discover Our Expertise
                    </h2>
                    <a href="/expertise" className="bg-black text-white py-2 px-6 sm:px-8 text-sm sm:text-base rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        See All
                    </a>
                </div>
                {isLoading ? (
                    <div className="flex flex-wrap justify-center gap-4">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                                <Skeleton height={200} />
                                <Skeleton width={200} height={24} className="mt-4" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="relative">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next'
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {expertiseAreas.map((expertise, index) => (
                                <SwiperSlide key={index}>
                                    <div className="rounded overflow-hidden shadow-lg bg-white">
                                        <Image
                                            src={expertise.imgSrc}
                                            alt={`Expertise Area ${index + 1}`}
                                            width={500}
                                            height={300}
                                            layout="responsive"
                                            objectFit="cover"
                                            className="w-full h-auto rounded-xl"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{expertise.title}</div>
                                            <a href={expertise.link} className="text-blue-500 hover:underline">Learn more</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurExpertiseSection;
