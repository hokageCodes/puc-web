"use client"
import React, { useState, ReactNode } from 'react';
import AboutFirm from '../../components/about-the-firm/AboutFirm';
import TimelineSection from '../../components/timeline-section/Timeline';
import OurOfficesSection from '../../components/our-offices/OurOffices';

const tabData = [
    {
        label: 'Our Firm',
        content: <AboutFirm />,
    },
    {
        label: 'Our History',
        content: <TimelineSection />,
    },
    {
        label: 'Locations',
        content: <OurOfficesSection />,
    },
];

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState(tabData[0].label);

    const handleTabClick = (label) => {
        setActiveTab(label);
    };

    return (
        <div className="w-full mt-16">
            <div className="flex text-2xl justify-around items-center bg-[#01553d] py-3 shadow-md">
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(tab.label)}
                        className={`w-full py-2 transition-colors duration-300 ease-in-out cursor-pointer
                            ${activeTab === tab.label ? 'text-white' : 'text-gray-400 hover:text-black'}
                            text-base sm:text-lg md:text-xl lg:text-xl flex justify-center items-center whitespace-nowrap`}
                        >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {tabData.find(tab => tab.label === activeTab)?.content}
            </div>
        </div>
    );
}