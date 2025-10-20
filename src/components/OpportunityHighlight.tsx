import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Globe, Heart, DollarSign } from "lucide-react";

const OpportunityHighlight = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-2 leading-tight">
              Work Remotely · Get Paid for What You Love · Be Part of the Creator World
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-8">
              <div className="flex flex-col items-center gap-2 sm:gap-3 animate-fade-in px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">Work From Anywhere</h3>
                <p className="text-muted-foreground text-sm">Remote opportunities in US</p>
              </div>
              
              <div className="flex flex-col items-center gap-2 sm:gap-3 animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">Do What You Love</h3>
                <p className="text-muted-foreground text-sm">Turn passion into profession</p>
              </div>
              
              <div className="flex flex-col items-center gap-2 sm:gap-3 animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">Join the Community</h3>
                <p className="text-muted-foreground text-sm">Connect with creators</p>
              </div>
            </div>
          </div>
          
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 via-background to-background border-primary/20 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-primary/10 rounded-full">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                <span className="text-base sm:text-xl font-bold text-primary">Payment Received</span>
              </div>
              
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  $372.80
                </p>
                <p className="text-base sm:text-lg text-muted-foreground px-4">
                  Content Review for 3 Channels Completed
                </p>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-6 rounded-full shadow-[0_4px_14px_0_hsl(var(--shadow-red)/0.4)] hover:shadow-[0_6px_20px_0_hsl(var(--shadow-red)/0.5)] transition-all duration-300 hover:scale-105 active:scale-95 mt-4 touch-manipulation text-base sm:text-lg"
              >
                <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                  Apply Now for YouTube Jobs →
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpportunityHighlight;
