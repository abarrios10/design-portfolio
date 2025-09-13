import Navigation from "@/components/navigation";
import ResumeSection from "@/components/resume-section";
import Footer from "@/components/footer";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ResumeSection />
      <Footer />
    </div>
  );
}