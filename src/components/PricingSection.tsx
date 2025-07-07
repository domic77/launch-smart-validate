import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for early-stage entrepreneurs testing their first ideas",
      features: [
        "5 idea validations per month",
        "Basic AI analysis",
        "Social media insights",
        "Market trend overview",
        "Email support",
        "Standard reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79", 
      period: "/month",
      description: "Ideal for serious entrepreneurs and small teams validating multiple concepts",
      features: [
        "20 idea validations per month",
        "Advanced AI analysis",
        "Deep social media insights",
        "Competitor analysis",
        "Sentiment analysis",
        "Priority support",
        "Advanced reporting",
        "Custom market segments"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month", 
      description: "For established companies and agencies needing comprehensive validation",
      features: [
        "Unlimited validations",
        "Premium AI models",
        "Custom analysis frameworks",
        "White-label reporting",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics dashboard"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your validation needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover-scale transition-spring ${
                plan.popular 
                  ? 'shadow-strong border-primary/20 scale-105' 
                  : 'shadow-soft hover:shadow-medium border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-primary text-center py-2">
                    <Badge variant="secondary" className="bg-primary-foreground text-primary font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                </div>
              )}

              <CardHeader className={plan.popular ? 'pt-12' : ''}>
                <CardTitle className="text-2xl text-foreground text-center">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-center text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary text-primary-foreground hover-scale shadow-medium' 
                      : 'border-primary text-primary hover:bg-primary/5'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};