import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const UseCasesSection = () => {
  const useCases = [
    {
      title: "Mobile App Ideas",
      description: "Validate app concepts before development",
      examples: ["Social networking apps", "Productivity tools", "Gaming platforms"],
      badge: "Popular"
    },
    {
      title: "E-commerce Products",
      description: "Test product demand and market fit",
      examples: ["Consumer electronics", "Fashion items", "Health supplements"],
      badge: "Trending"
    },
    {
      title: "B2B SaaS Solutions",
      description: "Validate enterprise software concepts",
      examples: ["Project management", "CRM systems", "Analytics platforms"],
      badge: "High ROI"
    },
    {
      title: "Social Platforms",
      description: "Test social networking and community ideas",
      examples: ["Niche communities", "Professional networks", "Creator platforms"],
      badge: "Growing"
    },
    {
      title: "Health & Wellness",
      description: "Validate health-focused startup concepts",
      examples: ["Fitness apps", "Mental health tools", "Nutrition platforms"],
      badge: "Hot Market"
    },
    {
      title: "Innovation Ideas",
      description: "Test breakthrough and disruptive concepts",
      examples: ["AI applications", "Blockchain solutions", "IoT products"],
      badge: "Future-Ready"
    }
  ];

  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perfect for <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're building the next unicorn or solving a niche problem, iValidate helps you understand your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover-elevate transition-spring shadow-card hover:shadow-card-hover border-border/50 rounded-2xl bg-gradient-card"
            >
              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-multi text-primary-foreground font-semibold px-3 py-1 rounded-full"
                  >
                    {useCase.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth font-bold">
                  {useCase.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-foreground mb-4">Example Applications:</h4>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li 
                        key={exampleIndex} 
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};