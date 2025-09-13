import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useLocation } from "wouter";
import { TransitionLink } from "@/components/route-transition";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <TransitionLink
              href="/"
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              data-testid="logo-home"
            >
              AB
            </TransitionLink>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/projects", label: "Projects" },
              { path: "/resume", label: "Resume" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <TransitionLink
                key={item.path}
                href={item.path}
                className={`nav-link text-sm font-medium transition-colors ${
                  location === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`nav-${item.path.slice(1) || 'home'}`}
              >
                {item.label}
              </TransitionLink>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg hover:bg-secondary"
            data-testid="theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
