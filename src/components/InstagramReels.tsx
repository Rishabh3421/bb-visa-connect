import { useState } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InstagramReels = () => {
  const [currentReel, setCurrentReel] = useState(0);

  // Sample Instagram reels data - replace with actual Instagram content
  const instagramReels = [
    {
      id: 1,
      title: "Canada Student Visa Success Story",
      description: "Watch how we helped Priya get her Canadian study permit in just 45 days!",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      views: "2.5K",
      likes: "156",
      category: "Success Story"
    },
    {
      id: 2,
      title: "Australia PR Process Explained",
      description: "Complete guide to Australian Permanent Residency - points system, requirements & timeline",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
      views: "4.2K",
      likes: "298",
      category: "Guide"
    },
    {
      id: 3,
      title: "UK Work Visa Requirements 2024",
      description: "Everything you need to know about UK work visas and skilled worker requirements",
      thumbnail: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
      views: "3.8K",
      likes: "203",
      category: "Information"
    },
    {
      id: 4,
      title: "USA F1 Visa Interview Tips",
      description: "Expert tips to ace your F1 visa interview with confidence and preparation",
      thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      views: "5.1K",
      likes: "387",
      category: "Tips"
    },
    {
      id: 5,
      title: "New Zealand Immigration Updates",
      description: "Latest changes in New Zealand immigration policies and opportunities",
      thumbnail: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop",
      views: "1.9K",
      likes: "142",
      category: "Updates"
    }
  ];

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/bbimmigration56", "_blank");
  };

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % instagramReels.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + instagramReels.length) % instagramReels.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Follow Us on <span className="text-gradient-gold">Instagram</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Stay updated with the latest immigration news, success stories, and expert tips from Bridge for Borders Immigration
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-3 transition-smooth hover:shadow-floating"
              onClick={handleInstagramClick}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow @bbimmigration56
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Posts</div>
            </div>
          </div>
        </div>

        {/* Featured Reel */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="gradient-card shadow-floating overflow-hidden animate-scale-in">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Reel Thumbnail */}
              <div className="relative group">
                <div
                  className="aspect-[9/16] md:aspect-square bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${instagramReels[currentReel].thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-smooth"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth cursor-pointer">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <div className="flex items-center gap-1 text-white text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Play className="h-3 w-3" />
                      {instagramReels[currentReel].views}
                    </div>
                    <div className="flex items-center gap-1 text-white text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      ❤️ {instagramReels[currentReel].likes}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-gold text-white">
                      {instagramReels[currentReel].category}
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  {instagramReels[currentReel].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {instagramReels[currentReel].description}
                </p>
                
                <div className="flex gap-3 mb-6">
                  <Button
                    onClick={prevReel}
                    variant="outline"
                    size="sm"
                    className="px-4"
                  >
                    ← Previous
                  </Button>
                  <Button
                    onClick={nextReel}
                    variant="outline"
                    size="sm"
                    className="px-4"
                  >
                    Next →
                  </Button>
                </div>
                
                <Button
                  className="gradient-primary text-white font-semibold hover:shadow-floating transition-smooth w-fit"
                  onClick={handleInstagramClick}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Watch on Instagram
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Reel Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {instagramReels.map((reel, index) => (
            <Card
              key={reel.id}
              className={`cursor-pointer transition-smooth hover-lift ${
                index === currentReel ? 'ring-2 ring-primary shadow-gold' : 'hover:shadow-card'
              }`}
              onClick={() => setCurrentReel(index)}
            >
              <div className="relative">
                <div
                  className="aspect-square bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${reel.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-smooth rounded-t-lg"></div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {reel.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex justify-between items-center text-white text-xs">
                      <span className="flex items-center gap-1">
                        <Play className="h-3 w-3" />
                        {reel.views}
                      </span>
                      <span>❤️ {reel.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                  {reel.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {reel.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15K+</div>
              <div className="text-muted-foreground">Instagram Followers</div>
              <div className="text-sm text-muted-foreground">Growing community of immigration aspirants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Educational Posts</div>
              <div className="text-sm text-muted-foreground">Regular updates and immigration tips</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Success Stories</div>
              <div className="text-sm text-muted-foreground">Real client testimonials and journeys</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;