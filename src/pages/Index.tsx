import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedPositions from "@/components/FeaturedPositions";
import OpportunityHighlight from "@/components/OpportunityHighlight";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FeaturedPositions />
      <OpportunityHighlight />
      <FinalCTA />
    </main>
  );
};

export default Index;
