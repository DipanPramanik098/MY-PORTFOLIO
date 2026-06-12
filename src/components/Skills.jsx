import { useState, useEffect, useRef } from "react";
import {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiGraphql,
  SiMongodb, SiPostgresql, SiDocker, SiGit,
} from "react-icons/si";
import {
  Network, Monitor, Server, Database, Wrench,
  ChevronRight, Cpu, Globe, Layers, Binary, BookOpen, Coffee,
} from "lucide-react";

const skills = [
  { icon: SiReact,       name: "React",        color: "#61DAFB", level: 95 },
  { icon: SiJavascript,  name: "JavaScript",   color: "#F7DF1E", level: 92 },
  { icon: SiTypescript,  name: "TypeScript",   color: "#3178C6", level: 85 },
  { icon: SiNextdotjs,   name: "Next.js",      color: "#a78bfa", level: 88 },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8", level: 90 },
  { icon: SiNodedotjs,   name: "Node.js",      color: "#68A063", level: 87 },
  { icon: SiGraphql,     name: "GraphQL",      color: "#E535AB", level: 75 },
  { icon: Network,       name: "REST API",     color: "#06b6d4", level: 93 },
  { icon: SiMongodb,     name: "MongoDB",      color: "#47A248", level: 80 },
  { icon: SiPostgresql,  name: "PostgreSQL",   color: "#336791", level: 78 },
  { icon: SiDocker,      name: "Docker",       color: "#2496ED", level: 72 },
  { icon: SiGit,         name: "Git",          color: "#F05032", level: 91 },
  { icon: Coffee,        name: "Java",         color: "#f89820", level: 82 },
  { icon: Binary,        name: "DSA",          color: "#10b981", level: 80 },
  { icon: Globe,         name: "CN",           color: "#8b5cf6", level: 76 },
  { icon: Layers,        name: "DBMS",         color: "#f59e0b", level: 78 },
  { icon: Cpu,           name: "OS",           color: "#ef4444", level: 75 },
];

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "primary",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "accent",
    items: ["Node.js", "Express", "REST API", "GraphQL", "WebSocket"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "primary",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    color: "accent",
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite"],
  },
  {
    icon: BookOpen,
    title: "CS Fundamentals",
    color: "primary",
    items: ["Java", "DSA", "DBMS", "OS", "CN", "OOP"],
  },
];

const RADII = [165, 118];

function SkillWheel({ visible }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="relative mx-auto" style={{ width: 460, height: 460 }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 460 460" fill="none">
        {[195, 160, 127, 97, 70].map((r, i) => (
          <circle key={i} cx="230" cy="230" r={r}
            stroke="hsl(var(--primary))" strokeWidth="1"
            opacity={0.10 - i * 0.012}
          />
        ))}
        <circle cx="230" cy="230" r={200}
          stroke="hsl(var(--primary))" strokeWidth="1"
          strokeDasharray="4 6" opacity="0.15"
        />
      </svg>

      {skills.map((skill, i) => {
        const angle = (i / skills.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const r = RADII[i % 2];
        const x = 230 + r * Math.sin(rad);
        const y = 230 - r * Math.cos(rad);
        const Icon = skill.icon;
        const isHovered = hovered === skill.name;

        return (
          <div
            key={skill.name}
            className="absolute flex flex-col items-center cursor-pointer select-none"
            style={{
              left: x - 26,
              top: y - 26,
              opacity: visible ? 1 : 0,
              transform: visible ? `scale(${isHovered ? 1.3 : 1})` : "scale(0)",
              transition: `opacity 0.5s ease ${i * 40}ms, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)`,
              zIndex: isHovered ? 10 : 1,
            }}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center border transition-all duration-200"
              style={{
                background: isHovered ? `${skill.color}18` : "hsl(var(--card))",
                borderColor: isHovered ? skill.color : "hsl(var(--border))",
                boxShadow: isHovered
                  ? `0 0 24px ${skill.color}55, 0 4px 12px ${skill.color}30`
                  : "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <Icon size={22} color={skill.color} />
            </div>
            <span
              className="text-[10px] font-semibold mt-1 whitespace-nowrap"
              style={{
                color: isHovered ? skill.color : "hsl(var(--muted-foreground))",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                transition: "color 0.2s",
              }}
            >
              {skill.name}
            </span>

            {isHovered && (
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap z-20 border"
                style={{
                  background: "hsl(var(--card))",
                  borderColor: skill.color,
                  color: skill.color,
                  boxShadow: `0 4px 16px ${skill.color}30`,
                }}
              >
                {skill.level}% proficiency
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center border-2 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            borderColor: "hsl(var(--primary) / 0.5)",
            boxShadow: "0 0 50px hsl(var(--primary) / 0.4), 0 0 100px hsl(var(--primary) / 0.1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <span className="text-white text-2xl font-black leading-none relative z-10">{skills.length}+</span>
          <span className="text-white/80 text-[10px] font-semibold relative z-10 tracking-wide uppercase">Skills</span>
        </div>
      </div>
    </div>
  );
}

function SkillGrid({ visible }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl border bg-card transition-all duration-200 active:scale-95"
            style={{
              borderColor: "hsl(var(--border))",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.4s ease ${i * 40}ms, transform 0.4s ease ${i * 40}ms`,
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}35` }}
            >
              <Icon size={20} color={skill.color} />
            </div>
            <span className="text-[10px] font-semibold text-center text-muted-foreground leading-tight">
              {skill.name}
            </span>
            <div className="w-full h-1 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                  transitionDelay: `${i * 60 + 300}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div
          className="text-center mb-12 md:mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            What I work with
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Skills &amp; <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            A diverse set of tools and technologies I use to create amazing experiences
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="hidden md:flex justify-center">
            <SkillWheel visible={visible} />
          </div>
          <div className="md:hidden">
            <SkillGrid visible={visible} />
          </div>
        </div>

        <div
          className="md:hidden mb-10 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "200ms",
          }}
        >
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Proficiency Levels</h3>
          <div className="space-y-3">
            {skills.slice(0, 8).map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="flex items-center gap-3">
                  <Icon size={16} color={skill.color} className="flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1) 400ms",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map(({ icon: Icon, title, color, items }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: "hsl(var(--border))",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 100 + 300}ms, transform 0.5s ease ${i * 100 + 300}ms`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `hsl(var(--${color}) / 0.5)`;
                e.currentTarget.style.boxShadow = `0 8px 32px hsl(var(--${color}) / 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
              }}
            >
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, hsl(var(--${color})), hsl(var(--${color}) / 0.3))`,
                }}
              />
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none"
                style={{ background: `hsl(var(--${color}) / 0.2)` }}
              />
              <div className="p-5 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl transition-colors duration-200"
                    style={{ background: `hsl(var(--${color}) / 0.12)` }}
                  >
                    <Icon size={20} style={{ color: `hsl(var(--${color}))` }} />
                  </div>
                  <h3 className="text-foreground font-bold text-sm">{title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200"
                    >
                      <ChevronRight size={12} style={{ color: `hsl(var(--${color}))` }} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}