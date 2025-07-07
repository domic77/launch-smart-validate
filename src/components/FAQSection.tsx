import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How accurate is iValidate's AI analysis?",
      answer: "Our AI achieves 90%+ accuracy by analyzing millions of data points across social media platforms, market trends, and consumer behavior patterns. We continuously train our models with fresh data to maintain high precision."
    },
    {
      question: "Which social media platforms does iValidate analyze?",
      answer: "We analyze data from Twitter/X, LinkedIn, Facebook, Instagram, TikTok, Reddit, YouTube, Discord, Telegram, Pinterest, Snapchat, Clubhouse, Threads, and more. Our platform continuously expands to include emerging social platforms."
    },
    {
      question: "How long does it take to get validation results?",
      answer: "Most validation reports are generated within 15-30 minutes. Enterprise-level analysis with custom parameters may take up to 2 hours. You'll receive real-time updates during the analysis process."
    },
    {
      question: "Can I validate multiple ideas simultaneously?",
      answer: "Yes! Depending on your plan, you can run multiple validations in parallel. Professional plans allow up to 5 simultaneous validations, while Enterprise plans offer unlimited concurrent analysis."
    },
    {
      question: "What type of data do you collect and analyze?",
      answer: "We analyze publicly available social media conversations, market trends, competitor mentions, sentiment data, and engagement patterns. We never collect or store personal user information and comply with all data privacy regulations."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! All plans include a 14-day free trial with full access to features. No credit card required to start, and you can cancel anytime during the trial period."
    },
    {
      question: "How do I interpret the validation reports?",
      answer: "Our reports include clear visualizations, actionable insights, and specific recommendations. We also provide detailed explanations for each metric and offer optional consultation sessions for Enterprise customers."
    },
    {
      question: "Can iValidate help with idea refinement?",
      answer: "Absolutely! Our AI doesn't just validate your original idea—it suggests improvements, identifies market gaps, and recommends positioning strategies based on the analysis results."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about iValidate and startup idea validation.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border/50 rounded-lg px-6 shadow-soft hover:shadow-medium transition-smooth"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="text-primary hover:text-primary-dark font-medium transition-smooth">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};