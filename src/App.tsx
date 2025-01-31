import React from 'react';
import { Menu, MapPin, Phone, Clock, Star, StarHalf } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Reviews />
        <Contact />
      </main>
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Echigo Home Cook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;