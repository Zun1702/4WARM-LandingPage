/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 4WARM Primary Gradient Colors
        'warm-yellow': '#FFD43B',
        'warm-orange': '#FF6F3C', 
        'warm-pink': '#FF3366',
        'warm-red': '#FF1E1E',
        // Supporting Colors
        'primary-white': '#FFFFFF',
        'primary-charcoal': '#1A1A1A',
        'primary-gray': '#F5F5F5'
      },
      backgroundImage: {
        // Primary gradient for headers, hero, CTA buttons
        'gradient-warm': 'linear-gradient(135deg, #FFD43B 0%, #FF6F3C 25%, #FF3366 75%, #FF1E1E 100%)',
        'gradient-warm-reverse': 'linear-gradient(315deg, #FFD43B 0%, #FF6F3C 25%, #FF3366 75%, #FF1E1E 100%)',
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'sans': ['var(--font-poppins)', 'sans-serif'], // Default to Poppins
      },
      fontSize: {
        // Custom heading sizes
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 48px
        'heading': ['2rem', { lineHeight: '1.3' }], // 32px
        'subheading': ['1.5rem', { lineHeight: '1.4' }], // 24px
        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-up': 'scaleUp 0.6s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};

export default config;
