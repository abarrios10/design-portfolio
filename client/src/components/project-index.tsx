import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { TransitionLink } from "@/components/route-transition";
import { projects, renderProjectDetails } from "@/components/projects-content";

export type Project = (typeof projects)[number];

const FALLBACK_ORG: Record<number, string> = {
  1: "UT Austin",
  7: "UT Austin",
  8: "UT Austin",
  9: "NASA L'SPACE",
};

export function orgOf(project: Project): string {
  return project.company ?? FALLBACK_ORG[project.id] ?? "UT Austin";
}

export function projectIndexOf(project: Project): number {
  return projects.findIndex((p) => p.id === project.id);
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Organization mark shown in the project detail header. */
export function OrgMark({ id }: { id: number }) {
  const common = "h-12 w-auto object-contain";
  if (id === 2 || id === 3 || id === 4) {
    return (
      <>
        <img
          src="/design-portfolio/attached_assets/Robotics_Amazon_1757126546766.webp"
          alt="Amazon Robotics"
          className={`${common} block dark:hidden`}
        />
        <img
          src="/design-portfolio/attached_assets/Robotics_Amazon_1757126546766.webp"
          alt="Amazon Robotics"
          className={`${common} hidden dark:block`}
          style={{ filter: "invert(1)" }}
        />
      </>
    );
  }
  if (id === 5 || id === 6) {
    return (
      <>
        <img
          src="/design-portfolio/attached_assets/image_1757122219450.png"
          alt="BP"
          className={`${common} block dark:hidden`}
        />
        <img
          src="/design-portfolio/attached_assets/image_1757122219450.png"
          alt="BP"
          className={`${common} hidden dark:block`}
          style={{ filter: "invert(1)" }}
        />
      </>
    );
  }
  if (id === 9) {
    return (
      <>
        <img
          src="/design-portfolio/attached_assets/image_1757732632620.png"
          alt="NASA"
          className="h-12 w-12 object-contain block dark:hidden"
          style={{ filter: "invert(1)" }}
        />
        <img
          src="/design-portfolio/attached_assets/image_1757732632620.png"
          alt="NASA"
          className="h-12 w-12 object-contain hidden dark:block"
        />
      </>
    );
  }
  if (id === 10) {
    return (
      <>
        <img
          src="/design-portfolio/attached_assets/aerial_atv_logo.png"
          alt="ASCEND Texas"
          className="h-12 w-12 object-contain block dark:hidden bg-white rounded-md p-1"
        />
        <img
          src="/design-portfolio/attached_assets/aerial_atv_logo.png"
          alt="ASCEND Texas"
          className="h-12 w-12 object-contain hidden dark:block rounded-md p-1"
          style={{ filter: "invert(1)" }}
        />
      </>
    );
  }
  return (
    <>
      <img
        src="/design-portfolio/attached_assets/black-texas-longhorns-logo-png-6_1757121764487.png"
        alt="UT Austin"
        className="h-12 w-12 object-contain block dark:hidden"
      />
      <img
        src="/design-portfolio/attached_assets/black-texas-longhorns-logo-png-6_1757121764487.png"
        alt="UT Austin"
        className="h-12 w-12 object-contain hidden dark:block"
        style={{ filter: "invert(1)" }}
      />
    </>
  );
}

export function ProjectIndexRows({ list }: { list: Project[] }) {
  return (
    <div className="border-t border-border">
      {list.map((project) => {
        const index = projectIndexOf(project);
        return (
          <Reveal
            key={project.id}
            y={20}
            className="border-b border-border"
          >
            <TransitionLink
              href={`/design-portfolio/projects/${project.slug}`}
              data-testid={`card-project-${project.id}`}
              className="group grid w-full grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-8 px-1 py-6 md:py-7 text-left transition-colors duration-200 hover:bg-secondary/50"
            >
              <span className="font-mono text-sm text-muted-foreground w-8">
                {pad(index + 1)}
              </span>
              <span className="block overflow-hidden rounded-md border border-border">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="h-16 w-24 md:h-24 md:w-40 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-xl md:text-3xl font-display font-medium tracking-tight leading-snug text-foreground transition-transform duration-300 ease-out group-hover:translate-x-2">
                  {project.title}
                </span>
                <span className="eyebrow mt-2 block">
                  {orgOf(project)} · {project.date}
                </span>
              </span>
              <span
                data-testid={`button-view-details-${project.id}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </TransitionLink>
          </Reveal>
        );
      })}
    </div>
  );
}

export { renderProjectDetails };
