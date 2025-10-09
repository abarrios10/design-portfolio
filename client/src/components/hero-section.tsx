import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, Rocket, ChevronDown } from "lucide-react";
import { TransitionLink } from "@/components/route-transition";

export default function HeroSection() {

  const stats = [
    { icon: GraduationCap, label: "Class of 2026", value: "UT Austin" },
    { icon: Briefcase, label: "Internships", value: "Amazon, Samsung, BP" },
    { icon: Rocket, label: "Projects", value: "9+ Engineering" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-bg-premium relative overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up bg-background/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-thin text-foreground mb-6 tracking-tight drop-shadow-sm">
            Andres Barrios
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-4 drop-shadow-sm">
            Mechanical Engineering Student at UT Austin
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Mechanical Design | Product Design Enthusiast | Robotics
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background/40 backdrop-blur-sm rounded-2xl p-4 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                data-testid={`stat-${index}`}
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink
              href="/projects"
              className="btn-primary px-8 py-3 rounded-full text-sm font-medium inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="px-8 py-3 rounded-full text-sm font-medium border border-border bg-background text-foreground hover:bg-secondary transition-all inline-flex items-center hover:scale-105"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </TransitionLink>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-foreground/50" />
        </div>
      </div>
    </section>
  );
}
