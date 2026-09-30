import Reveal from "@/components/reveal";
import { projects } from "@/components/projects-content";
import { ProjectIndexRows } from "@/components/project-index";
import type { Project } from "@/components/project-index";

export default function ProjectsSection() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">Index — 10 Projects</p>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-[-0.02em] leading-[0.95] text-foreground">
            Selected
            <br />
            Work
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A selection of engineering projects I have worked on throughout my
            time at college
          </p>
        </Reveal>

        <ProjectIndexRows list={projects as Project[]} />
      </div>
    </section>
  );
}
