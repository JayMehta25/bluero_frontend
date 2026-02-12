import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_d8eb6da1-9768-493e-ba3b-7e95b54c191d/artifacts/z9pc5gnc_image.png";

const footerLinks = {
  explore: [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/bluero.bombay', icon: FaInstagram },
    { name: 'WhatsApp', href: 'https://wa.me/919999999999', icon: FaWhatsapp },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'YouTube', href: '#', icon: FaYoutube },
  ]
};

export const Footer = ({ darkMode }) => {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer 
      className={`py-16 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.img
              src={LOGO_URL}
              alt="Bluero Kumpir Co."
              className="h-12 w-auto mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <p className={`font-body text-lg mb-6 max-w-md ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Turkish comfort meets Mumbai energy. The loaded potato revolution 
              is coming to Bombay—and we can't wait to feed you.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 text-zinc-400 hover:bg-[#0047FF] hover:text-white' 
                      : 'bg-zinc-100 text-zinc-600 hover:bg-[#0047FF] hover:text-white'
                  }`}
                  data-testid={`footer-social-${item.name.toLowerCase()}`}
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className={`font-display text-lg font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}>
              Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`font-body transition-colors ${
                      darkMode 
                        ? 'text-zinc-400 hover:text-white' 
                        : 'text-zinc-600 hover:text-black'
                    }`}
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className={`font-display text-lg font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}>
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`font-body transition-colors ${
                      darkMode 
                        ? 'text-zinc-400 hover:text-white' 
                        : 'text-zinc-600 hover:text-black'
                    }`}
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`} />

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`font-mono text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
            &copy; {new Date().getFullYear()} Bluero Kumpir Co. All rights reserved.
          </p>
          <p className={`font-mono text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
            Made with 🥔 in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
