import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const contacts = [
    {
      name: "Md Waseel",
      role: "Lead",
      phone: "+91 98765 43210",
      email: "hitamhackathonclub@hitam.org",
    },
    {
      name: "Mahesh Kumar Pandey",
      role: "Co-Lead",
      phone: "+91 98765 43211",
      email: "hitamhackathonclub@hitam.org",
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-pink/30 bg-hackathon-pink/10 text-hackathon-pink text-sm font-medium mb-6"
          >
            Get in Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-heading"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed"
          >
            Have questions about Hack Your Path 6.0? Reach out to our team members for assistance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hackathon-purple/20 to-hackathon-purple/5 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-hackathon-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <a href="mailto:hitamhackathonclub@hitam.org" className="text-white/70 hover:text-white transition-colors">
              hitamhackathonclub@hitam.org
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hackathon-pink/20 to-hackathon-pink/5 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-hackathon-pink" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <div className="relative">
              <button
                onClick={() => setSelectedContact(selectedContact ? null : "open")}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                Select Contact
                <ChevronDown className={`w-4 h-4 transition-transform ${selectedContact ? "rotate-180" : ""}`} />
              </button>
              {selectedContact && (
                <div className="absolute top-full left-0 right-0 mt-2 glass rounded-lg overflow-hidden">
                  {contacts.map((contact, index) => (
                    <button
                      key={index}
                      onClick={() => window.location.href = `tel:${contact.phone}`}
                      className="w-full px-4 py-2 text-left text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm">{contact.role}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hackathon-blue/20 to-hackathon-blue/5 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-hackathon-blue" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Venue</h3>
            <p className="text-white/70">
              HITAM (Hyderabad Institute of Technology and Management)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
