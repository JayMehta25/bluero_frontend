import { useState, useEffect } from "react";
import "@fontsource/unbounded/700.css";
import "@fontsource/unbounded/900.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/jetbrains-mono/400.css";
import "@/App.css";
import { Toaster } from "sonner";

// Components
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MenuBuilder } from "./components/MenuBuilder";
import { AboutSection } from "./components/AboutSection";
import { EventsSection } from "./components/EventsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`} data-testid="app-container">
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: darkMode ? '#18181B' : '#FFFFFF',
            color: darkMode ? '#FFFFFF' : '#09090B',
            border: darkMode ? '1px solid #27272A' : '1px solid #E4E4E7',
          },
        }}
      />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <HeroSection darkMode={darkMode} />
        <EventsSection darkMode={darkMode} />
        <MenuBuilder darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
