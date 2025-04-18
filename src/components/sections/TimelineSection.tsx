
import { CalendarClock, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function TimelineSection() {
  const timelineEvents = [
    {
      date: "May 20 • 9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address, introduction to the hackathon, and keynote speeches.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 20 • 11:00 AM",
      title: "Team Formation & Ideation",
      description: "Form your teams and start brainstorming your project ideas.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 20 • 2:00 PM",
      title: "Hacking Begins",
      description: "Start building your projects with the help of mentors and workshops.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 21 • All Day",
      title: "Development & Workshops",
      description: "Continue working on your projects. Attend workshops and mentorship sessions.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 22 • 10:00 AM",
      title: "Final Submissions",
      description: "Submit your projects for judging by the deadline.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 22 • 2:00 PM",
      title: "Project Presentations",
      description: "Present your projects to judges and other participants.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 22 • 5:00 PM",
      title: "Awards Ceremony",
      description: "Announcement of winners and prize distribution.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
  ];

  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-hackathon-purple/5">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-cyan/30 bg-hackathon-cyan/10 text-hackathon-cyan text-sm font-medium mb-6">
            Event Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            Hackathon Timeline
          </h2>
          <p className="text-white/70 text-lg">
            Mark your calendars for 48 hours of coding, learning, and innovation. Here's what to expect during the event.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative mt-20">
          <div className="absolute left-[19px] top-4 bottom-0 w-px bg-gradient-to-b from-hackathon-purple to-hackathon-pink/10 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-16"
              >
                <div className="hidden md:block absolute left-0 top-1.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-hackathon-purple to-hackathon-pink flex items-center justify-center shadow-glow">
                    {event.icon}
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                    <div className="flex items-center gap-2 md:hidden mb-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-hackathon-purple to-hackathon-pink flex items-center justify-center shadow-glow">
                        {event.icon}
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon, border-hackathon-purple/30 bg-hackathon-purple/10 text-hackathon-purple text-sm font-medium">
                      <Clock className="w-3 h-3 mr-1.5" />
                      {event.date}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  </div>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
