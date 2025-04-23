import { Code2, FileCode, Layers, Lightbulb, Shapes, Zap, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ChallengesSection() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const challenges = [
    {
      title: "Future of Society",
      description: "EdTech - Innovations in education and learning\nTransform the way we learn and teach through technology, making education more accessible, engaging, and effective for all.\n\nHealthTech / MedTech - Solutions for healthcare and wellness\nRevolutionize healthcare delivery and patient care through innovative digital solutions and smart medical technologies.\n\nAgriTech / FoodTech - Smart agriculture and food innovation\nModernize farming practices and food systems using technology to ensure sustainable food production and distribution.\n\nGovTech - Better governance and public services\nEnhance public service delivery and government operations through digital transformation and smart solutions.\n\nLegalTech - Simplifying legal systems and access to justice\nMake legal services more accessible and efficient through technology-driven solutions and innovations.",
      icon: <FileCode className="w-6 h-6 text-hackathon-pink" />,
      color: "from-hackathon-pink/20 to-hackathon-pink/5",
      delay: 0,
    },
    {
      title: "Smart Business & Finance",
      description: "FinTech - Banking, payments, and financial inclusion\nRevolutionize financial services through digital innovation, making banking and payments more accessible and efficient for everyone.\n\nInsurTech - Tech for insurance and risk management\nTransform the insurance industry with smart solutions that simplify coverage, automate claims, and enhance risk assessment.\n\nRetailTech - Future of shopping and e-commerce\nReshape retail experiences through digital transformation, connecting businesses with customers in innovative ways.\n\nAdTech / MarTech - Marketing and customer experience solutions\nCreate cutting-edge marketing technologies that deliver personalized experiences and drive customer engagement.\n\nHRTech - Hiring, upskilling, and employee engagement\nModernize human resources with tech solutions that streamline recruitment, enhance training, and improve workplace satisfaction.",
      icon: <Lightbulb className="w-6 h-6 text-hackathon-yellow" />,
      color: "from-hackathon-yellow/20 to-hackathon-yellow/5",
      delay: 0.1,
    },
    {
      title: "Sustainable Planet",
      description: "CleanTech / GreenTech - Renewable energy and eco-solutions\nDrive environmental sustainability through innovative clean technologies and renewable energy solutions that reduce carbon footprint and promote eco-friendly practices.\n\nAgriTech - Sustainable farming and agri-automation\nTransform agriculture with smart technologies that enhance productivity while preserving natural resources and promoting sustainable farming practices.\n\nMobilityTech / AutoTech - Smart transport and EV innovations\nRevolutionize transportation through electric vehicles and smart mobility solutions that reduce emissions and improve urban connectivity.\n\nPropTech - Smart buildings and sustainable urban development\nCreate intelligent building solutions and urban development technologies that promote sustainability and enhance quality of life in cities.",
      icon: <Zap className="w-6 h-6 text-hackathon-green" />,
      color: "from-hackathon-green/20 to-hackathon-green/5",
      delay: 0.2,
    },
    {
      title: "Deep Tech & Innovation",
      description: "BioTech - Genetics, pharmaceuticals, and life sciences\nAdvance healthcare and scientific research through innovative biotechnology solutions, from genetic engineering to drug discovery and personalized medicine.\n\nSpaceTech - Space exploration and satellite tech\nPush the boundaries of space technology with innovations in satellite communications, space exploration, and earth observation systems.\n\nCyberTech - Cybersecurity and digital safety\nProtect digital assets and privacy through advanced cybersecurity solutions, ensuring safe and secure digital environments.\n\nGameTech - Gaming, AR/VR, and immersive tech\nCreate immersive experiences through cutting-edge gaming technology, augmented reality, and virtual reality innovations.\n\nFashionTech - Wearables and smart fashion\nRevolutionize the fashion industry with smart textiles, wearable technology, and sustainable fashion solutions.\n\nTravelTech - Tech-driven tourism and logistics\nTransform travel and tourism through innovative technology solutions that enhance experiences and streamline logistics.",
      icon: <Layers className="w-6 h-6 text-hackathon-purple" />,
      color: "from-hackathon-purple/20 to-hackathon-purple/5",
      delay: 0.3,
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

        {/* New Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 glass rounded-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              Challenge Resources
            </h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-hackathon-pink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h4 className="text-white font-medium">Project Presentation Template</h4>
                  <p className="text-white/70 text-sm">Download the template for your project presentation</p>
                </div>
              </div>
              <a 
  href="/presentation-template.pptx" 
  download="presentation-template.pptx"
  className="px-4 py-2 rounded-lg bg-hackathon-pink/20 hover:bg-hackathon-pink/30 text-hackathon-pink text-sm font-medium transition-colors"
>
  Download Template
</a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
