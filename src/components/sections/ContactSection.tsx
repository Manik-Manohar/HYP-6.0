import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-pink/30 bg-hackathon-pink/10 text-hackathon-pink text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            Contact Us
          </h2>
          <p className="text-white/70 text-lg">
            Have questions about Hack Your Path 6.0? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-5xl mx-auto">
          <div className="glass rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-hackathon-purple/20 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-hackathon-purple" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
            <p className="text-white/70 mb-2">
              Our team is here to help with any questions.
            </p>
            <a href="mailto:hitamhackathonclub@hitam.org" className="text-hackathon-purple hover:text-hackathon-pink transition-colors">
              hitamhackathonclub@hitam.org
            </a>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-hackathon-blue/20 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-hackathon-blue" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
            <p className="text-white/70 mb-2">
              Available during working hours.
            </p>
            <a href="tel:+919876543210" className="text-hackathon-blue hover:text-hackathon-purple transition-colors">
              +91 98765 43210
            </a>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-hackathon-pink/20 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-hackathon-pink" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Visit Us</h3>
            <p className="text-white/70 mb-2">
              HITAM Campus
            </p>
            <address className="not-italic text-white/70">
              Hyderabad Institute of Technology and Management<br />
              Hyderabad, Telangana<br />
              India
            </address>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
