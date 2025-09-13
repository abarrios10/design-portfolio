import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";

export default function Projects() {
  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      <ProjectsSection />
      <Footer />
    </div>
  );
}