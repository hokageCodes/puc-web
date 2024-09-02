'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ParallaxSection = () => {
    return (
        <motion.div
            className="parallax-section relative h-[400px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="parallax-content text-white text-3xl font-bold text-center">
                {/* Optional content goes here */}
            </div>
        </motion.div>
    );
};

export default ParallaxSection;
