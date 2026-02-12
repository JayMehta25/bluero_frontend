import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const POTATO_HERO = "https://images.unsplash.com/photo-1566847284565-a733fe649d7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsb2FkZWQlMjBiYWtlZCUyMHBvdGF0byUyMGt1bXBpciUyMGNsb3NlJTIwdXAlMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzcwOTE0MTk4fDA&ixlib=rb-4.1.0&q=85";

// Set launch date to 30 days from now
const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

const CountdownItem = ({ value, label, darkMode }) => (
  <div className="flex flex-col items-center">
    <motion.div
      key={value}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`font-mono text-4xl sm:text-6xl lg:text-8xl font-bold ${
        darkMode ? 'text-white' : 'text-zinc-900'
      }`}
    >
      {String(value).padStart(2, '0')}
    </motion.div>
    <span className={`font-mono text-xs sm:text-sm uppercase tracking-widest mt-2 ${
      darkMode ? 'text-zinc-500' : 'text-zinc-600'
    }`}>
      {label}
    </span>
  </div>
);

const Separator = ({ darkMode }) => (
  <span className={`font-mono text-4xl sm:text-6xl lg:text-8xl ${
    darkMode ? 'text-[#FF9900]' : 'text-[#0047FF]'
  }`}>:</span>
);

export const HeroSection = ({ darkMode }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = LAUNCH_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-[#09090B]' : 'bg-[#F4F4F5]'
      }`}
      data-testid="hero-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#fff' : '#000'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Potato Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[70vh] hidden lg:block"
      >
        <div className="relative w-full h-full">
          <img
            src={POTATO_HERO}
            alt="Delicious Kumpir"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-auto object-cover rounded-l-3xl shadow-2xl"
          />
          <div className={`absolute inset-0 rounded-l-3xl ${
            darkMode 
              ? 'bg-gradient-to-r from-[#09090B] via-transparent to-transparent' 
              : 'bg-gradient-to-r from-[#F4F4F5] via-transparent to-transparent'
          }`} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-[#0047FF] text-white font-mono text-xs uppercase tracking-widest rounded-full neon-blue">
              Coming Soon to Mumbai
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
            data-testid="hero-title"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              LOADED.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block text-gradient-blue"
            >
              STACKED.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block text-gradient-gold"
            >
              OBSESSED.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className={`font-body text-lg sm:text-xl mb-12 max-w-md ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
            data-testid="hero-tagline"
          >
            Turkish loaded potatoes meet Mumbai's street food energy
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
            data-testid="countdown-timer"
          >
            <p className={`font-mono text-sm uppercase tracking-widest mb-6 ${
              darkMode ? 'text-zinc-500' : 'text-zinc-600'
            }`}>
              Launching In
            </p>
            <div className="flex items-center gap-2 sm:gap-4">
              <CountdownItem value={timeLeft.days} label="Days" darkMode={darkMode} />
              <Separator darkMode={darkMode} />
              <CountdownItem value={timeLeft.hours} label="Hours" darkMode={darkMode} />
              <Separator darkMode={darkMode} />
              <CountdownItem value={timeLeft.minutes} label="Mins" darkMode={darkMode} />
              <Separator darkMode={darkMode} />
              <CountdownItem value={timeLeft.seconds} label="Secs" darkMode={darkMode} />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToMenu}
              className="px-8 py-4 bg-[#0047FF] text-white font-bold uppercase tracking-wider rounded-full neon-blue"
              data-testid="explore-menu-btn"
            >
              Explore Menu
            </motion.button>
            <motion.a
              href="https://instagram.com/bluero.bombay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 font-bold uppercase tracking-wider rounded-full transition-colors ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
              data-testid="follow-ig-btn"
            >
              Follow @bluero.bombay
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button 
          onClick={scrollToMenu}
          className={`p-3 rounded-full ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}
          data-testid="scroll-indicator"
        >
          <FiArrowDown size={24} />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
