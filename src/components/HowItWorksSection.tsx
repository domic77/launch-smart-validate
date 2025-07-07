import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Input Your Idea",
      description: "Describe your startup idea in simple terms. Our AI understands context and nuance to begin comprehensive analysis.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our advanced AI scans social media, market trends, and competitor data across multiple platforms simultaneously.",
      color: "from-blue-600 to-blue-700"
    },
    {
      number: "03",
      title: "Generate Report",
      description: "Receive a detailed validation report with market insights, sentiment analysis, and actionable recommendations.",
      color: "from-blue-700 to-blue-800"
    },
    {
      number: "04",
      title: "Make Decisions",
      description: "Use data-driven insights to refine your idea, identify target markets, and make informed business decisions.",
      color: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How <span className="text-gradient">iValidate</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to validation in just four simple steps. Our AI does the heavy lifting so you can focus on building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 transform -translate-y-1/2 z-0"></div>
              )}

              <Card className="relative z-10 text-center hover-elevate transition-spring shadow-card hover:shadow-card-hover border-border/50 rounded-2xl bg-gradient-card">
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card`}>
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};