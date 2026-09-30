import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/route-transition";
import { projects } from "@/components/projects-content";
import { ProjectIndexRows } from "@/components/project-index";
import type { Project } from "@/components/project-index";

function SelectedWork() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-6">Index — 11 Projects</p>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-[-0.02em] leading-[0.95] text-foreground">
                Selected Work
              </h2>
            </div>
            <TransitionLink
              href="/design-portfolio/projects"
              data-testid="link-view-all-projects"
              className="link-underline group hidden sm:inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-primary shrink-0"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </TransitionLink>
          </div>
        </Reveal>

        <ProjectIndexRows list={(projects as Project[]).slice(0, 5)} />

        <Reveal className="mt-10 sm:hidden">
          <TransitionLink
            href="/design-portfolio/projects"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-primary"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SelectedWork />
      <Footer />
    </div>
  );
}
