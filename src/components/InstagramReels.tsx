import { useState } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InstagramReels = () => {
  const [currentReel, setCurrentReel] = useState(0);

  // Actual Instagram reels data (with post links)
  const instagramReels = [
    {
      id: 1,
      title: "Study in MALTA with Bridge For Borders Immigration! 🌍",
      description:
        "✅ 1-Year Tuition Fees Included • No IELTS/PTE • Gaps Accepted • High Visa Success • Offer Letter in 48 Hours • Bachelor & Master • Pay After Visa • 📍 SFO3, 2nd Floor, Happy Homes, Emperium Society, Panipat (Haryana) • ☎️ 9991740121",
      thumbnail:
        "https://scontent.cdninstagram.com/v/t51.71878-15/537502537_699335419788267_284552003477281245_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzcwNDkzMDgxMDE0MDI2NjgwNQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=xOgQLqh0evoQ7kNvwGY1Quo&_nc_oc=AdnKeFkoXnejSUNHY0kwjdquQCbOtciwDBW1k5TDnkl7mbGR4yUAbxsjqoeLRkVNekiJgPBGsoCyzjPn5xerNj-Z&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Y3drrnU0_x4HlvhzmqcM0g&oh=00_AfXjhngPgPholUhgCm53g2_bneLidsY36eMyojtEgg7L0w&oe=68AF3021",
      category: "Study Abroad",
      url: "https://www.instagram.com/p/DNqjvE3z5E1/",
    },
    {
      id: 2,
      title: "✈️🇲🇩 Study in Moldova with Work Opportunity",
      description:
        "No IELTS • Visa in ~20 days • 1-year fees included • Earn up to $1000/month • Job assistance before flying • Airport pickup & full package • 📍 SF03, 2nd Floor, Happy Homes Emporium Society, Panipat (Haryana) • ☎️ 9991740121",
      thumbnail:
        "https://scontent.cdninstagram.com/v/t51.71878-15/530392874_1291230846080971_5522276396255595804_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzY5NTkwNjcwMzc0MjI4MDg5OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=9PyPouFuAtgQ7kNvwFR311U&_nc_oc=Admo36qrHmqpavNxfe89u9eLLWQKMd-lXbvqpFZWqgMhPBNh1iYOwk0HJlsM3K5aqV3bGk8mJO9Mtfgl94y5FuYx&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Y3drrnU0_x4HlvhzmqcM0g&oh=00_AfWHBJ1_3wyMeKUp9HBmGiFkQaROy5ddDaOAhEGc98CXmg&oe=68AF5703",
      category: "Work + Study",
      url: "https://www.instagram.com/p/DNKf5C3iyTD/",
    },
    {
      id: 3,
      title: "Study in Singapore with 100% Visa Success!",
      description:
        "No IELTS • No Funds • No Upfront • 10th+ eligible • Gap up to 15 yrs • Offer in 24h • Pay After Visa • Tracks: 8m Study + 6m Internship or 6m + 6m • 📍 SF03, 2nd Floor, Happy Homes Emporium Society, Panipat (Haryana) • ☎️ 9991740121",
      thumbnail:
        "https://scontent.cdninstagram.com/v/t51.71878-15/528471905_4027548164242498_8767966962431715126_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzY5MzY4NzMzNjc4MjMzNzIyMA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=jB9NKLvWv3YQ7kNvwFUMvjl&_nc_oc=AdnzM5WMSERiMYtIGv8zfL48BxEQS5u5r25Zbzhh8ZntG6jPu0rMbbYDQEkUkbO2DWwmilMpt7_GHlr_RdOSDpf8&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Y3drrnU0_x4HlvhzmqcM0g&oh=00_AfXGPe8FeSuNCARVJbq0F51eZ3xoRozpwWyvn0QTzwD9gQ&oe=68AF385E",
      category: "Information",
      url: "https://www.instagram.com/p/DNCnRAURRTE/",
    },
    {
      id: 4,
      title: "Russia Study Visa — All-Inclusive Package",
      description:
        "Includes: 1-Year Tuition, Visa Extension, Docs Support, 3-Month Insurance, Embassy, Translations • No IELTS • No Interview • Pay After Visa • ~100% success • Gap up to 17 yrs • 📍 SF03, 2nd Floor, Happy Homes Emporium Society, Panipat (Haryana) • ☎️ 9991740121",
      thumbnail:
        "https://scontent.cdninstagram.com/v/t51.71878-15/529039552_1118516487006969_611002599966758145_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzY5MjMyNTg0ODQ1NjkxOTY5Nw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=zUCu7Qmg09gQ7kNvwG4Yeoq&_nc_oc=AdmOzNCyoFiUI9c1DSk3NUwh7eWZzJTQk72lQtLqLlNMeComxRLKLojRkbyWhROpCoJIJKpOUiDtaaaLJG0XUi6D&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Y3drrnU0_x4HlvhzmqcM0g&oh=00_AfUxDFaGfZ5wvUXSi5ZLZ98txANXAYbjAPdBNYn1KTdYzQ&oe=68AF2D78",
      category: "Package",
      url: "https://www.instagram.com/p/DM9xsvgRHqR/",
    },
    {
      id: 5,
      title: "Study in Mauritius with 100% Visa Approval!",
      description:
        "Pay After Visa • Guaranteed Job with Studies • Processing: 30–40 days • College only 1 day/week • Includes: 1-year course, tuition, visa+extension, pickup & courier • 📍 SF03, 2nd Floor, Happy Homes Emporium Society, Panipat (Haryana) • ☎️ 9991740121",
      thumbnail:
        "https://scontent.cdninstagram.com/v/t51.71878-15/526605650_1705124756869627_1088335564668809521_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzY4OTI5OTI5MzcxNTU2MTk1OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=I0Qol2wIp3wQ7kNvwH1nm7q&_nc_oc=AdmGCqRDuEF7jH9_EJAmG6G_hmJHjKQ3WnFYkcneXNkMfhJCZmnch055X118ctMFG76F7khVYWIL1s2wZIa-56Ry&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Y3drrnU0_x4HlvhzmqcM0g&oh=00_AfUSpCaLuc8YUgjI4YflBLO11fXjyuMplMgxZrsFXbT4ew&oe=68AF432F",
      category: "Updates",
      url: "https://www.instagram.com/p/DMzBikwA_3n/",
    },
  ];

  const handleInstagramProfile = () => {
    window.open("https://www.instagram.com/bbimmigration56", "_blank");
  };

  const openCurrentPost = () => {
    const url = instagramReels[currentReel]?.url;
    if (url) window.open(url, "_blank");
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
              onClick={handleInstagramProfile}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow @bbimmigration56
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary">75K+</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40+</div>
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

                  {/* Play Button -> opens the post */}
                  <button
                    aria-label="Open Instagram post"
                    onClick={openCurrentPost}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-gold text-white">
                      {instagramReels[currentReel].category}
                    </Badge>
                  </div>

                  {/* Quick link button */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-4 left-4 bg-black/40 text-white hover:bg-black/60"
                    onClick={openCurrentPost}
                    aria-label="Open post in Instagram"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                  <a
                    href={instagramReels[currentReel].url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {instagramReels[currentReel].title}
                  </a>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {instagramReels[currentReel].description}
                </p>

                <div className="flex gap-3 mb-6">
                  <Button onClick={prevReel} variant="outline" size="sm" className="px-4">
                    ← Previous
                  </Button>
                  <Button onClick={nextReel} variant="outline" size="sm" className="px-4">
                    Next →
                  </Button>
                </div>

                <Button
                  className="gradient-primary text-white font-semibold hover:shadow-floating transition-smooth w-fit"
                  onClick={openCurrentPost}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Watch on Instagram
                  <ExternalLink className="ml-2 h-4 w-4" />
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
              className={`relative cursor-pointer transition-smooth hover-lift ${
                index === currentReel ? "ring-2 ring-primary shadow-gold" : "hover:shadow-card"
              }`}
              onClick={() => setCurrentReel(index)}
              title="Click to preview; use the ↗ button to open the post"
            >
              {/* Quick open button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute z-10 top-2 right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(reel.url, "_blank");
                }}
                aria-label="Open this Instagram post"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>

              <div className="relative">
                <div
                  className="aspect-square bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${reel.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-smooth rounded-t-lg"></div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {reel.category}
                    </Badge>
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
              <div className="text-3xl font-bold text-primary">75K+</div>
              <div className="text-muted-foreground">Instagram Followers</div>
              <div className="text-sm text-muted-foreground">Growing community of immigration aspirants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">40+</div>
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
