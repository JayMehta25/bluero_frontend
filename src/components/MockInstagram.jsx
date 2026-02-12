import { motion } from 'framer-motion';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';

const mockPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566847284565-a733fe649d7d?w=400&h=400&fit=crop',
    likes: 234,
    comments: 18,
    caption: 'The dream is almost here 🥔✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1657617836185-c3bceced415f?w=400&h=400&fit=crop',
    likes: 189,
    comments: 12,
    caption: 'Fresh toppings loading...'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1770230901556-4e1c0bacfb09?w=400&h=400&fit=crop',
    likes: 312,
    comments: 27,
    caption: 'Courtside eats coming to Padel Rise 7.0!'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1708657924789-10b34f8e2e7d?w=400&h=400&fit=crop',
    likes: 156,
    comments: 9,
    caption: 'Farm fresh, always 🌱'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1582536446689-c270200551c9?w=400&h=400&fit=crop',
    likes: 267,
    comments: 21,
    caption: 'Sweet corn Sundays'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1649473658786-55cb29eb1a9a?w=400&h=400&fit=crop',
    likes: 198,
    comments: 15,
    caption: 'Mumbai, we\'re coming for you 💙'
  }
];

const InstagramPost = ({ post, darkMode }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative group cursor-pointer"
    data-testid={`ig-post-${post.id}`}
  >
    <div className="aspect-square rounded-2xl overflow-hidden">
      <img
        src={post.image}
        alt={post.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
      <div className="flex items-center gap-6 text-white">
        <div className="flex items-center gap-2">
          <FaHeart size={20} />
          <span className="font-mono">{post.likes}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaComment size={20} />
          <span className="font-mono">{post.comments}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const MockInstagram = ({ darkMode }) => {
  return (
    <section 
      className={`py-24 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}
      data-testid="instagram-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaInstagram className="text-[#E4405F]" size={32} />
            <span className={`font-display text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}>
              @bluero.bombay
            </span>
          </div>
          <p className={`font-body ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Follow our journey to launch and beyond
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <InstagramPost post={post} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://instagram.com/bluero.bombay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white font-bold uppercase tracking-wider rounded-full"
            data-testid="follow-instagram-btn"
          >
            <FaInstagram size={20} />
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MockInstagram;
