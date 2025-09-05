import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Precision Robotic Arm",
    description: "Six-axis robotic arm designed for precision assembly applications with custom servo control system.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["SolidWorks", "Arduino", "3D Printing"],
    details: "Developed a six-axis robotic arm capable of precision movements for assembly line applications. The project involved extensive CAD modeling, servo motor selection, and custom control algorithms for smooth operation."
  },
  {
    id: 2,
    title: "Automotive Engine Optimization",
    description: "Thermal analysis and optimization of internal combustion engine components for improved efficiency.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["ANSYS", "CFD", "MATLAB"],
    details: "Conducted comprehensive thermal analysis of engine components using CFD simulation. Optimized cooling passages and combustion chamber geometry to improve fuel efficiency by 12%."
  },
  {
    id: 3,
    title: "Autonomous Drone System",
    description: "Custom UAV platform with advanced flight control systems and payload optimization.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["CAD Design", "Flight Control", "Carbon Fiber"],
    details: "Designed and built a custom quadcopter with carbon fiber frame for maximum weight-to-strength ratio. Implemented autonomous navigation using GPS and sensor fusion algorithms."
  },
  {
    id: 4,
    title: "Manufacturing Automation",
    description: "Automated assembly line component with precision positioning and quality control integration.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Automation", "PLC", "Quality Control"],
    details: "Developed an automated quality control system for manufacturing line with precision positioning mechanisms and real-time defect detection capabilities."
  },
  {
    id: 5,
    title: "Wind Turbine Design",
    description: "Aerodynamic optimization of wind turbine blades for maximum energy efficiency and reduced noise.",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Fluid Dynamics", "Renewable Energy", "Composite Materials"],
    details: "Optimized wind turbine blade geometry using computational fluid dynamics to maximize energy capture while minimizing acoustic noise generation."
  },
  {
    id: 6,
    title: "Medical Device Innovation",
    description: "Biocompatible surgical instrument with enhanced ergonomics and precision control mechanisms.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Biomedical", "Ergonomics", "Precision Manufacturing"],
    details: "Designed a minimally invasive surgical tool with improved ergonomics and haptic feedback systems for enhanced precision during medical procedures."
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of engineering projects I have worked on throughout my time at college
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <Card
              key={project.id}
              className="project-card bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${project.id}`}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-xs"
                      data-testid={`badge-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 font-medium text-sm p-0 h-auto"
                      onClick={() => setSelectedProject(project)}
                      data-testid={`button-view-details-${project.id}`}
                    >
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-muted-foreground">{project.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="btn-primary px-8 py-3 rounded-full text-sm font-medium"
            data-testid="button-view-all-projects"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
