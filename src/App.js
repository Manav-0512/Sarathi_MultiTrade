// 🎭 PREMIUM DIWALI HAMPERS WEBSITE - Optimized App.js
import React, { memo } from 'react';
import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import LuxuryGiftingSection from './components/LuxuryGiftingSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import CollectionsSection from './components/CollectionsSection';
import ContactSection from './components/ContactSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <CarouselSection />
      <LuxuryGiftingSection />
      <DifferentiatorsSection />
      <CollectionsSection />
      <ContactSection />
    </div>
  );
};

export default memo(App);
