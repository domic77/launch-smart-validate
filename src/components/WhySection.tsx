import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  DollarSign, 
  BarChart4, 
  Lightbulb,
  TrendingUp,
  Zap
} from "lucide-react";

export const WhySection = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Save Valuable Time",
      description: "Reduce validation time from weeks to hours with our AI-powered platform that analyzes millions of data points instantly."
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Avoid expensive development of ideas that won't succeed. Validate before you build to save thousands in development costs."
    },
    {
      icon: BarChart4,
      title: "Data-Driven Decisions",
      description: "Replace guesswork with concrete data from social media, market trends, and consumer behavior analysis."
    },
    {
      icon: Lightbulb,
      title: "Refine Your Concept",
      description: "Get actionable insights to improve your idea before launch, increasing your chances of market success."
    },
    {
      icon: TrendingUp,
      title: "Identify Market Gaps",
      description: "Discover untapped opportunities and position your product to fill existing market needs."
    },
    {
      icon: Zap,
      title: "Competitive Edge",
      description: "Launch with confidence knowing your idea has been thoroughly validated against market demands."
    }
  ];

  return (
    <section id="why" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-blue-teal">iValidate</span>?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Stop wasting resources on unvalidated ideas. Here's why entrepreneurs and businesses trust our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover-elevate transition-spring shadow-card hover:shadow-card-hover border-border/50 rounded-[24px] bg-gradient-card"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-blue-teal rounded-[24px] flex items-center justify-center mb-6 group-hover:scale-110 transition-spring shadow-card">
                  <reason.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth font-bold">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground text-base leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 