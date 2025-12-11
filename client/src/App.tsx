import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Chapter1 from "@/pages/Chapter1";
import Chapter2 from "@/pages/Chapter2";
import Chapter3 from "@/pages/Chapter3";
import Chapter4 from "@/pages/Chapter4";
import Chapter5 from "@/pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import BodyCam from "./pages/BodyCam";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chapter-1" component={Chapter1} />
      <Route path="/chapter-2" component={Chapter2} />
      <Route path="/chapter-3" component={Chapter3} />
      <Route path="/chapter-4" component={Chapter4} />
      <Route path="/chapter-5" component={Chapter5} />
      <Route path="/chapter-6" component={Chapter6} />
      <Route path="/body-cam" component={BodyCam} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
