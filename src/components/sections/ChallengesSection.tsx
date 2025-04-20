import { Code2, FileCode, Layers, Lightbulb, Shapes, Zap, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ChallengesSection() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const challenges = [
    {
      title: "Agriculture",
      description: "Problem Statement 1: India's 120 million smallholder farmers often struggle with limited access to formal credit systems, particularly those in remote areas. This severely impacts their ability to invest in quality seeds, fertilizers, and essential equipment, hindering agricultural productivity and sustainability. Design a tech-based, scalable solution that connects these farmers with financial institutions in a reliable, accessible, and transparent manner to empower their growth.\n\nProblem Statement 2: Rural and semi-rural farmers frequently lack access to localized, real-time information essential for smart farming. From region-specific crop advisories and weather forecasts to market prices and pest alerts, the absence of timely and accessible data creates uncertainty. Develop a solution that delivers hyperlocal, real-time agricultural knowledge in an easily digestible form to help smallholder farmers make informed decisions and improve their yield sustainably.",
      icon: <FileCode className="w-6 h-6 text-hackathon-pink" />,
      color: "from-hackathon-pink/20 to-hackathon-pink/5",
      delay: 0,
    },
    {
      title: "Education",
      description: "Problem Statement 1: Overcrowded classrooms, outdated teaching methods, and limited resources make it difficult for teachers in India's low-income and government schools to deliver quality education. These challenges often result in disengaged learners and high dropout rates. Create an inclusive, teacher-friendly solution that supports personalized learning, simplifies teaching processes, and fosters better student engagement without adding extra burden on educators.\n\nProblem Statement 2: Underprivileged students frequently lack academic support outside school hours due to financial constraints, illiterate guardians, and a lack of structured environments for studying. This gap widens learning disparities and impacts long-term academic outcomes. Build a tech-inclusive, community-oriented solution that provides affordable and accessible after-school learning support to bridge this educational divide.",
      icon: <Lightbulb className="w-6 h-6 text-hackathon-yellow" />,
      color: "from-hackathon-yellow/20 to-hackathon-yellow/5",
      delay: 0.1,
    },
    {
      title: "Healthcare",
      description: "Problem Statement 1: In many rural and underserved communities, people lack awareness of healthcare programs and face long delays in accessing medical help. These issues result in worsening health conditions and higher treatment costs. Propose a solution that ensures early diagnosis, awareness of healthcare schemes, and better connectivity between patients and medical professionals.\n\nProblem Statement 2: Frontline health workers are the backbone of last-mile healthcare delivery, yet they often operate with minimal tools, poor digital support, and limited training. Build a tech-enabled platform that enhances their capacity to deliver effective, informed, and personalized care, even in low-resource environments, thereby improving health outcomes at scale.",
      icon: <Zap className="w-6 h-6 text-hackathon-green" />,
      color: "from-hackathon-green/20 to-hackathon-green/5",
      delay: 0.2,
    },
    {
      title: "Environment",
      description: "Problem Statement 1: Landfills are major contributors to methane emissions due to unsegregated organic waste decomposition. Poor waste management practices further compound this issue, contributing to climate change and hazardous living conditions. Innovate a smart waste management system that facilitates segregation, minimizes landfill dependency, and reduces methane emissions at the source.\n\nProblem Statement 2: Rampant water pollution caused by industrial waste, domestic runoff, and chemical discharge endangers aquatic life and human health. Design an integrated system for real-time monitoring, community-based alerts, or industrial compliance tracking that helps manage and prevent pollution, thus preserving clean water for present and future use.",
      icon: <Layers className="w-6 h-6 text-hackathon-purple" />,
      color: "from-hackathon-purple/20 to-hackathon-purple/5",
      delay: 0.3,
    },
    {
      title: "Open Innovation",
      description: "This category is open for teams who want to tackle problems beyond the listed themes. It could be anything from financial technology, urban mobility, AI in governance, social inclusion, cybersecurity, to smart infrastructure. The goal is to encourage bold, original ideas that address real-world issues with scalable, tech-driven solutions.",
      icon: <Sparkles className="w-6 h-6 text-hackathon-blue" />,
      color: "from-hackathon-blue/20 to-hackathon-blue/5",
      delay: 0.1,
    },
  ];

  return (
    <section id="challenges" className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-pink/30 bg-hackathon-pink/10 text-hackathon-pink text-sm font-medium mb-6"
          >
            Hackathon Tracks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-heading"
          >
            Challenge Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed"
          >
            Welcome to Hack Your Path 6.0, a national-level hackathon by HITAM Hackathon Club (HHC). 
            Participants are invited to create scalable, real-world solutions across major themes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: challenge.delay }}
              className="glass rounded-xl p-8 card-hover hover:scale-[1.02] transition-transform duration-300"
            >
              <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-6 shadow-lg`}>
                {challenge.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
              <button
                onClick={() => setSelectedTheme(challenge.title)}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white/90"
              >
                View Problem Statements
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {selectedTheme && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 glass rounded-xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedTheme} - Problem Statements
              </h3>
              <button
                onClick={() => setSelectedTheme(null)}
                className="text-white/70 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed">
              {challenges.find(c => c.title === selectedTheme)?.description.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Teams will build impactful tech that addresses ground-level issues in society.
            Choose your track and start building something amazing!
          </p>
          <a 
            href="#register" 
            className="button-gradient inline-flex items-center px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-hackathon-purple/20"
          >
            Accept the Challenge
          </a>
        </motion.div>
      </div>
    </section>
  );
}
