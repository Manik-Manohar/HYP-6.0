import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { PrizesSection } from "@/components/sections/PrizesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { RegisterSection } from "@/components/sections/RegisterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HomePage() {
  useEffect(() => {
    // Update document title
    document.title = "Hack Your Path 6.0 | HITAM Hackathon Club";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-background text-foreground"
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TimelineSection />
          <ChallengesSection />
          <PrizesSection />
          <TeamSection />
          <SponsorsSection />
          <FaqSection />
          <RegisterSection />
          <ContactSection />
        </main>
        <Footer />
        
        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-hackathon-purple to-hackathon-pink shadow-lg hover:shadow-hackathon-purple/20 transition-all duration-300 opacity-80 hover:opacity-100"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
