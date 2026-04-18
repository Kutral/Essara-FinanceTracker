import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white/20 selection:text-white flex flex-col font-sans w-full overflow-x-hidden">
      <main className="w-full flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <FeaturedVideoSection />
        <PhilosophySection />
        <ServicesSection />
      </main>
      
      {/* Final barebones footer linking back to essara.space */}
      <footer className="w-full bg-black py-12 border-t border-white/5 flex flex-col items-center z-10 relative">
        <p className="text-white/40 text-sm font-sans mb-4">
          Ready to take control?
        </p>
        <a href="https://essara.space/" className="text-white hover:text-white/80 font-serif italic text-2xl md:text-3xl transition-colors">
          Visit essara.space
        </a>
      </footer>
    </div>
  );
}
