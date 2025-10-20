import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Users, 
  Music, 
  Sparkles, 
  Lightbulb, 
  TrendingUp,
  Eye,
  MessageSquare 
} from "lucide-react";

const positions = [
  {
    title: "Content Reviewer",
    description: "Watch and analyze video uploads for quality.",
    icon: Eye,
  },
  {
    title: "Community Engagement Assistant",
    description: "Help manage creator and audience interactions.",
    icon: MessageSquare,
  },
  {
    title: "Playlist Curator",
    description: "Organize music and entertainment playlists by theme.",
    icon: Music,
  },
  {
    title: "YouTube Shorts Reviewer",
    description: "Evaluate short-form videos for brand fit.",
    icon: Video,
  },
  {
    title: "Creative Research Assistant",
    description: "Help creators brainstorm video ideas.",
    icon: Lightbulb,
  },
  {
    title: "Channel Support Agent",
    description: "Support YouTube channels with growth insights.",
    icon: TrendingUp,
  },
  {
    title: "Brand Campaign Coordinator",
    description: "Assist with branded content campaigns.",
    icon: Sparkles,
  },
  {
    title: "Audience Insights Analyst",
    description: "Help analyze viewer engagement patterns.",
    icon: Users,
  },
];

const FeaturedPositions = () => {
  const applyUrl = "https://uplevelrewarded.com/aff_c?offer_id=1372&aff_id=21664";

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities across YouTube's creative ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {positions.map((position, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[0_10px_15px_-3px_hsl(var(--shadow-red)/0.2)] transition-all duration-300 hover:scale-105 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <position.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{position.title}</CardTitle>
                <CardDescription className="text-sm">
                  {position.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                    💼 Apply for Openings
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPositions;
