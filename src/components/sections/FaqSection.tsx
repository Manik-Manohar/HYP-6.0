import { ChevronDown, MessagesSquare } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
};

function FAQItem({ question, answer, isOpen, onClick, delay }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl overflow-hidden"
    >
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/70 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 pt-0 text-white/70">{answer}</div>
      </div>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can participate in Hack Your Path 6.0?",
      answer:
        "Hack Your Path 6.0 is open to all college students. Teams must be from the same college to participate.",
    },
    {
      question: "How many people can be on a team?",
      answer:
        "Teams can have a maximum of 4 members. All team members must be from the same college.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The registration fee varies: For HITAM students, it's ₹600 per team. For students from other colleges, it's ₹1000 per team.",
    },
    {
      question: "When is the registration deadline?",
      answer:
        "Registration closes on May 1st, 2025. Make sure to complete your registration before this date to secure your spot.",
    },
    {
      question: "How do I register for the hackathon?",
      answer:
        "Registration is done through Unstop. Scan the QR code on our website to access the registration page.",
    },
    {
      question: "Where will the hackathon be held?",
      answer:
        "The hackathon will be held at the Activity Block, HITAM (Hyderabad Institute of Technology and Management), Gowdavelly, Near Kompally, Medchal, Hyderabad.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, student ID, and any other tools you'll need for development. We'll provide the hacking space and necessary facilities.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-hackathon-purple/5 to-background">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-cyan/30 bg-hackathon-cyan/10 text-hackathon-cyan text-sm font-medium mb-6"
          >
            Frequently Asked Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-heading"
          >
            Got Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed"
          >
            Find answers to common questions about Hack Your Path 6.0. Registration closes on May 1st, 2025.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-white/70 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-white/70">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
