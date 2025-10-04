import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import BrandingPage from "./pages/BrandingPage";
import SolidFoundationPage from "./pages/SolidFoundationPage";
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage";
import WebshopCreationPage from "./pages/WebshopCreationPage";
import SeoOptimizationPage from "./pages/SeoOptimizationPage";
import DigitalAdvertisingPage from "./pages/DigitalAdvertisingPage";
import SocialMediaMarketingPage from "./pages/SocialMediaMarketingPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { PricesPage } from "./pages/PricesPage";
import { BlogPage } from "./pages/BlogPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { JobsPage } from "./pages/JobsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/service/:serviceSlug" element={<ServicePage />} />
            <Route path="/branding" element={<BrandingPage />} />
            <Route path="/solid-foundation" element={<SolidFoundationPage />} />
            <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/webshop-creation" element={<WebshopCreationPage />} />
            <Route path="/seo-optimization" element={<SeoOptimizationPage />} />
            <Route path="/digital-advertising" element={<DigitalAdvertisingPage />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;