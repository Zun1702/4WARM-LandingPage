'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, staggerContainer, staggerItem } from '@/lib/animations';

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
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder image - will be replaced with actual photo */}
              <div className="absolute inset-0 bg-gradient-warm opacity-20"></div>
              <div className="absolute inset-0 bg-primary-charcoal/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-primary-charcoal/60 text-sm">Sample Photography Work</p>
                </div>
              </div>
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
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-warm-yellow/10 to-warm-pink/10">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-primary-charcoal/70">Happy Clients</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-warm-pink/10 to-warm-red/10">
                <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-sm text-primary-charcoal/70">Projects Completed</div>
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
