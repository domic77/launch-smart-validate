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
            Simple, Transparent <span className="text-gradient-blue-teal">Pricing</span>
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Choose the plan that fits your validation needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden hover-elevate transition-spring shadow-card hover:shadow-card-hover border-border/50 rounded-[24px] ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-6 right-6 bg-gradient-blue-teal text-primary-foreground rounded-full">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-3 text-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full rounded-[24px] ${plan.popular ? 'bg-gradient-blue-teal text-primary-foreground' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};