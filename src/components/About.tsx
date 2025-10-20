import { Play } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-2 sm:mb-4 animate-scale-in">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-primary fill-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-2">
            Why YouTube Jobs?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            YouTube isn't just for creators — it's powered by real people who review videos, 
            manage brand campaigns, test features, and support creative projects. 
            <span className="block mt-3 sm:mt-4 font-semibold text-foreground">
              Apply today to get notified when roles open that match your interests.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
