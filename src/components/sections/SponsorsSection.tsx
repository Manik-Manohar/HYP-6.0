import { Building2, Globe, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export function SponsorsSection() {
  const tiers = [
    {
      title: "Organized By",
      sponsors: [
        { name: "GDG HITAM", logo: "https://placehold.co/200x80/8B5CF6/FFFFFF/svg+xml?text=GDG+HITAM" },
        { name: "IUCEE HITAM", logo: "https://placehold.co/200x80/3B82F6/FFFFFF/svg+xml?text=IUCEE+HITAM" },
        { name: "HHC HITAM", logo: "https://placehold.co/200x80/EC4899/FFFFFF/svg+xml?text=HHC+HITAM" },
      ],
      delay: 0,
    },
  ];

  const partnerTypes = [
    {
      title: "Academic Partners",
      icon: <Building2 className="w-5 h-5 text-hackathon-blue" />,
      partners: ["HITAM", "Hyderabad Institute of Technology and Management"],
      delay: 0,
    },
    {
      title: "Community Partners",
      icon: <Globe className="w-5 h-5 text-hackathon-purple" />,
      partners: ["GDG Hyderabad", "IUCEE", "Hackathon Club"],
      delay: 0.1,
    },
  ];

  return (
    <section id="sponsors" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-blue/30 bg-hackathon-blue/10 text-hackathon-blue text-sm font-medium mb-6">
            Our Supporters
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            Organizers & Partners
          </h2>
          <p className="text-white/70 text-lg">
            Hack Your Path 6.0 is organized by GDG HITAM, IUCEE HITAM, and HHC HITAM, with support from our partners.
          </p>
        </div>
        
        <div className="space-y-16 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: tier.delay }}
              className="glass rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-white text-center mb-8">{tier.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {tier.sponsors.map((sponsor, i) => (
                  <div key={i} className="rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-4 w-full max-w-[220px] flex items-center justify-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: type.delay }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{type.title}</h3>
              </div>
              <div className="space-y-2">
                {type.partners.map((partner, i) => (
                  <div key={i} className="px-3 py-2 bg-white/5 rounded-md text-white/70 text-sm">
                    {partner}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Want to Partner With Us?</h3>
            <p className="text-white/70 mb-6">
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
