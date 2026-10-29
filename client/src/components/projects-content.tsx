import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Figure } from "@/components/figure";

import Screenshot_2025_09_13_135237 from "@assets/Screenshot 2025-09-13 135237.png";

// ---------------------------------------------------------------------------
// Project content — copy may be tightened at Andres's direction; all facts,
// numbers, names, and outcomes must be preserved. Restyle presentation in
// projects-section.tsx / project-index.tsx instead.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: 10,
    title: "Aerial ATV Mechanical Design",
    slug: "aerial-atv-mechanical-design",
    description:
      "Ground-hybrid ATV with parafoil lift for autonomous emergency response with ASCEND Texas",
    image: "/design-portfolio/attached_assets/aerial_atv.png",
    technologies: [
      "SolidWorks",
      "Mechanical Design",
      "Prototyping",
      "Systems Integration",
      "Testing & Validation",
    ],
    details:
      "As a member of ASCEND Texas (Aerial Solutions for Combating Emergencies & Natural Disasters), I'm helping build the Aerial ATV: a ground-hybrid vehicle that can navigate through air or rough terrain for autonomous emergency response. The vehicle pairs an all-terrain ATV platform with a parafoil for lift and computer-vision-based controls to enable safe, rapid deployment and delivery of equipment where it's needed most.",
    date: "Current Project",
    company: "ASCEND Texas",
  },
  {
    id: 11,
    title: "Cable Crimping Optimization",
    slug: "cable-crimping-optimization",
    description:
      "Cable crimping process optimization for Apple accessories — crimp die design and testing",
    image: "/design-portfolio/attached_assets/apple_cable_crimping.png",
    technologies: [
      "Siemens NX",
      "Teamcenter",
      "Design for Manufacturability",
      "Tooling Design",
      "Process Optimization",
      "Supplier Communication",
    ],
    details:
      "Project from my Apple internship in Accessories - Cables. I ran iterative experiments evaluating swaging and specialized crimping strategies, working from first principles to redistribute crimp material and isolate viable paths to round, earless crimp cross-sections. I analyzed vendor crimping settings against in-house capabilities to identify the critical crimp die features, compression behavior, and process conditions needed for internal lab prototyping. I designed and prototyped custom crimp dies and an adjustable cable-holding fixture in NX for repeatable cable-to-die positioning and isolated study of die effects on ear formation, then synthesized the findings into design rules of thumb — crimp wall-thickness ratio and zero-gap die closure as the key drivers of earless crimping — presenting recommendations to guide adoption across the design team.",
    date: "January 2026 - July 2026",
    company: "Apple",
  },
  {
    id: 12,
    title: "Pipe Lifting Jig",
    slug: "pipe-lifting-jig",
    description:
      "Pipe lifting jig design for safe handling of 200 lb piping in a pump input subsystem",
    image: "/design-portfolio/attached_assets/samsung_pipe_lifting.png",
    technologies: [
      "Autodesk Inventor",
      "Confluence",
      "GD&T",
      "Hand Calculations",
      "Finite Element Analysis",
      "Engineering Drawings",
      "3D Printing",
    ],
    details:
      "Project from my Samsung internship. I designed a mechanical assembly in Autodesk Inventor using electric actuators and a custom-built pipe collar to safely lift 200 lb piping within a pump input subsystem, eliminating operator handling risks. I created detailed GD&T drawings for the machined pipe collar and adjustable claw clamps, applying manufacturer DFM feedback to optimize the parts for machining while upholding existing design constraints. I also analyzed failure modes of the lifting system, confirming with hand calculations that clamping-induced hoop stress stayed below pipe yield strength and that frictional torque resisted actuator-induced rotation.",
    date: "May 2025 - August 2025",
    company: "Samsung",
  },
  {
    id: 3,
    title: "Drive Unit Robot Locomotor Wheel Design",
    slug: "drive-unit-robot-locomotor-wheel-design",
    description:
      "Turned a press-fit robot wheel into a bolt-on wheel, so it can be removed quickly for testing and inspection",
    image: "/design-portfolio/attached_assets/image_1759249913190.png",
    technologies: [
      "SolidWorks",
      "GD&T",
      "Tolerance Stack-Up",
      "Bolted Joint Analysis",
      "Supplier DFM",
    ],
    details:
      "Amazon Robotics internship project redesigning the Proteus Gen 2 locomotor wheel, transitioning it from a press-fit connection on the tapered motor shaft to a bolted attachment for faster wheel removal during testing and inspection. Designed a cast aluminum wheel and adapter in SolidWorks, verified fit with tolerance stack-ups, set bolt torque with a bolted joint analysis, and incorporated supplier manufacturing feedback.",
    date: "March 2025 - May 2025",
    company: "Amazon Robotics",
  },
  {
    id: 13,
    title: "Modular Test Skateboard",
    slug: "modular-test-skateboard",
    description:
      "Push-cart test platform carrying the robot's sensors and electronics, so they could be tested before the full robot was ready",
    image: "/design-portfolio/attached_assets/image_1759249955339.png",
    technologies: [
      "SolidWorks",
      "Mechanism Design",
      "Plate Design",
      "BOM",
    ],
    details:
      "A push-cart test platform for the Proteus Gen 2 drive unit that carries the robot's sensors and electronics so they can be tested before the full robot is ready. The platform swaps between drive wheels or casters placed where the real robot's wheels sit, uses a machined aluminum plate with a standard hole grid so any sensor bracket fits, and has hinged front and back chassis with a quick-release pin that locks the handle upright.",
    date: "Spring 2025",
    company: "Amazon Robotics",
  },
  {
    id: 2,
    title: "Bring-up Drive Prototype",
    slug: "bring-up-drive-prototype",
    description:
      "Drive system prototype development and testing for Amazon's Proteus autonomous mobile robot platform",
    image: "/design-portfolio/attached_assets/image_1759249851674.png",
    technologies: [
      "SolidWorks",
      "Prototype Development",
      "Testing & Validation",
      "Supporting Hardware",
    ],
    details:
      'First project during my Amazon Robotics internship focused on designing and prototyping a "bring-up" drive for new autonomous drive unit. Combined the robot\'s electromechanical hardware on a specified fixture plate, routing cabling and integrating electrical components to create a platform that allowed firmware engineers to test and debug motor, sensor, and load cell functionality before full system integration.',
    date: "January 2025 - February 2025",
    company: "Amazon Robotics",
  },
  {
    id: 8,
    title: "Wind Turbine LED Circuit",
    slug: "wind-turbine-led-circuit",
    description:
      "AC to DC power conversion circuit with LED indicators for wind turbine monitoring",
    image: "/design-portfolio/attached_assets/image_1757727946979.png",
    technologies: [
      "Circuit Design",
      "Half-Wave Rectifier",
      "Comparators",
      "Transistors",
      "Breadboard Prototyping",
    ],
    details:
      "Final Project for Mechatronics Lab class focusing on power conversion and circuit design. Built a wind turbine monitoring system with LED visual feedback that responds to turbine speed variations.",
    date: "November 2024",
  },
  {
    id: 5,
    title: "Injection Quill Design and Installation",
    slug: "injection-quill-design-and-installation",
    description:
      "Chemical injection system design and field installation for refinery maintenance operations",
    image: "/design-portfolio/attached_assets/image_1757889526065.png",
    technologies: [
      "Industrial Equipment Design",
      "Piping and Instrumentation Diagrams",
      "Supplier Relationships",
      "Field Installation",
      "Engineering Work Orders",
    ],
    details:
      "Project for my internship at BP at their Whiting refinery focused on the design and installation of a chemical injection quill to mitigate pipe impingment at a critical junction tee. Involved updating P&IDs, coordinating field installation procedures, creating documentation, and ensuring compliance with ASME piping standards.",
    date: "May 2024 - August 2024",
    company: "BP",
  },
  {
    id: 6,
    title: "Steam Drainpipe Replacement",
    slug: "steam-drainpipe-replacement",
    description:
      "Steam system piping analysis and replacement design for enhanced operational efficiency",
    image: "/design-portfolio/attached_assets/image_1757889611754.png",
    technologies: [
      "Piping Systems",
      "Piping and Instrumentation Diagrams",
      "Installation Planning",
      "Engineering Work Orders",
    ],
    details:
      "Project for my internship at BP's Whiting Refinery focused on replacing a drainpipe and drainage line for steam condensate to improve steamline heat-transfer efficiency. Involved updating P&IDs, coordinating field installation procedures, preparing engineering documentation, and ensuring full compliance with ASME piping standards.",
    date: "May 2024 - August 2024",
    company: "BP",
  },
  {
    id: 9,
    title: "Mars Rover Mechanical Subsystem Design",
    slug: "mars-rover-mechanical-subsystem-design",
    description:
      "Team-based mechanical subsystem design for NASA's L'SPACE Mission Concept Academy Mars rover mission",
    image: "/design-portfolio/attached_assets/image_1757737312259.png",
    technologies: ["SolidWorks", "Project Coordination", "Systems Engineering"],
    details:
      "Team-based Mars rover design for NASA's L'SPACE Mission Concept Academy to traverse Martian terrain and collect soil and ice samples for analysis. Collaborated with other student engineers to coordinate the design review, verify subsystem constraints, and ensure the design met strict mass, volume, and cost limits. My main contributions were the robotic arm and camera attachment, all designed in SolidWorks in collaboration with one other engineer on the team.",
    date: "January 2024 - April 2024",
  },
  {
    id: 7,
    title: "Fidget Spinner Design & Manufacturing",
    slug: "fidget-spinner-design-and-manufacturing",
    description:
      "Complete engineering project from CAD design through prototype manufacturing",
    image: "/design-portfolio/attached_assets/image_1757725873170.png",
    technologies: [
      "SolidWorks",
      "3D Printing",
      "Laser Cutting",
      "FEA Analysis",
      "Injection Molding",
    ],
    details:
      "School project for Introduction to Engineering Design and Graphics course focusing on complete product development cycle from initial concept through manufacturing. Designed and manufactured functional fidget spinners using multiple engineering approaches including CAD modeling, finite element analysis, and various manufacturing methods including 3D printing, laser cutting, and injection molding.",
    date: "August 2023 - December 2023",
  },
];

export function renderProjectDetails(project: any) {
    if (project.id === 2) {
      // Bring-up Drive Prototype - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Problem Statement</h4>
            <p className="text-base text-muted-foreground mb-4">
              The firmware engineering teams needed every electromechanical
              component of the drive – motors, sensors, load cells, and
              motherboard – connected in a single, organized system with proper
              cabling and wiring so they could remotely interface with all
              hardware before moving to the next stage of development. At the
              time, their setup consisted of scattered hardware stored on
              shelves, which made testing inefficient and complicated hardware
              transport between engineers who needed to run diagnostics in
              different locations.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              To address this problem I was tasked with designing a dedicated
              “bring-up” drive, or BUD for short: a single fixture that
              consolidated all of the robotic hardware into one integrated
              platform with fully routed and managed cabling. This solution
              would provide a compact, mobile testbed that would enable
              streamlined firmware testing, ensure reliable electrical
              connections across subsystems, and allow faster, more organized
              integration for the next phase of product development.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Design Concept</h4>
            <p className="text-base text-muted-foreground mb-4">
              When planning the bring-up drive, I focused on three key goals
              that shaped the final design:
            </p>
            <ul className="text-base text-muted-foreground mb-2 space-y-3 ml-4">
              <li>
                <strong>Configurability:</strong> I wanted to ensure the fixture
                could accommodate any combination of hardware components. Some
                firmware teams might only need sensors or motors, while others
                might require every subsystem connected at once. I designed the
                layout so that any component set could be installed and
                integrated as needed.
              </li>
              <li>
                <strong>Portability:</strong> I aimed to make the fixture as
                light as possible while strong enough to support all components
                simultaneously. I selected a UHMW polyethylene base for its
                strength-to-weight balance and ensured the plate's width fit
                within the storage shelves to avoid overhang and tipping. This
                required reorienting components from the layout of the actual
                drive unit to fit the tighter frame while maintaining easy
                access.
              </li>
              <li>
                <strong>Space-Efficiency:</strong> I worked to maximize the use
                of the fixture's limited area, carefully orienting parts so that
                shorter cables could still be routed to the motherboard and all
                ports could be reached regardless of component configuration.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Finalized Design</h4>
            <p className="text-base text-muted-foreground mb-4">
              I developed the complete BUD design in SolidWorks, creating models
              for the mounting brackets and assembling all of the components
              onto the plate. The CAD assembly allowed me to verify component
              clearances and optimize the layout before fabrication.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Build and Assembly</h4>
            <p className="text-base text-muted-foreground mb-4">
              During the build and assembly of the bring-up drives, I reviewed
              the engineering drawings for the motherboard and head modules to
              ensure proper application of thermal interface materials and
              correct torque specifications on all fasteners. This process gave
              me valuable hands-on experience assembling head modules, sensor
              pods, and motherboard components in a fast-paced environment,
              which I really enjoyed and found highly rewarding.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              For the supporting hardware, I installed heat-set inserts in the
              UHMW polyethylene fixture plate to avoid threading directly into
              plastic and to provide durable fastening points. I also verified
              that all mounting brackets and spacers were functional and
              properly aligned before final assembly, ensuring a secure and
              reliable build for long-term use.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Results</h4>
            <p className="text-base text-muted-foreground mb-4">
              The bring-up drive project was a big success! The feedback from
              the firmware teams was overwhelmingly positive. They particularly
              appreciated the stability of the components on the plate, which
              provided a reliable testing platform. Additionally, the fixture's
              portability made it easy to move between workspaces, allowing
              teams to test in their preferred locations.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Most importantly, during BUD testing, one of the firmware
              engineers discovered a critical bug in one of the boards that
              could have caused significant issues in production. This early
              detection through the fixture testing potentially saved the
              project considerable time and resources by catching the problem
              before it reached the next stage in the robot's development.
            </p>
          </div>
        </>
      );
    } else if (project.id === 3) {
      // Drive Unit Robot Locomotor Wheel Design - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Problem Statement</h4>
            <p className="text-base text-muted-foreground mb-4">
              The Proteus Gen 2 drive unit&apos;s wheel was pressed onto a tapered
              motor shaft, which made it slow and difficult to remove during
              testing and inspection. The fix was to redesign the wheel as a
              bolted joint instead of a press fit, so the wheel could come off
              quickly whenever the drive unit needed testing or inspection.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Design</h4>
            <p className="text-base text-muted-foreground mb-4">
              A cast aluminum wheel that bolts onto a new adapter, which takes
              over the press fit on the shaft. The wheel keeps the same outer
              diameter as the current wheel and uses an ADC12 or A380 aluminum
              core hub with M6x1 counter-bore clearance holes and raised ribs.
              The adapter is cast and machined aluminum: its shaft inserts
              into the wheel core, and it carries M6x1 tapped holes plus a
              tapered bore for the press-fit attachment to the locomotor.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              I made the GD&amp;T drawings for both parts and updated them with
              the supplier&apos;s manufacturing feedback, including wider
              tolerances, datum changes, and radii changes. I also gathered
              supplier cost and lead time estimates for the Alpha build.
            </p>
            <div className="flex justify-center mb-6">
              <Figure src="/design-portfolio/attached_assets/locomotor_exploded_assembly.jpg" alt="Exploded assembly: wheel, adapter, bolts, and drive motor" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  New Wheel
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/locomotor_new_wheel.jpg" alt="New wheel with bolt holes" />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  Adapter Bracket
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/locomotor_adapter_bracket.jpg" alt="Adapter bracket" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Analysis</h4>
            <p className="text-base text-muted-foreground mb-4">
              Tolerance stack-ups through the wheel, adapter, and motor
              covered two clearances: the gap between the locomotor surface
              and the outer wheel surface, which came out to 1.39 mm in the
              worst case, and the gaps between the wheel and the adapter
              bracket&apos;s shafts and diameters, which were increased after the
              stack-ups to prevent interference in the worst case.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              A bolted joint analysis combining motor torque with the weight
              of the drive unit and payload set the bolt input torque at
              6 N·m.
            </p>
            <div className="flex justify-center mb-6">
              <Figure src="/design-portfolio/attached_assets/locomotor_stackup_chains.jpg" alt="Tolerance stack-up chains" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Results</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
              <div>
                <p className="text-3xl font-display font-semibold mb-1">
                  &gt;50%
                </p>
                <p className="text-base text-muted-foreground">
                  targeted cut in wheel-removal downtime
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold mb-1">
                  1.39 mm
                </p>
                <p className="text-base text-muted-foreground">
                  worst-case clearance confirmed
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold mb-1">
                  6 N·m
                </p>
                <p className="text-base text-muted-foreground">
                  bolt torque set by analysis
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Handoff</h4>
            <p className="text-base text-muted-foreground mb-4">
              The wheel and adapter assembly was prepared for release, with
              wheel load analysis, shear stress between the wheel core and
              adapter bracket from motor torque, and eccentricity analysis
              scoped for the next build. The drive wheel will also be
              post-machined to match the updated wheel geometry, and the ribs
              are slated for removal after discussion with the supplier.
            </p>
          </div>
        </>
      );
    } else if (project.id === 5) {
      // Injection Quill Design and Installation - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Problem Statement</h4>
            <p className="text-base text-muted-foreground mb-4">
              In one of the process units I worked on, a critical pipe tee
              junction combined process water from one line with a wet-gas
              stream used to dilute acid gases and prevent corrosion. Over time,
              the high-velocity water entered the tee and repeatedly struck the
              upper wall of the pipe carrying the gas. This impingement caused
              wall thinning, and measurements showed the pipe was approaching
              the minimum thickness required for safe operation.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              To resolve this issue, operators recommended for an engineer to
              design and plan the installation of a new injection quill: a
              tubular device that introduces fluid parallel to the direction of
              flow. By redirecting the water so it entered the gas stream
              in-line instead of striking the pipe wall, the injection quill
              eliminated perpendicular impact, protected the pipe from further
              thinning, and extended the service life of the junction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  How Injection Quills Work
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/image_1757890944902.png" alt="Injection Quill Operation" />
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  Critical Junction Tee
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/image_1757904692724.png" alt="Critical Junction Tee with Flow Annotations" imgClassName="h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">Vendor Contact</h4>
            <Figure
              src="/design-portfolio/attached_assets/image_1757904721675.png"
              alt="Stanmar Manufacturing Specification Sheet"
              align="right"
              imgClassName="h-auto object-cover"
            />
            <p className="text-base text-muted-foreground mb-4">
              I was responsible for coordinating with our preferred injection
              quill vendor and providing all the specifications required for
              manufacturing the quill. To ensure the quill was designed
              correctly, I gathered detailed process condition data, including
              flow rates as well as operational and maximum temperatures and
              pressures. Working closely with the process engineers, I spent a
              week in the field measuring operating temperatures on both process
              lines and tracing P&IDs to confirm the maximum design pressure
              each line was rated for.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              I also worked with the onsite materials engineer to determine the
              optimal quill material and design type. Together, we analyzed
              process conditions and mixing temperatures to select a material
              resistant to corrosion and thermal fatigue. Throughout the design
              process, I completed and regularly updated a specification sheet
              to meet vendor requirements, ensuring that the quill could be
              manufactured precisely to the needed specifications.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Design Requirements</h4>
            <p className="text-base text-muted-foreground mb-4">
              The quill material had to resist corrosion and thermal fatigue from the temperature
              differences between the two mixing fluids. I sized the quill length with ASME B31.3
              calculations for process piping design, accounting for every layer of the flanged
              connection — flange thickness and type, pipe tee wall thickness, and gasket thickness —
              to ensure a secure, leak-free joint. My calculations and the finalized system drawing
              are shown below.
            </p>
            <div className="flex justify-center mb-6">
              <Figure
                src="/design-portfolio/attached_assets/image_1757904755340.png"
                alt="Injection Quill Technical Drawing and Calculations"
                className="max-w-lg"
                imgClassName="h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Vibration Analysis</h4>
            <p className="text-base text-muted-foreground mb-4">
              After finalizing the design requirements and process conditions, I
              needed to ensure that the quill would not vibrate at its resonant
              frequency and fail from vibrational fatigue. Because the quill is
              inserted into the center of the pipe tee, the wet gas stream
              exerts a continuous force on its body, which could induce
              vibration and potentially lead to failure. An illustration of how
              this occurs is shown in the Design Requirements section.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              To confirm the design’s stability, I performed a vibration
              analysis using an in-house Excel tool built for refinery
              applications. I entered all relevant parameters, including process
              conditions, Reynolds numbers, selected material properties, quill
              dimensions, and other critical specifications. The analysis
              verified that the quill’s natural frequency would remain clear of
              excitation frequencies, meaning it was not at risk of resonance or
              vibrational fatigue. With these results, I was able to confidently
              move forward with the quill’s development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Engineering Work Order
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              My final task was a detailed engineering work order guiding operators through removing
              the old pipe section and installing the new quill. I specified welding procedures and
              weld types, identified the piping sections to remove, and documented flange torque
              values and other key installation requirements. A maintenance engineer verified it for
              technical accuracy, and the unit superintendent approved it for December execution. The
              updated piping layout and overlay diagram below show the new quill installation.
            </p>
            <div className="flex justify-center mb-6">
              <Figure
                src="/design-portfolio/attached_assets/image_1757904782186.png"
                alt="Field Installation Layout with Injection Quill"
                className="max-w-lg"
                imgClassName="h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Results</h4>
            <p className="text-base text-muted-foreground mb-4">
              Near the end of my internship, the vendor returned the quill drawing to confirm all
              requirements were met before manufacturing (shown below). A year after my departure, my
              internship mentor confirmed the quill had been installed successfully with little to no
              issues — validating the work order and system layout I developed. Through this project I
              gained experience in vendor coordination, vibration analysis of dynamically loaded
              components, and reading P&IDs to pin down operating conditions and design constraints,
              strengthening my ability to manage complex, multi-step projects from concept to
              installation.
            </p>
            <div className="flex justify-center mb-6">
              <Figure
                src="/design-portfolio/attached_assets/injection_quill_drawing.png"
                alt="Injection Quill Technical Drawing"
                className="max-w-lg"
                imgClassName="h-auto object-cover"
              />
            </div>
          </div>
        </>
      );
    } else if (project.id === 6) {
      // Steam Drainpipe Replacement - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Problem Statement</h4>
            <p className="text-base text-muted-foreground mb-4">
              Steam is used for heat tracing in the unit to keep pipelines warm
              and prevent freezing. In the colder Indiana climate, however,
              steam often condenses into a liquid–gas mixture known as steam
              condensate. Wet steam reduces heat-transfer efficiency and, if not
              removed, can cause water hammer and freezing. To remove
              condensate, drainpipes are installed to let the liquid fall by
              gravity into a drainage line, pass through a steam trap, and
              discharge into a process sewer.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              An operator discovered that the condensate line in my assigned
              unit was plugged, noting that a valve upstream was open but no
              flow was observed. Based on these findings, the operator
              recommended developing a new drainpipe and drainage line to
              prevent wet steam from circulating through the unit and to restore
              proper heat-transfer performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  Current Drainage Line
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/image_1757904483562.png" alt="Current Drainage Line Overview" imgClassName="h-auto object-cover" />
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">Current Drainpipe</h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/image_1757904487724.png" alt="Current Drainpipe with Corrosion" imgClassName="h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Determining Root Cause
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              I consulted the operators who monitor the unit daily to pinpoint the plugging. Two
              likely causes emerged: internal corrosion creating rough spots where solids could
              collect and block flow, and inadequate slope in the horizontal condensate spools, which
              could prevent gravity drainage when pressure differentials were too low. The operator
              recommended a new drainage line and drainpipe using an updated steam trap system already
              proven in another unit — a reference design I adapted to my assigned unit’s layout and
              requirements.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              The final design reconfigured the mudleg with a capped bottom and bleeder valve,
              routing the condensate line through a valved side branch instead of the bottom. Solids
              settle at the base for periodic blowdown, while set distances between the branch,
              mudleg base, and tee top prevent backflow and water hammer during surges. I also
              upgraded the steam trap system with a new trap and valve station — isolation, test, and
              blowdown valves — shown below with the updated drainpipe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">New Steam Trap</h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/image_1757906867281.png" alt="Steam Header and Valve System Analysis" imgClassName="h-auto object-cover" />
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">Improved Drainpipe</h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/image_1757906905255.png" alt="Steam Trap and Drainage Connection" imgClassName="h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">Piping Support</h4>
            <Figure
              src="/design-portfolio/attached_assets/image_1757908507652.png"
              alt="Support Detail Engineering Drawing"
              align="right"
              imgClassName="h-auto object-cover"
            />
            <p className="text-base text-muted-foreground mb-4">
              When designing supports for the new mudleg and condensate line, I
              first reviewed how the existing piping was supported since the new
              mudleg was a replacement-in-kind. The condensate line was
              currently supported by a dummy support with a pipe shoe and two
              U-bolt supports on the vertical section, which I confirmed were
              cost-efficient and suitable for reuse. However, I noticed that the
              long horizontal segment of pipe relied on adjacent piping for
              support, which the refinery’s civil and integrity engineers
              advised was no longer recommended.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              I first considered a structural steel column with a pipe shoe for direct support, but
              rejected it on cost and because it would limit visibility and access for future
              maintenance. Instead, I used an existing reinforced concrete column beside and above
              the line: steel angles attached top and bottom, connected by tie rods, with the pipe
              suspended from a clevis hanger on the upper tie rod. The civil engineer and I confirmed
              that the small pipe size and low water weight made torque on the farthest tie rod
              negligible — no risk of overstressed bolts or loosening over time.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              I ran two key calculations to verify the support. First, tensile stress on the hanger
              rod — accounting for the pipe, full condensate, and Aerogel insulation — came to
              0.171 ksi, far below the rod’s 36 ksi yield strength. Second, a pipe deflection analysis
              in Excel set the optimal hanger spacing: with a 0.3-inch maximum allowable deflection,
              placing the support 7 feet from where the pipe began sloping met requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Figure src="/design-portfolio/attached_assets/image_1757908515811.png" alt="Structural Calculation Analysis" imgClassName="h-auto object-cover" />
              <Figure src="/design-portfolio/attached_assets/image_1757908744224.png" alt="Excel Deflection Analysis Tool" imgClassName="h-auto object-cover" />
            </div>
          </div>
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">
              Engineering Work Order
            </h4>
            <Figure
              src="/design-portfolio/attached_assets/image_1757910087712.png"
              alt="Mudleg Dimensional Drawing"
              align="left"
              imgClassName="h-auto object-cover"
            />
            <p className="text-base text-muted-foreground mb-4">
              My final task was to develop an engineering work order guidelining
              the replacement of the drainage line and drainpipe. Because
              sections of the steam header and condensate line contained
              asbestos insulation, I specified that a certified contractor, not
              BP employees, would remove it. To protect welders and meet safety
              standards, an extra three feet of asbestos insulation would be
              removed on each side of the planned field welds. I confirmed with
              inspection that the pipe thickness at each weld location met
              requirements by calculating minimum thickness from the pipe
              schedule and subtracting corrosion allowance.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              I also reviewed ASME piping standards and refinery welding
              procedures to define appropriate weld types for both shop and
              field work. With guidance from the unit superintendent, I
              incorporated proper sloping requirements, ensuring one inch of
              drop for every fifty inches of drainage piping, and dimensioned
              the drainpipe appropriately, applying the correct measurements for
              the branched connection in my design.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Results</h4>
            <p className="text-base text-muted-foreground mb-4">
              The work order was reviewed and approved for technical accuracy by
              the Asset Owner, and a formal Management of Change was initiated.
              The job note was signed, authorizing construction with completion
              targeted for late 2024. These steps ensured the project complied
              with safety regulations and refinery standards while providing the
              installation team with clear, technically sound instructions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Space for images */}
            </div>
          </div>
        </>
      );
    } else if (project.id === 7) {
      // Fidget Spinner Project Details
      return (
        <>
          {/* CAD Design and Modeling */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              CAD Design and Modeling
            </h4>
            <p className="text-base text-muted-foreground mb-4 font-normal">
              I built detailed SolidWorks models of the spinner geometry, assembly, and injection
              mold design. Testing the initial laser-cut prototype revealed the spacing between the
              spinner arms and weight holes was too small — pennies could crack the arms on
              insertion. I redesigned it with a continuous circular rim, improving strength, spin,
              and looks (the original is pictured in Prototypes). The finalized CAD models below,
              including the injection-mold cavity design, were built from SolidWorks tutorials and
              became the basis for the 3D-printed and injection-molded prototypes, for which I
              completed machine shop training and certification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Figure src="/design-portfolio/attached_assets/image_1757718464736.png" alt="SolidWorks Assembly Design" imgClassName="h-auto object-cover" />
              <Figure src="/design-portfolio/attached_assets/image_1757718554022.png" alt="3D Fidget Spinner Model" imgClassName="h-auto object-cover" />
              <Figure src="/design-portfolio/attached_assets/image_1757718627490.png" alt="Detailed Component Design" imgClassName="h-auto object-cover" />
              <Figure src="/design-portfolio/attached_assets/image_1757718751128.png" alt="Injection Mold Cavity Design" imgClassName="h-auto object-cover" />
            </div>
          </div>
          {/* Prototypes */}
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">Prototypes</h4>
            <Figure
              src="/design-portfolio/attached_assets/image_1757718142093.png"
              alt="Laser Cut Prototype"
              align="right"
              imgClassName="h-auto object-cover"
            />
            <p className="text-base text-muted-foreground mb-4">
              I manufactured multiple prototypes via 3D printing and laser cutting, using real
              pennies as weights to test functionality and structural integrity. Machining a custom
              injection mold would have exceeded the course timeline, so I used a previously
              manufactured mold instead — experiencing the full injection-molding process and
              producing a colorful prototype on the same principles. All prototypes spun well; the
              3D-printed spinner I entered in the class competition spun about 1 minute 20 seconds,
              earning third place out of eight.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Figure
                src="/design-portfolio/attached_assets/image_1757715664937.png"
                alt="3D Printed Prototype with Pennies"
                imgClassName="h-64 object-cover"
                style={{ objectPosition: "center 70%" }}
              />
              <Figure
                src="/design-portfolio/attached_assets/image_1757718285634.png"
                alt="Translucent Prototype"
                imgClassName="h-64 object-cover"
                style={{ objectPosition: "center 70%" }}
              />
            </div>
          </div>
          {/* Finite Element Analysis */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Finite Element Analysis
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              I ran a complete structural FEA in SolidWorks on the full assembly — polypropylene
              body, alloy steel bearing, and penny weights — under penny insertion forces. Every
              critical region showed a factor of safety well above 1, validating the material choices
              and geometry with no modifications needed. The analysis confirmed the initial design
              was already optimized for manufacturing and long-term durability across 3D printing,
              injection molding, and everyday use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h6 className="text-sm font-medium mb-2">
                  Von Mises Stress Analysis
                </h6>
                <Figure src="/design-portfolio/attached_assets/image_1757719949420.png" alt="Von Mises Stress Distribution" imgClassName="h-auto object-cover" />
              </div>
              <div>
                <h6 className="text-sm font-medium mb-2">
                  Factor of Safety Analysis
                </h6>
                <Figure src="/design-portfolio/attached_assets/image_1757720047656.png" alt="Factor of Safety Distribution" imgClassName="h-auto object-cover" />
              </div>
            </div>
          </div>
        </>
      );
    } else if (project.id === 8) {
      // Wind Turbine Project Details
      return (
        <>
          {/* Circuit Design and Implementation */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Circuit Design and Implementation
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              The turbine generates three-phase AC that varies with wind speed, so the circuit
              conditions it for reliable LED operation. A diode half-wave rectifier converts AC to
              pulsating DC, and a large capacitor smooths the ripple into a stable LED supply.
              Carefully chosen resistor values limit LED current — preventing burnout while
              maintaining brightness — and the breadboard layout makes it easy to swap component
              values and fine-tune the response to different turbine speeds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Figure src="/design-portfolio/attached_assets/image_1757727012496.png" alt="Circuit Schematic Diagram" imgClassName="h-64 object-cover" />
              <Figure src="/design-portfolio/attached_assets/Screenshot 2025-09-12 202801_1757726906050.png" alt="Breadboard Circuit Implementation" imgClassName="h-64 object-cover" />
            </div>
          </div>
          {/* LED Control System */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">LED Control System</h4>
            <p className="text-base text-muted-foreground mb-4">
              The circuit uses transistors and comparators to control LED
              brightness based on voltage levels, creating a visual indicator
              system where different LEDs activate depending on the turbine's
              speed and power output. The system converts wind power to
              electrical energy and provides visual feedback through
              speed-responsive LEDs - high-speed LEDs activate during fast
              rotation while low-speed LEDs indicate slower operation. The
              orange base for the wind turbine was custom designed and
              prototyped using 3D printing.
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative max-w-md">
                    <video
                      preload="metadata"
                      className="mx-auto w-full h-48 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                      data-testid="video-complete-system-preview"
                    >
                      <source
                        src="/design-portfolio/attached_assets/IMG_6206_1757728503731.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="/design-portfolio/attached_assets/IMG_6206_1757728190318.MOV"
                        type="video/quicktime"
                      />
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
                  <DialogTitle className="sr-only">
                    Complete Wind Turbine LED System - Video
                  </DialogTitle>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto max-h-[90vh] object-contain"
                    data-testid="video-complete-system-modal"
                  >
                    <source
                      src="/design-portfolio/attached_assets/IMG_6206_1757728503731.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="/design-portfolio/attached_assets/IMG_6206_1757728190318.MOV"
                      type="video/quicktime"
                    />
                    <p>
                      Your browser does not support the video element.{" "}
                      <a
                        href="/design-portfolio/attached_assets/IMG_6206_1757728190318.MOV"
                        download
                        className="text-primary hover:underline"
                      >
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
            <h4 className="text-lg font-display font-semibold mb-4">Lessons Learned</h4>
            <p className="text-base text-muted-foreground">
              Using higher capacitance values improves voltage smoothing and
              reduces LED flickering. Adjusting circuit resistance allows
              fine-tuning of LED sensitivity for different fan speeds.
            </p>
          </div>
        </>
      );
    } else if (project.id === 9) {
      // Mars Rover Project Details
      return (
        <>
          {/* Robotic Arm and Drill */}
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">
              Robotic Arm and Drill
            </h4>
            <Figure
              src={Screenshot_2025_09_13_135237}
              alt="Mars Rover Overall System Assembly"
              align="right"
              imgClassName="h-auto object-cover"
            />
            <p className="text-base text-muted-foreground mb-4">
              I designed the rover’s robotic arm as its primary Martian sample-collection
              mechanism, integrating a drill for ice extraction and a CacheCam for real-time visual
              monitoring. Working within strict space and weight constraints, I selected the arm’s
              location and attachment method to fit the overall vehicle layout, configuring it with
              four motors for full translation and rotation without exceeding the mass limit. The
              drill and CacheCam sit at the arm’s end for precise collection with immediate visual
              confirmation.
            </p>
          </div>
          {/* Camera Attachment */}
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">Camera Attachment</h4>
            <Figure
              src="/design-portfolio/attached_assets/image_1757737624664.png"
              alt="Camera Attachment System"
              align="left"
              imgClassName="h-auto object-cover"
            />
            <p className="text-base text-muted-foreground mb-4">
              I designed the MasterCam attachment — modeled after the NASA Perseverance Rover —
              to capture high-resolution images of samples and surroundings during collection.
              Positioned to detect obstacles ahead and feed the sensor suite for navigation, it
              supports real-time monitoring, NASA sampling protocol compliance, and post-mission
              analysis. To withstand Martian vibration, I chose an aluminum support base for its
              strength-to-weight ratio and flight heritage, minimized the attachment height, and made
              the base thick enough to resist bending and hold alignment. The finalized design is
              shown below.
            </p>
          </div>
          {/* Preliminary Design Review */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Preliminary Design Review
            </h4>
            <p className="text-base text-muted-foreground mb-4 text-left">
              With 15 other student engineers, I co-authored the 199-page Preliminary Design Review
              — the final deliverable for NASA’s L’SPACE Academy — detailing the full integration of
              the rover’s mechanical, GNC, electrical, and thermal subsystems against NASA’s budget,
              mass, volume, and operational constraints, plus procurement strategies for
              manufacturing. NASA engineers formally reviewed it for feasibility as an actionable
              plan: we scored 81/100, placing in the 75th percentile of program cohorts, and closed
              out with a 1-hour formal design presentation.
            </p>
            <div className="flex justify-center">
              <Figure src="/design-portfolio/attached_assets/image_1757779449042.png" alt="Preliminary Design Review Document" className="max-w-md" />
            </div>
          </div>
        </>
      );
    } else if (project.id === 10) {
      // Aerial ATV - ASCEND Texas - Custom sections
      return (
        <>
          <div className="flow-root">
            <h4 className="text-lg font-display font-semibold mb-4">The Organization</h4>
            <Figure
              src="/design-portfolio/attached_assets/aerial_atv_logo.png"
              alt="ASCEND Texas Logo"
              align="right"
              imgClassName="h-auto object-contain bg-white"
            />
            <p className="text-base text-muted-foreground mb-4">
              ASCEND Texas — Aerial Solutions for Combating Emergencies &
              Natural Disasters — is a 25+ member engineering team building an
              innovative autonomous emergency-response aircraft. The team's
              approach pairs parafoil lift with computer-vision-based controls
              for ground/air hybrid operation. The organization is advised by
              Dr. Christian Claudel and Dr. Krishna Kumar, with graduate and
              undergraduate student staff developing the vehicle.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              We are a competition-based organization, currently competing in
              NASA's GoAERO and XPRIZE Wildfire — and we have already won an
              Innovation Award. As a member, I contribute to a project with
              real-world emergency-response applications, gaining hands-on
              technical experience across the vehicle development cycle.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">The Vehicle</h4>
            <p className="text-base text-muted-foreground mb-4">
              The Aerial ATV is a ground-hybrid vehicle for transportation that
              can navigate through air or rough terrain, no matter the weather,
              depending on the necessities. Inspired by paramotors but advanced
              with multi-scenario piloting and software control developed by
              our team, it combines an all-terrain ATV platform with a
              propulsion cage and paraglider integration for true ground/air
              transitions.
            </p>
            <div className="flex justify-center mb-6">
              <Figure
                src="/design-portfolio/attached_assets/aerial_atv.png"
                alt="Aerial ATV Prototype"
              />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Why It Matters</h4>
            <ul className="text-base text-muted-foreground mb-4 space-y-3 ml-4 list-disc">
              <li>
                <strong>Safe and quick deployment:</strong> rapid delivery of
                equipment for emergency response when every minute counts.
              </li>
              <li>
                <strong>Efficient and reliable:</strong> longer life per charge
                than drones, keeping the vehicle in the field longer.
              </li>
              <li>
                <strong>All-weather capable:</strong> adaptable to harsh
                conditions where other platforms can't operate.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              What We're Working Towards
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              ASCEND's mission is to empower its members by providing
              opportunities to enhance their technical skills and create
              impactful products that make a positive difference in people's
              lives. This year, our goals include completing the CAD of the
              hybrid ATV, developing the propulsion cage and paraglider
              integration, building reliable autonomy software for ground/air
              transitions, conducting system-level testing and safety
              evaluations, securing funding and sponsorships — and staying on
              track for GoAERO Stage 3.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The work spans every discipline: mechanical design (CAD,
              machining, welding, and manufacturing within tight space, weight,
              and spatial constraints), electrical (wiring, autonomous control
              algorithms, machine vision, paraglider control), and test &
              evaluation (validating flight- and drive-critical systems). Being
              part of this team means hands-on opportunities across the full
              vehicle — and helping make our ATV fly.
            </p>
          </div>
        </>
      );
    } else if (project.id === 12) {
      // Pipe Lifting Jig — Samsung, May 2025 – August 2025
      // Source: Andres's Samsung internship journal, 5/28/25 – 7/30/25.
      // Deliberately generalised for a public portfolio: no internal pump IDs,
      // no supplier part numbers, and no colleagues' full names are published.
      return (
        <>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Problem Statement
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              When a pump input unit (AGV) is replaced in the fab, the heater is
              removed and the foreline piping it connects to has to be lifted and
              held out of the way. Operators were handling that piping by hand.
              The goal was a jig that could lift the foreline, hold it securely
              while the AGV was swapped, and then let it be set back down —
              without relying on a person to support the pipe, and without
              damaging it in the process.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The project goal from the start of the internship was a physical
              prototype by the end of the summer. The design had to work in the
              fab, not just on a bench: it had to fit the pump racks as they
              actually are, use materials allowed in the fab, and be installable
              by the people doing the AGV replacement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Design Concept
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              The jig is built around a two-piece pipe collar that clamps around
              the foreline and opens and closes on a hinge at one end, so it can
              be fitted onto the pipe on the rack. Claw clamps and bolts close
              the collar around the pipe, with a threaded rod through the collar
              keeping the assembly from unhinging and keeping it stable around
              the foreline. A rubber lining inside the collar increases friction
              between the collar and the pipe and protects the pipe surface from
              metal-to-metal wear and scratching.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Lifting comes from actuators pushing up on an attachment sitting
              below the end of the collar. The actuators are supported by an
              attachment bolted to them that lets the assembly sit magnetically
              on the supporting rack. The pipe is lifted by the friction between
              the collar and the foreline, and by the clamped connection itself
              — not by the actuators gripping the pipe directly.
            </p>
            <ul className="text-base text-muted-foreground mb-4 space-y-3 ml-4 list-disc">
              <li>
                <strong>Pipe collar:</strong> two-piece, hinged, split collar
                that clamps around the foreline.
              </li>
              <li>
                <strong>Claw clamps:</strong> top and bottom clamps closing the
                collar, with the bottom clamp adjustable on a sliding mechanism
                so it can clamp the smaller-diameter pipes.
              </li>
              <li>
                <strong>Rubber lining:</strong> 1/8 in. (3.175 mm) rubber strip
                around the collar inner diameter, for friction and surface
                protection.
              </li>
              <li>
                <strong>Adapter pieces:</strong> inserts in the collar bore so
                the same jig fits 200 mm, 160 mm, and 125 mm forelines.
              </li>
              <li>
                <strong>Lifting actuators:</strong> originally pneumatic
                cylinders, later reconsidered as electric linear actuators —
                see Design Iterations below.
              </li>
              <li>
                <strong>Rack attachment:</strong> magnetic attachment to the
                supporting rack, so the actuators have a stable base without a
                permanent fixture on the rack.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Field Constraints
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              The numbers that drove the design came from the fab, not from a
              catalogue. Forelines in the area are usually 304L stainless steel,
              about 0.109 in. thick, with an average weight around 175 lb per
              line and a ballpark maximum around 200 lb for a 6 in. line. The
              sizes the jig actually had to cover were confirmed in the field as
              125 mm, 160 mm, and 200 mm, and the collar was sized around the
              200 mm pipe, with adapters stepping it down to the other two.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Pump-rack walkdowns set the other hard constraints. Racks differ
              in layout, the heights available for supports are uneven, bars
              are spaced far apart, and some racks are long with too little
              material for a base to rest on. A universal support that assumed
              a flat, even rack would not have worked, which is why the design
              moved toward a collar that carries the pipe and actuators that
              sit on whatever rack surface is available, rather than a
              one-size-fits-all base. The lift height itself was set from
              in-field inspection of the maximum height from the pipe rack to
              the AGV.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The fab context mattered too. The process flow the jig sits in
              runs Main Chamber → Foreline → AGV → Pump → Exhaust → Scrubber →
              Environment, and the work was done under the site's quality and
              safety practices — standard operating procedures and checklists,
              risk assessment before and after the work, and point / read /
              operate verification before operating a component.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Design Iterations
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              The first concept (June 2) was a pipe collar on a metal base with
              lead screws and a support base. From there, almost every change
              was driven by something found in the field or in a review:
            </p>
            <ul className="text-base text-muted-foreground mb-4 space-y-3 ml-4 list-disc">
              <li>
                <strong>C-clamps, then claw clamps:</strong> added so the load
                pushing up on the foreline is distributed, rather than relying
                on friction alone. A hinge in the top metal base was added so
                the jig can be installed on the pump rack more easily.
              </li>
              <li>
                <strong>Ribbed, slotted adapters:</strong> after field input,
                the adapter became a ribbed adapter with a mid-plane slotted
                center groove, with slots as locating features. Because the
                adapter brackets are split in half, keeping them in place
                became its own design problem.
              </li>
              <li>
                <strong>Split-line problem:</strong> because the split line
                runs down the middle of the metal base, actuator force could
                not be applied directly there. The fix was a plate on the end
                of the rod so the load is distributed symmetrically, rather
                than landing on both corners.
              </li>
              <li>
                <strong>Rubber, sized to the collar:</strong> collar bores were
                first made 2 mm smaller than the pipe (200 → 198 mm,
                160 → 158 mm, 125 → 123 mm) to make room for the rubber. That
                was later revised to keep the rubber on the collar diameters:
                for the 200 mm pipe the collar bore is 206.35 mm, giving a
                rubber thickness of (206.35 − 200) / 2 = 3.175 mm, with the
                160 mm and 125 mm attachments reworked to new outside
                diameters of 199 mm and 159 mm and a new rib of 6.175 mm.
              </li>
              <li>
                <strong>T-shaped base:</strong> the metal base was reshaped to
                a T-shape so the claw-clamp assembly is shorter and less
                cantilevered, with a small extrusion cut letting the actuator
                attachment rest with little movement on the pipe collar.
              </li>
              <li>
                <strong>Adjustable actuator position:</strong> the distance
                from the cylinder to the foreline center axis — the moment arm
                in the torque check — was made adjustable by lengthening the
                indent the attachment sits in. The most common distance was
                about 5 in., and the design was checked to keep the cylinder
                about 5 in. from the center axis at its closest position. The
                cylinders were also changed to a smaller bore to fit smaller
                rails, and lengthened to 10 in. so the jig can clamp onto the
                foreline above when an AGV with bellows is being replaced.
              </li>
              <li>
                <strong>Threaded rod over a long bolt:</strong> a long,
                partially threaded rod was chosen to join the claw clamps
                because it has more material to resist the shear stresses on
                the bolt, and because the threaded length is more variable
                than a fixed long bolt.
              </li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              By mid-July the design decisions were consolidated into a
              Confluence page: tee-shaped collar, latch mechanism in place of
              the threaded-rod closure, rubber lining on the collar inside
              diameter, thinner collar, adapter block in place of a large
              square magnet, set screws in the claw-clamp assembly, hinge and
              split collar, cylinder attachment with a lower collar indent,
              and 3D-printed collar attachments rather than machined ones.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Calculations &amp; Analysis
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              Two hand calculations governed whether the concept was safe to
              build. Both use the journal's stated clamping force of 875 lb
              for the NW200 (200 mm) case.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong>Hoop stress from clamping.</strong> The clamping force
              spread over the rubber contact area gives a pressure p =
              F<sub>clamp</sub> / A<sub>rubber</sub> = 875 lb / 12.37 in² =
              70.74 psi. Thin-wall hoop stress is then σ<sub>H</sub> = p·r / t
              = 70.74 × 3.94 / 0.075 = 3,714 psi. Against a pipe yield strength
              of about 25,000 psi, 3,714 &lt; 25,000 — the clamping does not
              yield the foreline. (Recomputing from the rounded inputs gives
              about 3,716 psi; the conclusion is unchanged.)
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong>Resistive torque vs. actuator torque.</strong> The
              actuators push off-center, so they try to rotate the pipe. That
              rotation is resisted by friction from the rubber lining. With a
              friction coefficient μ ≈ 0.6, total normal force 875 lb, and
              radius 3.94 in., τ<sub>friction</sub> = μ · N<sub>total</sub> ·
              r = 0.6 × 875 × 3.94 = 2,065 in-lb. The actuator torque is
              τ<sub>actuator</sub> = F<sub>actuator</sub> · d = 300 lb × 5 in.
              = 1,500 in-lb. So τ<sub>friction</sub> &gt; τ<sub>actuator</sub>,
              with a margin of about 565 in-lb (a ratio of about 1.38). That
              check is exactly why the actuator distance d was made
              adjustable: keeping d near 5 in. keeps the actuator torque
              inside what the rubber friction can resist.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              A separate journal check looked at the magnetic attachment
              under a 300 lb foreline load: σ = F / A = 300 / 0.306 =
              980 psi, well below the 137,800 psi value noted in the journal
              for that check. An FEA attempt on the collar was also started
              to check for stress concentrations at the chamfers and other
              locations, and it showed the threaded rod through the collar
              had to be included in the model — the rod changes how load
              moves through the collar, so leaving it out would have made
              the analysis misleading.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Drawings, GD&amp;T &amp; Manufacturability
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              Detailed GD&amp;T drawings were made for the machined pipe collar
              and the adjustable claw clamps, and manufacturer DFM feedback
              changed several features. Outside corners were chamfered and
              interior corners filleted; slots were dimensioned with two
              position tolerances for the length; and datum order followed
              the rule of largest plane as primary datum, second largest as
              secondary, with the datum plane parallel to a hole referenced
              first. Dimensions are basic only when referenced by a datum or
              toleranced by a geometric tolerance — otherwise regular
              dimensions are required for location, or there would be no
              tolerance on them at all.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Two manufacturability findings changed the design outright. An
              8 in. long through-hole in the metal collar was not practical —
              it would need a very long mill and would be difficult to cut
              all the way through — so the closure was changed to a draw
              latch placed on the collar opposite the hinge, and reorienting
              the part was considered as an alternative. The collar groove
              was also changed to 0.125 in. so a standard size could be used,
              and the base was made thinner and smaller for easier material
              procurement, with aluminum considered to keep it light.
              Practical details were worked through the same way: tapped
              holes for #8 screws were made 0.13 in. wide against a 0.167 in.
              major diameter; where the gap between top and bottom claw
              clamps was large, two nuts were used instead of a spacer to
              support the bolt; set screws were used to lock the slider and
              block, threading through one component and pressing onto the
              surface of the other; and the floating-fastener check for the
              claw-clamp block gave T = H<sub>MMC</sub> − F<sub>MMC</sub> =
              0.428 − 0.394 = 0.034.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Prototyping &amp; Fit Checks
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              The smaller-pipe adapter pieces were 3D printed for the 160 mm
              and 125 mm sizes to do fit checks before committing to machined
              parts, while the collar and claw-clamp assembly were to be
              machined in stainless steel and the magnetic adapter and
              cylinder attachment in aluminum 6061. Off-the-shelf hardware
              — tie-rod air cylinders, neodymium magnets (chosen over ceramic
              for their much stronger pull force), hinges, threaded rod, and
              neoprene rubber strip — was procured alongside the machined
              and printed parts, and the air-transfer system was laid out
              around a 150 psi air supply with a splitter feeding both
              cylinders. The final presentation analysis plan called for
              exactly this loop: anti-torque from rubber friction, stress
              from clamping around the foreline, FEA of actuator-applied
              torque on stress, and fit checks with the 3D-printed
              prototypes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Results &amp; Status
            </h4>
            <p className="text-base text-muted-foreground mb-4">
              By the end of the journal, the jig had converged from a
              lead-screw concept to a hinged, rubber-lined split collar with
              adjustable claw clamps, 3D-printed size adapters, and a
              magnetic rack attachment, with hand calculations showing the
              clamping stress stayed below pipe yield and the rubber
              friction resisted the actuator torque. The design was
              documented in a Confluence page and prepared for a final
              presentation covering the design process and its iterations,
              the final CAD model, engineering drawings, calculations and
              analysis, and impact.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The last major change was still open when the journal ends:
              after a review with the Hardware Innovation Center, pneumatic
              cylinders were reconsidered in favor of electric linear
              actuators, which would change the magnet adapter bracket, the
              magnets themselves, and the cylinder attachment, and would
              require renaming parts and drawings and updating the bill of
              materials. A cam-lock lever closure was also being explored,
              with an open question about whether a hole could be made
              through the lip it would sit in. This page therefore presents
              the electric-actuator direction as the final direction in the
              journal, not as a completed and tested installation — the
              journal does not record a final installed test, and no such
              outcome is claimed here.
            </p>
          </div>
        </>
      );
    } else if (project.id === 13) {
      // Modular Test Skateboard - Custom sections
      return (
        <>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Function</h4>
            <p className="text-base text-muted-foreground mb-4">
              Enable testing of critical modules prior to releasing the full
              Alpha drive unit, including all electromechanical components
              necessary for sensor characterization and environmental
              interference tests.
            </p>
            <div className="flex justify-center mb-6">
              <Figure src="/design-portfolio/attached_assets/skateboard_current_platform.jpg" alt="Current skateboard platform in the facility" className="max-w-sm" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Design</h4>
            <p className="text-base text-muted-foreground mb-4">
              The platform is configurable for locomotors or caster wheels,
              with wheel positions matching the Alpha drive unit. A machined
              aluminum plate with a consistent hole pattern facilitates bracket
              and standoff design for sensors, and hinges between the front and
              back chassis pair with a quick-release pin locking mechanism that
              keeps the handle upright.
            </p>
            <div className="flex justify-center mb-6">
              <Figure src="/design-portfolio/attached_assets/skateboard_design_layout.jpg" alt="New skateboard design layout" className="max-w-sm" />
            </div>
            <div className="flex justify-center mb-6">
              <Figure src="/design-portfolio/attached_assets/skateboard_quick_release_pin.jpg" alt="Quick-release pin locking mechanism" className="max-w-md" />
            </div>
            <h5 className="text-md font-medium mb-3">
              Wheel Configurations
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  Drive Wheel Setup
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/skateboard_drive_wheel.jpg" alt="Drive wheel setup" />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="text-md font-medium mb-3">
                  Caster Setup
                </h5>
                <div>
                  <Figure src="/design-portfolio/attached_assets/skateboard_caster.jpg" alt="Caster setup" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Status</h4>
            <p className="text-base text-muted-foreground mb-4">
              Design and BOM complete, with the build planned for May 2025.
              Next steps are procuring all supporting hardware and fasteners
              from the BOM, machining or printing brackets and spacers for
              mounting components, and machining the aluminum plate with all
              holes and cutouts incorporated.
            </p>
          </div>
        </>
      );
    }
}
