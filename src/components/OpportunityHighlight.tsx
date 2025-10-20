import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Globe, Heart, DollarSign } from "lucide-react";

const OpportunityHighlight = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Work Remotely · Get Paid for What You Love · Be Part of the Creator World
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center gap-3 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Work From Anywhere</h3>
                <p className="text-muted-foreground text-sm">Remote opportunities worldwide</p>
              </div>
              
              <div className="flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Do What You Love</h3>
                <p className="text-muted-foreground text-sm">Turn passion into profession</p>
              </div>
              
              <div className="flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Join the Community</h3>
                <p className="text-muted-foreground text-sm">Connect with creators globally</p>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-background border-primary/20 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-full">
                <DollarSign className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-xl font-bold text-primary">Payment Received</span>
              </div>
              
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-foreground">
                  $372.80
                </p>
                <p className="text-lg text-muted-foreground">
                  Content Review for 3 Channels Completed
                </p>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-[0_4px_14px_0_hsl(var(--shadow-red)/0.4)] hover:shadow-[0_6px_20px_0_hsl(var(--shadow-red)/0.5)] transition-all duration-300 hover:scale-105 mt-4"
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
