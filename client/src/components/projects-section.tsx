import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
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
    details: "Final Project for Mechatronics Lab class focusing on power conversion and circuit design. Built a wind turbine monitoring system with LED visual feedback that responds to turbine speed variations.",
    date: "November 2024"
  },
  {
    id: 3,
    title: "Mars Rover Mechanical Subsystem Design",
    description: "Team-based mechanical subsystem design for NASA's L'SPACE Academy Mars rover mission",
    image: "/attached_assets/image_1757737312259.png",
    technologies: ["SolidWorks", "Project Coordination", "Systems Engineering"],
    details: "Team-based Mars rover design for NASA's L'SPACE Academy to traverse Martian terrain and collect soil and ice samples for analysis to determine whether humans could live on Mars and fertilize the ground by 2050. I collaborated with other student engineers to coordinate the design review, verify subsystem constraints, and ensure the design met strict mass, volume, and cost limits. My main contributions were the robotic arm and camera attachment, which enabled the rover to collect subsurface ice samples and capture visual data for mission analysis.",
    date: "January 2024 - April 2024"
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
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757715664937.png"
                    alt="3D Printed Prototype with Pennies"
                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ objectPosition: 'center 70%' }}
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
                    src="/attached_assets/image_1757718285634.png"
                    alt="Translucent Prototype"
                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ objectPosition: 'center 70%' }}
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
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757718142093.png"
                    alt="Laser Cut Prototype"
                    className="w-full max-w-md h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                      className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                      className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
              The wind turbine generates AC power which is then converted to smooth DC power using a rectifier circuit and capacitor for stable operation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757727012496.png"
                    alt="Circuit Schematic Diagram"
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
              The circuit uses transistors and comparators to control LED brightness based on voltage levels, creating a visual indicator system where different LEDs activate depending on the turbine's speed and power output. The system converts wind power to electrical energy and provides visual feedback through speed-responsive LEDs - high-speed LEDs activate during fast rotation while low-speed LEDs indicate slower operation. The orange base for the wind turbine was custom designed and prototyped using 3D printing technology.
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative max-w-md">
                    <video
                      preload="metadata"
                      className="w-full h-48 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      data-testid="video-complete-system-preview"
                    >
                      <source src="/attached_assets/IMG_6206_1757728503731.mp4" type="video/mp4" />
                      <source src="/attached_assets/IMG_6206_1757728190318.MOV" type="video/quicktime" />
                      Your browser does not support the video element.
                    </video>
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-60 transition-all duration-200">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
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
              Using higher capacitance values improves voltage smoothing and reduces LED flickering. Adjusting circuit resistance allows fine-tuning of LED sensitivity for different fan speeds.
            </p>
          </div>
        </>
      );
    } else if (project.id === 3) {
      // Mars Rover Project Details
      return (
        <>
          {/* Robotic Arm and Drill */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Robotic Arm and Drill</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The robotic arm serves as the primary driver for gathering samples from the terrain, hosting a drill for collecting ice samples and a CacheCam for visual monitoring. The ice drill is designed with mechanisms to prevent jamming and maintain functionality for continuous sample collection. With a TRL of 5, the drill has been validated in simulated environments to ensure reliable operation on the Martian surface.
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757737508023.png"
                    alt="Mars Rover Overall System Assembly"
                    className="w-full max-w-md h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Mars Rover Overall System Assembly - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757737508023.png"
                    alt="Mars Rover Overall System Assembly"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/* Camera Attachment */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Camera Attachment</h4>
            <p className="text-sm text-muted-foreground mb-4">The CacheCam attachment, similar to the NASA Perseverance Rover design, captures high-resolution images of collected samples and materials during the collection process. Operating from successful use in previous missions, the camera provides real-time monitoring to ensure NASA protocol compliance and enables comprehensive post-mission analysis of sample collection procedures.</p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757737624664.png"
                    alt="Camera Attachment System"
                    className="w-full max-w-md h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Camera Attachment System - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757737624664.png"
                    alt="Camera Attachment System"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/* Preliminary Design Review */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Preliminary Design Review</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Collaborated with 15 other student engineers to coordinate and write the Preliminary Design Review as the final deliverable for NASA's L'SPACE Academy program. The comprehensive document detailed the rover's integration of mechanical, GNC, electrical, thermal, and other subsystems, verified that each subsystem fell within NASA's required budget, mass, volume, and operational constraints, and outlined the procurement strategy for manufacturing the rover's components.
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757779449042.png"
                    alt="Preliminary Design Review Document"
                    className="w-full max-w-md h-auto object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Preliminary Design Review Document - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757779449042.png"
                    alt="Preliminary Design Review Document"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
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
                
                {/* Logo - UT for projects 1&2, NASA for project 3 */}
                <div className="absolute bottom-4 right-4">
                  {project.id === 3 ? (
                    <>
                      <img 
                        src="/attached_assets/image_1757732632620.png" 
                        alt="NASA" 
                        className="h-10 w-10 object-contain block dark:hidden" 
                        style={{
                          filter: 'invert(1)'
                        }}
                      />
                      <img 
                        src="/attached_assets/image_1757732632620.png" 
                        alt="NASA" 
                        className="h-10 w-10 object-contain hidden dark:block" 
                      />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
                      <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
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