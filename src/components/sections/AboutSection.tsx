import { Code2, Sparkles, Users, Trophy, EyeIcon, LightbulbIcon, Rocket, BrainCircuitIcon } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Code2 className="w-5 h-5 text-hackathon-purple" />,
      title: "Code Together",
      description:
        "Collaborate with fellow tech enthusiasts to build innovative solutions.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-hackathon-pink" />,
      title: "Learn & Grow",
      description:
        "Expand your skill set with workshops and mentorship from industry experts.",
    },
    {
      icon: <Users className="w-5 h-5 text-hackathon-blue" />,
      title: "Network",
      description:
        "Connect with like-minded individuals and potential employers.",
    },
    {
      icon: <Trophy className="w-5 h-5 text-hackathon-yellow" />,
      title: "Win Prizes",
      description:
        "Compete for exciting prizes worth ₹35,000/- and recognition.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-purple/30 bg-hackathon-purple/10 text-hackathon-purple text-sm font-medium mb-6">
            About The Event
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            The Ultimate Coding Experience
          </h2>
          <p className="text-white/70 text-lg">
            Hack Your Path 6.0 is organized by HITAM Hackathon Club (HHC) in collaboration with GDG HITAM and IUCEE HITAM. Join us for an exciting hackathon where innovation meets technology!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl card-hover"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-hackathon-purple/20 to-hackathon-pink/20 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-cyan/30 bg-hackathon-cyan/10 text-hackathon-cyan text-sm font-medium">
              Who Can Participate?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading">
              Open to All College Students
            </h2>
            <p className="text-white/70 text-lg">
              Whether you're a coding enthusiast, a problem solver, or an innovator, 
              Hack Your Path 6.0 welcomes all college students. Form a team of up to 4 members 
              from your college and showcase your skills!
            </p>
            
            <div className="pt-4">
              <a href="#register" className="button-gradient">
                Register Your Team
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-hackathon-purple to-hackathon-pink rounded-xl opacity-30 blur-xl"></div>
            <div className="relative glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Event Highlights</h3>
                <div className="h-8 w-8 rounded-full bg-hackathon-purple/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-hackathon-purple" />
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  "24-hour intense hackathon experience",
                  "Prize pool worth ₹50,000/-",
                  "Expert mentorship and guidance",
                  "Networking opportunities",
                  "Certificates for all participants",
                  "Exciting swag and goodies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-hackathon-purple to-hackathon-pink flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
