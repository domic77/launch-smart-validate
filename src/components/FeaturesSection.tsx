import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  TrendingUp, 
  Search, 
  BarChart, 
  TrendingDown,
  ChartLine 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze millions of data points to provide accurate insights about your startup idea."
    },
    {
      icon: TrendingUp,
      title: "Market Trend Detection",
      description: "Identify emerging market trends and opportunities before your competitors do with real-time trend analysis."
    },
    {
      icon: Search,
      title: "Social Media Insights",
      description: "Deep dive into social conversations across all major platforms to understand what people really want."
    },
    {
      icon: BarChart,
      title: "Competitor Analysis",
      description: "Get comprehensive insights about your competition and find gaps in the market you can exploit."
    },
    {
      icon: TrendingDown,
      title: "Sentiment Analysis",
      description: "Understand public sentiment around similar ideas and products to refine your value proposition."
    },
    {
      icon: ChartLine,
      title: "Real-Time Reports",
      description: "Generate detailed validation reports instantly with actionable insights and recommendations."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for <span className="text-gradient">Smart Validation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to validate your startup idea with confidence and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-scale transition-spring shadow-soft hover:shadow-medium border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};