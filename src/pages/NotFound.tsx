
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | HackFusion";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-hackathon-purple/10 flex items-center justify-center">
      <div className="relative w-full max-w-2xl px-6 py-12">
        <div className="absolute inset-0 bg-[url(/images/bg-pattern.svg)] bg-no-repeat bg-cover opacity-10"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-hackathon-purple/20 via-hackathon-pink/10 to-hackathon-purple/20 rounded-xl opacity-70 blur-xl"></div>
        
        <div className="relative glass rounded-xl p-8 text-center">
          <h1 className="text-8xl font-bold gradient-heading mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="button-gradient">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
