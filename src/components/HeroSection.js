// 🏠 HERO SECTION - Premium Diwali banner with festive decorations
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG, DESIGN_CONFIG } from '../config/siteContent';

const HeroSection = () => {
  const { hero, colors } = SITE_CONFIG;
  const { animations, typography } = DESIGN_CONFIG;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.dark}88 0%, ${colors.secondary}88 50%, ${colors.primary}22 100%), url(${hero.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Diya Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-60"
            style={{ backgroundColor: colors.primary }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      {/* Glass-morphism Overlay */}
      <div className={`absolute inset-0 ${DESIGN_CONFIG.glassMorphism.blur} ${DESIGN_CONFIG.glassMorphism.opacity} bg-black`} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 
            className={`${typography.hero} mb-4 tracking-tight`}
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.cream} 50%, ${colors.primary} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          >
            {hero.title}
          </h1>
          <h2 
            className={`${typography.hero} mb-6`}
            style={{ 
              background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.primary} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {hero.subtitle}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`${typography.body} mb-12 max-w-3xl mx-auto`}
          style={{ color: colors.cream }}
        >
          {hero.description}
        </motion.p>

        {/* CTA Button with Hover Effects */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: `0 20px 40px ${colors.primary}40`
          }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform"
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            color: colors.white,
            border: `2px solid ${colors.primary}`,
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
          onClick={() => {
            // Smooth scroll to carousel section
            document.getElementById('carousel-section')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          {hero.ctaText}
        </motion.button>

        {/* Decorative Rangoli Pattern */}
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 0.3, rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 pointer-events-none"
        >
          <div 
            className="w-full h-full rounded-full border-4 opacity-30"
            style={{ 
              borderColor: colors.primary,
              background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: colors.cream }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: colors.primary }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;