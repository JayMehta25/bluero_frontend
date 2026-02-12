import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_d8eb6da1-9768-493e-ba3b-7e95b54c191d/artifacts/z9pc5gnc_image.png";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode ? 'glass' : 'glass-light' 
          : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
            data-testid="logo-link"
          >
            <img 
              src={LOGO_URL} 
              alt="Bluero Kumpir Co." 
              className="h-10 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`font-body font-medium text-sm uppercase tracking-wider transition-colors ${
                  darkMode 
                    ? 'text-zinc-300 hover:text-white' 
                    : 'text-zinc-700 hover:text-black'
                }`}
                whileHover={{ y: -2 }}
                data-testid={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="https://instagram.com/bluero.bombay" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'} transition-colors`}
                data-testid="nav-instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'} transition-colors`}
                data-testid="nav-whatsapp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-zinc-800 text-yellow-400' 
                  : 'bg-zinc-100 text-zinc-800'
              }`}
              data-testid="dark-mode-toggle"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Order Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block px-6 py-2 bg-[#0047FF] text-white font-bold text-sm uppercase tracking-wider rounded-full neon-blue"
              data-testid="order-now-btn"
            >
              Coming Soon
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 ${darkMode ? 'text-white' : 'text-black'}`}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}
            data-testid="mobile-menu"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`font-display text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <a 
                  href="https://instagram.com/bluero.bombay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0047FF]"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://wa.me/919999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0047FF]"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
