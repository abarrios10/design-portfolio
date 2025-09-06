import { MapPin, University, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/profile.jpg"
              alt="Andres Barrios Professional Headshot"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="img-about-profile"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="text-about-title">
              Designing the Future, One Project at a Time
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph">
              Hey there! I'm a Venezuelan-American Mechanical Engineering student at UT Austin who absolutely loves designing things. Whether it's working on autonomous robots at Amazon, developing tooling solutions at Samsung, or tackling maintenance equipment at BP, I get genuinely excited about turning ideas into real, functional designs that make a difference.
              <br /><br />
              When I'm not deep in CAD models or tinkering with prototypes, you'll probably find me on the padel court, dancing at music festivals, or cheering way too loudly at Texas football games (Hook 'em! 🤘). There's something about the creative problem-solving in engineering that connects with everything I do – it's all about finding elegant solutions, whether that's in a design challenge or figuring out the perfect paddle shot.
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
                <span className="text-muted-foreground">Class of 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
