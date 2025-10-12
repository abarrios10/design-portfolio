import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useLocation } from "wouter";
import { TransitionLink } from "@/components/route-transition";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b-2 border-primary/20 shadow-sm" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <TransitionLink
                key={item.path}
                href={item.path}
                className={`nav-link text-base font-medium transition-colors ${
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

          <div className="flex items-center space-x-2">
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-lg hover:bg-secondary"
                  data-testid="mobile-menu-trigger"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <SheetClose key={item.path} asChild>
                      <TransitionLink
                        href={item.path}
                        className={`text-xl font-medium transition-colors py-2 px-1 ${
                          location === item.path
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        data-testid={`mobile-nav-${item.path.slice(1) || 'home'}`}
                      >
                        {item.label}
                      </TransitionLink>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Theme Toggle */}
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
      </div>
    </nav>
  );
}
