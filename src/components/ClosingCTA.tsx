import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from 'react-router-dom';

export const ClosingCTA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#fafafa' }}>
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-4 sm:p-8 rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors" style={{ backgroundColor: '#ffffff' }}>
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              Validate Smarter, Launch Faster with <span className="text-gradient-blue-teal">iValidate</span>
            </CardTitle>
            <CardDescription className="pt-4 text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
              No more second-guessing your startup ideas. Let real-time data and AI
              validation guide your next big move.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="rounded-[16px] border-[1.5px] border-blue-500/30 bg-primary text-white hover:bg-white hover:text-primary transition-colors">
                <Link to="/maintenance">Start Validating Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors">
                <Link to="/free-ai-tool">Try Free AI Tool</Link>
              </Button>
            </div>
            <p className="mt-6 text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
              Still not sure? Check out our free AI tool. It'll give you a hint of
              how iValidate makes idea validation easier.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};