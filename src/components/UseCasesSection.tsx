import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const UseCasesSection = () => {
  const useCases = [
    {
      title: "Startup Founders",
      description: "Validate your startup idea before investing time and money in development. Get real market insights based on social media conversations and trends.",
      tags: ["Pre-seed", "MVP Validation", "Market Research"],
      image: "/placeholder.svg"
    },
    {
      title: "Product Managers",
      description: "Test new feature ideas with real user data before committing development resources. Understand what your users actually want.",
      tags: ["Feature Prioritization", "User Research", "Product Roadmap"],
      image: "/placeholder.svg"
    },
    {
      title: "Marketing Teams",
      description: "Validate campaign concepts and messaging before launch. Ensure your marketing resonates with your target audience based on real data.",
      tags: ["Campaign Testing", "Messaging Validation", "Audience Research"],
      image: "/placeholder.svg"
    },
    {
      title: "Agencies",
      description: "Offer data-driven validation services to clients. Help them make informed decisions about new products, features, or campaigns.",
      tags: ["Client Services", "Consulting", "Value Add"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Who Uses <span className="text-gradient-blue-teal">iValidate</span>?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Our platform helps various professionals make data-driven decisions about their ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group hover-elevate transition-spring shadow-card hover:shadow-card-hover border-border/50 rounded-[24px] bg-gradient-card overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-blue-teal p-6 flex items-center justify-center">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-24 h-24 object-contain invert" 
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth font-bold">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-foreground text-base leading-relaxed mb-4">
                      {useCase.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="rounded-full bg-accent/50 text-foreground border-border/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};