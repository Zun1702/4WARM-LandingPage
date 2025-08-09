'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, staggerContainer, staggerItem } from '@/lib/animations';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              {/* 4WARM Logo - Full Frame Coverage */}
              <Image
                src="/images/logo/logo.jpg"
                alt="4WARM Photography Logo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-red/0 via-warm-yellow/0 to-warm-pink/0 group-hover:from-warm-red/10 group-hover:via-warm-yellow/5 group-hover:to-warm-pink/10 transition-all duration-500"></div>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm-yellow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-pink/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:pl-8"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-charcoal mb-4">
                Who We 
                <span className="gradient-text"> Are</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-warm rounded-full"></div>
            </motion.div>

            <motion.p 
              variants={staggerItem}
              className="text-lg text-primary-charcoal/80 leading-relaxed mb-6"
            >
              At <strong className="gradient-text">4WARM</strong>, we believe in capturing the genuine warmth of every moment. From intimate portraits to dynamic event coverage, our team blends creativity and precision to deliver unforgettable visuals.
            </motion.p>

            <motion.p 
              variants={staggerItem}
              className="text-lg text-primary-charcoal/80 leading-relaxed mb-8"
            >
              Our passion lies in storytelling through the lens, creating images and videos that not only document your special moments but also evoke the emotions and atmosphere that made them truly meaningful.
            </motion.p>

            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-6 mb-8">
              <div className="group text-center p-4 rounded-xl bg-gradient-to-br from-warm-yellow/10 to-warm-pink/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-warm-yellow/20 hover:to-warm-pink/20 cursor-pointer">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-primary-charcoal/70 group-hover:text-primary-charcoal transition-colors duration-300">Happy Clients</div>
              </div>
              <div className="group text-center p-4 rounded-xl bg-gradient-to-br from-warm-pink/10 to-warm-red/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-warm-pink/20 hover:to-warm-red/20 cursor-pointer">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-sm text-primary-charcoal/70 group-hover:text-primary-charcoal transition-colors duration-300">Projects Completed</div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <button className="group relative px-8 py-4 bg-gradient-warm text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-warm-red/30">
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-warm-reverse rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;