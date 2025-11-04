import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Wrench } from "lucide-react";
import { SiSamsung, SiAmazon, SiApple } from "react-icons/si";

const skills = [
  { name: "SolidWorks", icon: "🔧" },
  { name: "Autodesk Inventor", icon: "📐" },
  { name: "GD&T", icon: "📏" },
  { name: "DFMA", icon: "⚙️" },
  { name: "3D Printing", icon: "🖨️" },
  { name: "Python", icon: "🐍" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="pt-16 pb-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6 relative inline-block">
            Professional Experience
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-amber)] via-[var(--accent-orange)] to-[var(--accent-coral)] rounded-full opacity-60"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-8">
            A comprehensive overview of my engineering journey and achievements
          </p>
        </div>

        <Card className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          <CardContent className="p-0">
            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6" style={{color: 'var(--accent-lime)'}} />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 pl-6" style={{borderColor: 'var(--accent-lime)'}}>
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-education-degree">Bachelor of Science, Mechanical Engineering Honors</h4>
                  <p className="text-primary font-medium" data-testid="text-education-university">
                    The University of Texas at Austin
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-education-timeline">
                    December 2026
                  </p>
                  <p className="text-muted-foreground mt-2" data-testid="text-education-details">
                    Concentration: Robotics/Mechatronics | Certificate: Programming and Computation
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                <Briefcase className="mr-3 h-6 w-6" style={{color: 'var(--accent-indigo)'}} />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 pl-6 flex items-start justify-between" style={{borderColor: 'var(--accent-indigo)'}}>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-1">
                      Incoming Product Design Engineer Intern
                    </h4>
                    <p className="text-primary font-medium" data-testid="text-experience-company-1">
                      Apple
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-1">January 2026</p>
                    <p className="text-muted-foreground mt-2" data-testid="text-experience-description-1">Cable and Charging Accessories</p>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <SiApple className="h-16 w-16 text-foreground" data-testid="logo-apple" />
                  </div>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-2">
                      Mechanical Design Engineer Intern
                    </h4>
                    <p className="text-primary font-medium" data-testid="text-experience-company-2">
                      Samsung
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-2">
                      May 2025 - August 2025
                    </p>
                    <p className="text-muted-foreground mt-2" data-testid="text-experience-description-2">
                      Tooling Equipment Solutions
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <SiSamsung className="h-16 w-16 text-primary/30" data-testid="logo-samsung" />
                  </div>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-3">Mechanical Design Engineer Intern</h4>
                    <p className="text-primary font-medium" data-testid="text-experience-company-3">
                      Amazon Robotics
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-3">
                      January 2025 - May 2025
                    </p>
                    <p className="text-muted-foreground mt-2" data-testid="text-experience-description-3">
                      Autonomous Drive-Unit Robots
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-8">
                    <div className="relative h-28 w-40 flex items-center justify-center" data-testid="logo-amazon">
                      <img 
                        src="/images/amazon-robotics-logo.webp" 
                        alt="Amazon Robotics Logo" 
                        className="h-24 w-auto object-contain block dark:hidden" 
                      />
                      <img 
                        src="/images/amazon-robotics-logo.webp" 
                        alt="Amazon Robotics Logo" 
                        className="h-24 w-auto object-contain hidden dark:block" 
                        style={{ filter: 'invert(1)' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-4">
                      Mechanical Reliability Engineer Intern
                    </h4>
                    <p className="text-primary font-medium" data-testid="text-experience-company-4">
                      BP
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-4">
                      May 2024 - August 2024
                    </p>
                    <p className="text-muted-foreground mt-2" data-testid="text-experience-description-4">
                      Maintenance Equipment Design
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <div className="relative h-16 w-16" data-testid="logo-bp">
                      <img 
                        src="/images/bp-logo-official.png" 
                        alt="BP Logo" 
                        className="h-16 w-16 object-contain block dark:hidden" 
                      />
                      <img 
                        src="/images/bp-logo-official.png" 
                        alt="BP Logo" 
                        className="h-16 w-16 object-contain hidden dark:block" 
                        style={{ filter: 'invert(1)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                <Wrench className="mr-3 h-6 w-6" style={{color: 'var(--accent-teal)'}} />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-secondary rounded-lg p-4 text-center transition-all hover:scale-105 border-2 border-transparent hover:border-[var(--accent-teal)]"
                  >
                    <CardContent className="p-0">
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <p className="font-medium text-secondary-foreground" data-testid={`text-skill-${index}`}>
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
