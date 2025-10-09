import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/route-transition";
import profileImage from "@assets/IMG_2472_1760037765321.jpeg";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-bg-premium relative overflow-hidden py-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Image Section */}
          <div className="flex justify-center animate-slide-up mt-8" data-testid="hero-image-container">
            <div className="relative group">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img
                    src={profileImage}
                    alt="Andres Barrios"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    data-testid="hero-profile-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center animate-slide-up w-full" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background/40 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-border/20 shadow-xl mx-auto max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-foreground mb-6 tracking-tight drop-shadow-sm whitespace-nowrap">
                Andres Barrios
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground mb-4 drop-shadow-sm">
                Mechanical Engineering Student
              </h2>
              <p className="text-lg text-primary font-medium mb-6">
                The University of Texas at Austin
              </p>
              <div className="flex justify-center mb-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed drop-shadow-sm whitespace-nowrap">
                  Mechanical Design | Product Design Enthusiast | Robotics
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TransitionLink
                  href="/projects"
                  className="btn-primary px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  data-testid="button-view-work"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TransitionLink>
                <TransitionLink
                  href="/contact"
                  className="px-8 py-3 rounded-full text-sm font-medium border border-border bg-background text-foreground hover:bg-secondary transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                  data-testid="button-get-in-touch"
                >
                  Get In Touch
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
