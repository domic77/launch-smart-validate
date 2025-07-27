const agencyPlan = {
  name: "Agency",
  price: "$49.99",
  period: "/month",
  description: "Built for teams, consultants, and commercial-scale validation needs",
  features: [
    { text: "Unlimited idea validations", icon: Unlock },
    { text: "Team collaboration and multi-user access", icon: Users },
    { text: "White-labeled validation reports", icon: FileText },
    { text: "Custom model integration", icon: Wrench, highlight: "Advanced", highlightVariant: "gradient" },
    { text: "Dedicated success manager", icon: Mail },
  ],
  popular: false,
  cta: "Talk to Sales"
};import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lightbulb, Cpu, TrendingUp, FileText, Unlock, Percent, Mail, Wrench, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Link } from 'react-router-dom';

const PricingSection = () => {
const oneTimePlan = {
  name: "One-Time Validation",
  price: "$4.99",
  period: "",
  description: "Simple. No strings attached.",
  features: [
    { text: "1 idea validation", icon: FileText },
    { text: "AI-powered analysis", icon: Cpu },
    { text: "Market and trend insights", icon: TrendingUp },
    { text: "Full validation report", icon: FileText },
    { text: "No account required", icon: Unlock },
    { text: "Basic model selection", icon: Cpu },
  ],
  popular: false,
  cta: "Try It Now"
};

const proPlan = {
  name: "Pro",
  price: "$19.99",
  period: "/month",
  description: "For serious builders who validate regularly.",
  features: [
    { text: "Unlimited validations", icon: Unlock },
    { text: "Advanced AI models access", icon: Cpu },
    { text: "Priority support", icon: Mail },
    { text: "Detailed market insights", icon: TrendingUp },
    { text: "Export validation reports", icon: FileText },
    { text: "Save validation history", icon: Wrench },
  ],
  popular: true,
  cta: "Get Started"
};

const pricingPlans = [oneTimePlan, proPlan];

return (
  <>
    <Navigation />
    <section id="pricing" className="pt-48 pb-16 lg:pb-24" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h1 className="flex flex-col text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance text-foreground">
            Built for Builders.<span>Priced for Progress.</span><span>Ready to Scale.</span>
          </h1>
          <p className="mt-6 max-w-lg text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 font-medium">
            Whether you're dropping your first idea or validating at volume — iValidate gives you serious signal, no fluff, and flexible plans that grow with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
              style={{ backgroundColor: '#ffffff' }}
            >
              {plan.popular && (
                <Badge className="absolute top-6 right-6 bg-gradient-blue-teal text-primary-foreground rounded-full">
                  Recommended
                </Badge>
              )}
              <CardHeader className="pb-4 pt-16">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-3 text-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <Button 
                  className={`w-full rounded-[24px] mb-4 border-[1.5px] border-blue-500/30 transition-colors ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-white hover:text-primary' 
                      : 'bg-white text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <Link to="/maintenance">{plan.cta}</Link>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
);
};

export default PricingSection;