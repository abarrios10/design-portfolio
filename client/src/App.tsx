import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { PageTransitionProvider } from "@/components/route-transition";
import DocumentTitle from "@/components/document-title";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import ProjectDetail from "@/pages/project-detail";
import Resume from "@/pages/resume";
import About from "@/pages/about";
import Contact from "@/pages/contact";

function RouterComponent() {
  return (
    <Router base="/design-portfolio">
      <DocumentTitle />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/:slug" component={ProjectDetail} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <PageTransitionProvider>
            <RouterComponent />
          </PageTransitionProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
