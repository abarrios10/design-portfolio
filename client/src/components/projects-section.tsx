import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import Screenshot_2025_09_13_135237 from "@assets/Screenshot 2025-09-13 135237.png";

const projects = [
  {
    id: 1,
    title: "Bring-up Drive Prototype",
    description: "Drive system prototype development and testing for Amazon's Proteus autonomous mobile robot platform",
    image: "/attached_assets/image_1757800703491.png",
    technologies: ["SolidWorks", "Prototype Development", "Testing & Validation", "Supporting Hardware"],
    details: "First project during my Amazon Robotics internship focused on designing and prototyping a \"bring-up\" drive for the next-generation Proteus autonomous drive unit. Combined the robot's electromechanical hardware on a specified fixture plate, routing cabling and integrating electrical components to create a platform that allowed firmware engineers to test and debug motor, sensor, and load cell functionality before full system integration.",
    date: "January 2025 - February 2025",
    company: "Amazon Robotics"
  },
  {
    id: 2,
    title: "Drive Unit Robot Locomotor Wheel Design",
    description: "Advanced wheel design and locomotion system development for autonomous drive units",
    image: "/attached_assets/image_1757801406789.png",
    technologies: ["CAD Design", "Locomotion Systems", "Performance Optimization", "Autonomous Systems"],
    details: "Amazon Robotics project focused on designing advanced wheel systems for autonomous drive units. Developed innovative locomotor designs to improve maneuverability, efficiency, and reliability of autonomous mobile robots operating in warehouse environments.",
    date: "March 2025 - May 2025",
    company: "Amazon Robotics"
  },
  {
    id: 3,
    title: "Proteus 'Skateboard' Drive Redesign",
    description: "Complete redesign of the Proteus skateboard drive platform for enhanced performance and manufacturability",
    image: "/attached_assets/image_1757802322911.png",
    technologies: ["System Redesign", "Performance Enhancement", "Manufacturing Optimization", "Platform Integration"],
    details: "Amazon Robotics project involving the comprehensive redesign of the Proteus skateboard drive platform. Focused on improving performance characteristics, optimizing manufacturing processes, and enhancing integration capabilities for next-generation autonomous warehouse robots.",
    date: "April 2025 - May 2025",
    company: "Amazon Robotics"
  },
  {
    id: 4,
    title: "Injection Quill Design and Installation",
    description: "Chemical injection system design and field installation for refinery maintenance operations",
    image: "/attached_assets/image_1757889526065.png",
    technologies: ["Industrial Equipment Design", "Piping and Instrumentation Diagrams", "Supplier Relationships", "Field Installation", "Engineering Work Orders"],
    details: "Project for my internship at BP at their Whiting refinery focused on the design and installation of a chemical injection quill to mitigate pipe impingment at a critical junction tee. Involved updating P&IDs, coordinating field installation procedures, creating documentation, and ensuring compliance with ASME piping standards.",
    date: "May 2024 - August 2024",
    company: "BP"
  },
  {
    id: 5,
    title: "Steam Drainpipe Replacement",
    description: "Steam system piping analysis and replacement design for enhanced operational efficiency",
    image: "/attached_assets/image_1757889611754.png",
    technologies: ["Piping Systems", "Piping and Instrumentation Diagrams", "Installation Planning", "Engineering Work Orders"],
    details: "Project for my internship at BP's Whiting Refinery focused on replacing a drainpipe and drainage line for steam condensate to improve steamline heat-transfer efficiency. Involved updating P&IDs, coordinating field installation procedures, preparing engineering documentation, and ensuring full compliance with ASME piping standards.",
    date: "May 2024 - August 2024",
    company: "BP"
  },
  {
    id: 6,
    title: "Fidget Spinner Design & Manufacturing",
    description: "Complete engineering project from CAD design through prototype manufacturing",
    image: "/attached_assets/image_1757725873170.png",
    technologies: ["SolidWorks", "3D Printing", "Laser Cutting", "FEA Analysis", "Injection Molding"],
    details: "School project for Introduction to Engineering Design and Graphics course focusing on complete product development cycle from initial concept through manufacturing. Designed and manufactured functional fidget spinners using multiple engineering approaches including CAD modeling, finite element analysis, and various manufacturing methods including 3D printing, laser cutting, and injection molding. Real pennies were incorporated as weights to test functionality and structural integrity.",
    date: "August 2023 - December 2023"
  },
  {
    id: 7,
    title: "Wind Turbine LED Circuit",
    description: "AC to DC power conversion circuit with LED indicators for wind turbine monitoring",
    image: "/attached_assets/image_1757727946979.png",
    technologies: ["Circuit Design", "Half-Wave Rectifier", "Comparators", "Transistors", "Breadboard Prototyping"],
    details: "Final Project for Mechatronics Lab class focusing on power conversion and circuit design. Built a wind turbine monitoring system with LED visual feedback that responds to turbine speed variations.",
    date: "November 2024"
  },
  {
    id: 8,
    title: "Mars Rover Mechanical Subsystem Design",
    description: "Team-based mechanical subsystem design for NASA's L'SPACE Mission Concept Academy Mars rover mission",
    image: "/attached_assets/image_1757737312259.png",
    technologies: ["SolidWorks", "Project Coordination", "Systems Engineering"],
    details: "Team-based Mars rover design for NASA's L'SPACE Mission Concept Academy to traverse Martian terrain and collect soil and ice samples for analysis. Collaborated with other student engineers to coordinate the design review, verify subsystem constraints, and ensure the design met strict mass, volume, and cost limits. My main contributions were the robotic arm and camera attachment, all designed in SolidWorks in collaboration with one other engineer on the team.",
    date: "January 2024 - April 2024"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const renderProjectDetails = (project: any) => {
    if (project.id === 1) {
      // Bring-up Drive Prototype - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-semibold mb-4">Problem Statement</h4>
            <p className="text-sm text-muted-foreground mb-4">The firmware engineering teams needed every electromechanical component of the Proteus drive – motors, sensors, load cells, and motherboard – connected in a single, organized system with proper cabling and wiring so they could remotely interface with all hardware before moving to the next stage of development. At the time, their setup consisted of scattered hardware stored on shelves, which made testing inefficient and complicated hardware transport between engineers who needed to run diagnostics in different locations.</p>
            <p className="text-sm text-muted-foreground mb-4">To address this problem I was tasked with designing a dedicated “bring-up” drive, or BUD for short: a single fixture that consolidated all Proteus hardware into one integrated platform with fully routed and managed cabling. This solution would provide a compact, mobile testbed that would enable streamlined firmware testing, ensure reliable electrical connections across subsystems, and allow faster, more organized integration for the next phase of product development.</p>
            <h5 className="text-md font-semibold mb-4 mt-6">Current Setup: Scattered Hardware</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Left column - Tall image */}
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757870572777.png"
                    alt="Scattered Hardware Setup"
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Scattered Hardware Setup - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757870572777.png"
                    alt="Scattered Hardware Setup"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
              
              {/* Right column - Two stacked images */}
              <div className="grid grid-rows-2 gap-3 h-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/attached_assets/image_1757870505307.png"
                      alt="Disorganized Drive Components"
                      className="w-full h-full object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[95vh]">
                    <DialogTitle className="sr-only">Disorganized Drive Components - Full Size</DialogTitle>
                    <img
                      src="/attached_assets/image_1757870505307.png"
                      alt="Disorganized Drive Components"
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/attached_assets/image_1757870524824.png"
                      alt="Multiple Drive Units on Shelf"
                      className="w-full h-full object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[95vh]">
                    <DialogTitle className="sr-only">Multiple Drive Units on Shelf - Full Size</DialogTitle>
                    <img
                      src="/attached_assets/image_1757870524824.png"
                      alt="Multiple Drive Units on Shelf"
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Design Concept</h4>
            <p className="text-sm text-muted-foreground mb-4">When planning the bring-up drive, I focused on three key goals that shaped the final design:</p>
            <ul className="text-sm text-muted-foreground mb-2 space-y-3 ml-4">
              <li><strong>Configurability:</strong> I wanted to ensure the fixture could accommodate any combination of hardware components. Some firmware teams might only need sensors or motors, while others might require every subsystem connected at once. I designed the layout so that any component set could be installed and integrated as needed.</li>
              <li><strong>Portability:</strong> I aimed to make the fixture as light as possible while strong enough to support all components simultaneously. I selected a UHMW polyethylene base for its strength-to-weight balance and ensured the plate's width fit within the storage shelves to avoid overhang and tipping. This required reorienting components from the layout of the actual drive unit to fit the tighter frame while maintaining easy access.</li>
              <li><strong>Space-Efficiency:</strong> I worked to maximize the use of the fixture's limited area, carefully orienting parts so that shorter cables could still be routed to the motherboard and all ports could be reached regardless of component configuration.</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Finalized Design</h4>
            <p className="text-sm text-muted-foreground mb-4">I developed the complete BUD design in SolidWorks, creating models for the mounting brackets and assembling all of the components onto the plate. The CAD assembly allowed me to verify component clearances and optimize the layout before fabrication.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757873036902.png"
                    alt="SolidWorks Component Drawings"
                    className="w-full h-full object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">SolidWorks Component Drawings - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757873036902.png"
                    alt="SolidWorks Component Drawings"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
              
              <div className="flex items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/attached_assets/image_1757873010685.png"
                      alt="SolidWorks BUD Assembly - Isometric View"
                      className="w-full h-auto object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[95vh]">
                    <DialogTitle className="sr-only">SolidWorks BUD Assembly - Isometric View - Full Size</DialogTitle>
                    <img
                      src="/attached_assets/image_1757873010685.png"
                      alt="SolidWorks BUD Assembly - Isometric View"
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Build and Assembly</h4>
            <p className="text-sm text-muted-foreground mb-4">During the build and assembly of the bring-up drives, I reviewed the engineering drawings for the motherboard and head modules to ensure proper application of thermal interface materials and correct torque specifications on all fasteners. This process gave me valuable hands-on experience assembling head modules, sensor pods, and motherboard components in a fast-paced environment, which I really enjoyed and found highly rewarding.</p>
            
            <p className="text-sm text-muted-foreground mb-4">For the supporting hardware, I installed heat-set inserts in the UHMW polyethylene fixture plate to avoid threading directly into plastic and to provide durable fastening points. I also verified that all mounting brackets and spacers were functional and properly aligned before final assembly, ensuring a secure and reliable build for long-term use.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757873919744.png"
                    alt="Completed BUD Assembly on Test Fixture"
                    className="w-full h-full object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Completed BUD Assembly on Test Fixture - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757873919744.png"
                    alt="Completed BUD Assembly on Test Fixture"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757873941867.png"
                    alt="BUD Components and Testing Setup"
                    className="w-full h-full object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">BUD Components and Testing Setup - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757873941867.png"
                    alt="BUD Components and Testing Setup"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Results</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The bring-up drive project was a big success! The feedback from the firmware teams was overwhelmingly positive. They particularly appreciated the stability of the components on the plate, which provided a reliable testing platform. Additionally, the fixture's portability made it easy to move between workspaces, allowing teams to test in their preferred locations.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Most importantly, during BUD testing, one of the firmware engineers discovered a critical bug in one of the boards that could have caused significant issues in production. This early detection through the fixture testing potentially saved the project considerable time and resources by catching the problem before it reached the next stage in the robot's development.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
        </>
      );
    } else if (project.id === 2 || project.id === 3) {
      // Other Amazon Robotics Projects - Placeholder content
      return (
        <>
          <div>
            <h4 className="text-lg font-semibold mb-4">Project Overview</h4>
            <p className="text-sm text-muted-foreground mb-4">
              This Amazon Robotics project involved advanced mechanical engineering design and development work on autonomous robotic systems. Detailed project information and technical specifications are proprietary and cannot be shared publicly.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Key Contributions</h4>
            <p className="text-sm text-muted-foreground">
              • Mechanical design and system optimization<br />
              • Prototype development and testing<br />
              • Performance analysis and validation<br />
              • Cross-functional team collaboration
            </p>
          </div>
        </>
      );
    } else if (project.id === 4) {
      // Injection Quill Design and Installation - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-semibold mb-4">Problem Statement</h4>
            <p className="text-sm text-muted-foreground mb-4">In one of the process units I worked on, a critical pipe tee junction combined process water from one line with a wet-gas stream used to dilute acid gases and prevent corrosion. Over time, the high-velocity water entered the tee and repeatedly struck the upper wall of the pipe carrying the gas. This impingement caused wall thinning, and measurements showed the pipe was approaching the minimum thickness required for safe operation.</p>
            
            <p className="text-sm text-muted-foreground mb-4">To resolve this issue, operators recommended for an engineer to design and plan the installation of a new injection quill: a tubular device that introduces fluid parallel to the direction of flow. By redirecting the water so it entered the gas stream in-line instead of striking the pipe wall, the injection quill eliminated perpendicular impact, protected the pipe from further thinning, and extended the service life of the junction.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">How Injection Quills Work</h5>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/attached_assets/image_1757890944902.png"
                        alt="Injection Quill Operation"
                        className="block w-full h-auto object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh]">
                      <DialogTitle className="sr-only">Injection Quill Operation - Full Size</DialogTitle>
                      <img
                        src="/attached_assets/image_1757890944902.png"
                        alt="Injection Quill Operation"
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">Critical Junction Tee</h5>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/attached_assets/image_1757904692724.png"
                        alt="Critical Junction Tee with Flow Annotations"
                        className="block w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh]">
                      <DialogTitle className="sr-only">Junction Tee Location - Full Size</DialogTitle>
                      <img
                        src="/attached_assets/image_1757904692724.png"
                        alt="Critical Junction Tee with Flow Annotations"
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Vendor Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">I was responsible for coordinating with our preferred injection quill vendor and providing all the specifications required for manufacturing the quill. To ensure the quill was designed correctly, I gathered detailed process condition data, including flow rates as well as operational and maximum temperatures and pressures. Working closely with the process engineers, I spent a week in the field measuring operating temperatures on both process lines and tracing P&IDs to confirm the maximum design pressure each line was rated for.</p>

            <p className="text-sm text-muted-foreground mb-4">I also worked with the onsite materials engineer to determine the optimal quill material and design type. Together, we analyzed process conditions and mixing temperatures to select a material resistant to corrosion and thermal fatigue. Throughout the design process, I completed and regularly updated a specification sheet to meet vendor requirements, ensuring that the quill could be manufactured precisely to the needed specifications.</p>
            <div className="flex justify-center mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757904721675.png"
                    alt="Stanmar Manufacturing Specification Sheet"
                    className="w-full max-w-md h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Stanmar Manufacturing Specification Sheet - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757904721675.png"
                    alt="Stanmar Manufacturing Specification Sheet"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Design Requirements</h4>
            <p className="text-sm text-muted-foreground mb-4">As mentioned earlier, the quill needed to be made from a material resistant to corrosion and thermal fatigue because of the temperature differences between the two mixing fluids. In addition to material selection, I also had to determine the quill length using calculations guided by ASME B31.3, the standard for process piping design. Because the quill would be connected to the system through a flanged connection, I accounted for every layer in the assembly: the flange thickness, the appropriate flange type, the pipe tee wall thickness, and the gasket thickness required to create a secure, leak-free joint. An image of my calculations and the finalized system drawing is shown below.</p>
            <div className="flex justify-center mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757904755340.png"
                    alt="Injection Quill Technical Drawing and Calculations"
                    className="w-full max-w-lg h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Injection Quill Technical Drawing and Calculations - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757904755340.png"
                    alt="Injection Quill Technical Drawing and Calculations"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Vibration Analysis</h4>
            <p className="text-sm text-muted-foreground mb-4">After finalizing the design requirements and process conditions, I needed to ensure that the quill would not vibrate at its resonant frequency and fail from vibrational fatigue. Because the quill is inserted into the center of the pipe tee, the wet gas stream exerts a continuous force on its body, which could induce vibration and potentially lead to failure. An illustration of how this occurs is shown in the Design Requirements section.</p>

            <p className="text-sm text-muted-foreground mb-4">

            To confirm the design’s stability, I performed a vibration analysis using an in-house Excel tool built for refinery applications. I entered all relevant parameters, including process conditions, Reynolds numbers, selected material properties, quill dimensions, and other critical specifications. The analysis verified that the quill’s natural frequency would remain clear of excitation frequencies, meaning it was not at risk of resonance or vibrational fatigue. With these results, I was able to confidently move forward with the quill’s development.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Engineering Work Order</h4>
            <p className="text-sm text-muted-foreground mb-4">My final task was to create a detailed engineering work order to guide operators through the removal of the old pipe section and the installation of the new quill. I specified the correct welding procedures and weld types, identified the piping sections to be removed, and documented the torque values for flange connections along with other key installation requirements to ensure proper assembly and long-term reliability. This work order was reviewed and confirmed for technical accuracy by a maintenance engineer and then approved by the unit superintendent for execution in December. I included an updated piping layout and overlay diagram below to show the new layout with the quill installed.</p>
            <div className="flex justify-center mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757904782186.png"
                    alt="Field Installation Layout with Injection Quill"
                    className="w-full max-w-lg h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Field Installation Layout with Injection Quill - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757904782186.png"
                    alt="Field Installation Layout with Injection Quill"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Results</h4>
            <p className="text-sm text-muted-foreground mb-4">After the design and documentation were complete, I confirmed with my internship mentor a year after my departure that the quill was successfully installed with little to no issues during the procedure. This outcome validated that the engineering work order and the system layout I developed were thorough and reliable. Through this project I gained valuable experience in vendor coordination, conducting vibration analysis for components exposed to dynamic forces, and reading and analyzing P&IDs to track down operating conditions and design constraints. These skills strengthened both my technical expertise and my ability to manage complex, multi-step engineering projects from concept to installation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
        </>
      );
    } else if (project.id === 5) {
      // Steam Drainpipe Replacement - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-semibold mb-4">Problem Statement</h4>
            <p className="text-sm text-muted-foreground mb-4">Steam is used for heat tracing in the unit to keep pipelines warm and prevent freezing. In the colder Indiana climate, however, steam often condenses into a liquid–gas mixture known as steam condensate. Wet steam reduces heat-transfer efficiency and, if not removed, can cause water hammer and freezing. To remove condensate, drainpipes are installed to let the liquid fall by gravity into a drainage line, pass through a steam trap, and discharge into a process sewer.</p>

            <p className="text-sm text-muted-foreground mb-4">An operator discovered that the condensate line in my assigned unit was plugged, noting that a valve upstream was open but no flow was observed. Based on these findings, the operator recommended developing a new drainpipe and drainage line to prevent wet steam from circulating through the unit and to restore proper heat-transfer performance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">Current Drainage Line</h5>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/attached_assets/image_1757904483562.png"
                        alt="Current Drainage Line Overview"
                        className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh]">
                      <DialogTitle className="sr-only">Current Drainage Line Overview - Full Size</DialogTitle>
                      <img
                        src="/attached_assets/image_1757904483562.png"
                        alt="Current Drainage Line Overview"
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">Current Drainpipe</h5>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/attached_assets/image_1757904487724.png"
                        alt="Current Drainpipe with Corrosion"
                        className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh]">
                      <DialogTitle className="sr-only">Current Drainpipe with Corrosion - Full Size</DialogTitle>
                      <img
                        src="/attached_assets/image_1757904487724.png"
                        alt="Current Drainpipe with Corrosion"
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Determining Root Cause</h4>
            <p className="text-sm text-muted-foreground mb-4">To determine the cause of the plugging, I consulted with operators who monitor the unit daily to draw on their experience and pinpoint where along the drainpipe and drainage line the issue might originate. Two likely causes emerged: internal corrosion that created rough areas where solids could collect and block flow, and inadequate slope in the horizontal spools of the condensate line that could prevent condensate from draining by gravity if pressure differentials were too low. Based on this investigation, the operator recommended installing a new drainage line and drainpipe with an updated steam trap system previously used in another unit. Seeing this reference system provided a clear direction for my design approach, which I adapted to the layout and requirements of my assigned unit.</p>
            
            <p className="text-sm text-muted-foreground mb-4">The final design reconfigured the mudleg with a capped bottom and a bleeder valve, and routed the condensate line through a side branch with a valve rather than the bottom. This setup lets solids settle at the base where they can be blown down periodically, while carefully set distances between the branch, mudleg base, and top of the tee prevent backflow and water hammer during surges. The steam trap system was upgraded with a new trap and valve station containing isolation, test, and blowdown valves to ensure proper operation and maintenance. An image of the updated steam trap and drainpipe I wanted to utilize is shown below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">New Steam Trap</h5>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/attached_assets/image_1757906867281.png"
                        alt="Steam Header and Valve System Analysis"
                        className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh]">
                      <DialogTitle className="sr-only">Steam Header and Valve System Analysis - Full Size</DialogTitle>
                      <img
                        src="/attached_assets/image_1757906867281.png"
                        alt="Steam Header and Valve System Analysis"
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">Improved Drainpipe</h5>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/attached_assets/image_1757906905255.png"
                        alt="Steam Trap and Drainage Connection"
                        className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh]">
                      <DialogTitle className="sr-only">Steam Trap and Drainage Connection - Full Size</DialogTitle>
                      <img
                        src="/attached_assets/image_1757906905255.png"
                        alt="Steam Trap and Drainage Connection"
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Piping Support</h4>
            <p className="text-sm text-muted-foreground mb-4">When designing supports for the new mudleg and condensate line, I first reviewed how the existing piping was supported since the new mudleg was a replacement-in-kind. The condensate line was currently supported by a dummy support with a pipe shoe and two U-bolt supports on the vertical section, which I confirmed were cost-efficient and suitable for reuse. However, I noticed that the long horizontal segment of pipe relied on adjacent piping for support, which the refinery’s civil and integrity engineers advised was no longer recommended.</p>
            
            <p className="text-sm text-muted-foreground mb-4">Initially, I considered adding a structural steel column to provide direct support using a pipe shoe, but I decided against this because of higher cost and the potential to limit visibility and accessibility for future maintenance. Instead, I chose to use an existing reinforced concrete column located to the right and above the line. I designed a support system by attaching steel angles to the top and bottom of the column, connecting them with tie rods, and suspending the pipe with a clevis hanger attached to a tie rod from the upper angle. After discussing loading with the civil engineer, we confirmed that the small pipe size and low water weight meant the torque on the farthest tie rod was negligible and would not overstress the bolts or loosen the support over time.</p>
            <div className="flex justify-center mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757908507652.png"
                    alt="Support Detail Engineering Drawing"
                    className="w-full max-w-md h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Support Detail Engineering Drawing - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757908507652.png"
                    alt="Support Detail Engineering Drawing"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">To verify that my support design was structurally sound, I performed two key calculations. First, I checked the tensile stress on the hanger rod, accounting for the combined weight of the pipe, full condensate, and Aerogel insulation. The calculated stress was only 0.171 ksi, far below the 36 ksi yield strength of the chosen rod material, confirming it could safely carry the load. Second, I used a pipe deflection analysis with an Excel tool to determine optimal hanger spacing. With a maximum allowable deflection of 0.3 inches, I found that placing the support 7 feet from where the pipe segment began sloping met deflection requirements.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757908515811.png"
                    alt="Structural Calculation Analysis"
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Structural Calculation Analysis - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757908515811.png"
                    alt="Structural Calculation Analysis"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757908744224.png"
                    alt="Excel Deflection Analysis Tool"
                    className="w-full h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Excel Deflection Analysis Tool - Full Size</DialogTitle>
                  <img
                    src="/attached_assets/image_1757908744224.png"
                    alt="Excel Deflection Analysis Tool"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Engineering Work Order</h4>
            <p className="text-sm text-muted-foreground mb-4">My final task was to develop an engineering work order guidelining the replacement of the drainage line and drainpipe. Because sections of the steam header and condensate line contained asbestos insulation, I specified that a certified contractor, not BP employees, would remove it. To protect welders and meet safety standards, an extra three feet of asbestos insulation would be removed on each side of the planned field welds. I confirmed with inspection that the pipe thickness at each weld location met requirements by calculating minimum thickness from the pipe schedule and subtracting corrosion allowance.</p>
            
            <p className="text-sm text-muted-foreground mb-4">[Add coordination details with field personnel, including scheduling considerations, permit requirements, and communication protocols. Describe how the work order ensured proper installation and compliance with engineering standards.]</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Results</h4>
            <p className="text-sm text-muted-foreground mb-4">[Add outcomes of the drainpipe replacement and performance improvements achieved. Include details about successful installation, operational improvements, and how the new system addressed the original problems with heat-transfer efficiency.]</p>
            
            <p className="text-sm text-muted-foreground mb-4">[Add lessons learned and impact on steamline heat-transfer efficiency. Describe the project's success metrics, any unexpected challenges overcome, and valuable engineering experience gained from managing this infrastructure replacement project.]</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
        </>
      );
    } else if (project.id === 6) {
      // Fidget Spinner Project Details
      return (
        <>
          {/* CAD Design and Modeling */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CAD Design and Modeling</h4>
            <p className="text-sm text-muted-foreground mb-4 font-normal">Created detailed SolidWorks models for the fidget spinner geometry, assembly components, and injection mold design. After fabricating and testing an initial laser-cut prototype, I identified that the spacing between the spinner arms and weight holes was too small and prone to breaking when inserting pennies. In response, I redesigned the spinner with a continuous circular rim around the edge, improving structural strength, ease of spinning, and overall visual appeal. A photo of the laser-cut prototype illustrating the original spacing issue can be found in the Prototypes section.
            <br /><br />
            The images below showcase the finalized CAD models, including the injection-mold cavity design, developed following SolidWorks tutorials. These models formed the basis for 3D printing and injection molding prototypes, for which I completed machine shop training and certification.</p>
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
            <p className="text-sm text-muted-foreground mb-4">Manufactured multiple fidget spinner prototypes using 3D printing and laser cutting, incorporating real pennies as weights to test functionality and structural integrity. Although I created a complete injection-mold design in SolidWorks, machining a custom mold for my spinner would have required more time than the course allowed. Instead, I took the opportunity to use a previously manufactured mold to experience the injection-molding process and produce a colorful, visually appealing prototype that demonstrated the same manufacturing principles.

            All prototypes performed well in testing and spun for long durations. The 3D-printed spinner I selected for the class competition spun for about 1 minute and 20 seconds, earning a third-place finish out of eight students.</p>
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
            <p className="text-sm text-muted-foreground mb-4">Performed a complete structural FEA in SolidWorks on the fidget spinner assembly, including the polypropylene body, alloy steel bearing, and penny weights, to assess stress and factor of safety under penny insertion forces The simulation confirmed that the design easily exceeded strength requirements, with all critical regions showing factors of safety well above 1. The analysis validated that the material choices and geometry provided more than enough structural integrity for real-world use. No modifications, such as increasing thickness, adding fillets, or altering dimensions, were necessary, demonstrating that the initial design was already optimized for manufacturing and long-term durability. This successful verification gave confidence that the spinner would perform reliably through 3D printing, injection molding, and everyday operation.</p>
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
    } else if (project.id === 7) {
      // Wind Turbine Project Details
      return (
        <>
          {/* Circuit Design and Implementation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Circuit Design and Implementation</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The wind turbine generates three-phase AC power that varies with wind speed and requires conditioning for reliable LED operation. The core circuit implements a half-wave rectifier using a diode to convert the alternating current to pulsating DC, effectively removing the negative portions of the AC waveform. A large capacitor is placed after the rectifier to smooth the pulsating DC output, reducing voltage ripple and creating a more stable power supply for the LED indicators.
              <br /><br />
              The circuit design incorporates voltage regulation through careful selection of resistor values to ensure proper current limiting for the LEDs, preventing burnout while maintaining adequate brightness. The breadboard implementation allows for easy modification and testing of different component values to fine-tune the system's response to different turbine speeds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/attached_assets/image_1757727012496.png"
                    alt="Circuit Schematic Diagram"
                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
                    className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
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
            <p className="text-sm text-muted-foreground mb-4">The circuit uses transistors and comparators to control LED brightness based on voltage levels, creating a visual indicator system where different LEDs activate depending on the turbine's speed and power output. The system converts wind power to electrical energy and provides visual feedback through speed-responsive LEDs - high-speed LEDs activate during fast rotation while low-speed LEDs indicate slower operation. The orange base for the wind turbine was custom designed and prototyped using 3D printing.</p>
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
    } else if (project.id === 8) {
      // Mars Rover Project Details
      return (
        <>
          {/* Robotic Arm and Drill */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Robotic Arm and Drill</h4>
            <p className="text-sm text-muted-foreground mb-4">Designed the rover’s robotic arm to serve as the primary mechanism for collecting samples from the Martian surface, integrating a drill for ice extraction and a CacheCam for real-time visual monitoring. I focused on how to securely attach the arm to the rover body while meeting strict space and weight constraints, carefully selecting the location and attachment method to fit within the overall vehicle layout.

            I configured the arm with four motors to provide a wide range of motion that allows both translation and rotation without surpassing the mass limit. I positioned the drill and CacheCam at the arm’s end to enable precise sample collection and immediate visual confirmation.</p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src={Screenshot_2025_09_13_135237}
                    alt="Mars Rover Overall System Assembly"
                    className="w-full max-w-md h-auto object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[95vh]">
                  <DialogTitle className="sr-only">Mars Rover Overall System Assembly - Full Size</DialogTitle>
                  <img
                    src={Screenshot_2025_09_13_135237}
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
            <p className="text-sm text-muted-foreground mb-4">Designed the MasterCam attachment, modeled after the NASA Perseverance Rover, to capture high-resolution images of collected samples and surrounding materials during the collection process. I positioned the camera at a height that allows it to detect obstacles ahead and provide data to the sensor suite for navigation, ensuring real-time monitoring and compliance with NASA sampling protocols while supporting detailed post-mission analysis.
            <br /><br />
            Because external Martian conditions can create vibrations or deflections that might shift the camera out of place, I selected aluminum for the support base due to its high strength-to-weight ratio and proven reliability on previous Mars missions. I also minimized the attachment height and designed the base to be thick enough to resist bending and maintain precise alignment. These decisions resulted in the finalized, robust design shown below.</p>
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
            <p className="text-sm text-muted-foreground mb-4 text-left">Collaborated with 15 other student engineers to coordinate and author a 199-page Preliminary Design Review (PDR) as the final deliverable for NASA’s L’SPACE Academy. The document detailed the full integration of the rover’s mechanical, GNC, electrical, and thermal subsystems, verifying that each design met NASA’s strict budget, mass, volume, and operational constraints while outlining procurement strategies for manufacturing all components.
            <br /><br />
            The PDR was formally reviewed by NASA engineers to evaluate its feasibility as an actionable engineering plan and earned an 81/100, placing the team in the 75th percentile of all program cohorts. To conclude the project, we delivered a 1-hour formal presentation of the design, which strengthened technical communication and presentation skills for our mission-ready proposal.</p>
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
                
                {/* Logo - Amazon for projects 1-3, BP for projects 4-5, UT for projects 6-7, NASA for project 8 */}
                {project.id === 1 || project.id === 2 || project.id === 3 ? (
                  // Amazon Robotics Logo - positioned lower
                  (<div className="absolute bottom-2 right-4">
                    <>
                      <img 
                        src="/images/amazon-robotics-logo.webp" 
                        alt="Amazon Robotics" 
                        className="h-16 w-auto object-contain block dark:hidden" 
                      />
                      <img 
                        src="/images/amazon-robotics-logo.webp" 
                        alt="Amazon Robotics" 
                        className="h-16 w-auto object-contain hidden dark:block" 
                        style={{ filter: 'invert(1)' }}
                      />
                    </>
                  </div>)
                ) : project.id === 4 || project.id === 5 ? (
                  // BP Logo - original position
                  (<div className="absolute bottom-4 right-4">
                    <>
                      <img 
                        src="/images/bp-logo-official.png" 
                        alt="BP" 
                        className="h-16 w-auto object-contain block dark:hidden" 
                      />
                      <img 
                        src="/images/bp-logo-official.png" 
                        alt="BP" 
                        className="h-16 w-auto object-contain hidden dark:block" 
                        style={{ filter: 'invert(1)' }}
                      />
                    </>
                  </div>)
                ) : project.id === 8 ? (
                  // NASA Logo - original position
                  (<div className="absolute bottom-4 right-4">
                    <>
                      <img 
                        src="/attached_assets/image_1757732632620.png" 
                        alt="NASA" 
                        className="h-16 w-16 object-contain block dark:hidden" 
                        style={{
                          filter: 'invert(1)'
                        }}
                      />
                      <img 
                        src="/attached_assets/image_1757732632620.png" 
                        alt="NASA" 
                        className="h-16 w-16 object-contain hidden dark:block" 
                      />
                    </>
                  </div>)
                ) : (
                  // UT Austin Logo - positioned lower
                  (<div className="absolute bottom-2 right-4">
                    <>
                      <img 
                        src="/images/ut-longhorn-black.png" 
                        alt="UT Austin" 
                        className="h-16 w-16 object-contain block dark:hidden" 
                      />
                      <img 
                        src="/images/ut-longhorn-white.jpg" 
                        alt="UT Austin" 
                        className="h-16 w-16 object-contain hidden dark:block" 
                        style={{ 
                          filter: 'brightness(1.2) contrast(1.5)',
                          mixBlendMode: 'screen'
                        }}
                      />
                    </>
                  </div>)
                )}
                
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

        
      </div>
    </section>
  );
}