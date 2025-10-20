import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-youtube-jobs.jpg";

const Hero = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-background">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="YouTube creative work environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Turn Your Passion for YouTube Into a Real Job 
            <span className="inline-block ml-3 animate-bounce">🎥</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get paid for creative work — from content reviewing to brand collaborations. 
            <span className="font-semibold text-foreground"> No experience needed.</span>
          </p>
          
          <div className="flex flex-col items-center gap-6 pt-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[0_4px_14px_0_hsl(var(--shadow-red)/0.4)] hover:shadow-[0_6px_20px_0_hsl(var(--shadow-red)/0.5)] transition-all duration-300 hover:scale-105"
            >
              <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now for YouTube Jobs →
              </a>
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Fast Application</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>No Resume</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
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
