import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';

export const ContactSection = ({ darkMode }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    toast.success('You\'re on the list! Get ready for launch updates.', {
      icon: '💙',
      duration: 4000,
    });
    setNewsletterEmail('');
  };

  const contactLinks = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      subtitle: 'Quick Response',
      href: 'https://wa.me/919999999999',
      color: 'text-green-500',
      hoverBorder: 'hover:border-green-500'
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      subtitle: '@bluero.bombay',
      href: 'https://instagram.com/bluero.bombay',
      color: 'text-pink-500',
      hoverBorder: 'hover:border-pink-500'
    },
    {
      icon: FiMail,
      title: 'Email',
      subtitle: 'hello@bluerokumpir.com',
      href: 'mailto:hello@bluerokumpir.com',
      color: 'text-[#0047FF]',
      hoverBorder: 'hover:border-[#0047FF]'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-[#09090B]' : 'bg-[#F4F4F5]'}`}
      data-testid="contact-section"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#0047FF] uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-black mt-3 mb-4 ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            LET'S CONNECT
          </h2>
          <p className={`font-body text-lg max-w-xl mx-auto mb-12 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Got questions? Want us at your event? Slide into our DMs or drop us a message.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl flex flex-col items-center gap-3 transition-all ${
                darkMode 
                  ? `bg-zinc-900 border border-zinc-800 ${link.hoverBorder}` 
                  : `bg-white border border-zinc-200 ${link.hoverBorder}`
              }`}
              data-testid={`contact-${link.title.toLowerCase()}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                link.color === 'text-green-500' ? 'bg-green-500/10' :
                link.color === 'text-pink-500' ? 'bg-pink-500/10' : 'bg-[#0047FF]/10'
              }`}>
                <link.icon className={link.color} size={24} />
              </div>
              <div>
                <p className={`font-display font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {link.title}
                </p>
                <p className={`font-mono text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {link.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`p-8 rounded-3xl ${
            darkMode ? 'bg-[#0047FF]/10 border border-[#0047FF]/30' : 'bg-[#0047FF]/5 border border-[#0047FF]/20'
          }`}
        >
          <h3 className={`font-display text-2xl font-bold mb-2 ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Get Launch Updates
          </h3>
          <p className={`font-body mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Be the first to know when we open. No spam, just kumpir love.
          </p>
          <form onSubmit={handleNewsletter} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className={`flex-1 rounded-full ${
                darkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-300'
              }`}
              data-testid="newsletter-email"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#0047FF] text-white font-bold rounded-full neon-blue flex items-center gap-2"
              data-testid="newsletter-submit"
            >
              <FiSend size={18} />
              <span className="hidden sm:inline">Subscribe</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
