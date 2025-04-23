import { Building2, Globe, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export function SponsorsSection() {
  const tiers = [
    {
      title: "Organized By",
      sponsors: [
        { name: "HHC HITAM", logo: "/images/logos/hhclogo.png" },
      ],
      delay: 0,
    },
    {
      title: "In Collaboration With",
      sponsors: [
        { name: "GDG HITAM", logo: "/images/logos/gdg_logo.png" },
        { name: "IUCEE HITAM", logo: "/images/logos/iuceee_logo.png" },
        { name: "UNSTOP", logo: "/images/logos/Unstop-Logo-Blue-Medium.png" },
      ],
      delay: 0.1,
    },
  ];

  const partnerTypes = [
    {
      title: "Venue Partner",
      icon: <Building2 className="w-5 h-5 text-hackathon-blue" />,
      partners: ["HITAM - Hyderabad Institute of Technology and Management"],
      logo: "/images/logos/hitam_logo.png",
      delay: 0,
    },
  ];

  return (
    <section id="sponsors" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-1 rounded-full border border-hackathon-blue/30 bg-hackathon-blue/10 text-hackathon-blue text-xs md:text-sm font-medium mb-4 md:mb-6">
            Our Supporters
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-6 gradient-heading">
            Organizers & Partners
          </h2>
          <p className="text-white/70 text-base md:text-lg px-4 md:px-0">
            Hack Your Path 6.0 is organized by HITAM Hackathon Club (HHC) in collaboration with GDG HITAM and IUCEE HITAM.
          </p>
        </div>
        
        <div className="space-y-8 md:space-y-16 mb-8 md:mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: tier.delay }}
              className="glass rounded-xl p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-6 md:mb-8">{tier.title}</h3>
              <div className={`grid ${tier.title === "Organized By" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-6 justify-items-center`}>
                {tier.sponsors.map((sponsor, i) => (
                  <div key={i} className={`rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-4 md:p-6 w-full ${tier.title === "Organized By" ? "max-w-[240px] mx-auto" : "max-w-[280px]"} flex items-center justify-center`}>
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-w-full h-auto max-h-16 md:max-h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-16">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: type.delay }}
              className="glass rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    {type.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{type.title}</h3>
                </div>
                <div className="rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-4 md:p-6 w-full max-w-[240px] md:max-w-[280px] flex items-center justify-center mb-4 md:mb-6">
                  <img 
                    src={type.logo} 
                    alt="HITAM Logo" 
                    className="max-w-full h-auto max-h-16 md:max-h-24 object-contain"
                  />
                </div>
                <div className="space-y-2 w-full max-w-[280px] md:max-w-[320px]">
                  {type.partners.map((partner, i) => (
                    <div key={i} className="px-3 md:px-4 py-2 bg-white/5 rounded-md text-white/70 text-xs md:text-sm text-center">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-4 md:px-0">
          <div className="glass rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Want to Partner With Us?</h3>
            <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6">
              Join us in making Hack Your Path 6.0 a success. Reach out to learn about partnership opportunities.
            </p>
            <a href="#contact" className="button-gradient">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
