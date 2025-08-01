import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const HowIValidateHelpsYouSpotABadIdeaFast = lazy(() => import("./pages/blogs/how-ivalidate-helps-you-spot-a-bad-idea-fast"));
const FromDoubtToData = lazy(() => import("./pages/blogs/from-doubt-to-data"));
const HowIFoundMyFirstValidatedIdea = lazy(() => import("./pages/blogs/how-i-found-my-first-validated-idea"));
const Support = lazy(() => import("./pages/Support"));
const GettingStarted = lazy(() => import("./pages/support/getting-started"));
const ConnectWorkspace = lazy(() => import("./pages/support/connect-workspace"));
const AIPoweredValidation = lazy(() => import("./pages/support/ai-powered-validation"));
const ValidationReports = lazy(() => import("./pages/support/validation-reports"));
const ManagingWorkflows = lazy(() => import("./pages/support/managing-workflows"));
const ValidationScore = lazy(() => import("./pages/support/validation-score"));
const CommonErrors = lazy(() => import("./pages/support/common-errors"));
const Billing = lazy(() => import("./pages/support/billing"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Pricing = lazy(() => import("./pages/Pricing"));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));
const FreeAiTool = lazy(() => import("./pages/FreeAiTool"));

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
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/how-ivalidate-helps-you-spot-a-bad-idea-fast" element={<HowIValidateHelpsYouSpotABadIdeaFast />} />
            <Route path="/blog/from-doubt-to-data" element={<FromDoubtToData />} />
            <Route path="/blog/how-i-found-my-first-validated-idea" element={<HowIFoundMyFirstValidatedIdea />} />
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
