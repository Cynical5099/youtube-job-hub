import { Play } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 animate-scale-in">
            <Play className="w-8 h-8 text-primary fill-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why YouTube Jobs?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            YouTube isn't just for creators — it's powered by real people who review videos, 
            manage brand campaigns, test features, and support creative projects. 
            <span className="block mt-4 font-semibold text-foreground">
              Apply today to get notified when roles open that match your interests.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
