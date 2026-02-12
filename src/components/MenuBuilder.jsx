import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiInfo, FiCheck } from 'react-icons/fi';
import { toast } from 'sonner';

const POTATO_BASE = "https://images.unsplash.com/photo-1566847284565-a733fe649d7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsb2FkZWQlMjBiYWtlZCUyMHBvdGF0byUyMGt1bXBpciUyMGNsb3NlJTIwdXAlMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzcwOTE0MTk4fDA&ixlib=rb-4.1.0&q=85";

const toppingCategories = [
  {
    name: 'Base',
    items: [
      { id: 'butter', name: 'Whipped Butter', price: 0, calories: 100, allergens: ['dairy'], included: true },
      { id: 'cheese', name: 'Kasar Cheese', price: 30, calories: 120, allergens: ['dairy'] },
      { id: 'sour-cream', name: 'Sour Cream', price: 40, calories: 80, allergens: ['dairy'] },
    ]
  },
  {
    name: 'Classics',
    items: [
      { id: 'corn', name: 'Sweet Corn', price: 25, calories: 45, allergens: [] },
      { id: 'olives', name: 'Black Olives', price: 35, calories: 30, allergens: [] },
      { id: 'pickles', name: 'Turkish Pickles', price: 25, calories: 15, allergens: [] },
      { id: 'mushrooms', name: 'Sautéed Mushrooms', price: 40, calories: 25, allergens: [] },
    ]
  },
  {
    name: 'Fusion Indian',
    items: [
      { id: 'paneer', name: 'Spiced Paneer', price: 60, calories: 150, allergens: ['dairy'] },
      { id: 'tikka', name: 'Chicken Tikka', price: 80, calories: 180, allergens: [] },
      { id: 'keema', name: 'Lamb Keema', price: 90, calories: 200, allergens: [] },
      { id: 'chutney', name: 'Mint Chutney Drizzle', price: 20, calories: 15, allergens: [] },
    ]
  },
  {
    name: 'Global Twists',
    items: [
      { id: 'jalapeno', name: 'Pickled Jalapeños', price: 30, calories: 10, allergens: [] },
      { id: 'bacon', name: 'Crispy Bacon Bits', price: 70, calories: 150, allergens: [] },
      { id: 'feta', name: 'Crumbled Feta', price: 50, calories: 90, allergens: ['dairy'] },
      { id: 'sriracha', name: 'Sriracha Mayo', price: 25, calories: 60, allergens: ['egg'] },
    ]
  },
  {
    name: 'Crunch',
    items: [
      { id: 'onions', name: 'Crispy Onions', price: 25, calories: 80, allergens: ['gluten'] },
      { id: 'seeds', name: 'Toasted Seeds Mix', price: 30, calories: 100, allergens: ['nuts'] },
      { id: 'paprika', name: 'Smoked Paprika Dust', price: 15, calories: 5, allergens: [] },
    ]
  }
];

const BASE_PRICE = 199;

const ToppingItem = ({ item, isSelected, onToggle, darkMode }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors ${
      isSelected 
        ? darkMode ? 'bg-[#0047FF]/20 border border-[#0047FF]' : 'bg-[#0047FF]/10 border border-[#0047FF]'
        : darkMode ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' : 'bg-white border border-zinc-200 hover:border-zinc-300'
    }`}
    onClick={onToggle}
    data-testid={`topping-${item.id}`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        isSelected ? 'bg-[#0047FF]' : darkMode ? 'bg-zinc-800' : 'bg-zinc-100'
      }`}>
        {isSelected && <FiCheck className="text-white" size={14} />}
      </div>
      <div>
        <p className={`font-body font-medium ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          {item.name}
          {item.included && (
            <span className="ml-2 text-xs text-[#CCFF00] font-mono uppercase">Included</span>
          )}
        </p>
        <div className="flex items-center gap-3 mt-1">
          <span className={`font-mono text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
            {item.calories} cal
          </span>
          {item.allergens.length > 0 && (
            <span className={`font-mono text-xs ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              {item.allergens.join(', ')}
            </span>
          )}
        </div>
      </div>
    </div>
    <span className={`font-mono text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
      {item.price === 0 ? 'Free' : `+₹${item.price}`}
    </span>
  </motion.div>
);

export const MenuBuilder = ({ darkMode }) => {
  const [selectedToppings, setSelectedToppings] = useState(['butter']);
  const [expandedCategory, setExpandedCategory] = useState('Base');

  const toggleTopping = (itemId) => {
    setSelectedToppings(prev => {
      const newSelection = prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId];
      
      const item = toppingCategories
        .flatMap(cat => cat.items)
        .find(i => i.id === itemId);
      
      if (item) {
        if (newSelection.includes(itemId)) {
          toast.success(`Added ${item.name}!`, {
            icon: '🥔',
            duration: 1500,
          });
        } else {
          toast.info(`Removed ${item.name}`, {
            duration: 1500,
          });
        }
      }
      
      return newSelection;
    });
  };

  const calculateTotal = () => {
    let total = BASE_PRICE;
    toppingCategories.forEach(category => {
      category.items.forEach(item => {
        if (selectedToppings.includes(item.id)) {
          total += item.price;
        }
      });
    });
    return total;
  };

  const calculateCalories = () => {
    let calories = 250; // Base potato
    toppingCategories.forEach(category => {
      category.items.forEach(item => {
        if (selectedToppings.includes(item.id)) {
          calories += item.calories;
        }
      });
    });
    return calories;
  };

  const getSelectedItems = () => {
    return toppingCategories
      .flatMap(cat => cat.items)
      .filter(item => selectedToppings.includes(item.id));
  };

  return (
    <section 
      id="menu" 
      className={`py-24 ${darkMode ? 'bg-[#09090B]' : 'bg-white'}`}
      data-testid="menu-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#0047FF] uppercase tracking-widest">
            Build Your Own
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-black mt-4 ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            KUMPIR BUILDER
          </h2>
          <p className={`font-body text-lg mt-4 max-w-xl ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Start with our signature fluffy potato and pile on your favorite toppings. 
            Mix Turkish classics with Indian fusion for your perfect creation.
          </p>
        </motion.div>

        {/* Split View */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Potato Visual (Sticky) */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden ${
                darkMode ? 'bg-zinc-900' : 'bg-zinc-100'
              }`}
            >
              <img
                src={POTATO_BASE}
                alt="Your Kumpir"
                className="w-full aspect-square object-cover"
              />
              
              {/* Overlay with selected items */}
              <div className={`absolute inset-0 bg-gradient-to-t ${
                darkMode ? 'from-zinc-900 via-transparent' : 'from-white via-transparent'
              }`} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {getSelectedItems().map(item => (
                    <motion.span
                      key={item.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="px-3 py-1 bg-[#0047FF] text-white font-mono text-xs rounded-full"
                    >
                      {item.name}
                    </motion.span>
                  ))}
                </div>
                
                {/* Price & Calories */}
                <div className={`flex items-end justify-between p-4 rounded-xl ${
                  darkMode ? 'bg-zinc-800/80 backdrop-blur' : 'bg-white/80 backdrop-blur'
                }`}>
                  <div>
                    <p className={`font-mono text-xs uppercase ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Total
                    </p>
                    <p className={`font-display text-3xl font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                      ₹{calculateTotal()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-mono text-xs uppercase ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Est. Calories
                    </p>
                    <p className={`font-mono text-xl ${darkMode ? 'text-[#FF9900]' : 'text-orange-500'}`}>
                      {calculateCalories()} cal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Box */}
            <div className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
              darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-zinc-100 border border-zinc-200'
            }`}>
              <FiInfo className={`flex-shrink-0 mt-1 ${darkMode ? 'text-[#FF9900]' : 'text-orange-500'}`} />
              <p className={`font-body text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Base potato (₹199) includes whipped butter. All prices are indicative and may vary at launch.
              </p>
            </div>
          </div>

          {/* Right - Topping Categories */}
          <div className="space-y-4">
            {toppingCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className={`rounded-xl overflow-hidden ${
                  darkMode ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-zinc-50 border border-zinc-200'
                }`}
                data-testid={`category-${category.name.toLowerCase().replace(' ', '-')}`}
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.name ? '' : category.name)}
                  className={`w-full flex items-center justify-between p-6 ${
                    darkMode ? 'hover:bg-zinc-800/50' : 'hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-display text-xl font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                      {category.name}
                    </span>
                    <span className={`font-mono text-xs px-2 py-1 rounded-full ${
                      darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-200 text-zinc-600'
                    }`}>
                      {category.items.filter(i => selectedToppings.includes(i.id)).length}/{category.items.length}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.name ? 45 : 0 }}
                  >
                    <FiPlus className={darkMode ? 'text-zinc-400' : 'text-zinc-600'} size={24} />
                  </motion.div>
                </button>

                {/* Category Items */}
                <AnimatePresence>
                  {expandedCategory === category.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-3">
                        {category.items.map(item => (
                          <ToppingItem
                            key={item.id}
                            item={item}
                            isSelected={selectedToppings.includes(item.id)}
                            onToggle={() => toggleTopping(item.id)}
                            darkMode={darkMode}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Order CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-[#0047FF]/10 border border-[#0047FF]/30' : 'bg-[#0047FF]/5 border border-[#0047FF]/20'
              }`}
            >
              <p className={`font-body text-center mb-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Love your creation? We're opening soon!
              </p>
              <button
                className="w-full py-4 bg-[#0047FF] text-white font-bold uppercase tracking-wider rounded-full neon-blue"
                data-testid="notify-me-btn"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Notify Me at Launch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBuilder;
