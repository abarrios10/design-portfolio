import { Mail, Github, Linkedin } from "lucide-react";

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
              href="https://linkedin.com/in/andresbarrios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/andresbarrios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:andres.barrios@utexas.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © 2024 Andres Barrios. Designed with passion for engineering excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
