// ✨ LUXURY GIFTING SECTION - Optimized version
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG, DESIGN_CONFIG } from '../config/siteContent';

const LuxuryGiftingSection = () => {
  const { luxuryGifting, colors } = SITE_CONFIG;
  const { animations, typography } = DESIGN_CONFIG;

  // Memoize floating shapes
  const floatingShapes = useMemo(() => (
    [...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          delay: i * 0.5
        }}
        style={{
          left: `${5 + i * 12}%`,
          top: `${10 + i * 10}%`,
          width: '40px',
          height: '40px',
          background: `linear-gradient(45deg, ${colors.primary}30, ${colors.cream}20)`,
          borderRadius: i % 2 === 0 ? '50%' : '20%'
        }}
      />
    ))
  ), [colors]);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.dark} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              {/* Title with Gradient Effect */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${typography.heading} mb-8 leading-tight`}
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.cream} 50%, ${colors.primary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {luxuryGifting.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${typography.body} mb-8 leading-relaxed`}
                style={{ color: colors.cream }}
              >
                {luxuryGifting.description}
              </motion.p>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`${DESIGN_CONFIG.glassMorphism.blur} ${DESIGN_CONFIG.glassMorphism.opacity} bg-white ${DESIGN_CONFIG.glassMorphism.border} rounded-2xl p-8`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="text-4xl font-serif leading-none"
                    style={{ color: colors.primary }}
                  >
                    "
                  </div>
                  <div>
                    <p className="text-lg italic mb-3" style={{ color: colors.cream }}>
                      Excellence in every detail, tradition in every gift
                    </p>
                    <div className="text-sm font-medium" style={{ color: colors.primary }}>
                      — Our Promise
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:order-2 relative"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30 transform scale-110"
                  style={{ backgroundColor: colors.primary }}
                />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={luxuryGifting.decorativeImage}
                    alt="Luxury Diwali Setup"
                    loading="lazy"
                    className="w-full h-96 object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(45deg, ${colors.secondary}40 0%, transparent 50%, ${colors.primary}20 100%)`
                    }}
                  />
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      boxShadow: `0 8px 20px ${colors.primary}50`
                    }}
                  >
                    <span className="text-2xl">🪔</span>
                  </motion.div>
                </div>

                {/* <div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-60"
                  style={{
                    background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`
                  }}
                /> */}
                {/* <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-40"
                  style={{
                    background: `radial-gradient(circle, ${colors.cream} 0%, transparent 70%)`
                  }}
                /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
          style={{ fill: colors.cream }}
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default LuxuryGiftingSection;
