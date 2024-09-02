import HeroSection from '../components/hero/HeroSection'
import SharedValues from '../components/shared-values/SharedValue'
import AboutSection from '../components/who-we-are/AboutSection'
import React from 'react'
import OurExpertiseSection from '../components/our-expertise/OurExpertise.jsx'
import ParallaxSection from '../components/parallax/ParallaxSection'

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SharedValues />
      <ParallaxSection />
      <OurExpertiseSection />
    </div>
  )
}
