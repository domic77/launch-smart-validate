import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import HowIValidateHelpsYouSpotABadIdeaFast from "./pages/blogs/how-ivalidate-helps-you-spot-a-bad-idea-fast";
import FromDoubtToData from "./pages/blogs/from-doubt-to-data";
import HowIFoundMyFirstValidatedIdea from "./pages/blogs/how-i-found-my-first-validated-idea";
import Support from "./pages/Support";
import GettingStarted from "./pages/support/getting-started";
import ConnectWorkspace from "./pages/support/connect-workspace";
import AIPoweredValidation from "./pages/support/ai-powered-validation";
import ValidationReports from "./pages/support/validation-reports";
import ManagingWorkflows from "./pages/support/managing-workflows";
import ValidationScore from "./pages/support/validation-score";
import CommonErrors from "./pages/support/common-errors";
import Billing from "./pages/support/billing";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import MaintenancePage from "./pages/MaintenancePage";
import FreeAiTool from "./pages/FreeAiTool";
import Demo from "./pages/Demo";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/how-ivalidate-helps-you-spot-a-bad-idea-fast" element={<HowIValidateHelpsYouSpotABadIdeaFast />} />
            <Route path="/blog/from-doubt-to-data" element={<FromDoubtToData />} />
            <Route path="/blog/how-i-found-my-first-validated-idea" element={<HowIFoundMyFirstValidatedIdea />} />
            <Route path="/free-ai-tool" element={<FreeAiTool />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
