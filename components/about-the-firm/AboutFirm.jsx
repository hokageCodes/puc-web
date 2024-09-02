"use client";
import { Suspense, lazy, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';

// const TimelineSection = lazy(() => import('../../components/timeline/TimelineSection'));
// const CoreValuesSection = lazy(() => import('../../components/core-values/CoreValues'));

function AboutFirm() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const imageSources = [
    '/assets/img/law1.jpeg',
    '/assets/img/law2.jpg',
    '/assets/img/law3.jpg',
    '/assets/img/law4.jpeg',
    '/assets/img/law3.jpg',
    '/assets/img/law4.jpeg',
  ];

  return (
    <>
      <section id='history' className="container mx-auto flex flex-wrap gap-24 items-center justify-center py-12 px-4 lg:px-0">
        <div className="flex-1 max-w-md text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-5xl max-w-xs font-bold mb-4">Becoming the Foremost in Africa</h2>
          <hr className="border-t-4 border-[#01553d] w-full lg:w-2/4 mb-8" />
          <p className="mb-8 text-xl">
            Paul Usoro & Co. (PUC) is a leading full-service law firm, providing top-notch legal services to both local and international clients.
          </p>
          <p className="mb-8 text-xl">We hold our clients in high esteem, providing them with sound legal advice and innovative business solutions. Strategically located in <em>Lagos</em>, <em>Abuja</em>, and <em>Uyo</em>, PUC has developed a reputation for solving complex legal and commercial issues across borders.</p>
          <p className="mb-8 text-xl">In furtherance of our drive to deliver first-in-class services to our clients, our team of lawyers—well versed in existing and emerging areas of law, current global trends, regulatory and operational frameworks for businesses—are ready to be deployed for the attainment of our clients&#34; goals.</p>
          <button className="bg-white text-[#01553d] font-bold border border-[#01553d] border-2 py-4 px-4 rounded-xl">
            <a href="/contact-form">CONTACT US</a>
          </button>
        </div>
        <div className="flex-1 max-w-xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="mb-4">
                <Skeleton className="object-cover rounded-lg shadow-lg w-full h-48 md:h-64" />
              </div>
            ))
          ) : (
            imageSources.map((src, index) => (
              <div key={index} className="mb-4">
                <Image
                  className="object-cover rounded-xl shadow-lg w-full h-48 md:h-64"
                  src={src}
                  alt={`Gallery ${index}`}
                  layout="responsive"
                  width={300}
                  height={300}
                  quality={75}
                />
              </div>
            ))
          )}
        </div>
      </section>
      {/* <Suspense fallback={<Skeleton height={300} />}>
        <TimelineSection />
      </Suspense>
      <Suspense fallback={<Skeleton height={300} />}>
        <CoreValuesSection />
      </Suspense> */}
    </>
  );
}

export default AboutFirm;