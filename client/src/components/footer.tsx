import { Mail, Linkedin, Download } from "lucide-react";
import Reveal from "@/components/reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-10">
            <div>
              <p
                className="text-sm font-medium tracking-[0.18em] uppercase text-foreground"
                data-testid="text-footer-name"
              >
                Andres Barrios
              </p>
              <p
                className="eyebrow mt-2"
                data-testid="text-footer-title"
              >
                Mechanical Engineering Student
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="/design-portfolio/attached_assets/Barrios Andres - Resume July 2025.pdf"
                download="Barrios Andres - Resume July 2025.pdf"
                data-testid="button-download-resume"
                className="link-underline inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/andresbarrios10"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-linkedin"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:abarrios10@utexas.edu"
                data-testid="link-footer-email"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between gap-2">
          <p
            className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
            data-testid="text-footer-copyright"
          >
            © 2025 Andres Barrios. All rights reserved.
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
