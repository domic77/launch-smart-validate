import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What exactly is iValidate?",
      answer: "iValidate is an AI-powered tool that helps you validate startup ideas fast—using real-time data, trends, and feedback from platforms like Reddit, X, and Google."
    },
    {
      question: "How is this different from just doing manual research?",
      answer: "Manual research can take hours and still miss the mark. iValidate gives you actionable insights in minutes, based on live signals and data."
    },
    {
      question: "Do I need technical skills to use iValidate?",
      answer: "Nope! iValidate is built for non-techies, founders, solo builders, and creators. Just enter your idea, and let the system handle the rest."
    },
    {
      question: "Can I validate more than one idea?",
      answer: "Yes! Depending on your plan, you can validate multiple ideas and get separate reports and scores for each one."
    },
    {
      question: "How accurate is the validation?",
      answer: "iValidate combines AI, human behavior signals, and trend data to give you a strong indication of product demand, competition, and fit—but as with all tools, it's a powerful guide, not a crystal ball."
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-blue-teal">Questions</span>
          </h2>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Everything you need to know about iValidate and startup idea validation.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-[16px] border-[1.5px] border-blue-500/30 px-6 hover:bg-gray-50 transition-colors"
              style={{ backgroundColor: '#ffffff' }}
            >
              <AccordionTrigger className="text-left font-semibold py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};