import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Download } from "lucide-react";

export default function ResumeSection() {
  const downloadResume = () => {
    // Create a simple text-based resume for download
    const resumeContent = `
ANDRES BARRIOS
Mechanical Engineering Student at UT Austin
Email: abarrios10@utexas.edu

EDUCATION
Bachelor of Science in Mechanical Engineering
University of Texas at Austin
2022 - 2026 (Expected)
Focus on Design Engineering, Thermodynamics, and Manufacturing Processes

EXPERIENCE
Research Assistant | UT Austin Robotics Lab | 2023 - Present
- Developing autonomous navigation systems for mobile robots
- Contributing to published research on sensor fusion algorithms

Amazon Robotics Intern | Amazon | Summer 2024
- Worked on warehouse automation systems and robotic fulfillment center optimization projects

Engineering Intern | Samsung | Summer 2023
- Contributed to product development and manufacturing process optimization for consumer electronics

Engineering Intern | BP | Summer 2022
- Assisted with energy infrastructure projects and sustainable engineering solutions
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andres_Barrios_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
                    Bachelor of Science in Mechanical Engineering
                  </h4>
                  <p className="text-primary font-medium" data-testid="text-education-university">
                    University of Texas at Austin
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-education-timeline">
                    2022 - 2026 (Expected)
                  </p>
                  <p className="text-muted-foreground mt-2" data-testid="text-education-details">
                    Focus on Design Engineering, Thermodynamics, and Manufacturing Processes
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
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-1">
                    Research Assistant
                  </h4>
                  <p className="text-primary font-medium" data-testid="text-experience-company-1">
                    UT Austin Robotics Lab
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-1">
                    2023 - Present
                  </p>
                  <p className="text-muted-foreground mt-2" data-testid="text-experience-description-1">
                    Developing autonomous navigation systems for mobile robots and contributing to published research on sensor fusion algorithms.
                  </p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-2">
                    Amazon Robotics Intern
                  </h4>
                  <p className="text-primary font-medium" data-testid="text-experience-company-2">
                    Amazon
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-2">
                    Summer 2024
                  </p>
                  <p className="text-muted-foreground mt-2" data-testid="text-experience-description-2">
                    Worked on warehouse automation systems and robotic fulfillment center optimization projects.
                  </p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-3">
                    Engineering Intern
                  </h4>
                  <p className="text-primary font-medium" data-testid="text-experience-company-3">
                    Samsung
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-3">
                    Summer 2023
                  </p>
                  <p className="text-muted-foreground mt-2" data-testid="text-experience-description-3">
                    Contributed to product development and manufacturing process optimization for consumer electronics.
                  </p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-6">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-experience-position-4">
                    Engineering Intern
                  </h4>
                  <p className="text-primary font-medium" data-testid="text-experience-company-4">
                    BP
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-experience-timeline-4">
                    Summer 2022
                  </p>
                  <p className="text-muted-foreground mt-2" data-testid="text-experience-description-4">
                    Assisted with energy infrastructure projects and sustainable engineering solutions.
                  </p>
                </div>
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
                Download Resume PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
