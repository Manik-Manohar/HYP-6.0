
import { Code2, FileCode, Layers, Lightbulb, Shapes, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ChallengesSection() {
  const challenges = [
    {
      title: "AI & Machine Learning",
      description: "Build intelligent applications that leverage ML/AI to solve real-world problems.",
      icon: <Lightbulb className="w-6 h-6 text-hackathon-yellow" />,
      color: "from-hackathon-yellow/20 to-hackathon-yellow/5",
      delay: 0,
    },
    {
      title: "Web3 & Blockchain",
      description: "Create decentralized applications that utilize blockchain technology.",
      icon: <Layers className="w-6 h-6 text-hackathon-purple" />,
      color: "from-hackathon-purple/20 to-hackathon-purple/5",
      delay: 0.1,
    },
    {
      title: "AR/VR Experiences",
      description: "Develop immersive augmented or virtual reality experiences.",
      icon: <Shapes className="w-6 h-6 text-hackathon-cyan" />,
      color: "from-hackathon-cyan/20 to-hackathon-cyan/5",
      delay: 0.2,
    },
    {
      title: "Sustainability Tech",
      description: "Build solutions that address environmental challenges and promote sustainability.",
      icon: <Zap className="w-6 h-6 text-hackathon-green" />,
      color: "from-hackathon-green/20 to-hackathon-green/5",
      delay: 0.3,
    },
    {
      title: "Health & Wellness",
      description: "Develop applications that improve health monitoring, accessibility, or mental wellbeing.",
      icon: <FileCode className="w-6 h-6 text-hackathon-pink" />,
      color: "from-hackathon-pink/20 to-hackathon-pink/5",
      delay: 0, 
    },
    {
      title: "Open Innovation",
      description: "Build any innovative solution that doesn't fit into the above categories.",
      icon: <Code2 className="w-6 h-6 text-hackathon-blue" />,
      color: "from-hackathon-blue/20 to-hackathon-blue/5",
      delay: 0.1,
    },
  ];

  return (
    <section id="challenges" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-pink/30 bg-hackathon-pink/10 text-hackathon-pink text-sm font-medium mb-6">
            Hackathon Tracks
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            Challenge Categories
          </h2>
          <p className="text-white/70 text-lg">
            Choose from one of our exciting challenge tracks or innovate across categories.
            Each track offers unique problems to solve and opportunities to showcase your skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: challenge.delay }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-5`}>
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{challenge.title}</h3>
              <p className="text-white/70">{challenge.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Projects will be judged on innovation, technical complexity, design, user experience, and potential impact.
          </p>
          <a href="#register" className="button-gradient">
            Accept the Challenge
          </a>
        </div>
      </div>
    </section>
  );
}
