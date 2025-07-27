import { useState } from 'react';
import soloImage from '@/assets/images/solo (1).webp';
import consultantImage from '@/assets/images/consultant (1).webp';
import teamImage from '@/assets/images/team (1).webp';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb, Zap, ShieldCheck, BarChart, Users, ArrowLeft, ArrowRight, User, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useMobile } from '@/hooks/use-mobile';

const useCases = [
  {
    role: "Solo Founders / Indie Hackers",
    heading: "Validate Before You Build",
    text: "You're moving fast with no time to waste. iValidate helps you pressure-test your ideas instantly so you can launch smarter — not just sooner.",
    image: soloImage,
    icon: <User className="h-7 w-7" />,
    features: [
      { icon: <Rocket className="w-5 h-5 text-primary" />, text: "Launch with confidence" },
      { icon: <Lightbulb className="w-5 h-5 text-primary" />, text: "Pressure-test ideas instantly" },
      { icon: <Zap className="w-5 h-5 text-primary" />, text: "Move faster and smarter" },
    ],
  },
  {
    role: "Agencies & Consultants",
    heading: "Proof Before Proposals",
    text: "iValidate gives you market data, competitor scans, and real insights to support your client projects — without needing a research team.",
    image: consultantImage,
    icon: <Briefcase className="h-7 w-7" />,
    features: [
        { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Win more clients with data" },
        { icon: <BarChart className="w-5 h-5 text-primary" />, text: "Deliver data-backed strategies" },
        { icon: <Zap className="w-5 h-5 text-primary" />, text: "Add a new revenue stream" },
    ],
  },
  {
    role: "Startup Teams",
    heading: "Clarity for the Whole Team",
    text: "Before your team burns dev hours, get aligned on what actually has demand. iValidate shows what's real — so you don't build what no one wants.",
    image: teamImage,
    icon: <Users className="h-7 w-7" />,
    features: [
        { icon: <Users className="w-5 h-5 text-primary" />, text: "Align your team with data" },
        { icon: <Lightbulb className="w-5 h-5 text-primary" />, text: "Avoid building the wrong thing" },
        { icon: <Rocket className="w-5 h-5 text-primary" />, text: "Ship features that matter" },
    ],
  },
];

const NavButton = ({ direction, useCase, onClick }: { direction: 'prev' | 'next', useCase: any, onClick: () => void }) => {
    const isPrev = direction === 'prev';
    return (
        <Button
            onClick={onClick}
            variant="outline"
            className="h-auto p-2 text-blue-500 bg-white hover:bg-gray-50 hover:text-blue-500 transition-colors rounded-[12px] border-[1.5px] border-blue-500/30 flex-shrink-0"
        >
            <div className={`flex items-center gap-2 ${isPrev ? 'flex-row-reverse' : ''}`}>
                {isPrev ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                <div className="h-5 w-5 flex items-center justify-center">
                    {useCase.icon}
                </div>
            </div>
        </Button>
    );
};

const DesktopCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % useCases.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
    };

    const activeUseCase = useCases[activeIndex];
    const prevUseCase = useCases[(activeIndex - 1 + useCases.length) % useCases.length];
    const nextUseCase = useCases[(activeIndex + 1) % useCases.length];

    return (
        <div className="flex items-center gap-4 w-full max-w-7xl mx-auto">
            <NavButton direction="prev" useCase={prevUseCase} onClick={handlePrev} />

            <Card className="flex-1 overflow-hidden rounded-[16px] border-[1.5px] border-blue-500/30" style={{ backgroundColor: '#ffffff' }}>
                <CardContent className="p-0 flex flex-col lg:flex-row items-stretch min-h-[580px]">
                    <div className="w-full lg:w-1/2 p-6 flex items-center justify-center bg-muted/20 relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={activeUseCase.image}
                                alt={activeUseCase.role}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-xl object-cover w-full h-full max-h-[400px] lg:max-h-full shadow-lg"
                            />
                        </AnimatePresence>
                    </div>
                    <div className="w-full lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 p-10 lg:p-12 flex flex-col justify-center"
                            >
                                <p className="text-lg font-semibold text-primary mb-3">{activeUseCase.role}</p>
                                <h3 className="text-3xl font-bold text-foreground mb-5">{activeUseCase.heading}</h3>
                                <p className="text-lg text-muted-foreground mb-8">{activeUseCase.text}</p>
                                <div className="flex flex-col gap-4">
                                    {activeUseCase.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            {feature.icon}
                                            <span className="text-md text-foreground">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </CardContent>
            </Card>

            <NavButton direction="next" useCase={nextUseCase} onClick={handleNext} />
        </div>
    );
}

const MobileCard = ({ useCase }: { useCase: any }) => (
    <Card className="w-full overflow-hidden rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
        <CardContent className="p-0 flex flex-col items-stretch">
            <div className="p-6 bg-muted/20">
                <img
                    src={useCase.image}
                    alt={useCase.role}
                    className="rounded-xl object-cover w-full h-auto shadow-lg"
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-primary mb-3">{useCase.role}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{useCase.heading}</h3>
                <p className="text-md text-muted-foreground mb-6">{useCase.text}</p>
                <div className="flex flex-col gap-3">
                    {useCase.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            {feature.icon}
                            <span className="text-sm text-foreground">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </CardContent>
    </Card>
);

export const UseCasesSection = () => {
  const isMobile = useMobile('(max-width: 1023px)');

  return (
    <section id="use-cases" className="py-20 lg:py-28" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Who <span className="text-gradient-blue-teal">iValidate</span> Helps
          </h2>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-3xl mx-auto font-medium">
            Built for the innovators, the builders, and the dreamers.
          </p>
        </div>

        {isMobile ? (
            <div className="max-w-xl mx-auto space-y-4">
                {useCases.map((useCase, index) => (
                    <MobileCard key={index} useCase={useCase} />
                ))}
            </div>
        ) : (
            <DesktopCarousel />
        )}

        <div className="text-center mt-12">
            <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
                These are just a few — iValidate works for solo builders, teams, and everything in between. If you've got an idea, we help you validate it <span className="font-bold uppercase">right</span>.
            </p>
        </div>
      </div>
    </section>
  );
};