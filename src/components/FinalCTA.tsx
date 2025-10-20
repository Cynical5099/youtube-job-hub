import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const FinalCTA = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Start Your YouTube Journey Today
          </h2>
          
          <p className="text-xl md:text-2xl text-secondary-foreground/80">
            Spots fill fast — apply to get notified first.
          </p>
          
          <div className="pt-6 space-y-6">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 rounded-full shadow-[0_4px_14px_0_hsl(var(--shadow-red)/0.4)] hover:shadow-[0_6px_20px_0_hsl(var(--shadow-red)/0.5)] transition-all duration-300 hover:scale-105"
            >
              <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Apply for YouTube Jobs
                <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-secondary-foreground/70">
              <Mail className="w-5 h-5" />
              <p className="text-sm md:text-base">
                We'll reach out by email when openings match your profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
