import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const ATLAS_EVENT_IMAGE = "https://customer-assets.emergentagent.com/job_spud-vibes/artifacts/g3sjsiek_image.png";

const events = [
  {
    id: 1,
    title: 'Alpha Carnival Pop-up',
    type: 'University Event',
    date: '11, 13, 16, 17, 18 Feb',
    time: '8 AM - 5 PM',
    location: 'Hideout, Atlas SkillTech University',
    description: 'Catch us at Alpha Carnival! Fresh loaded kumpirs, chocolate strawberries, and more. See you at the Hideout!',
    image: ATLAS_EVENT_IMAGE,
    highlight: true
  },
  {
    id: 2,
    title: 'Corporate Catering',
    type: 'B2B Services',
    date: 'Book Now',
    time: 'Flexible',
    location: 'Pan Mumbai',
    description: 'Bring the kumpir experience to your office events, team lunches, and corporate gatherings.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop',
    highlight: false
  },
  {
    id: 3,
    title: 'Private Parties',
    type: 'Catering',
    date: 'Flexible',
    time: 'Your Schedule',
    location: 'Your Venue',
    description: 'Birthday bash? House party? Let us set up a live kumpir station for your guests.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
    highlight: false
  }
];

const EventCard = ({ event, darkMode, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`flex-shrink-0 w-[320px] sm:w-[380px] rounded-3xl overflow-hidden ${
      event.highlight 
        ? 'bg-[#0047FF] text-white ring-2 ring-[#0047FF] ring-offset-4 ring-offset-zinc-950' 
        : darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'
    }`}
    data-testid={`event-card-${event.id}`}
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <motion.img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider ${
        event.highlight ? 'bg-white text-[#0047FF]' : 'bg-[#0047FF] text-white'
      }`}>
        {event.highlight ? '🔥 LIVE NOW' : event.type}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className={`font-display text-xl font-bold mb-3 ${
        event.highlight ? 'text-white' : darkMode ? 'text-white' : 'text-zinc-900'
      }`}>
        {event.title}
      </h3>
      
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2">
          <FiCalendar className={event.highlight ? 'text-white/70' : darkMode ? 'text-zinc-500' : 'text-zinc-500'} size={14} />
          <span className={`font-mono text-sm ${
            event.highlight ? 'text-white/70' : darkMode ? 'text-zinc-500' : 'text-zinc-500'
          }`}>
            {event.date}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock className={event.highlight ? 'text-white/70' : darkMode ? 'text-zinc-500' : 'text-zinc-500'} size={14} />
          <span className={`font-mono text-sm ${
            event.highlight ? 'text-white/70' : darkMode ? 'text-zinc-500' : 'text-zinc-500'
          }`}>
            {event.time}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className={event.highlight ? 'text-white/70' : darkMode ? 'text-zinc-500' : 'text-zinc-500'} size={14} />
          <span className={`font-mono text-sm ${
            event.highlight ? 'text-white/70' : darkMode ? 'text-zinc-500' : 'text-zinc-500'
          }`}>
            {event.location}
          </span>
        </div>
      </div>

      <p className={`font-body text-sm mb-5 line-clamp-2 ${
        event.highlight ? 'text-white/80' : darkMode ? 'text-zinc-400' : 'text-zinc-600'
      }`}>
        {event.description}
      </p>

      <motion.button 
        whileHover={{ x: 4 }}
        className={`flex items-center gap-2 font-bold uppercase tracking-wider text-sm ${
          event.highlight 
            ? 'text-white' 
            : 'text-[#0047FF]'
        }`}
      >
        {event.highlight ? 'Visit Us' : 'Learn More'} <FiArrowRight />
      </motion.button>
    </div>
  </motion.div>
);

export const EventsSection = ({ darkMode }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="events" 
      className={`py-20 ${darkMode ? 'bg-[#09090B]' : 'bg-[#F4F4F5]'}`}
      data-testid="events-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-sm text-[#FF9900] uppercase tracking-widest"
            >
              Where to Find Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`font-display text-4xl sm:text-5xl font-black mt-3 ${
                darkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              EVENTS & POP-UPS
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className={`px-6 py-3 border-2 font-bold uppercase tracking-wider rounded-full transition-colors ${
              darkMode 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
            data-testid="book-event-btn"
          >
            Book Us
          </motion.button>
        </motion.div>

        {/* Events Grid */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {events.map((event, index) => (
            <div key={event.id} className="snap-start">
              <EventCard event={event} darkMode={darkMode} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
