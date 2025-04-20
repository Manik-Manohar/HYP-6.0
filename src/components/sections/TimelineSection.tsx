import { CalendarClock, Clock, Utensils, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export function TimelineSection() {
  const timelineEvents = [
    {
      date: "May 9 • 9:00 AM",
      title: "Registration Opens",
      description: "On-site registration begins. Bring your college ID cards for verification.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 9 • 10:00 AM",
      title: "Hackathon Begins",
      description: "Opening ceremony, team introductions, and start of the 24-hour coding journey.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 9 • 8:00 PM",
      title: "Dinner",
      description: "Complimentary dinner will be provided to all participants.",
      icon: <Utensils className="w-4 h-4" />,
    },
    {
      date: "May 9 • Throughout Day",
      title: "Development & Mentoring",
      description: "Teams work on their projects with support from mentors. Tea and snacks will be available at regular intervals.",
      icon: <Coffee className="w-4 h-4" />,
    },
    {
      date: "May 10 • 8:00 AM",
      title: "Breakfast",
      description: "Complimentary breakfast will be provided to all participants.",
      icon: <Utensils className="w-4 h-4" />,
    },
    {
      date: "May 10 • 1:00 PM",
      title: "Lunch",
      description: "Complimentary lunch will be provided to all participants.",
      icon: <Utensils className="w-4 h-4" />,
    },
    {
      date: "May 10 • 10:00 AM",
      title: "Project Presentations",
      description: "Teams present their projects to the judges and fellow participants.",
      icon: <CalendarClock className="w-4 h-4" />,
    },
    {
      date: "May 10 • 3:00 PM",
      title: "Prize Distribution",
      description: "Announcement of winners and distribution of prizes.",
      icon: <CalendarClock className="w-4 h-4" />,
    }
  ];

  return (
    <section id="timeline" className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-background to-hackathon-purple/5">
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
            Event Schedule
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-heading"
          >
            Hackathon Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed"
          >
            Join us for an intense 24-hour coding challenge. Food and refreshments will be provided throughout the event.
            Additional food stalls will be available nearby at minimal rates.
          </motion.p>
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
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-hackathon-purple/30 bg-hackathon-purple/10 text-hackathon-purple text-sm font-medium">
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
