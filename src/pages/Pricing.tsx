import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lightbulb, Cpu, TrendingUp, FileText, Unlock, Percent, Mail, Wrench, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const oneTimePlan = {
    id: "oneTimePlan",
    name: "One-Time Validation",
    price: "$4.99",
    description: "Simple. No strings attached.",
    features: [
      { text: "1 idea validation", icon: FileText },
      { text: "AI-powered analysis", icon: Cpu },
      { text: "Market and trend insights", icon: TrendingUp },
      { text: "Full validation report", icon: FileText },
      { text: "No account or subscription required", icon: Unlock },
      { text: "Model selection: Auto (iValidate chooses best-fit AI model)", icon: Cpu },
    ],
    softLine: "Want more? Upgrade to Starter.",
    cta: "Try It Now"
  };

  const starterPlan = {
    name: "Starter Plan",
    price: "$19.99",
    period: "/month",
    description: "Validate more. Stay lean.",
    features: [
      { text: "Up to 5 validations per month", icon: FileText },
      { text: "All One-Time features included", icon: Check },
      { text: "Save 20% per validation", icon: Percent },
      { text: "Priority email support", icon: Mail },
      { text: "Access to core tools", icon: Wrench },
      { text: "Model selection: Choose from mid-tier models (e.g., Claude Sonnet, GPT-4.1 Mini)", icon: Cpu },
    ],
    popular: false,
    cta: "Get Started"
  };

  const professionalPlan = {
    name: "Pro",
    price: "$49.99",
    period: "/month",
    description: "For power users who need more control, speed, and scale",
    features: [
      { text: "Unlimited idea validations", icon: Unlock },
      { text: "Unlimited access to latest models", icon: Cpu, highlight: ["Grok 4", "GPT-4.1"] },
      { text: "Priority support", icon: Mail },
      { text: "Advanced insights and faster delivery", icon: TrendingUp },
      { text: "Plus everything in Starter Plan", icon: Check },
    ],
    popular: true,
    cta: "Unlock Full Power"
  };

  const enterprisePlan = {
    name: "Agency",
    price: "$149.99",
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
  };

  const currentMergedPlan = isMonthly ? starterPlan : oneTimePlan;

  const pricingPlans = [
    {
      id: "merged",
      isToggle: true,
    },
    professionalPlan,
    enterprisePlan,
  ];

  return (
    <>
      <Navigation />
      <section id="pricing" className="pt-48 pb-16 lg:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h1 className="flex flex-col text-5xl font-medium tracking-tight text-balance text-foreground sm:text-6xl lg:text-pretty">
              Built for Builders.<span>Priced for Progress.</span><span>Ready to Scale.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-base text-pretty text-muted-foreground max-lg:mx-auto sm:text-xl/8">
              Whether you're dropping your first idea or validating at volume — iValidate gives you serious signal, no fluff, and flexible plans that grow with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans && pricingPlans.map((plan, index) => (
              <Card 
                key={plan.id || index}
                className={`relative overflow-hidden border border-border rounded-2xl bg-background ${ (plan.popular || (plan.id === "merged" && currentMergedPlan.popular)) ? 'border-2 border-primary' : '' } ${plan.name === "Agency" ? 'hover:bg-blue-50 transition-colors duration-200' : ''}`}
              >
                {plan.isToggle && (
                  <div className="flex items-center justify-center pt-6 pb-4">
                    <span className="text-sm font-medium text-foreground">One-Time</span>
                    <Switch
                      checked={isMonthly}
                      onCheckedChange={setIsMonthly}
                      id="plan-toggle"
                      className="mx-2"
                    />
                    <span className="text-sm font-medium text-foreground">Monthly</span>
                  </div>
                )}
                {plan.popular && (
                  <Badge className="absolute top-6 right-6 bg-gradient-blue-teal text-primary-foreground rounded-full">
                    {plan.name === "Pro" ? "Recommended" : "Most Popular"}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  {plan.isToggle ? (
                    <motion.div
                      key={currentMergedPlan.name} // Key changes to trigger animation
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardTitle className="text-2xl font-bold">{currentMergedPlan.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-4xl font-bold">{currentMergedPlan.price}</span>
                        <span className="text-foreground">{currentMergedPlan.period}</span>
                      </div>
                      <CardDescription className="mt-3 text-foreground">{currentMergedPlan.description}</CardDescription>
                    </motion.div>
                  ) : (
                    <>
                      <CardHeader className="pt-16 pb-4">
                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                        <div className="mt-2">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-foreground">{plan.period}</span>
                        </div>
                        <CardDescription className="mt-3 text-foreground">{plan.description}</CardDescription>
                      </CardHeader>
                    </>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  {plan.isToggle && currentMergedPlan.softLine && currentMergedPlan.id === "oneTimePlan" && (
                    <p className="text-center text-sm text-muted-foreground mb-4 border-t border-border pt-4">
                      {currentMergedPlan.softLine}
                    </p>
                  )}
                  {plan.isToggle ? (
                    <motion.div
                      key={currentMergedPlan.name + "cta"} // Unique key for CTA button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Button 
                        className={`w-full rounded-[24px] mb-4 ${(currentMergedPlan.popular) ? 'bg-gradient-blue-teal text-primary-foreground' : ''}`}
                        variant={(currentMergedPlan.popular) ? 'default' : 'outline'}
                      >
                        <Link to="/maintenance">{currentMergedPlan.cta}</Link>
                      </Button>
                    </motion.div>
                  ) : (
                    <Button 
                      className={`w-full rounded-[24px] mb-4 ${plan.popular ? 'bg-gradient-blue-teal text-primary-foreground' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Link to="/maintenance">{plan.cta}</Link>
                    </Button>
                  )}
                  {plan.isToggle ? (
                    <motion.ul
                      key={currentMergedPlan.name + "features"} // Unique key for features list
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="space-y-4"
                    >
                      {currentMergedPlan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <feature.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature.text}</span>
                        </li>
                      ))}
                    </motion.ul>
                  ) : (
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          {<feature.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />}
                          <span className="text-foreground">{feature.text}</span>
                          {feature.highlight && Array.isArray(feature.highlight) ? (
                            <div className="flex flex-col ml-2">
                              {feature.highlight.map((h, idx) => (
                                <Badge key={idx} variant={feature.highlightVariant || "gradient"}>{h}</Badge>
                              ))}
                            </div>
                          ) : (
                            feature.highlight && <Badge variant={feature.highlightVariant || "secondary"} className="ml-2">{feature.highlight}</Badge>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
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