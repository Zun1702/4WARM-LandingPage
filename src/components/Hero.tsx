'use client';

import { motion } from 'framer-motion';
import { heroTitle, heroSubtitle, heroCTA } from '@/lib/animations';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Professional floating elements */}
        <motion.div 
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-white/8 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{
            y: [0, -25, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute top-40 right-32 w-96 h-96 bg-warm-pink/15 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-warm-brown/12 rounded-full blur-2xl"
        />
        
        {/* Sophisticated gradient orbs */}
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-warm-yellow/20 to-warm-pink/20 rounded-full blur-lg"
        />
        <motion.div 
          animate={{
            rotate: [0, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-warm-pink/15 to-warm-brown/15 rounded-full blur-md"
        />
        
        {/* Additional modern elements */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-10 w-64 h-64 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
          className="absolute top-20 right-10 w-48 h-48 bg-warm-red/8 rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20">
        {/* Main Heading with improved typography */}
        <motion.div
          variants={heroTitle}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-none">
            <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              4WARM
            </span>
          </h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div
          variants={heroSubtitle}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 font-light leading-relaxed">
            Capturing your warmest moments in
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Photography & Videography
            </span>
          </p>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Professional visual storytelling that brings your precious memories to life with artistic excellence and emotional depth.
          </p>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={heroCTA}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          {/* Primary CTA */}
          <button className="group relative px-8 py-4 bg-white text-primary-charcoal font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 min-w-[200px]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Our Work
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-warm rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          {/* Secondary CTA */}
          <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-4 focus:ring-white/20 min-w-[200px] backdrop-blur-sm">
            <span className="flex items-center justify-center gap-2">
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: [0.25, 0.46, 0.45, 0.94],
              repeatType: "mirror"
            }}
            className="flex flex-col items-center group hover:scale-110 transition-all duration-500 filter drop-shadow-lg"
          >
            {/* Modern scroll indicator */}
            <div className="relative">
              <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/70 transition-all duration-300 shadow-lg">
                <motion.div
                  animate={{ y: [2, 10, 2] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    repeatType: "mirror"
                  }}
                  className="w-1.5 h-3 bg-white/70 rounded-full mt-2.5 group-hover:bg-white/90 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/5 blur-md group-hover:bg-white/10 transition-all duration-300"></div>
            </div>
            
            {/* Professional text hint with enhanced smooth animation */}
            <motion.span 
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.6, 0.85, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.15,
                repeatType: "mirror"
              }}
              className="text-white/60 text-sm font-medium group-hover:text-white/90 transition-all duration-500 mt-4 tracking-widest uppercase"
            >
              DISCOVER MORE
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlay for professional transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/30 via-white/10 to-transparent"></div>
      
      {/* Subtle grid pattern overlay for modern touch */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
    </section>
  );
};

export default Hero;
