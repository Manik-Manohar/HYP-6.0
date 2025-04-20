import { Trophy, Gift, Award } from "lucide-react";
import { motion } from "framer-motion";

export function PrizesSection() {
  const prizes = [
    {
      position: "1",
      title: "20,000/-",
      description: "The winning team will receive a substantial cash prize and recognition.",
      icon: <Trophy className="w-8 h-8 text-hackathon-yellow" />,
      color: "from-yellow-500 to-orange-500",
      delay: 0,
    },
    {
      position: "2",
      title: "10,000/-",
      description: "Runner-up teams will be awarded with exciting cash prizes.",
      icon: <Award className="w-8 h-8 text-hackathon-purple" />,
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      position: "3",
      title: "5,000/-",
      description: "Third place teams will receive special recognition and prizes.",
      icon: <Gift className="w-8 h-8 text-hackathon-blue" />,
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
  ];

  return (
    <section id="prizes" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-yellow/30 bg-hackathon-yellow/10 text-hackathon-yellow text-sm font-medium mb-6">
            Win Big
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            Prize Pool of ₹50,000/-
          </h2>
          <p className="text-white/70 text-lg">
            Compete for amazing prizes and recognition in this exciting hackathon!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: prize.delay }}
              className="relative prize-card overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${prize.color} opacity-20 rounded-bl-[100px]`}></div>
              
              <div className="absolute -top-10 -right-10 w-24 h-24 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-80 rounded-full blur-xl`}></div>
                <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${prize.color}`}>
                  <span className="text-white font-bold text-xl">{prize.position}</span>
                </div>
              </div>
              
              <div className="mb-6 flex items-center">
                {prize.icon}
                <h3 className="text-2xl font-bold text-white ml-3">{prize.title}</h3>
              </div>
              
              <p className="text-white/70 mb-4">{prize.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            All participants will receive certificates and amazing networking opportunities.
          </p>
          <a href="#register" className="button-gradient">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
