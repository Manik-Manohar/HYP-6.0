import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Md Waseel",
      role: "Lead",
      image: "https://ui-avatars.com/api/?name=Md+Waseel&background=8B5CF6&color=fff&size=200",
      bio: "Leading the Hack Your Path 6.0 with vision and expertise.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0,
    },
    {
      name: "Mahesh Kumar Pandey",
      role: "Co-Lead",
      image: "https://ui-avatars.com/api/?name=Mahesh+Kumar+Pandey&background=EC4899&color=fff&size=200",
      bio: "Supporting the team with leadership and technical expertise.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.1,
    },
    {
      name: "Manik Manohar",
      role: "R&D",
      image: "https://ui-avatars.com/api/?name=Manik+Manohar&background=3B82F6&color=fff&size=200",
      bio: "Driving research and development initiatives for the hackathon.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.2,
    },
    {
      name: "Amaan",
      role: "HR",
      image: "https://ui-avatars.com/api/?name=Amaan&background=10B981&color=fff&size=200",
      bio: "Managing human resources and team coordination.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.3,
    },
    {
      name: "Harshith Reddy",
      role: "Treasurer",
      image: "https://ui-avatars.com/api/?name=Harshith+Reddy&background=F59E0B&color=fff&size=200",
      bio: "Managing finances and budget for the hackathon.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0,
    },
    {
      name: "Tej Reddy",
      role: "Tech Lead",
      image: "https://ui-avatars.com/api/?name=Tej+Reddy&background=06B6D4&color=fff&size=200",
      bio: "Leading technical initiatives and development.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.1,
    },
    {
      name: "Ganesh Pandey",
      role: "Tech Lead",
      image: "https://ui-avatars.com/api/?name=Ganesh+Pandey&background=8B5CF6&color=fff&size=200",
      bio: "Leading technical initiatives and development.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.2,
    },
    {
      name: "K Navya",
      role: "PR",
      image: "https://ui-avatars.com/api/?name=K+Navya&background=EC4899&color=fff&size=200",
      bio: "Managing public relations and communications.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.3,
    },
    {
      name: "Riya",
      role: "PR",
      image: "https://ui-avatars.com/api/?name=Riya&background=3B82F6&color=fff&size=200",
      bio: "Managing public relations and communications.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.4,
    },
    {
      name: "Habeeb",
      role: "Social Media Manager",
      image: "https://ui-avatars.com/api/?name=Habeeb&background=10B981&color=fff&size=200",
      bio: "Managing social media presence and engagement.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0,
    },
    {
      name: "Saketh",
      role: "Social Media Manager",
      image: "https://ui-avatars.com/api/?name=Saketh&background=F59E0B&color=fff&size=200",
      bio: "Managing social media presence and engagement.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.1,
    },
    {
      name: "Om Kumar Gupta",
      role: "Logistics",
      image: "https://ui-avatars.com/api/?name=Om+Kumar+Gupta&background=06B6D4&color=fff&size=200",
      bio: "Managing logistics and event coordination.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      delay: 0.2,
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-hackathon-purple/5">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-blue/30 bg-hackathon-blue/10 text-hackathon-blue text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            The Minds Behind Hack Your Path 6.0
          </h2>
          <p className="text-white/70 text-lg">
            Our dedicated team works tirelessly to create an amazing hackathon experience for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="team-card"
            >
              <div className="avatar-glow mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-white/10"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <div className="text-sm font-medium text-hackathon-purple mb-3">{member.role}</div>
              
              <p className="text-white/70 text-sm mb-4">{member.bio}</p>
              
              <div className="flex items-center justify-center gap-3 mt-auto">
                <a href={member.socials.linkedin} className="text-white/60 hover:text-white/90 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href={member.socials.twitter} className="text-white/60 hover:text-white/90 transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href={member.socials.github} className="text-white/60 hover:text-white/90 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
