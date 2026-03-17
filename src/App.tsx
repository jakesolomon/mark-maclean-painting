import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ServicesHub from "./pages/ServicesHub";
import ServicePage from "./pages/ServicePage";
import AreasHub from "./pages/AreasHub";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import { services, cities } from "./data/siteData";

const queryClient = new QueryClient();

const serviceSlugs = services.map(s => s.slug);
const citySlugs = cities.map(c => c.slug);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/areas" element={<AreasHub />} />
            {serviceSlugs.map(slug => (
              <Route key={slug} path={`/${slug}`} element={<ServicePage />} />
            ))}
            {citySlugs.map(slug => (
              <Route key={slug} path={`/${slug}`} element={<CityPage />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
