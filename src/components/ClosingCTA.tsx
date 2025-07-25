import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from 'react-router-dom';

export const ClosingCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-4 sm:p-8">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              Validate Smarter, Launch Faster with <span className="text-gradient-blue-teal">iValidate</span>
            </CardTitle>
            <CardDescription className="pt-4 text-lg max-w-2xl mx-auto">
              No more second-guessing your startup ideas. Let real-time data and AI
              validation guide your next big move.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link to="/maintenance">Start Validating Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/maintenance">Try Free AI Tool</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Still not sure? Check out our free AI tool. It’ll give you a hint of
              how iValidate makes idea validation easier.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};