import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-youtube-jobs.jpg";

const Hero = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-background">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="YouTube creative work environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* US Only Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border border-primary/30 rounded-full animate-fade-in">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base font-semibold text-foreground">US Residents Only 🇺🇸</span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight px-2">
            Turn Your Passion for YouTube Into a Real Job 
            <span className="inline-block ml-2 sm:ml-3 animate-bounce">🎥</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Get paid for creative work — from content reviewing to brand collaborations. 
            <span className="font-semibold text-foreground"> No experience needed.</span>
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:gap-6 pt-4">
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-full shadow-[0_4px_14px_0_hsl(var(--shadow-red)/0.4)] hover:shadow-[0_6px_20px_0_hsl(var(--shadow-red)/0.5)] transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
            >
              <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now for YouTube Jobs →
              </a>
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>Fast Application</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>No Resume</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>Instant Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
