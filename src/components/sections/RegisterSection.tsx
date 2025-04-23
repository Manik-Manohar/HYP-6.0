import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, QrCode, AlertCircle } from "lucide-react";

export function RegisterSection() {
  const { toast } = useToast();

  const handleUnstopRedirect = () => {
    toast({
      title: "Redirecting to Unstop",
      description: "You will be redirected to Unstop for registration.",
    });
    window.open("https://unstop.com/p/hack-your-path-60-hyderabad-institute-of-technology-and-management-hitm-hyderabad-1466283?lb=UTKXcb2G&utm_medium=Share&utm_source=shortUrl", "_blank");
  };

  return (
    <section id="register" className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-background to-hackathon-purple/5">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-blue/30 bg-hackathon-blue/10 text-hackathon-blue text-sm font-medium mb-6"
          >
            Registration Open
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-heading"
          >
            Hack Your Path 6.0
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-8"
          >
            Join us for a 24-hour hackathon organized by the HITAM Hackathon Club. Registration closes on May 1st, 2025.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-6 w-full mb-8"
          >
            <div className="flex items-center gap-2 text-hackathon-yellow mb-4">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Registration Deadline: HITAMights - 29 April, 2025 | Others - 1 May, 2025</h3>
            </div>
            <ul className="text-left space-y-2 text-white/70">
              <li>• All team members must be from the same college</li>
              <li>• Team size: 2-4 members</li>
              <li>• Registration starts at 9 AM, May 9</li>
              <li>• Bring your college ID cards for verification</li>
            </ul>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="https://unstop.com/p/hack-your-path-60-hyderabad-institute-of-technology-and-management-hitm-hyderabad-1466283?lb=UTKXcb2G&utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            rel="noopener noreferrer"
            className="button-gradient text-lg px-8 py-3"
            onClick={() => {
              toast({
                title: "Redirecting to Unstop",
                description: "You will be redirected to register on Unstop",
              });
            }}
          >
            Register on Unstop
          </motion.a>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Registration Details</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>Registration Fee: ₹1000 per team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>Maximum 4 members per team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>All team members must be from the same college</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>Registration closes on May 1st, 2025</span>
                  </li>
                </ul>
                <Button
                  onClick={handleUnstopRedirect}
                  className="mt-6 w-full button-gradient"
                >
                  Register on Unstop
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mb-4">
                  <img 
                    src="/images/qr-code.png" 
                    alt="Registration QR Code"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-white/70 text-sm text-center">
                  Scan the QR code to register on Unstop
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
