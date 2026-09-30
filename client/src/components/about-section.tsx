import { MapPin } from "lucide-react";
import Reveal from "@/components/reveal";

export default function AboutSection() {
  const utAustinAwards = [
    {
      title: "Cockrell School of Engineering Distinguished College Scholar",
      description:
        "Recognized for maintaining a GPA ranking in the top 4% of students in my class",
      date: "2024, 2025, 2026",
    },
    {
      title: "Hispanic Scholarship Fund Scholar",
      description: "Merit-based scholarship recipient",
      date: "2023, 2024",
    },
    {
      title:
        "Richard Douglas and Judith Watson Perkins Endowed Presidential Scholarship",
      description: "Endowed scholarship for academic excellence",
      date: "2024",
    },
    {
      title: "Engineering Honors Program",
      description: "Top 10% of students in mechanical engineering department",
      date: "2023",
    },
    {
      title: "6x University Honors List",
      description:
        "3.50+ GPA recognition for Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024, Fall 2025, Fall 2026",
      date: "2022-2026",
    },
  ];

  const highSchoolAwards = [
    {
      title: "National Merit Commended Recognition Scholar",
      description: "Scored 1420 on the PSAT",
      date: "2021",
    },
  ];

  const interests = {
    hobbies: [
      "Weightlifting",
      "Music Festivals",
      "Texas Football",
      "Padel",
      "Spikeball",
    ],
    passions: [
      "Consumer Electronics",
      "Film",
      "Reggaeton",
      "Professional Mentorship",
      "Photography",
    ],
  };

  return (
    <section id="about" className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">About</p>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-[-0.02em] leading-[0.95] text-foreground">
            About Me
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <Reveal className="lg:col-span-5" y={24}>
            <img
              src="/design-portfolio/attached_assets/Professional Head Shot_1757025526514.JPG"
              alt="Andres Barrios Professional Headshot"
              className="w-full h-auto rounded-lg border border-border"
              data-testid="img-about-profile"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal y={24}>
              <h3
                className="text-3xl md:text-4xl font-display font-medium tracking-tight text-foreground mb-8"
                data-testid="text-about-title"
              >
                Hey There!
              </h3>
            </Reveal>
            <Reveal y={24} delay={0.08}>
              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                data-testid="text-about-paragraph"
              >
                Born in Venezuela and now living in Austin, I love designing
                things. I'm a person who gets excited about turning cool ideas
                into real, functional designs that work.
                <br />
                <br />
                When I'm not working, you'll probably find me on the padel court,
                dancing at music festivals, or cheering way too loudly at Texas
                football games (Hook 'em! 🤘).
              </p>
            </Reveal>
            <Reveal y={24} delay={0.14}>
              <div
                className="flex items-center gap-2 mt-10"
                data-testid="info-location"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="eyebrow">Austin, Texas</span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Awards */}
          <div>
            <Reveal className="mb-10">
              <p className="eyebrow mb-4">Recognition</p>
              <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-foreground">
                Awards
              </h3>
            </Reveal>

            <Reveal className="mb-10">
              <h4 className="eyebrow mb-2">
                The University of Texas at Austin
              </h4>
              <div className="border-t border-border">
                {utAustinAwards.map((award, index) => (
                  <div
                    key={index}
                    className="border-b border-border py-5"
                    data-testid={`award-ut-${index}`}
                  >
                    <div className="flex justify-between items-baseline gap-4 mb-1.5">
                      <h5 className="font-medium text-foreground text-base leading-snug">
                        {award.title}
                      </h5>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h4 className="eyebrow mb-2">Obra D. Tompkins High School</h4>
              <div className="border-t border-border">
                {highSchoolAwards.map((award, index) => (
                  <div
                    key={index}
                    className="border-b border-border py-5"
                    data-testid={`award-hs-${index}`}
                  >
                    <div className="flex justify-between items-baseline gap-4 mb-1.5">
                      <h5 className="font-medium text-foreground text-base leading-snug">
                        {award.title}
                      </h5>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Interests */}
          <div>
            <Reveal className="mb-10">
              <p className="eyebrow mb-4">Off the clock</p>
              <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-foreground">
                Interests
              </h3>
            </Reveal>

            <Reveal className="mb-10">
              <h4 className="eyebrow mb-4">Hobbies & Activities</h4>
              <div className="flex flex-wrap gap-2">
                {interests.hobbies.map((interest, index) => (
                  <span
                    key={index}
                    className="font-mono text-[0.7rem] uppercase tracking-[0.12em] border border-border rounded-full px-3.5 py-1.5 text-muted-foreground"
                    data-testid={`hobby-${index}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h4 className="eyebrow mb-4">Passions & Pursuits</h4>
              <div className="flex flex-wrap gap-2">
                {interests.passions.map((interest, index) => (
                  <span
                    key={index}
                    className="font-mono text-[0.7rem] uppercase tracking-[0.12em] border border-border rounded-full px-3.5 py-1.5 text-muted-foreground"
                    data-testid={`passion-${index}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
