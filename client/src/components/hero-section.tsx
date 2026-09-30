import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TransitionLink } from "@/components/route-transition";

const EASE = [0.16, 1, 0.3, 1] as const;

function Stagger({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
          <Stagger delay={0.05}>
            <p className="eyebrow mb-8">UT Austin · Mechanical Engineering</p>
          </Stagger>

          <Stagger delay={0.15}>
            <h1 className="text-[clamp(3.75rem,11vw,8.5rem)] font-display font-medium leading-[0.95] tracking-[-0.02em] text-foreground">
              Andres
              <br />
              Barrios
            </h1>
          </Stagger>

          <Stagger delay={0.3}>
            <p className="mt-8 text-xl md:text-2xl text-foreground/80 font-normal">
              Mechanical Engineering Student
            </p>
          </Stagger>

          <Stagger delay={0.4}>
            <p className="mt-3 text-lg text-primary font-medium">
              The University of Texas at Austin
            </p>
          </Stagger>

          <Stagger delay={0.5}>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Mechanical Engineer | Product Design Enthusiast
            </p>
          </Stagger>

          <Stagger delay={0.62}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
              <TransitionLink
                href="/design-portfolio/projects"
                data-testid="button-view-work"
                className="link-underline group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-primary"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </TransitionLink>
              <TransitionLink
                href="/design-portfolio/contact"
                data-testid="button-get-in-touch"
                className="link-underline group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Get In Touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </TransitionLink>
            </div>
          </Stagger>
        </div>

        <Stagger delay={0.35} className="lg:col-span-5">
          <figure className="mx-auto w-full max-w-[260px] sm:max-w-xs lg:max-w-none">
            <img
              src="/design-portfolio/attached_assets/IMG_2472_1760037765321.jpeg"
              alt="Andres Barrios with the Houston skyline"
              className="aspect-[4/5] w-full rounded-xl border border-border object-cover"
              data-testid="img-hero-portrait"
            />
          </figure>
        </Stagger>
        </div>

        <Stagger delay={0.8} className="mt-24 md:mt-32">
          <div className="flex flex-wrap gap-x-10 gap-y-2 border-t border-border pt-6">
            <span className="eyebrow">Austin, Texas</span>
            <span className="eyebrow">B.S. May 2027</span>
            <span className="eyebrow">10 Projects</span>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
