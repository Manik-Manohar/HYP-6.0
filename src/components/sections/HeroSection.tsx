import { ChevronDown, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const organizers = [
    {
      name: "GDG HITAM",
      logo: "https://placehold.co/200x80/8B5CF6/FFFFFF/svg+xml?text=GDG+HITAM",
      delay: 0,
    },
    {
      name: "IUCEE HITAM",
      logo: "https://placehold.co/200x80/3B82F6/FFFFFF/svg+xml?text=IUCEE+HITAM",
      delay: 0.1,
    },
    {
      name: "HHC HITAM",
      logo: "https://placehold.co/200x80/EC4899/FFFFFF/svg+xml?text=HHC+HITAM",
      delay: 0.2,
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-24 md:pb-32 md:pt-44 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hackathon-purple/20 via-background to-background"></div>
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-20"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon-purple/30 bg-hackathon-purple/10 text-hackathon-purple text-sm font-medium animate-fade-down">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>May 9th & 10th, 2025</span>
            <span className="mx-2 text-white/30">|</span>
            <MapPin className="w-4 h-4 mr-2" />
            <span>Activity Block, HITAM</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-heading glow animate-fade-down animation-delay-100">
            Hack Your Path 6.0
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-down animation-delay-200">
            Join us for 36 hours of innovation, creativity, and coding excellence! 🚀
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up">
            <a href="#register" className="button-gradient text-lg px-8 py-3">
              Register Now
            </a>
            <a href="#about" className="px-6 py-3 text-white/80 border border-white/20 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              Learn More
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
          
          {/* Organizers Section */}
          <div className="mt-16 w-full">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white/70 mb-8 text-sm uppercase tracking-wider"
            >
              Proudly Organized By
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {organizers.map((org, index) => (
                <motion.div
                  key={org.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: org.delay }}
                  className="glass p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-hackathon-purple to-hackathon-pink rounded-lg opacity-30 group-hover:opacity-100 transition-opacity blur"></div>
                    <div className="relative bg-background rounded-lg p-4 flex items-center justify-center">
                      <img 
                        src={org.logo} 
                        alt={org.name}
                        className="max-w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
