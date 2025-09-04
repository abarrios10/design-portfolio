import { MapPin, University, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate about engineering innovation and sustainable design solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Professional engineer at work"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="img-about-profile"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="text-about-title">
              Engineering with Purpose
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-1">
              I'm a passionate Mechanical Engineering student at UT Austin with a deep fascination for how things work and how they can be improved. My journey in engineering began with taking apart childhood toys to understand their mechanisms, and has evolved into designing complex systems that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-2">
              Currently pursuing my degree with a focus on design engineering and sustainable manufacturing, I believe that great engineering combines technical excellence with environmental responsibility. Every project I undertake is guided by the principle of creating solutions that are not only functional and efficient, but also considerate of their impact on our planet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-3">
              When I'm not in the lab or working on CAD models, you'll find me exploring the intersection of technology and sustainability, participating in engineering competitions, or mentoring younger students who share the same passion for innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2" data-testid="info-location">
                <MapPin className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">Austin, Texas</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="info-university">
                <University className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">UT Austin</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="info-graduation">
                <Calendar className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">Class of 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
