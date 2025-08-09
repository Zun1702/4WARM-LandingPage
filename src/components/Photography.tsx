'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Image from 'next/image';

// Real photography data using local images
const photographyData = [
  {
    id: 1,
    title: "Creative Portrait",
    category: "Portrait",
    image: "/images/photography/photo1.jpg"
  },
  {
    id: 2,
    title: "Natural Moment",
    category: "Lifestyle",
    image: "/images/photography/photo2.jpg"
  },
  {
    id: 3,
    title: "Artistic Vision",
    category: "Art",
    image: "/images/photography/photo3.jpg"
  },
  {
    id: 4,
    title: "Professional Session",
    category: "Portrait",
    image: "/images/photography/photo4.jpg"
  },
  {
    id: 5,
    title: "Creative Composition",
    category: "Art",
    image: "/images/photography/photo5.jpg"
  },
  {
    id: 6,
    title: "Captured Essence",
    category: "Lifestyle",
    image: "/images/photography/photo6.jpg"
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

        {/* Photo Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {photographyData.map((photo) => (
            <motion.div
              key={photo.id}
              variants={staggerItem}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo.id)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:scale-[1.03] transform-gpu">
                {/* Square aspect ratio container */}
                <div className="relative aspect-square">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75 ${
                      photo.id === 1 ? 'object-[26%_center]' : 
                      photo.id === 5 ? 'object-[47%_top]' : 'object-center'
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Top Info Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/90 backdrop-blur-sm text-primary-charcoal px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {photo.category}
                    </div>
                  </div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2 leading-tight">{photo.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-warm-yellow rounded-full"></div>
                        <span className="text-white/90 text-sm font-medium">Professional Photography</span>
                      </div>
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
          <button className="group relative px-8 py-4 bg-gradient-warm text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-warm-red/30 overflow-hidden">
            <span className="relative z-10">View All Photography</span>
            <div className="absolute inset-0 bg-gradient-warm-reverse rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="text-primary-charcoal/60 text-sm mt-4 max-w-md mx-auto">
            Ready to capture your special moments? Let&apos;s create something beautiful together.
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const photo = photographyData.find(p => p.id === selectedImage);
              if (!photo) return null;
              
              return (
                <>
                  <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl max-w-4xl max-h-[85vh] mx-auto">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={1200}
                      height={800}
                      className="w-full h-full object-contain"
                      style={{ maxWidth: '100%', maxHeight: '85vh' }}
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

                  {/* Photo Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{photo.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-warm-yellow/20 text-warm-yellow font-semibold rounded-full text-sm border border-warm-yellow/30">
                            {photo.category}
                          </span>
                          <div className="flex items-center space-x-2 text-white/70">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs font-medium">Photography</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
