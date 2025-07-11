// 🎠 3D CAROUSEL SECTION - Optimized version
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, DESIGN_CONFIG } from '../config/siteContent';

const CarouselSection = () => {
  const { carousel, colors } = SITE_CONFIG;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carousel.items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, carousel.items.length]);

  const nextSlide = useCallback(() => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % carousel.items.length);
  }, [carousel.items.length]);

  const prevSlide = useCallback(() => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + carousel.items.length) % carousel.items.length);
  }, [carousel.items.length]);

  const currentItem = carousel.items[currentIndex];

  return (
    <section
      id="carousel-section"
      className="relative py-24 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 50%, ${colors.cream} 100%)`
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.primary} 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className={`${DESIGN_CONFIG.typography.heading} mb-4`}
            style={{ color: colors.secondary }}
          >
            {carousel.sectionTitle}
          </h2>
          
          <span
            className="text-4xl font-black tracking-wider d-block lg:d-none"
            style={{
              color: colors.secondary,
              fontFamily: 'Arial Black, sans-serif',
              opacity: '0.1'
            }}
          >
            {currentItem.backgroundText}
          </span>
        </motion.div>

        {/* container size */}
        <div className="relative h-[500px] md:h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.backgroundText}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <span
                className="text-9xl md:text-[12rem] font-black tracking-wider d-none lg:d-block"
                style={{
                  color: colors.secondary,
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                {currentItem.backgroundText}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* card size */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative z-20 w-100 h-96 md:w-120 md:h-[30rem]"
              // className="relative z-20 w-100 h-96 md:w-120 md:h-[30rem] mobile-carousel-card"

            >
              {/* === corners === */}
              <div
                className={`w-full h-full rounded-3xl shadow-2xl overflow-hidden ${DESIGN_CONFIG.glassMorphism.border}`}
                style={{
                  background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`,
                  boxShadow: `0 25px 50px ${colors.secondary}30, 0 0 0 1px ${colors.primary}40`
                }}
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                    className="w-full h-full object-cover rounded-3xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 rounded-3xl">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 rounded-3xl carousel-text-overlay"> */}

                  <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.white }}>
                    {currentItem.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90" style={{ color: colors.cream }}>
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prevSlide} className="absolute left-4 md:left-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`, boxShadow: `0 8px 20px ${colors.secondary}40` }}>
          {/* <button onClick={prevSlide} className="absolute right-4 md:right-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 carousel-arrow"> */}

            <svg className="w-6 h-6 md:w-8 md:h-8" fill={colors.white} viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute right-4 md:right-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`, boxShadow: `0 8px 20px ${colors.secondary}40` }}>
            <svg className="w-6 h-6 md:w-8 md:h-8" fill={colors.white} viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {carousel.items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'scale-125' : 'opacity-50 hover:opacity-75'}`}
              style={{ backgroundColor: index === currentIndex ? colors.primary : colors.secondary }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
