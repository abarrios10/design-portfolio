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
    image: "/attached_assets/image_1757725873170.png",
    technologies: ["SolidWorks", "3D Printing", "Laser Cutting", "FEA Analysis", "Injection Molding"],
    details: "School project for Introduction to Engineering Design and Graphics course focusing on complete product development cycle from initial concept through manufacturing. Designed and manufactured functional fidget spinners using multiple engineering approaches including CAD modeling, finite element analysis, and various manufacturing methods including 3D printing, laser cutting, and injection molding. Real pennies were incorporated as weights to test functionality and structural integrity.",
    date: "August 2023 - December 2023"
  },
  {
    id: 2,
    title: "Wind Turbine LED Circuit",
    description: "AC to DC power conversion circuit with LED indicators for wind turbine monitoring",
    image: "/attached_assets/image_1757727946979.png",
    technologies: ["Circuit Design", "Half-Wave Rectifier", "Comparators", "Transistors", "Breadboard Prototyping"],
    details: "Final Project for Mechatronics Lab class focusing on power conversion and electronic circuit design. Built a complete wind turbine monitoring system that converts mechanical energy to electrical energy, processes AC to DC conversion, and provides visual feedback through LED indicators based on turbine speed variations.",
    date: "November 2024"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const renderProjectDetails = (project: any) => {
    if (project.id === 1) {
      // Fidget Spinner Project Details
      return (
        <>
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
                    className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                      className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                      className="w-full h-56 object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
        </>
      );
    } else if (project.id === 2) {
      // Wind Turbine Project Details
      return (
        <>
          {/* Circuit Design and Implementation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Circuit Design and Implementation</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The wind turbine generates AC power by converting mechanical energy into electrical energy via the generator. This AC power is then converted to DC through a half-wave rectifier, which uses a diode to allow current to pass in only one direction. To smooth out the fluctuating DC output, a capacitor is added.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757727012496.png"
                    alt="Circuit Schematic Diagram"
                    className="w-full h-56 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Circuit Schematic Diagram - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757727012496.png"
                    alt="Circuit Schematic Diagram"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/Screenshot 2025-09-12 202801_1757726906050.png"
                    alt="Breadboard Circuit Implementation"
                    className="w-full h-56 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Breadboard Circuit Implementation - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/Screenshot 2025-09-12 202801_1757726906050.png"
                    alt="Breadboard Circuit Implementation"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* LED Control System */}
          <div>
            <h4 className="text-lg font-semibold mb-4">LED Control System</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The smoothed DC output is connected to a transistor and two comparators. When current flows into the transistor's base, it triggers a larger current from the collector to the emitter, amplifying the current to control the brightness of a gradual LED. This allows us to visually track voltage changes through the LED.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              The high-speed LED is controlled by one of the comparators, which compares the DC output (reference voltage) to the 4V source set by the potentiometer (input voltage). When the reference voltage exceeds the voltage set by the potentiometer, the comparator outputs a low signal, allowing current to flow and lighting the LED.
            </p>
          </div>

          {/* Complete System */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Complete System</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The complete wind turbine LED circuit system demonstrates power conversion principles and provides real-time visual feedback of turbine performance through strategically placed LED indicators.
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <video
                    preload="metadata"
                    className="w-full max-w-md h-48 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                    data-testid="video-complete-system-preview"
                  >
                    <source src="/attached_assets/IMG_6206_1757728503731.mp4" type="video/mp4" />
                    <source src="/attached_assets/IMG_6206_1757728190318.MOV" type="video/quicktime" />
                    Your browser does not support the video element.
                  </video>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Complete Wind Turbine LED System - Video</DialogTitle>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto max-h-[90vh] object-contain"
                    data-testid="video-complete-system-modal"
                  >
                    <source src="/attached_assets/IMG_6206_1757728503731.mp4" type="video/mp4" />
                    <source src="/attached_assets/IMG_6206_1757728190318.MOV" type="video/quicktime" />
                    <p>
                      Your browser does not support the video element.{" "}
                      <a href="/attached_assets/IMG_6206_1757728190318.MOV" download className="text-primary hover:underline">
                        Download the video
                      </a>
                    </p>
                  </video>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Lessons Learned */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Lessons Learned</h4>
            <p className="text-sm text-muted-foreground">
              Adding a higher capacitance further smoothens the AC voltage when converting to DC. This helps with the possible flickering of the gradual LED, allowing for a smooth transition as the fan speed differs. To adjust the sensitivity on the gradual LED, we can adjust the resistance in the circuit to allow for less current to pass through the base when the fan first begins to spin.
            </p>
          </div>
        </>
      );
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of engineering projects I have worked on throughout my time at college
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card group overflow-hidden relative" data-testid={`card-project-${project.id}`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain mb-4"
                  data-testid={`img-project-${project.id}`}
                />
                
                {/* UT Longhorn Logo */}
                <div className="absolute bottom-4 right-4">
                  <img 
                    src="/images/ut-longhorn-black.png" 
                    alt="UT Austin" 
                    className="h-10 w-10 object-contain block dark:hidden" 
                  />
                  <img 
                    src="/images/ut-longhorn-white.jpg" 
                    alt="UT Austin" 
                    className="h-10 w-10 object-contain hidden dark:block" 
                    style={{ 
                      filter: 'brightness(1.2) contrast(1.5)',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
                
                {/* Date Badge */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-normal text-gray-800 dark:text-gray-200">
                      {project.date}
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
                        
                        {/* Dynamic Project Sections */}
                        {renderProjectDetails(project)}
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