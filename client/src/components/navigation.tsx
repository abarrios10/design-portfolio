import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useLocation } from "wouter";
import { TransitionLink } from "@/components/route-transition";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigationItems = [
  { path: "/design-portfolio/", label: "Home" },
  { path: "/design-portfolio/projects", label: "Projects" },
  { path: "/design-portfolio/resume", label: "Resume" },
  { path: "/design-portfolio/about", label: "About" },
  { path: "/design-portfolio/contact", label: "Contact" },
];

function NavLink({
  item,
  isActive,
  testId,
}: {
  item: { path: string; label: string };
  isActive: boolean;
  testId: string;
}) {
  return (
    <TransitionLink
      href={item.path}
      data-testid={testId}
      className={`group relative py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {item.label}
      <span
        aria-hidden="true"
        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ease-out ${
          isActive
            ? "scale-x-100 bg-primary"
            : "scale-x-0 bg-foreground group-hover:scale-x-100"
        }`}
      />
    </TransitionLink>
  );
}

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    // Resolve "system" to the effective theme so the first click always flips modes.
    const effective =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;
    setTheme(effective === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <TransitionLink
            href="/design-portfolio/"
            data-testid="logo-home"
            className="text-sm font-medium tracking-[0.22em] uppercase text-foreground hover:text-primary transition-colors duration-200"
          >
            AB
          </TransitionLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                isActive={location === item.path}
                testId={`nav-${item.path.replace("/design-portfolio/", "") || "home"}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-md hover:bg-secondary"
                  data-testid="mobile-menu-trigger"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] border-l border-border">
                <SheetHeader>
                  <SheetTitle className="text-left text-sm font-medium tracking-[0.22em] uppercase">
                    AB
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  {navigationItems.map((item) => (
                    <SheetClose key={item.path} asChild>
                      <TransitionLink
                        href={item.path}
                        data-testid={`mobile-nav-${item.path.replace("/design-portfolio/", "") || "home"}`}
                        className={`text-2xl font-display font-medium tracking-tight transition-colors ${
                          location === item.path
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </TransitionLink>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground"
              data-testid="theme-toggle"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ||
              (theme === "system" &&
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                <Sun className="h-[1.1rem] w-[1.1rem]" />
              ) : (
                <Moon className="h-[1.1rem] w-[1.1rem]" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
