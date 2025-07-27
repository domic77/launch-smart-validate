import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Search, FileText, Lightbulb } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Lightbulb size={32} className="text-primary" />,
      title: "Describe Your Idea",
      description:
        "Start by sharing your startup idea in plain English. No pitch decks or jargon — just tell iValidate what you're building.",
    },
    {
      number: "02",
      icon: <Search size={32} className="text-primary" />,
      title: "AI Market Sweep",
      description:
        "iValidate analyzes social trends, online chatter, and competitor signals — scanning platforms like X, Reddit, and many others.",
    },
    {
      number: "03",
      icon: <FileText size={32} className="text-primary" />,
      title: "Real-Time Validation Report",
      description:
        "Receive a tailored report with key insights: demand level, audience sentiment, pain point clarity, and competitor gaps.",
    },
    {
      number: "04",
      icon: <Rocket size={32} className="text-primary" />,
      title: "Make Data-Driven Moves",
      description:
        "Use the results to refine, pivot, or launch with confidence — all backed by real-time, unbiased validation.",
    },
  ];

  return (
    <section id="how-it-works" className="pt-20 sm:pt-32 pb-20 sm:pb-32" style={{ backgroundColor: '#fafafa' }}>
      <div className="container grid lg:grid-cols-2 lg:gap-24">
        {/* Left Column: Sticky Header and Blank Space */}
        <div className="lg:sticky top-0 h-full">
          <header className="mx-auto mb-6 lg:mb-12 max-w-full text-center lg:text-start lg:sticky" style={{ top: 'calc(50vh - 180px)' }}>
            <div className="from-primary/60 to-primary mb-4 bg-linear-to-b bg-clip-text font-semibold tracking-wider text-transparent uppercase">
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              How <span className="text-gradient-blue-teal">iValidate</span> Works
            </h2>
            <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
              We made startup validation simple. Just drop your idea, let iValidate do the digging, and get back real, data-backed insights — so you can move smart, fast, and confident.
            </p>
          </header>
          {/* Blank space for future content */}
          <div className="hidden lg:block h-48"></div>
        </div>

        {/* Right Column: Scrolling Cards */}
        <div className="flex w-full flex-col gap-6 lg:gap-[14rem]">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="text-card-foreground flex flex-col gap-6 rounded-[16px] border-[1.5px] border-blue-500/30 py-6 group hover:bg-gray-50 transition-colors lg:sticky"
              style={{ 
                top: `calc(50vh - 220px)`,
                backgroundColor: '#ffffff'
              }}
            >
              <CardHeader className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex justify-between">
                  <div className="bg-primary/20 ring-primary/10 mb-6 size-10 rounded-full p-2 ring-8 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-gradient-blue-teal text-5xl font-bold">
                    {step.number}
                  </span>
                </div>
                <CardTitle className="font-semibold text-lg">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 text-muted-foreground">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};