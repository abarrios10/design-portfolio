import { useEffect } from "react";
import { useLocation } from "wouter";
import { projects } from "@/components/projects-content";

const NAME = "Andres Barrios";

export default function DocumentTitle() {
  const [location] = useLocation();

  useEffect(() => {
    let title = `${NAME} | Mechanical Engineer`;
    if (location === "/projects") {
      title = `Projects | ${NAME}`;
    } else if (location === "/resume") {
      title = `Resume | ${NAME}`;
    } else if (location === "/about") {
      title = `About | ${NAME}`;
    } else if (location === "/contact") {
      title = `Contact | ${NAME}`;
    } else if (location.startsWith("/projects/")) {
      const slug = location.split("/projects/")[1];
      const project = projects.find((p) => p.slug === slug);
      title = project ? `${project.title} | ${NAME}` : `Project | ${NAME}`;
    }
    document.title = title;
  }, [location]);

  return null;
}
