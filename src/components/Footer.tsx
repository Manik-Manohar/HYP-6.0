
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-purple/5 to-transparent pointer-events-none"></div>
      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-hackathon-purple to-hackathon-pink flex items-center justify-center">
                <span className="font-bold text-white text-xl">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="gradient-heading">Hack</span>
                <span className="text-white">Your Path 6.0</span>
              </span>
            </a>
            <p className="text-white/70 text-sm">
              Join us for an unforgettable hackathon experience where innovation meets collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Timeline", "Challenges", "Prizes"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Register", "Sponsors", "Team", "FAQ", "Contact"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MailIcon className="w-4 h-4 mt-0.5 text-hackathon-purple" />
                <span>hitamhackathonclub@hitam.org</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <div className="w-4 h-4 mt-0.5 flex items-center justify-center text-hackathon-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>HITAM (Hyderabad Institute of Technology and Management)</span>
              </li>
              <li>
              <span>Made with ❤️ by Mahesh Pandey</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 Hack Your Path 6.0. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
