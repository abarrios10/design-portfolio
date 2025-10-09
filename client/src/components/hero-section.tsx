import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/route-transition";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-bg-premium relative overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up bg-background/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-thin text-foreground mb-6 tracking-tight drop-shadow-sm">
            Andres Barrios
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-4 drop-shadow-sm">
            Mechanical Engineering Student at UT Austin
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">Mechanical Design | Product Design Enthusiast | Robotics</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink
              href="/projects"
              className="btn-primary px-8 py-3 rounded-full text-sm font-medium inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="px-8 py-3 rounded-full text-sm font-medium border border-border bg-background text-foreground hover:bg-secondary transition-all inline-flex items-center"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
