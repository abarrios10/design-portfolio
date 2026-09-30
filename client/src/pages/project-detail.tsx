import { useEffect } from "react";
import { useParams } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import { TransitionLink } from "@/components/route-transition";
import {
  projects,
  renderProjectDetails,
} from "@/components/projects-content";
import {
  orgOf,
  projectIndexOf,
  OrgMark,
  type Project,
} from "@/components/project-index";
import NotFound from "@/pages/not-found";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function ProjectPager({ project }: { project: Project }) {
  const index = projectIndexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return (
    <nav className="mt-20 grid grid-cols-2 gap-4 border-t border-border pt-8">
      <TransitionLink
        href={`/design-portfolio/projects/${prev.slug}`}
        className="group flex items-center gap-3 text-left"
      >
        <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-primary" />
        <span className="min-w-0">
          <span className="eyebrow block">Previous</span>
          <span className="mt-1 block truncate font-display text-lg font-medium tracking-tight text-foreground group-hover:text-primary">
            {prev.title}
          </span>
        </span>
      </TransitionLink>
      <TransitionLink
        href={`/design-portfolio/projects/${next.slug}`}
        className="group flex items-center justify-end gap-3 text-right"
      >
        <span className="min-w-0">
          <span className="eyebrow block">Next</span>
          <span className="mt-1 block truncate font-display text-lg font-medium tracking-tight text-foreground group-hover:text-primary">
            {next.title}
          </span>
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
      </TransitionLink>
    </nav>
  );
}

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === params.slug) as
    | Project
    | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!project) {
    return <NotFound />;
  }

  const index = projectIndexOf(project);

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <TransitionLink
              href="/design-portfolio/projects"
              className="link-underline group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All Projects
            </TransitionLink>
          </Reveal>

          <Reveal className="mt-10">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="eyebrow mb-5">
                  Project {pad(index + 1)} — {orgOf(project)}
                </p>
                <h1 className="text-4xl md:text-6xl font-display font-medium tracking-[-0.02em] leading-[1.02] text-foreground">
                  {project.title}
                </h1>
                <p className="eyebrow mt-5">{project.date}</p>
              </div>
              <div className="shrink-0 pt-1">
                <OrgMark id={project.id} />
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10 border-t border-border pt-10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg border border-border"
              data-testid={`img-project-${project.id}`}
            />
          </Reveal>

          <Reveal className="mt-10">
            <p className="eyebrow mb-4">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[0.7rem] uppercase tracking-[0.12em] border border-border rounded-full px-3.5 py-1.5 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <p className="eyebrow mb-4">Overview</p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              {project.details}
            </p>
          </Reveal>

          <div className="mt-10 space-y-10 border-t border-border pt-10">
            {renderProjectDetails(project)}
          </div>

          <ProjectPager project={project} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
