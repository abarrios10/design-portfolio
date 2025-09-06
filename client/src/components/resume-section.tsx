import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Wrench, Download } from "lucide-react";
import { SiSamsung, SiAmazon } from "react-icons/si";

const skills = [
  { name: "SolidWorks", icon: "🔧" },
  { name: "Autodesk Inventor", icon: "📐" },
  { name: "GD&T", icon: "📏" },
  { name: "DFMA", icon: "⚙️" },
  { name: "3D Printing", icon: "🖨️" },
  { name: "Python", icon: "🐍" },
];

export default function ResumeSection() {
  const downloadResume = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Andres_Barrios_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my engineering journey and achievements
          </p>
        </div>

        <Card className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          <CardContent className="p-0">
            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                <GraduationCap className="text-primary mr-3 h-6 w-6" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-education-degree">
                    Bachelor of Science, Mechanical Engineering
                  </h4>
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
                <Briefcase className="text-primary mr-3 h-6 w-6" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-1">
                      Undergraduate Robotics Research Assistant
                    </h4>
                    <p className="text-primary font-medium" data-testid="text-experience-company-1">
                      Oden Institute of Computational Engineering - Center of Autonomy
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-1">
                      September 2025 - Present
                    </p>
                    <p className="text-muted-foreground mt-2" data-testid="text-experience-description-1">
                      General-Purpose Robotics Development
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <img 
                      src="/images/ut-logo.png" 
                      alt="UT Austin Logo" 
                      className="h-12 w-auto logo-filter" 
                      data-testid="logo-ut-austin" 
                    />
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
                    <SiSamsung className="h-12 w-12 text-primary/30" data-testid="logo-samsung" />
                  </div>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-3">
                      Hardware Development Engineer Co-op
                    </h4>
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
                  <div className="flex-shrink-0 ml-6">
                    <SiAmazon className="h-12 w-12 text-primary/30" data-testid="logo-amazon" />
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
                    <div 
                      className="h-12 w-12 flex items-center justify-center text-primary/30 font-bold text-xl border-2 border-primary/30 rounded-full" 
                      data-testid="logo-bp"
                    >
                      BP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                <Wrench className="text-primary mr-3 h-6 w-6" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-secondary rounded-lg p-4 text-center hover:bg-secondary/80 transition-colors"
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

            {/* Download Resume Button */}
            <div className="text-center">
              <Button
                onClick={downloadResume}
                className="btn-primary px-8 py-3 rounded-full text-sm font-medium"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
