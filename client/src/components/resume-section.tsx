import { GraduationCap, Briefcase, Wrench } from "lucide-react";
import { SiSamsung, SiApple } from "react-icons/si";
import Reveal from "@/components/reveal";

const skills = [
  { name: "SolidWorks", icon: "🔧" },
  { name: "Autodesk Inventor", icon: "📐" },
  { name: "GD&T", icon: "📏" },
  { name: "DFMA", icon: "⚙️" },
  { name: "3D Printing", icon: "🖨️" },
  { name: "Python", icon: "🐍" },
];

const experience = [
  {
    position: "Product Design Engineer Intern",
    company: "Apple",
    timeline: "January 2026 - July 2026",
    description: "Cable Accessories",
    logo: <SiApple className="h-20 w-20 text-foreground" data-testid="logo-apple" />,
  },
  {
    position: "Mechanical Design Engineer Intern",
    company: "Samsung",
    timeline: "May 2025 - August 2025",
    description: "Tooling Equipment Solutions",
    logo: <SiSamsung className="h-20 w-20 text-foreground" data-testid="logo-samsung" />,
  },
  {
    position: "Hardware Development Engineer Intern",
    company: "Amazon Robotics",
    timeline: "January 2025 - May 2025",
    description: "Autonomous Drive-Unit Robots",
    logo: (
      <img
        src="/design-portfolio/attached_assets/amazon_robotics_transparent.png"
        alt="Amazon Robotics Logo"
        className="h-20 w-auto object-contain dark:invert"
        data-testid="logo-amazon"
      />
    ),
  },
  {
    position: "Mechanical Reliability Engineer Intern",
    company: "BP",
    timeline: "May 2024 - August 2024",
    description: "Maintenance Equipment Design",
    logo: (
      <img
        src="/design-portfolio/attached_assets/bp_logo_transparent.png"
        alt="BP Logo"
        className="h-20 w-auto object-contain"
        data-testid="logo-bp"
      />
    ),
  },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">Résumé</p>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-[-0.02em] leading-[0.95] text-foreground">
            Professional
            <br />
            Experience
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A comprehensive overview of my engineering journey and achievements
          </p>
        </Reveal>

        {/* Education */}
        <Reveal className="mb-16">
          <h3 className="flex items-center gap-3 text-2xl font-display font-medium tracking-tight text-foreground mb-8">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h3>
          <div
            className="border-t border-border pt-8 flex items-start justify-between gap-6"
            data-testid="card-education"
          >
            <div>
              <h4
                className="text-xl md:text-2xl font-display font-medium tracking-tight text-foreground"
                data-testid="text-education-degree"
              >
                Bachelor of Science, Mechanical Engineering Honors
              </h4>
              <p
                className="text-primary font-medium mt-2"
                data-testid="text-education-university"
              >
                The University of Texas at Austin
              </p>
              <p
                className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground mt-2"
                data-testid="text-education-timeline"
              >
                May 2027
              </p>
              <p
                className="text-muted-foreground mt-4 leading-relaxed"
                data-testid="text-education-details"
              >
                Concentration: Robotics/Mechatronics | Certificate: Programming
                and Computation
              </p>
            </div>
            <div className="shrink-0 hidden sm:block">
              <img
                src="/design-portfolio/attached_assets/black-texas-longhorns-logo-png-6_1757121764487.png"
                alt="UT Austin"
                className="h-16 w-16 object-contain block dark:invert"
                data-testid="img-education-logo"
              />
            </div>
          </div>
        </Reveal>

        {/* Experience */}
        <div className="mb-16">
          <Reveal>
            <h3 className="flex items-center gap-3 text-2xl font-display font-medium tracking-tight text-foreground mb-8">
              <Briefcase className="h-5 w-5 text-primary" />
              Experience
            </h3>
          </Reveal>
          <div className="border-t border-border">
            {experience.map((job, index) => (
              <Reveal
                key={index}
                y={20}
                className="border-b border-border"
                data-testid={`exp-entry-${index}`}
              >
                <div className="flex items-start justify-between gap-6 py-8">
                  <div>
                    <h4
                      className="text-xl md:text-2xl font-display font-medium tracking-tight text-foreground"
                      data-testid={`text-experience-position-${index + 1}`}
                    >
                      {job.position}
                    </h4>
                    <p
                      className="text-primary font-medium mt-2"
                      data-testid={`text-experience-company-${index + 1}`}
                    >
                      {job.company}
                    </p>
                    <p
                      className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground mt-2"
                      data-testid={`text-experience-timeline-${index + 1}`}
                    >
                      {job.timeline}
                    </p>
                    <p
                      className="text-muted-foreground mt-4 leading-relaxed"
                      data-testid={`text-experience-description-${index + 1}`}
                    >
                      {job.description}
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">{job.logo}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills */}
        <Reveal>
          <h3 className="flex items-center gap-3 text-2xl font-display font-medium tracking-tight text-foreground mb-8">
            <Wrench className="h-5 w-5 text-primary" />
            Technical Skills
          </h3>
        </Reveal>
        <Reveal className="border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-3" data-testid="card-skills">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-r border-border px-5 py-5 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0"
              >
                <span className="text-2xl" aria-hidden="true">
                  {skill.icon}
                </span>
                <p
                  className="font-medium text-foreground"
                  data-testid={`text-skill-${index}`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
