import React, { useCallback } from 'react';
import { User, ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

interface TestimonialProps {
  quote: string;
  caption: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, caption, author }) => {
  return (
    <div className="rounded-[16px] border-[1.5px] border-blue-500/30 p-6 text-center flex flex-col h-full transition-colors hover:bg-gray-50" style={{ backgroundColor: '#ffffff' }}>
      <p className="text-lg italic text-muted-foreground mb-4 flex-grow">"{quote}"</p>
      <p className="text-sm text-muted-foreground mb-2">{caption}</p>
      <div className="flex items-center justify-center mt-2">
        <User className="h-5 w-5 mr-2 text-muted-foreground" />
        <p className="font-bold text-foreground">{author}</p>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "We used it before we even had a landing page — helped us kill a bad idea early.",
      caption: "Wasn't flashy, but it gave us signal when we needed clarity.",
      author: "– Tobi, Solo AI Founder",
    },
    {
      quote: "iValidate helped us spot validation gaps we didn't see ourselves.",
      caption: "As two non-tech founders, this was like having a smart cofounder plugged into the internet.",
      author: "– Joy & Malik, Early-Stage Founders",
    },
    {
      quote: "Gave us a read on market sentiment before we built anything.",
      caption: "I was testing 3 startup ideas. Only one passed — iValidate showed me why.",
      author: "– Dami, Indie Hacker",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16" style={{ backgroundColor: '#fafafa' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-center mb-4">
          <span className="text-gradient-blue-teal">iValidate</span> Through the Eyes of Early Testers
        </h2>
        <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto font-medium">
          Real feedback from early users who've put iValidate through its paces—shaping the future of idea validation.
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="embla__slide flex-[0_0_100%] min-w-0 px-4" key={index}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-blue-500 p-2 rounded-[12px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 hover:text-blue-500 transition-colors"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-blue-500 p-2 rounded-[12px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 hover:text-blue-500 transition-colors"
            onClick={scrollNext}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 text-center mt-12 max-w-2xl mx-auto font-medium">
          These aren't just reviews—they're behind-the-scenes stories from those building smarter with iValidate before launch.
        </p>
      </div>
    </section>
  );
};