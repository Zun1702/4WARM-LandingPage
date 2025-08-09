'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Image from 'next/image';

// Local videography data - Updated with specific content
const videographyData = [
  {
    id: 1,
    title: "Summer Photoshoot: Metro Fashion",
    category: "Commercial",
    thumbnail: "/images/videography/video1.mp4",
    duration: "0:16",
    videoUrl: "/images/videography/video1.mp4",
    description: "Go behind the scenes with us as we bring our summer collection to life."
  },
  {
    id: 2,
    title: "PUSH PUSH: Our New Wide-Leg Pants Collection",
    category: "Commercial",
    thumbnail: "/images/videography/video2.mp4",
    duration: "0:44",
    videoUrl: "/images/videography/video2.mp4",
    description: "The ultimate wide-leg pants that are super comfy and stylish. Now available in new colors!"
  },
  {
    id: 3,
    title: "Behind the Scenes: A Summer Photoshoot Look",
    category: "Lifestyle",
    thumbnail: "/images/videography/video3.mp4",
    duration: "0:17",
    videoUrl: "/images/videography/video3.mp4",
    description: "Go behind the scenes with us for our new summer photoshoot!"
  },
  {
    id: 4,
    title: "Summer Reverie 2025",
    category: "Lookbook",
    thumbnail: "/images/videography/video4.mp4",
    duration: "0:59",
    videoUrl: "/images/videography/video4.mp4",
    description: "Escape into a dream with our new \"Summer Reverie\" collection."
  },
  {
    id: 5,
    title: "ANNA DO's Ultimate Party Look",
    category: "Lookbook",
    thumbnail: "/images/videography/video5.mp4",
    duration: "0:10",
    videoUrl: "/images/videography/video5.mp4",
    description: "Dazzle at any party with our stunning new collection."
  },
  {
    id: 6,
    title: "Minimalist Jewelry Look",
    category: "Lookbook",
    thumbnail: "/images/videography/video6.mp4",
    duration: "0:15",
    videoUrl: "/images/videography/video6.mp4",
    description: "Enjoy a quiet coffee date with us and explore our new minimalist jewelry collection."
  }
];

const Videography = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
          {videographyData.map((video) => (
            <motion.div
              key={video.id}
              variants={staggerItem}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className="relative aspect-square">
                  {/* Video Preview */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      objectPosition: 
                        video.id === 1 ? 'center 20%' :
                        video.id === 2 ? 'center 30%' :
                        video.id === 3 ? 'center 10%' :
                        video.id === 4 ? 'center center' :
                        video.id === 5 ? 'center 10%' :
                        'center center'
                    }}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      // Set specific thumbnail timestamps immediately
                      const currentTime = (() => {
                        if (video.id === 1) return 5; // 0:05
                        if (video.id === 2) return 16; // 0:16
                        if (video.id === 5) return 1; // 0:01
                        return 0;
                      })();
                      e.currentTarget.currentTime = currentTime;
                    }}
                    onLoadedData={(e) => {
                      // Double-check thumbnail is set after data loads
                      const currentTime = (() => {
                        if (video.id === 1) return 5;
                        if (video.id === 2) return 16;
                        if (video.id === 5) return 1;
                        return 0;
                      })();
                      if (Math.abs(e.currentTarget.currentTime - currentTime) > 0.5) {
                        e.currentTarget.currentTime = currentTime;
                      }
                    }}
                    onCanPlayThrough={(e) => {
                      // Final check when video is fully ready
                      const currentTime = (() => {
                        if (video.id === 1) return 5;
                        if (video.id === 2) return 16;
                        if (video.id === 5) return 1;
                        return 0;
                      })();
                      e.currentTarget.currentTime = currentTime;
                    }}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      // Return to thumbnail timestamp
                      const currentTime = (() => {
                        if (video.id === 1) return 5;
                        if (video.id === 2) return 16;
                        if (video.id === 5) return 1;
                        return 0;
                      })();
                      e.currentTarget.currentTime = currentTime;
                    }}
                  >
                    <source src={`${video.thumbnail}#t=${
                      video.id === 1 ? '5' : 
                      video.id === 2 ? '16' : 
                      video.id === 5 ? '1' : '0'
                    }`} type="video/mp4" />
                  </video>
                  
                  {/* Play Button Overlay - Scales with video */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-gradient-warm/60 transition-all duration-700 group-hover:scale-110 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                      <svg className="w-6 h-6 text-primary-charcoal ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded font-medium z-20">
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
          <button 
            onClick={() => setShowAllModal(true)}
            className="group relative px-8 py-4 bg-gradient-warm text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-warm-red/30"
          >
            <span className="relative z-10">View All Videos</span>
            <div className="absolute inset-0 bg-gradient-warm-reverse rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* View All Videos Modal */}
      {showAllModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={() => setShowAllModal(false)}
        >
          <div className="min-h-screen p-6 flex flex-col">
            {/* Modal Header */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between mb-8 pt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  All <span className="gradient-text">Videography</span>
                </h2>
                <p className="text-white/70">Explore our complete video portfolio</p>
              </div>
              
              <button
                onClick={() => setShowAllModal(false)}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center mb-8"
              onClick={(e) => e.stopPropagation()}
            >
              {['All', 'Commercial', 'Lifestyle', 'Lookbook'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-warm text-white shadow-lg scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Video Grid */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              {videographyData
                .filter(video => selectedCategory === 'All' || video.category === selectedCategory)
                .map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setSelectedVideo(video.id);
                      setShowAllModal(false);
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.03]">
                      <div className="relative aspect-video">
                        {/* Video Preview */}
                        <video
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{
                            objectPosition: 
                              video.id === 1 ? 'center 25%' :
                              video.id === 2 ? 'center 30%' :
                              video.id === 3 ? 'center 20%' :
                              video.id === 4 ? 'center center' :
                              video.id === 5 ? 'center 40%' :
                              'center center'
                          }}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onLoadedMetadata={(e) => {
                            const currentTime = (() => {
                              if (video.id === 1) return 5;
                              if (video.id === 2) return 16;
                              if (video.id === 5) return 1;
                              return 0;
                            })();
                            e.currentTarget.currentTime = currentTime;
                          }}
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            const currentTime = (() => {
                              if (video.id === 1) return 5;
                              if (video.id === 2) return 16;
                              if (video.id === 5) return 1;
                              return 0;
                            })();
                            e.currentTarget.currentTime = currentTime;
                          }}
                        >
                          <source src={`${video.thumbnail}#t=${
                            video.id === 1 ? '5' : 
                            video.id === 2 ? '16' : 
                            video.id === 5 ? '1' : '0'
                          }`} type="video/mp4" />
                        </video>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-gradient-warm/60 transition-all duration-700 z-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                            <svg className="w-6 h-6 text-primary-charcoal ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded font-medium z-20">
                          {video.duration}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0 z-20">
                          <div className="bg-white/90 backdrop-blur-sm text-primary-charcoal px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                            {video.category}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 bg-black/80 backdrop-blur-sm text-white">
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-warm-yellow transition-colors duration-300">
                          {video.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white/60 text-sm">
                Click on any video to play in full screen
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}

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
                  {/* Video Player */}
                  <video
                    className="w-full h-full rounded-lg"
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
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
