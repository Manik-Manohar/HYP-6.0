import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, QrCode } from "lucide-react";

export function RegisterSection() {
  const { toast } = useToast();

  const handleDevpostRedirect = () => {
    toast({
      title: "Redirecting to Devpost",
      description: "You will be redirected to Devpost for registration.",
    });
    // Note: Replace this URL with the actual Devpost registration URL when available
    window.open("https://devpost.com", "_blank");
  };

  return (
    <section id="register" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-hackathon-purple/5">
      <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-hackathon-green/30 bg-hackathon-green/10 text-hackathon-green text-sm font-medium mb-6">
            Registration Open
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
            Register for Hack Your Path 6.0
          </h2>
          <p className="text-white/70 text-lg">
            Join us on May 9th & 10th, 2025 at Activity Block, HITAM for an amazing hackathon experience!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Registration Details</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>HITAM Students: ₹600 per team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>Other College Students: ₹1000 per team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>Maximum 4 members per team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hackathon-purple">•</span>
                    <span>All team members must be from the same college</span>
                  </li>
                </ul>
                <Button
                  onClick={handleDevpostRedirect}
                  className="mt-6 w-full button-gradient"
                >
                  Register on Devpost
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-32 h-32 text-gray-800" />
                  <span className="sr-only">Scan QR code to register</span>
                </div>
                <p className="text-white/70 text-sm text-center">
                  Scan the QR code to register on Devpost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
