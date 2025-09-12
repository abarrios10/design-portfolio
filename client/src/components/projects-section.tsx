import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Fidget Spinner Prototyping",
    description: "Product development from CAD design to prototype through multiple manufacturing methods.",
    image: "/attached_assets/image_1757715664937.png",
    technologies: ["SolidWorks", "3D Printing", "Injection Molding", "Laser Cutting", "FEA"],
    details: "School project completed for Introduction to Engineering Design and Graphics course, focusing on CAD modeling, basics of FEA, tolerancing, and prototyping using different manufacturing methods. The project involved creating a complete fidget spinner design from initial CAD through multiple manufacturing processes including 3D printing, laser cutting, and injection molding preparation. Applied geometric tolerances for the injection mold cavity design and conducted structural FEA analysis as part of coursework requirements."
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
                className="w-full h-64 object-cover"
                style={{ objectPosition: '50% 80%' }}
                data-testid={`img-project-${project.id}`}
              />
              <CardContent className="p-6 relative">
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
                {/* UT Logo for project 1 (fidget spinner) */}
                {project.id === 1 && (
                  <div className="absolute bottom-4 right-4 h-8 w-8" data-testid="logo-ut-project">
                    <img 
                      src="/images/ut-longhorn-black.png" 
                      alt="UT Austin Longhorn Logo" 
                      className="h-8 w-8 object-contain block dark:hidden" 
                    />
                    <img 
                      src="/images/ut-longhorn-white.jpg" 
                      alt="UT Austin Longhorn Logo" 
                      className="h-8 w-8 object-contain hidden dark:block" 
                      style={{ 
                        filter: 'brightness(1.2) contrast(1.5)',
                        mixBlendMode: 'screen'
                      }}
                    />
                  </div>
                )}
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
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                    </DialogHeader>
                    <div className="space-y-6">
                      {project.id === 1 ? (
                        <div className="space-y-8">
                          {/* Project Overview */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Project Overview</h4>
                            <p className="text-muted-foreground">{project.details}</p>
                          </div>
                          
                          {/* CAD Design and Modeling */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4">CAD Design and Modeling</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Created comprehensive SolidWorks models including fidget spinner geometry, assembly components, and injection mold design with geometric tolerances for manufacturing precision.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757718464736.png"
                                    alt="SolidWorks Assembly Design"
                                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                    style={{ objectPosition: '50% 40%' }}
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <img
                                    src="/attached_assets/image_1757718464736.png"
                                    alt="SolidWorks Assembly Design"
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757718554022.png"
                                    alt="3D Fidget Spinner Model"
                                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                    style={{ objectPosition: '50% 40%' }}
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <img
                                    src="/attached_assets/image_1757718554022.png"
                                    alt="3D Fidget Spinner Model"
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757718627490.png"
                                    alt="Detailed Component Design"
                                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                    style={{ objectPosition: '50% 40%' }}
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <img
                                    src="/attached_assets/image_1757718627490.png"
                                    alt="Detailed Component Design"
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757718751128.png"
                                    alt="Injection Mold Cavity Design"
                                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                    style={{ objectPosition: '50% 40%' }}
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <img
                                    src="/attached_assets/image_1757718751128.png"
                                    alt="Injection Mold Cavity Design"
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>

                          {/* Prototypes */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4">Prototypes</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Manufactured prototypes using multiple methods including 3D printing and laser cutting, incorporating real pennies as weights to test functionality and structural integrity.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757715664937.png"
                                    alt="3D Printed Prototype with Pennies"
                                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                    style={{ objectPosition: '50% 50%' }}
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <img
                                    src="/attached_assets/image_1757715664937.png"
                                    alt="3D Printed Prototype with Pennies"
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757718142093.png"
                                    alt="Laser Cut Prototype"
                                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                    style={{ objectPosition: '50% 60%' }}
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <img
                                    src="/attached_assets/image_1757718142093.png"
                                    alt="Laser Cut Prototype"
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src="/attached_assets/image_1757718285634.png"
                                  alt="Translucent Prototype"
                                  className="w-full h-64 object-cover rounded-lg border mt-4 cursor-pointer hover:opacity-90 transition-opacity"
                                  style={{ objectPosition: '50% 50%' }}
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <img
                                  src="/attached_assets/image_1757718285634.png"
                                  alt="Translucent Prototype"
                                  className="w-full h-auto max-h-[90vh] object-contain"
                                />
                              </DialogContent>
                            </Dialog>
                          </div>

                          {/* Finite Element Analysis */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4">Finite Element Analysis</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Conducted structural FEA analysis using SolidWorks to evaluate Von Mises stress distribution and Factor of Safety under penny insertion forces and operational loading conditions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h6 className="text-sm font-medium mb-2">Von Mises Stress Analysis</h6>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <img
                                      src="/attached_assets/image_1757719949420.png"
                                      alt="Von Mises Stress Distribution"
                                      className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                      style={{ objectPosition: '50% 40%' }}
                                    />
                                  </DialogTrigger>
                                  <DialogContent className="max-w-5xl max-h-[95vh]">
                                    <img
                                      src="/attached_assets/image_1757719949420.png"
                                      alt="Von Mises Stress Distribution"
                                      className="w-full h-auto max-h-[90vh] object-contain"
                                    />
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div>
                                <h6 className="text-sm font-medium mb-2">Factor of Safety Analysis</h6>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <img
                                      src="/attached_assets/image_1757720047656.png"
                                      alt="Factor of Safety Distribution"
                                      className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                      style={{ objectPosition: '50% 40%' }}
                                    />
                                  </DialogTrigger>
                                  <DialogContent className="max-w-5xl max-h-[95vh]">
                                    <img
                                      src="/attached_assets/image_1757720047656.png"
                                      alt="Factor of Safety Distribution"
                                      className="w-full h-auto max-h-[90vh] object-contain"
                                    />
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                          
                          {/* Technologies Used */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
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
                      )}
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
