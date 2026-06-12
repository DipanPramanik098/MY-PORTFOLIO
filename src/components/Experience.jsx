import { useRef, useEffect, useState } from "react";
import { BookOpen, Briefcase, ChevronRight } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Netaji Subhash Engineering College",
    years: "2022 - 2026",
    detail:
      "Focused on software development, data structures, and web technologies.",
    gpa: "CGPA: 7.54/10",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Purba Chilka Lal Chand High School(H.S)",
    years: "2022",
    detail: "Physics, Chemistry, Math",
    gpa: "Percentage: 94",
  },
  {
    degree: "Secondary (X)",
    institution: "Purba Chilka Lal Chand High School(H.S)",
    years: "2020",
    detail: "Bengali, English, Math, History, Geography etc.",
    gpa: "Percentage: 88",
  },
];

const experience = [
  {
    title: "Frontend Web Development Intern",
    company: "Edunet Foundation (AICTE Collaboration)",
    years: "Aug 2025 - Sept 2025",
    desc: "Completed a 6-week Front End Web Development internship focused on building responsive web interfaces using modern web technologies and project-based learning.",
    bullets: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Worked on a project based on a self-proposed idea during the internship",
      "Gained hands-on experience in frontend development and UI design principles",
    ],
  },
];

function TimelineCard({ item, index, visible, side }) {
  return (
    <div
      className="relative pl-7 transition-all duration-600"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : side === "left"
            ? "translateX(-20px)"
            : "translateX(20px)",
        transitionDelay: `${index * 130}ms`,
      }}
    >
      {/* Dot */}
      <span className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/40 z-10" />
      {/* Line */}
      <div className="absolute left-[6px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />

      <div className="card-glass p-5 rounded-2xl ml-2 group">
        <h4 className="text-foreground font-bold mb-1 group-hover:text-primary transition-colors">
          {item.degree || item.title}
        </h4>
        <p className="text-primary font-semibold text-sm mb-1">
          {item.institution || item.company}
        </p>
        <span className="inline-block px-2 py-0.5 rounded-md bg-primary/10 text-primary/80 text-xs font-medium mb-3">
          {item.years}
        </span>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {item.detail || item.desc}
        </p>
        {item.gpa && (
          <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
            {item.gpa}
          </span>
        )}
        {item.bullets && (
          <ul className="space-y-1.5 mt-1">
            {item.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-muted-foreground text-sm"
              >
                <ChevronRight
                  size={14}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            My Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Experience &amp;{" "}
            <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <BookOpen className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <TimelineCard
                  key={item.degree}
                  item={item}
                  index={i}
                  visible={visible}
                  side="left"
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-accent/10">
                <Briefcase className="text-accent" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm p-6 shadow-lg group hover:shadow-primary/20 transition-all duration-500">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 animate-pulse" />

                {/* Floating Dots */}
                <div className="absolute top-3 right-4 w-3 h-3 rounded-full bg-green-400 animate-ping" />
                <div className="absolute top-3 right-4 w-3 h-3 rounded-full bg-green-400" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary animate-bounce">
                      💼
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Open to Opportunities
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Actively seeking internships & full-time roles
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Passionate Computer Science Engineering student with
                    experience in Full Stack Development, DSA, and AI-powered
                    applications. Looking for opportunities to contribute,
                    learn, and grow as a Software Developer.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {[
                      "Frontend Developer",
                      "Full Stack Developer",
                      "Software Engineer",
                      "React Developer",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-green-400 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      Available Now
                    </span>

                    <a
                      href="#contact"
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              {experience.map((item, i) => (
                <TimelineCard
                  key={item.title}
                  item={item}
                  index={i}
                  visible={visible}
                  side="right"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
