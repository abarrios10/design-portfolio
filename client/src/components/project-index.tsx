import { ArrowUpRight } from "lucide-react";
import { SiApple } from "react-icons/si";
import Reveal from "@/components/reveal";
import { TransitionLink } from "@/components/route-transition";
import { projects, renderProjectDetails } from "@/components/projects-content";

export type Project = (typeof projects)[number];

const FALLBACK_ORG: Record<number, string> = {
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
  if (id === 11) {
    return <SiApple className="h-12 w-12 text-foreground" aria-label="Apple" />;
  }
  if (id === 12) {
    return (
      <svg viewBox="0 10.07 24 3.76" className="h-8 w-auto text-foreground" role="img" aria-label="Samsung logo" fill="currentColor">
        <path d="M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522" />
      </svg>
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
