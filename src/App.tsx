
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import BrandPage from "./pages/BrandPage";
import Community from "./pages/Community";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import FeedbackPage from "./pages/FeedbackPage";
import SecurityPage from "./pages/SecurityPage";
import WheelPage from "./pages/WheelPage";
import ProductPage from "./pages/ProductPage";
import MonthlyPrizePage from "./pages/MonthlyPrizePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:brandName" element={<BrandPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/content" element={<Content />} />
          <Route path="/wheel" element={<WheelPage />} />
          <Route path="/monthly-prize" element={<MonthlyPrizePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/shop/:brandName/:productSlug" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
