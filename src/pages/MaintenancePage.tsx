import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench } from 'lucide-react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center" style={{ backgroundColor: '#fafafa' }}>
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <div className="flex items-center justify-center">
              <Wrench className="w-16 h-16 mb-4 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              We'll Be Right Back
            </h1>
            <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
              This page is currently undergoing scheduled maintenance to bring you an even smoother validation experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
              <Card className="rounded-[12px] border-[1.5px] border-blue-500/30 bg-white p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Expected Duration</h3>
                <p className="text-muted-foreground">We expect to be back online within 2 to 4 hours. This page will be updated with any changes.</p>
              </Card>
              <Card className="rounded-[12px] border-[1.5px] border-blue-500/30 bg-white p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">Follow us on social media or check back here for real-time progress updates.</p>
              </Card>
            </div>

            <div className="w-full mb-8">
              <Card className="rounded-[12px] border-[1.5px] border-blue-500/30 bg-white p-6">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-muted-foreground">
                  Email us at <a href="mailto:support@ivalidate.xyz" className="text-primary hover:underline">support@ivalidate.xyz</a> or reach out on X: <a href="https://twitter.com/AskiValidate" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@AskiValidate</a>
                </p>
              </Card>
            </div>

            <Button onClick={() => window.location.reload()} className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-[16px] font-bold text-lg mb-8">
              Refresh Page
            </Button>

            <h1 className="text-2xl font-bold text-gradient-blue-teal font-prompt mb-2">iValidate</h1>
            <p className="text-muted-foreground">Thanks for your patience while we make iValidate even better for you.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MaintenancePage;