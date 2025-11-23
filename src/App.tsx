import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CV from "./pages/CV";
import Certifications from "./pages/Certifications";
<<<<<<< HEAD
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
=======
import UnderConstruction from "./pages/UnderConstruction";
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/certifications" element={<Certifications />} />
<<<<<<< HEAD
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
=======
          <Route path="/under-construction" element={<UnderConstruction />} />
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
