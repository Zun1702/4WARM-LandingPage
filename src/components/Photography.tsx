'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, staggerItem, imageReveal } from '@/lib/animations';
import Image from 'next/image';

// Sample photography data - will be replaced with real images
const photographyData = [
  {
    id: 1,
    title: "Wedding Portrait",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    aspectRatio: "portrait"
  },
  {
    id: 2,
    title: "Nature Landscape",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    aspectRatio: "landscape"
  },
  {
    id: 3,
    title: "Corporate Event",
    category: "Event",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    aspectRatio: "square"
  },
  {
    id: 4,
    title: "Family Session",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    aspectRatio: "portrait"
  },
  {
    id: 5,
    title: "Artistic Shot",
    category: "Art",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    aspectRatio: "landscape"
  },
  {
    id: 6,
    title: "Street Photography",
    category: "Street",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    aspectRatio: "square"
  }
];

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="photography" className="py-20 px-6 bg-primary-gray">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={staggerItem}
            className="text-4xl lg:text-5xl font-bold text-primary-charcoal mb-6"
          >
            Our <span className="gradient-text">Photography</span>
          </motion.h2>
          <motion.div 
            variants={staggerItem}
            className="w-20 h-1 bg-gradient-warm rounded-full mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-primary-charcoal/80 max-w-3xl mx-auto leading-relaxed"
          >
            Every photograph tells a story. From intimate moments to grand celebrations, 
            we capture the essence of your special occasions with artistic vision and technical excellence.
          </motion.p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {photographyData.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={staggerItem}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(photo.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className={`relative ${
                  photo.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                  photo.aspectRatio === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'
                }`}>
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                      <span className="text-sm text-white/80 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 bg-gradient-warm text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-warm-red/30">
            <span className="relative z-10">View All Photography</span>
            <div className="absolute inset-0 bg-gradient-warm-reverse rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const photo = photographyData.find(p => p.id === selectedImage);
              if (!photo) return null;
              
              return (
                <>
                  <div className="relative w-full h-full">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={1200}
                      height={800}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white text-primary-charcoal rounded-full flex items-center justify-center hover:bg-primary-gray transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Photo Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
                    <span className="text-warm-yellow font-medium">{photo.category}</span>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Photography;
