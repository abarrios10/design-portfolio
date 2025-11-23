import { MapPin, Award, Heart } from "lucide-react";

export default function AboutSection() {
  const utAustinAwards = [
    {
      title: "Cockrell School of Engineering Distinguished College Scholar",
      description: "Recognized for maintaining a GPA ranking in the top 4% of students in my class",
      date: "2024, 2025"
    },
    {
      title: "Hispanic Scholarship Fund Scholar",
      description: "Merit-based scholarship recipient",
      date: "2023, 2024"
    },
    {
      title: "Richard Douglas and Judith Watson Perkins Endowed Presidential Scholarship",
      description: "Endowed scholarship for academic excellence",
      date: "2024"
    },
    {
      title: "Engineering Honors Program",
      description: "Top 10% of students in mechanical engineering department",
      date: "2023"
    },
    {
      title: "5x University Honors List",
      description: "3.50+ GPA recognition for Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024",
      date: "2022-2024"
    }
  ];

  const highSchoolAwards = [
    {
      title: "National Merit Commended Recognition Scholar",
      description: "Scored 1420 on the PSAT",
      date: "2021"
    }
  ];

  const interests = {
    hobbies: ["Weightlifting", "Music Festivals", "Texas Football", "Padel", "Spikeball"],
    passions: ["Consumer Electronics", "Film", "Reggaeton", "Professional Mentorship", "Photography"]
  };

  return (
    <section id="about" className="pt-16 pb-24 hero-bg-premium">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6 relative inline-block">
            About Me
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-purple)] via-[var(--accent-pink)] to-[var(--accent-orange)] rounded-full opacity-60"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/images/profile.jpg"
              alt="Andres Barrios Professional Headshot"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="img-about-profile"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="text-about-title">
              Hey There!
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph">
              Born in Venezuela and now living in Austin, I love designing things. I'm a person who gets excited about turning cool ideas into real, functional designs that work.
              <br /><br />
              When I'm not working, you'll probably find me on the padel court, dancing at music festivals, or cheering way too loudly at Texas football games (Hook 'em! 🤘).
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2" data-testid="info-location">
                <MapPin className="h-5 w-5" style={{color: 'var(--accent-purple)'}} />
                <span className="text-muted-foreground">Austin, Texas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Interests Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6" style={{color: 'var(--accent-orange)'}} />
              <h3 className="text-3xl font-thin text-foreground">Awards</h3>
            </div>
            
            {/* UT Austin Awards */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">The University of Texas at Austin</h4>
              <div className="space-y-4">
                {utAustinAwards.map((award, index) => (
                  <div key={index} className="border-l-2 pl-4 py-2" style={{borderColor: 'var(--accent-orange)'}} data-testid={`award-ut-${index}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium text-foreground text-base">{award.title}</h5>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">{award.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High School Awards */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Obra D. Tompkins High School</h4>
              <div className="space-y-4">
                {highSchoolAwards.map((award, index) => (
                  <div key={index} className="border-l-2 pl-4 py-2" style={{borderColor: 'var(--accent-orange)'}} data-testid={`award-hs-${index}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium text-foreground text-base">{award.title}</h5>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">{award.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Heart className="h-6 w-6" style={{color: 'var(--accent-pink)'}} />
              <h3 className="text-3xl font-thin text-foreground">Interests</h3>
            </div>
            
            <div className="space-y-6">
              {/* Hobbies */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Hobbies & Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.hobbies.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-foreground rounded-full text-base font-medium transition-all hover:scale-105 border-2 border-purple-300 dark:border-purple-600"
                      style={{backgroundColor: 'rgba(174, 62, 201, 0.1)'}}
                      data-testid={`hobby-${index}`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Passions */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Passions & Pursuits</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.passions.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-foreground rounded-full text-base font-medium transition-all hover:scale-105 border-2 border-pink-300 dark:border-pink-600"
                      style={{backgroundColor: 'rgba(236, 72, 153, 0.1)'}}
                      data-testid={`passion-${index}`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
