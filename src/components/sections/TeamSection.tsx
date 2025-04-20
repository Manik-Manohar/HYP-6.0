import { GithubIcon, LinkedinIcon, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Md Waseel",
      role: "Lead",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHQ1sudcbHOuA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728471229674?e=1750896000&v=beta&t=F0JmNs7Vww3-5_OUygk-4SegkQJMn7JvecKXPl6Cpkk",
      fallbackImage: "https://ui-avatars.com/api/?name=Md+Waseel&background=8B5CF6&color=fff&size=200",
      bio: "Leading the Hack Your Path 6.0 with vision and expertise.",
      socials: {
        linkedin: "https://www.linkedin.com/in/mdwaseel/",
        github: "#",
        instagram: "#"
      },
      delay: 0,
    },
    {
      name: "Mahesh Kumar Pandey",
      role: "Co-Lead",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHc5x3TFDAabQ/profile-displayphoto-shrink_800_800/B56ZZHdi8_GsAc-/0/1744955651183?e=1750896000&v=beta&t=Xw4ZASV8CWfSkN5krjw1ATKD1XU8s3ULqKzpSRgSo6E",
      fallbackImage: "https://ui-avatars.com/api/?name=Mahesh+Kumar+Pandey&background=EC4899&color=fff&size=200",
      bio: "Supporting the team with leadership and technical expertise.",
      socials: {
        linkedin: "https://www.linkedin.com/in/mahesh-pandey-6a0baa265/",
        github: "https://github.com/Mp17082005",
        instagram: "https://www.instagram.com/mahesh_pandey.17/"
      },
      delay: 0.1,
    },
    {
      name: "Manik Manohar",
      role: "R&D",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGNGcGR3plC-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698385757860?e=1750896000&v=beta&t=CKxfX88504A9GGfJ9J2i4_yryyRmTaM5g0wjXtq-FKg",
      fallbackImage: "https://ui-avatars.com/api/?name=Manik+Manohar&background=3B82F6&color=fff&size=200",
      bio: "Driving research and development initiatives for the hackathon.",
      socials: {
        linkedin: "https://www.linkedin.com/in/manikmanohar/",
        github: "https://github.com/Manik-Manohar",
        instagram: "https://www.instagram.com/vibeswith.manik/"
      },
      delay: 0.2,
    },
    {
      name: "Amaan",
      role: "HR",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGSRlx_5HwVMw/profile-displayphoto-shrink_400_400/B56ZUxcEL0GsAg-/0/1740291196634?e=1750896000&v=beta&t=_gW8LB598Y_gTntwuVwrkFXchTdk6cMlx2ZUqOosno4",
      fallbackImage: "https://ui-avatars.com/api/?name=Amaan&background=10B981&color=fff&size=200",
      bio: "Managing human resources and team coordination.",
      socials: {
        linkedin: "https://www.linkedin.com/in/mohammed-amaan01",
        github: "https://github.com/MohammedAmaan01",
        instagram: "#"
      },
      delay: 0.3,
    },
    {
      name: "Harshith Reddy",
      role: "Treasurer",
      image: "https://media.licdn.com/dms/image/v2/D5635AQE-9DVkEgDXIw/profile-framedphoto-shrink_400_400/B56ZYtq1S2HoAg-/0/1744522925546?e=1745737200&v=beta&t=NaZytekY-iD8x3BsoHXdrx1CqAeowQwbwypuAOViJws",
      fallbackImage: "https://ui-avatars.com/api/?name=Harshith+Reddy&background=F59E0B&color=fff&size=200",
      bio: "Managing finances and budget for the hackathon.",
      socials: {
        linkedin: "https://www.linkedin.com/in/harshit-reddy-n-105ab126b/",
        github: "#",
        instagram: "https://www.instagram.com/chaos_1344/"
      },
      delay: 0,
    },
    {
      name: "Tej Reddy",
      role: "Tech Lead",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGjWRVfbxIjgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730372469496?e=1750896000&v=beta&t=KUiF7CExwa0oTM9lgI1fSqr0ubcyjEWIwwnw3M6-Vx0",
      fallbackImage: "https://ui-avatars.com/api/?name=Tej+Reddy&background=06B6D4&color=fff&size=200",
      bio: "Leading technical initiatives and development.",
      socials: {
        linkedin: "https://www.linkedin.com/in/tej-reddy-m/",
        github: "#",
        instagram: "https://www.instagram.com/incognitor_official/"
      },
      delay: 0.1,
    },
    {
      name: "Ganesh Pandey",
      role: "Tech Lead",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGvON33yM7IRQ/profile-displayphoto-shrink_800_800/B56ZY_akimGcA8-/0/1744820653229?e=1750896000&v=beta&t=utLV6wMBLx3fKWQAp01uRx5XPd0QwOu8__8e0l2JNFU",
      fallbackImage: "https://ui-avatars.com/api/?name=Ganesh+Pandey&background=8B5CF6&color=fff&size=200",
      bio: "Leading technical initiatives and development.",
      socials: {
        linkedin: "https://www.linkedin.com/in/ganesh-pandey-65127b267/",
        github: "https://github.com/ganeshpandey16",
        instagram: "https://www.instagram.com/_ganesh.pandey_/"
      },
      delay: 0.2,
    },
    {
      name: "K Navya",
      role: "PR",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGDnaDsUqZWhA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725437968088?e=1745737200&v=beta&t=pcerHxFcZxIlE28MBfym-jaWaTRaNU5XIzZoOIUIoiE",
      fallbackImage: "https://ui-avatars.com/api/?name=K+Navya&background=EC4899&color=fff&size=200",
      bio: "Managing public relations and communications.",
      socials: {
        linkedin: "https://www.linkedin.com/in/karra-sree-navya-8202a72a4/",
        github: "#",
        instagram: "https://www.instagram.com/navya_k04/"
      },
      delay: 0.3,
    },
    {
      name: "Riya",
      role: "PR",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGKFswogtuLAQ/profile-displayphoto-shrink_800_800/B56ZR5LMUUGoAc-/0/1737199765717?e=1750896000&v=beta&t=3DkqlGew2IdUalzVdfAXelEitwpfpRSAiW7B1STTX5A",
      fallbackImage: "https://ui-avatars.com/api/?name=Riya&background=3B82F6&color=fff&size=200",
      bio: "Managing public relations and communications.",
      socials: {
        linkedin: "https://www.linkedin.com/in/riya-chaurasiya-85939b28a",
        github: "https://github.com/riyadchaurasiya",
        instagram: "#"
      },
      delay: 0.4,
    },
    {
      name: "Habeeb",
      role: "Social Media Manager",
      image: "https://ui-avatars.com/api/?name=Habeeb&background=10B981&color=fff&size=200",
      fallbackImage: "https://ui-avatars.com/api/?name=Habeeb&background=10B981&color=fff&size=200",
      bio: "Managing social media presence and engagement.",
      socials: {
        linkedin: "#",
        github: "#",
        instagram: "https://www.instagram.com/heartfelt_habeeb/"
      },
      delay: 0,
    },
    {
      name: "Saketh",
      role: "Social Media Manager",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHk-jD0K0vc8g/profile-displayphoto-shrink_400_400/B56ZZR8tAaHsAg-/0/1745131590943?e=1750896000&v=beta&t=DsAQ_yZ1uwvF1h3T-JAN4Gq5WCxUtgZrlJ8oJ8YnGc0",
      fallbackImage: "https://ui-avatars.com/api/?name=Saketh&background=F59E0B&color=fff&size=200",
      bio: "Managing social media presence and engagement.",
      socials: {
        linkedin: "https://www.linkedin.com/in/saketh-emani-76aa5628b/",
        github: "#",
        instagram: "https://www.instagram.com/saketh_emani/"
      },
      delay: 0.1,
    },
    {
      name: "Om Kumar Gupta",
      role: "Logistics",
      image: "https://ui-avatars.com/api/?name=Om+Kumar+Gupta&background=06B6D4&color=fff&size=200",
      fallbackImage: "https://ui-avatars.com/api/?name=Om+Kumar+Gupta&background=06B6D4&color=fff&size=200",
      bio: "Managing logistics and event coordination.",
      socials: {
        linkedin: "#",
        github: "#",
        instagram: "https://www.instagram.com/om_2611_/"
      },
      delay: 0.2,
    },
  ];

  return (
    <section id="team" className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-background to-hackathon-purple/5">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 md:px-4 py-1 rounded-full border border-hackathon-blue/30 bg-hackathon-blue/10 text-hackathon-blue text-xs md:text-sm font-medium mb-4 md:mb-6"
          >
            Meet Our Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 gradient-heading"
          >
            The Minds Behind Hack Your Path 6.0
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed px-4 md:px-0"
          >
            Our dedicated team works tirelessly to create an amazing hackathon experience for all participants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="team-card"
            >
              <div className="avatar-glow mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-white/10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = member.fallbackImage;
                  }}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <div className="text-sm font-medium text-hackathon-purple mb-3">{member.role}</div>
              
              <p className="text-white/70 text-sm mb-4">{member.bio}</p>
              
              <div className="flex items-center justify-center gap-3 mt-auto">
                {member.socials.linkedin !== "#" && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials.instagram !== "#" && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {member.socials.github !== "#" && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
