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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover-scale transition-spring shadow-soft hover:shadow-medium border-border/50"
            >
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-primary text-primary-foreground"
                  >
                    {useCase.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                  {useCase.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Example Applications:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li 
                        key={exampleIndex} 
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
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