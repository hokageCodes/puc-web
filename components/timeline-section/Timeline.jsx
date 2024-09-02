"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import MissionVision from '../mission-vision/MissionVisionSection'
import SharedValues from '../shared-values/SharedValue';

function TimelineSection() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <Swiper
          className='mb-24'
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {[
            { year: '1990 ', event: 'PUC was founded in Kaduna, Nigeria, to provide comprehensive legal services, including litigation and transactions.' },
            { year: '1993', event: 'Recognizing Lagos as Nigerias commercial hub, PUC moved its head office to Lagos Island while keeping the Kaduna office as a branch.' },
            { year: '1997', event: 'The head office is strategically located in Victoria Island, serving clients in sectors such as Banking, Oil and Gas, Communications, and Maritime.' },
            { year: '2004', event: 'PUC expanded its network with branch offices in Abuja and Uyo, enhancing its capacity to serve diverse clients across Nigeria.' },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4">
                <div className="mb-2">
                  <div className="inline-block border-t-4 border-[#01553d] w-24 mb-2"></div>
                </div>
                <div className="text-2xl font-black mb-2">{item.year}</div>
                <p className="text-gray-900"><b>{item.event}</b></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SharedValues />
      <MissionVision />
    </div>
  );
}

export default TimelineSection;