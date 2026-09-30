import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-[-0.02em] leading-[0.95] text-foreground">
            Let&apos;s
            <br />
            Connect
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I&apos;m always interested in new opportunities, collaborations, and
            conversations about engineering. Feel free to reach out!
          </p>
        </Reveal>

        <div className="border-t border-border">
          <Reveal y={20} className="border-b border-border">
            <a
              href="mailto:abarrios10@utexas.edu"
              data-testid="link-email"
              className="group grid grid-cols-[1fr_auto] items-center gap-6 py-8 md:py-10"
            >
              <div>
                <p className="eyebrow mb-3">Email</p>
                <p className="text-2xl md:text-4xl font-display font-medium tracking-tight text-foreground break-all transition-transform duration-300 ease-out group-hover:translate-x-2">
                  abarrios10@utexas.edu
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>

          <Reveal y={20} delay={0.08} className="border-b border-border">
            <a
              href="https://www.linkedin.com/in/andresbarrios10"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="group grid grid-cols-[1fr_auto] items-center gap-6 py-8 md:py-10"
            >
              <div>
                <p className="eyebrow mb-3">LinkedIn</p>
                <p className="text-2xl md:text-4xl font-display font-medium tracking-tight text-foreground transition-transform duration-300 ease-out group-hover:translate-x-2">
                  Connect professionally
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
