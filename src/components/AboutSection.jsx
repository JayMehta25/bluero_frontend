import { motion } from 'framer-motion';
import { FiHeart, FiGlobe, FiZap } from 'react-icons/fi';

const POTATO_RAW = "https://images.unsplash.com/photo-1708657924789-10b34f8e2e7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsb2FkZWQlMjBiYWtlZCUyMHBvdGF0byUyMGt1bXBpciUyMGNsb3NlJTIwdXAlMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzcwOTE0MTk4fDA&ixlib=rb-4.1.0&q=85";

const values = [
  {
    icon: FiHeart,
    title: 'Made Fresh',
    description: 'Every kumpir crafted with hand-selected potatoes baked to fluffy perfection.',
    color: 'text-red-500',
    bg: 'bg-red-500/10'
  },
  {
    icon: FiGlobe,
    title: 'Global Fusion',
    description: 'Turkish tradition meets Mumbai flavors—paneer tikka, mint chutney, and more.',
    color: 'text-[#0047FF]',
    bg: 'bg-[#0047FF]/10'
  },
  {
    icon: FiZap,
    title: 'Street Energy',
    description: 'Fast, fresh, and full of flavor. Perfect for any occasion.',
    color: 'text-[#FF9900]',
    bg: 'bg-[#FF9900]/10'
  }
];

export const AboutSection = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 overflow-hidden ${darkMode ? 'bg-zinc-950' : 'bg-zinc-50'}`}
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <motion.img
                src={POTATO_RAW}
                alt="Fresh Potatoes"
                className="w-full aspect-[4/3] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className={`absolute inset-0 ${
                darkMode 
                  ? 'bg-gradient-to-t from-zinc-950/60 via-transparent' 
                  : 'bg-gradient-to-t from-white/40 via-transparent'
              }`} />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`absolute -bottom-6 -right-6 sm:right-6 p-5 rounded-2xl ${
                darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white shadow-xl'
              }`}
            >
              <p className="font-mono text-[#CCFF00] text-xs uppercase tracking-widest mb-1">Est.</p>
              <p className={`font-display text-3xl font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>2025</p>
              <p className={`font-mono text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>Mumbai</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-[#FF9900] uppercase tracking-widest"
            >
              Our Story
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`font-display text-4xl sm:text-5xl font-black mt-3 mb-6 ${
                darkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              BORN IN BOMBAY
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`font-body text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              It started with a craving on the streets of Istanbul. One bite of a 
              perfectly loaded kumpir and we knew—<span className="text-[#0047FF] font-semibold">Mumbai needed this</span>. 
              Turkish comfort food meets the city's unstoppable energy.
            </motion.p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${value.bg}`}>
                    <value.icon className={value.color} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-display text-lg font-bold ${
                      darkMode ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {value.title}
                    </h4>
                    <p className={`font-body text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
