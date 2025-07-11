// 🏆 DIFFERENTIATORS SECTION - Unique selling points with premium cards
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG, DESIGN_CONFIG } from '../config/siteContent';

const DifferentiatorsSection = () => {
  const { differentiators, colors } = SITE_CONFIG;
  const { typography } = DESIGN_CONFIG;

  return (
    <section 
      className="relative py-24"
      style={{
        background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 50%, ${colors.cream} 100%)`
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, ${colors.primary} 1px, transparent 1px), linear-gradient(-45deg, ${colors.primary} 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className={`${typography.heading} mb-4`}
              style={{ color: colors.secondary }}
            >
              {differentiators.title}
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: colors.primary }}
            />
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                {/* Feature Card */}
                <div 
                  className={`${DESIGN_CONFIG.glassMorphism.blur} ${DESIGN_CONFIG.glassMorphism.opacity} bg-white ${DESIGN_CONFIG.glassMorphism.border} rounded-3xl p-8 h-full transition-all duration-300 group-hover:shadow-xl`}
                  style={{
                    boxShadow: `0 10px 30px ${colors.secondary}10`,
                    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream}50 100%)`
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      boxShadow: `0 8px 20px ${colors.primary}30`
                    }}
                  >
                    <span className="text-3xl text-white">
                      {feature.icon}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <h3 
                    className={`${typography.subheading} mb-4 group-hover:text-opacity-90 transition-all duration-300`}
                    style={{ color: colors.secondary }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className={`${typography.body} leading-relaxed`}
                    style={{ color: colors.dark }}
                  >
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                    className="h-1 rounded-full mt-6"
                    style={{ backgroundColor: colors.primary }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 15px 35px ${colors.secondary}40`
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                color: colors.white,
                border: `2px solid ${colors.primary}`
              }}
              onClick={() => {
                document.getElementById('collections-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Explore Our Collections
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;