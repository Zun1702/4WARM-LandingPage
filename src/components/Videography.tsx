'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Image from 'next/image';

// Sample videography data
const videographyData = [
  {
    id: 1,
    title: "Wedding Highlight Reel",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "3:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
    description: "A beautiful wedding story capturing the love and joy of Sarah & John's special day."
  },
  {
    id: 2,
    title: "Corporate Brand Video",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    duration: "2:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
    description: "Professional corporate video showcasing innovation and team collaboration."
  },
  {
    id: 3,
    title: "Event Documentary",
    category: "Event",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "5:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
    description: "Dynamic coverage of a music festival capturing the energy and atmosphere."
  },
  {
    id: 4,
    title: "Product Showcase",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    duration: "1:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
    description: "Sleek product video highlighting key features and benefits."
  },
  {
    id: 5,
    title: "Travel Documentary",
    category: "Travel",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "4:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
    description: "Cinematic journey through breathtaking landscapes and cultures."
  },
  {
    id: 6,
    title: "Fashion Film",
    category: "Fashion",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    duration: "2:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
    description: "Artistic fashion film showcasing the latest collection with style and elegance."
  }
];

const Videography = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section id="videography" className="py-20 px-6 bg-white">
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
            Our <span className="gradient-text">Videography</span>
          </motion.h2>
          <motion.div 
            variants={staggerItem}
            className="w-20 h-1 bg-gradient-warm rounded-full mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-primary-charcoal/80 max-w-3xl mx-auto leading-relaxed"
          >
            Motion brings stories to life. Our videography captures not just moments, but emotions, 
            creating cinematic experiences that resonate long after the last frame.
          </motion.p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videographyData.map((video, index) => (
            <motion.div
              key={video.id}
              variants={staggerItem}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-gradient-warm/60 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                      <svg className="w-6 h-6 text-primary-charcoal ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-warm-red font-medium px-3 py-1 bg-warm-red/10 rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-charcoal mb-2 group-hover:gradient-text transition-all duration-300">
                    {video.title}
                  </h3>
                  <p className="text-primary-charcoal/70 text-sm leading-relaxed">
                    {video.description}
                  </p>
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
            <span className="relative z-10">View All Videos</span>
            <div className="absolute inset-0 bg-gradient-warm-reverse rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl max-h-[90vh] w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const video = videographyData.find(v => v.id === selectedVideo);
              if (!video) return null;
              
              return (
                <>
                  {/* Video Embed */}
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white text-primary-charcoal rounded-full flex items-center justify-center hover:bg-primary-gray transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Video Info */}
                  <div className="absolute -bottom-20 left-0 right-0 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                    <p className="text-white/80">{video.description}</p>
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

export default Videography;
