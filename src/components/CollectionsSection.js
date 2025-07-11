// 🛍️ COLLECTIONS SECTION - Product showcase with elegant grid
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG, DESIGN_CONFIG } from '../config/siteContent';

const CollectionsSection = () => {
  const { collections, colors } = SITE_CONFIG;
  const { typography } = DESIGN_CONFIG;

  return (
    <section 
      id="collections-section"
      className="relative py-24"
      style={{
        background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`
      }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: colors.primary }}
        />
        <div 
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-5"
          style={{ backgroundColor: colors.secondary }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
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
              {collections.title}
            </h2>
            <p 
              className={`${typography.body} max-w-2xl mx-auto`}
              style={{ color: colors.dark }}
            >
              {collections.subtitle}
            </p>
            <div 
              className="w-24 h-1 mx-auto mt-6 rounded-full"
              style={{ backgroundColor: colors.primary }}
            />
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                {/* Product Card */}
                <div 
                  className={`${DESIGN_CONFIG.glassMorphism.blur} ${DESIGN_CONFIG.glassMorphism.opacity} bg-white ${DESIGN_CONFIG.glassMorphism.border} rounded-3xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl`}
                  style={{
                    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream}50 100%)`,
                    boxShadow: `0 10px 30px ${colors.secondary}15`
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Image Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 
                      className={`${typography.subheading} mb-3 group-hover:text-opacity-90 transition-all duration-300`}
                      style={{ color: colors.secondary }}
                    >
                      {product.title}
                    </h3>
                    
                    <p 
                      className={`${typography.body} mb-4 leading-relaxed`}
                      style={{ color: colors.dark }}
                    >
                      {product.description}
                    </p>

                    </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    className="h-1"
                    style={{ backgroundColor: colors.primary }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
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
                boxShadow: `0 15px 35px ${colors.secondary}30`
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2"
              style={{
                backgroundColor: 'transparent',
                color: colors.secondary,
                borderColor: colors.secondary
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.secondary;
                e.target.style.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.secondary;
              }}
            >
              View Complete Catalog
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;