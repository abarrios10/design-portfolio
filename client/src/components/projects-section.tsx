import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Fidget Spinner Design & Manufacturing",
    description: "Complete engineering project from CAD design through prototype manufacturing",
    image: "/attached_assets/image_1757715664937.png",
    technologies: ["SolidWorks", "3D Printing", "Laser Cutting", "FEA Analysis", "Injection Molding"],
    details: "School project for Introduction to Engineering Design and Graphics course focusing on complete product development cycle from initial concept through manufacturing. Designed and manufactured functional fidget spinners using multiple engineering approaches including CAD modeling, finite element analysis, and various manufacturing methods including 3D printing, laser cutting, and injection molding. Real pennies were incorporated as weights to test functionality and structural integrity."
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of engineering projects I have worked on throughout my time at college
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {projects.map((project) => (
              <Card key={project.id} className="project-card group overflow-hidden relative" data-testid={`card-project-${project.id}`}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-contain rounded-3xl mb-4"
                    data-testid={`img-project-${project.id}`}
                  />
                  
                  {/* UT Longhorn Logo */}
                  <div className="absolute bottom-16 right-2">
                    <img 
                      src="/images/ut-longhorn-black.png" 
                      alt="UT Austin" 
                      className="h-6 w-6 object-contain opacity-70 block dark:hidden" 
                    />
                    <img 
                      src="/images/ut-longhorn-white.jpg" 
                      alt="UT Austin" 
                      className="h-6 w-6 object-contain opacity-70 hidden dark:block" 
                      style={{ 
                        filter: 'brightness(1.2) contrast(1.5)',
                        mixBlendMode: 'screen'
                      }}
                    />
                  </div>
                  
                  {/* Date Badge */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-foreground/90 px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-background">
                        August 2023 - December 2023
                      </span>
                    </div>
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
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                    </DialogHeader>
                    <div className="space-y-6">
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
                            Created detailed SolidWorks models including fidget spinner geometry, assembly components, and injection mold design.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src="/attached_assets/image_1757718464736.png"
                                  alt="SolidWorks Assembly Design"
                                  className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity "
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">SolidWorks Assembly Design - Full Size</DialogTitle>
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
                                  className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity "
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">3D Fidget Spinner Model - Full Size</DialogTitle>
                                <img
                                  src="/attached_assets/image_1757718554022.png"
                                  alt="3D Fidget Spinner Model"
                                  className="w-full h-auto max-h-[90vh] object-contain"
                                />
                              </DialogContent>
                            </Dialog>
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src="/attached_assets/image_1757718627490.png"
                                  alt="Detailed Component Design"
                                  className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity "
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">Detailed Component Design - Full Size</DialogTitle>
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
                                  className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity "
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">Injection Mold Cavity Design - Full Size</DialogTitle>
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src="/attached_assets/image_1757715664937.png"
                                  alt="3D Printed Prototype with Pennies"
                                  className="w-full h-56 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">3D Printed Prototype with Pennies - Full Size</DialogTitle>
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
                                  className="w-full h-56 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">Laser Cut Prototype - Full Size</DialogTitle>
                                <img
                                  src="/attached_assets/image_1757718142093.png"
                                  alt="Laser Cut Prototype"
                                  className="w-full h-auto max-h-[90vh] object-contain"
                                />
                              </DialogContent>
                            </Dialog>
                          </div>
                          <div className="flex justify-center mt-6">
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src="/attached_assets/image_1757718285634.png"
                                  alt="Translucent Prototype"
                                  className="w-full max-w-md h-56 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl max-h-[95vh]">
                                <DialogTitle className="sr-only">Translucent Prototype - Full Size</DialogTitle>
                                <img
                                  src="/attached_assets/image_1757718285634.png"
                                  alt="Translucent Prototype"
                                  className="w-full h-auto max-h-[90vh] object-contain"
                                />
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>

                        {/* Finite Element Analysis */}
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Finite Element Analysis</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Conducted structural FEA analysis using SolidWorks to evaluate Von Mises stress distribution and Factor of Safety under penny insertion forces and operational loading conditions.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h6 className="text-sm font-medium mb-2">Von Mises Stress Analysis</h6>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <img
                                    src="/attached_assets/image_1757719949420.png"
                                    alt="Von Mises Stress Distribution"
                                    className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity "
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <DialogTitle className="sr-only">Von Mises Stress Analysis - Full Size</DialogTitle>
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
                                    className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity "
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[95vh]">
                                  <DialogTitle className="sr-only">Factor of Safety Analysis - Full Size</DialogTitle>
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

                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
              </Card>
            ))}
          </div>
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