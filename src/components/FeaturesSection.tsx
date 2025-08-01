import { 
  Zap, 
  BarChart, 
  Brain, 
  MessageSquare, 
  Target, 
  Wallet, 
  RefreshCw, 
  Rocket
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Idea Validation",
      description: "Quickly evaluate your startup idea using AI-driven logic and real-time context scoring.",
    },
    {
      icon: BarChart,
      title: "Live Market & Trend Scanning",
      description: "Automatically pulls up-to-date data from search trends, competitors, and user behavior.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insight Engine",
      description: "Analyzes your idea's strengths, gaps, and fit — all without manual research.",
    },
    {
      icon: MessageSquare,
      title: "Multi-Platform Social Listening",
      description: "Taps into Reddit, X, YouTube, and other platforms to track real user demand.",
    },
    {
      icon: Target,
      title: "Proof-First Validation System",
      description: "Replaces gut feelings with concrete data, sentiment, and user feedback signals.",
    },
    {
      icon: Wallet,
      title: "Startup-Friendly Pricing",
      description: "Get enterprise-level validation tools without the consultant-level price tag.",
    },
    {
      icon: RefreshCw,
      title: "Real-Time Data Sync",
      description: "Every validation pulls the freshest available data — no outdated PDFs or static reports.",
    },
    {
      icon: Rocket,
      title: "Founder-Centric UX",
      description: "Simple, focused design built for speed, clarity, and action — not for analysts.",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            What Powers <span className="text-gradient-blue-teal">iValidate's</span> Real-World Validation
          </h2>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Not just buzzwords. These are the tools inside iValidate that help real founders move smarter and faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors"
              style={{ backgroundColor: '#ffffff' }}
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Validation shouldn't be a guessing game or a luxury. iValidate gives you signal over noise — without the runway burn.
          </p>
        </div>
      </div>
    </section>
  );
};