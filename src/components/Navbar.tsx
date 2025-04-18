import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Challenges", href: "#challenges" },
  { name: "Prizes", href: "#prizes" },
  { name: "Team", href: "#team" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-hackathon-purple to-hackathon-pink flex items-center justify-center">
            <span className="font-bold text-white text-xl">&lt;/&gt;</span>
          </div>
          <span className="text-xl font-bold tracking-tight gradient-text">
            <span className="gradient-heading">Hack Your</span>
            <span className="text-white"> Path 6.0</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#register" className="button-gradient">
            Register Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="#register"
          className="button-gradient text-lg"
          onClick={() => setIsOpen(false)}
        >
          Register Now
        </a>
      </div>
    </header>
  );
}
