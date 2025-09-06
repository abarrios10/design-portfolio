import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-card-foreground mb-4" data-testid="text-footer-name">
            Andres Barrios
          </h3>
          <p className="text-muted-foreground mb-6" data-testid="text-footer-title">
            Mechanical Engineering Student at UT Austin
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/andresbarrios10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:abarrios10@utexas.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © 2025 Andres Barrios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
