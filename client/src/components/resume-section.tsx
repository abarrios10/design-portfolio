import { GraduationCap, Briefcase, Wrench } from "lucide-react";
import { SiApple } from "react-icons/si";
import Reveal from "@/components/reveal";

const skills = [
  { name: "Siemens NX", icon: "🔩" },
  { name: "SolidWorks", icon: "🔧" },
  { name: "Autodesk Inventor", icon: "📐" },
  { name: "GD&T", icon: "📏" },
  { name: "DFMA", icon: "⚙️" },
  { name: "Tolerance Analysis", icon: "🎯" },
  { name: "Python", icon: "🐍" },
  { name: "3D Printing", icon: "🖨️" },
  { name: "CNC Machining", icon: "🏭" },
];

const experience = [
  {
    position: "Product Design Engineer Intern",
    company: "Apple",
    timeline: "January 2026 - July 2026",
    description: "Accessories - Cables",
    logo: <SiApple className="h-20 w-20 text-foreground" data-testid="logo-apple" />,
  },
  {
    position: "Mechanical Design Engineer Intern",
    company: "Samsung",
    timeline: "May 2025 - August 2025",
    description: "Tooling Equipment Solutions",
    logo: (
      <svg viewBox="0 10.07 24 3.76" className="h-8 w-auto text-foreground" role="img" aria-label="Samsung logo" fill="currentColor" data-testid="logo-samsung">
        <path d="M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522" />
      </svg>
    ),
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
    description: "Industrial Equipment Design",
    logo: (
      <img
        src="/design-portfolio/attached_assets/bp_logo_transparent.png"
        alt="BP Logo"
        className="h-20 w-auto object-contain grayscale brightness-0 dark:invert"
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
                Certificate: Programming and Computation
              </p>
            </div>
            <div className="shrink-0 hidden sm:block">
              <img
                src="/design-portfolio/attached_assets/black-texas-longhorns-logo-png-6_1757121764487.png"
                alt="UT Austin"
                className="h-24 w-24 object-contain block dark:invert"
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
                  <div className="shrink-0 self-center">{job.logo}</div>
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
