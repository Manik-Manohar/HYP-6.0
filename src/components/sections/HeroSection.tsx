import { ChevronDown, CalendarDays, MapPin, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pb-32 md:pt-44 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hackathon-purple/20 via-background to-background"></div>
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-20"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon-purple/30 bg-hackathon-purple/10 text-hackathon-purple text-sm font-medium animate-fade-down">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>May 9-10, 2025</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon-blue/30 bg-hackathon-blue/10 text-hackathon-blue text-sm font-medium animate-fade-down">
              <Clock className="w-4 h-4 mr-2" />
              <span>24 Hours</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon-green/30 bg-hackathon-green/10 text-hackathon-green text-sm font-medium animate-fade-down">
              <MapPin className="w-4 h-4 mr-2" />
              <span>HITAM Campus</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon-yellow/30 bg-hackathon-yellow/10 text-hackathon-yellow text-sm font-medium animate-fade-down">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span>Register by: HITAMights - Apr 29 | Others - May 1</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-heading glow animate-fade-down animation-delay-100">
            Hack Your Path 6.0
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-down animation-delay-200">
            If you have the KNACK to HACK and make it top of the PACK!
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
          
          {/* Organizers */}
          <div className="mt-16 w-full">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-center text-white/70 text-sm uppercase tracking-wider font-medium">
                 Organized By
              </h3>
              <div className="flex items-center gap-4 glass rounded-xl p-6">
                <img 
                  src="/images/logos/hhclogo.png" 
                  alt="HITAM Hackathon Club" 
                  className="h-16 w-auto object-contain"
                />
                <div className="h-12 w-px bg-white/10"></div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">HITAM Hackathon Club</h4>
                  <p className="text-white/70 text-sm">Fostering Innovation Through Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Powered By */}
          <div className="mt-16 w-full">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-center text-white/70 text-sm uppercase tracking-wider font-medium">
              Powered By
              </h3>
              <div className="flex items-center gap-4 glass rounded-xl p-6">
                <img 
                  src="dist/images/logos/UN-Blue-1000.png" 
                  alt="UNSTOP" 
                  className="h-16 w-auto object-contain"
                />
                <div className="h-12 w-px bg-white/10"></div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">UNSTOP</h4>
                  <p className="text-white/70 text-sm">Connecting talent, colleges, & recruiters!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
