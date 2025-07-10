/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'game': ['Press Start 2P', 'monospace'],
        'main': ['Inter', 'sans-serif'],
        'heading': ['Raleway', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'Quicksand', 'sans-serif'],
      },
      colors: {
        'game': {
          'primary': '#6A11CB',          // Purple
          'secondary': '#2575FC',        // Blue
          'background': '#F5F7FA',       // Light Soft Gray
          'text': '#2F2F2F',             // Charcoal Black
          'body': '#4A4A4A',             // Soft Gray
          'accent': '#7F7FD5',           // Muted Violet
          'light': '#FAFBFC',            // Even lighter
          'white': '#FFFFFF',
        }
      },
      animation: {
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'game': '0 8px 32px rgba(106, 17, 203, 0.2)',  // Purple shadow
        'hover': '0 12px 40px rgba(106, 17, 203, 0.3)',
        'blue': '0 6px 24px rgba(37, 117, 252, 0.2)',  // Blue shadow
        'violet': '0 6px 24px rgba(127, 127, 213, 0.2)', // Violet shadow
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
        'soft-gradient': 'linear-gradient(135deg, #7F7FD5 0%, #2575FC 100%)',
        'hero-gradient': 'linear-gradient(135deg, #6A11CB 0%, #7F7FD5 50%, #2575FC 100%)',
        'button-gradient': 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
      },
    },
  },
  plugins: [],
}