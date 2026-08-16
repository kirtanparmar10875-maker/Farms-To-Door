import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import StartSelling from "./pages/StartSelling";
import Pricing from "./pages/Pricing";
import FarmerSupport from "./pages/FarmerSupport";
import Resources from "./pages/Resources";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const queryClient = new QueryClient();

function AppContent() {
  useScrollToTop();
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  //check auth on load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  //return loader if auth is getting checked
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/start-selling" element={<StartSelling />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/farmer-support" element={<FarmerSupport />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;