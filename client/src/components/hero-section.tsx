import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/images/mechanical-bg.png')`,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-thin text-foreground mb-6 tracking-tight">
            Andres Barrios
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-4">
            Mechanical Engineering Student at UT Austin
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about product design engineering and robotics innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                className="btn-primary px-8 py-3 rounded-full text-sm font-medium"
                data-testid="button-view-work"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full text-sm font-medium border border-border bg-background text-foreground hover:bg-secondary transition-all"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
