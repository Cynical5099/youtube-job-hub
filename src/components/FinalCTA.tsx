import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const FinalCTA = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2 leading-tight">
            Start Your YouTube Journey Today
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground/80 px-4">
            Spots fill fast — apply to get notified first.
          </p>
          
          {/* US Only Notice */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/20 border border-primary/40 rounded-full">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            <span className="text-sm sm:text-base font-semibold text-primary-foreground">Available for US Residents Only 🇺🇸</span>
          </div>
          
          <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-full shadow-[0_4px_14px_0_hsl(var(--shadow-red)/0.4)] hover:shadow-[0_6px_20px_0_hsl(var(--shadow-red)/0.5)] transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
            >
              <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3">
                Apply for YouTube Jobs
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-secondary-foreground/70 px-4">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="text-xs sm:text-sm md:text-base text-center">
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
