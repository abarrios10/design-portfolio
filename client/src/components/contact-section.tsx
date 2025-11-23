import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export default function ContactSection() {

  return (
    <section id="contact" className="pt-16 pb-24 hero-bg-premium">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6 relative inline-block">
            Let's Connect
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-pink)] via-[var(--accent-coral)] to-[var(--accent-amber)] rounded-full opacity-60"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-8">
            I'd love to hear from you. Feel free to reach out through any of these channels.
          </p>
        </div>

        <Card className="bg-card rounded-2xl shadow-lg p-12">
          <CardContent className="p-0">
            {/* Two-column grid for Email and LinkedIn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <a
                href="mailto:abarrios10@utexas.edu"
                className="flex flex-col items-center text-center p-8 rounded-xl hover:bg-secondary transition-all hover:scale-105 group"
                data-testid="link-email"
              >
                <div className="w-20 h-20 rounded-xl flex items-center justify-center transition-all mb-4" style={{backgroundColor: 'rgba(59, 130, 246, 0.15)'}}>
                  <Mail className="h-10 w-10" style={{color: 'var(--primary)'}} />
                </div>
                <p className="text-xl font-semibold text-card-foreground mb-2">Email</p>
                <p className="text-muted-foreground">abarrios10@utexas.edu</p>
              </a>
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/andresbarrios10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 rounded-xl hover:bg-secondary transition-all hover:scale-105 group"
                data-testid="link-linkedin"
              >
                <div className="w-20 h-20 rounded-xl flex items-center justify-center transition-all mb-4" style={{backgroundColor: 'rgba(99, 102, 241, 0.15)'}}>
                  <Linkedin className="h-10 w-10" style={{color: 'var(--accent-indigo)'}} />
                </div>
                <p className="text-xl font-semibold text-card-foreground mb-2">LinkedIn</p>
                <p className="text-muted-foreground">Connect professionally</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
