import { Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3
            className="text-2xl font-semibold text-card-foreground mb-4"
            data-testid="text-footer-name"
          >
            Andres Barrios
          </h3>
          <p
            className="text-muted-foreground mb-6"
            data-testid="text-footer-title"
          >
            Mechanical Engineering Student at UT Austin
          </p>

          {/* Download Resume Button */}
          <div className="mb-8">
            <Button
              asChild
              variant="default"
              size="lg"
              className="group"
              data-testid="button-download-resume"
            >
              <a
                href="/attached_assets/Andres_Barrios_Resume_F2025_1762546203028.pdf"
                download="/design-portfolio/attached_assets/Andres_Barrios_Resume_F2025_1762546203028.pdf"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>

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
            <p
              className="text-sm text-muted-foreground"
              data-testid="text-footer-copyright"
            >
              © 2025 Andres Barrios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
