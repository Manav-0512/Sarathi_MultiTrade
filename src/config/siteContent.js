// 🎯 EASY EDIT CONFIG FILE
// Edit this file to change content, images, colors, and text throughout the website
// No need to dig into complex React components - just edit values here!
// import compressedImage from '../assets/compressed.png';
export const SITE_CONFIG = {
  // 🎨 COLOR THEME - Change these hex codes to modify the entire site's color scheme
  colors: {
    primary: '#FFD700',        // Gold - main accent color
    secondary: '#800020',      // Maroon - secondary accent
    cream: '#F5F5DC',         // Cream - background tones
    dark: '#1a1a1a',          // Dark text
    white: '#ffffff',         // Pure white
    lightGold: '#FFF8DC',     // Light gold for backgrounds
  },

  // 🏠 HERO SECTION - Main banner content
  hero: {
    title: "Premium Diwali",
    subtitle: "Gift Hampers",
    description: "Illuminate your celebrations with our exquisitely curated Diwali gift collections",
    backgroundImage: "https://images.unsplash.com/photo-1666638787411-c5c8ef25d229",
    ctaText: "Explore Collections",
  },

  // 🎠 3D CAROUSEL SECTION - The centerpiece with rotating images
  carousel: {
    sectionTitle: "Signature Collections",
    items: [
      {
        id: 1,
        image: "/assets/img1.png",
        title: "Royal Heritage",
        backgroundText: "PREMIUM",
        description: "Handcrafted elegance meets traditional festivities"
      },
      {
        id: 2,
        image: "/assets/img4.png",
        title: "Corporate Elite",
        backgroundText: "LUXURY",
        description: "Professional gifting with sophisticated presentation"
      },
      {
        id: 3,
        image: "/assets/img9.png",
        title: "Golden Traditions",
        backgroundText: "EXCLUSIVE",
        description: "Time-honored traditions in contemporary packaging"
      },
      {
        id: 4,
        image: "/assets/img13.png",
        title: "Artisan Select",
        backgroundText: "CURATED",
        description: "Meticulously selected premium offerings"
      }
    ]
  },

  // 💎 LUXURY GIFTING SECTION - Main value proposition
  luxuryGifting: {
    title: "Redefining Luxury Gifting",
    description: "We curate extraordinary Diwali experiences through meticulously crafted gift collections. Each hamper represents our unwavering commitment to excellence, seamlessly blending timeless traditions with contemporary sophistication to create moments that resonate long after the celebration ends.",
    decorativeImage: "/assets/img14.png"
  },

  // ⭐ DIFFERENTIATORS - Key unique selling points
  differentiators: {
    title: "What Sets Us Apart",
    features: [
      {
        icon: "🌿", // You can replace with actual SVG later
        title: "Sustainable Luxury",
        description: "Eco-conscious packaging that reflects your commitment to the environment"
      },
      {
        icon: "👑",
        title: "Curated Excellence", 
        description: "Each item meticulously selected by our expert team for premium quality"
      },
      {
        icon: "🎨",
        title: "Bespoke Branding",
        description: "Personalized presentation with your corporate identity seamlessly integrated"
      }
    ]
  },

  // 🛍️ SIGNATURE COLLECTIONS - Product showcase
  collections: {
    title: "Our Signature Collections",
    subtitle: "Carefully curated hampers for every occasion",
    products: [
      // Row 1
      {
        id: 1,
        image: "/assets/img6.png",
        title: "Family Celebration",
        description: "Perfect hampers designed for memorable family moments"
      },
      {
        id: 2,
        image: "/assets/img4.png",
        title: "Artisan Delights",
        description: "Handpicked artisanal treats and decorative items for refined tastes"
      },
      {
        id: 3,
        image: "/assets/img5.png",
        title: "Corporate Elegance",
        description: "Professional presentation perfect for business relationships"
      },
      // Row 2
      {
        id: 4,
        image: "/assets/img1.png",
        title: "Premium Heritage",
        description: "Luxurious selection celebrating India's rich festival traditions"
      },
      {
        id: 5,
        image: "/assets/img7.png",
        title: "Divine Illumination",
        description: "Beautiful diyas and candles to light up the festivities"
      },
      {
        id: 6,
        image: "/assets/img9.png",
        title: "Personalized Hamper",
        description: "Get the Customized Hamper as per your requirement"
      }
    ]
  },

  // 📞 CONTACT SECTION - Get in touch information
  contact: {
    title: "Connect With Us",
    subtitle: "Ready to create memorable Diwali experiences?",
    name: "Manav Purswani",
    phone: "+91 9664959340",
    email: "sarathimultitrade@gmail.com", // You can add this if needed
    backgroundImage: "https://images.pexels.com/photos/7686118/pexels-photo-7686118.jpeg"
  },

  // 🎯 GENERAL SETTINGS
  settings: {
    siteName: "Premium Diwali Hampers",
    tagline: "Curating Excellence Since Tradition",
    animationDuration: 0.6, // Animation speed in seconds
    scrollOffset: 100, // Scroll trigger offset in pixels
  }
};

// 🎨 ADVANCED STYLING CONFIG - For more technical customizations
export const DESIGN_CONFIG = {
  // Glass-morphism effect settings
  glassMorphism: {
    blur: 'backdrop-blur-md',
    opacity: 'bg-opacity-20',
    border: 'border border-white border-opacity-20'
  },
  
  // Animation presets
  animations: {
    fadeUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  // Typography scale
  typography: {
    hero: 'text-6xl md:text-8xl font-bold',
    heading: 'text-4xl md:text-5xl font-semibold',
    subheading: 'text-2xl md:text-3xl font-medium',
    body: 'text-lg leading-relaxed',
    caption: 'text-sm text-opacity-80'
  }
};
