import { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Star,
  Clock,
  Users,
} from "lucide-react";

const techColors = {
  React: "#61DAFB",
  "Node.js": "#68A063",
  MongoDB: "#47A248",
  PostgreSQL: "#336791",
  "OpenAI API": "#74aa9c",
  Recharts: "#a78bfa",
  "Weather API": "#f59e0b",
  "Tailwind CSS": "#38BDF8",
  Leaflet: "#22c55e",
  Express: "#a78bfa",
};

const featured = [
  {
    title: "AlgoAdda",
    image: "/algoadda.png",
    desc: "An AI Powered coding platform for practicing DSA problems",
    longDesc:
      "Built a full-stack coding platform featuring problem solving, online code execution, role management, user authentication, submissions tracking, and performance analytics.",
    tags: ["React", "OpenAI API", "Node.js", "MongoDB", "Judge0"],
    emoji: "💬",
    gradient: "from-violet-600/80 via-purple-800/60 to-fuchsia-900/40",
    stats: { time: "3 months" },
    github:
      "https://github.com/DipanPramanik098/AlgoAdda--AI-Powered-Coding-Platform",
    live: "https://learning-hub--pramanikdipan4.replit.app/",
  },
  {
    title: "RepoX",
    image: "/RepoX.png",
    desc: "A GitHub-inspired platform for developers to showcase projects and collaborate.",
    longDesc:
      "Built a modern developer platform with repository management, user authentication, profile customization, project showcasing, and responsive UI inspired by GitHub.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-blue-600/80 via-indigo-800/60 to-violet-900/40",
    stats: { time: "2 months" },
    github: "https://github.com/DipanPramanik098/RepoX", // Update if different
    live: "https://repox.vercel.app", // Update if different
  },
  {
    title: "Weather Forecast App",
    image: "/weather.png",
    desc: "Beautiful weather application with location-based forecasts, multiple weather metrics, and interactive maps.",
    longDesc:
      "7-day forecasts, hourly breakdowns, interactive maps, location autocomplete, and weather alerts.",
    tags: ["React", "Weather API", "Leaflet", "Tailwind CSS"],
    emoji: "⛅",
    gradient: "from-blue-600/80 via-indigo-800/60 to-violet-900/40",
    stats: { time: "6 weeks" },
    github: "https://github.com/DipanPramanik098/weather-app", // Update if different
    live: "https://weather-app.vercel.app", // Update if different
  },
];

function FeaturedCard({ project, isActive }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (ny - 0.5) * 14, y: -(nx - 0.5) * 14 });
    setShine({ x: nx * 100, y: ny * 100, opacity: 0.12 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setShine({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 ${
        isActive
          ? "border-primary/40 shadow-2xl shadow-primary/10"
          : "border-border opacity-50 scale-[0.97]"
      }`}
      style={{
        background: "hsl(var(--card))",
        transform: isActive
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`
          : "perspective(900px) scale(0.97)",
        transition:
          "transform 0.15s ease, opacity 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        willChange: "transform",
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Banner */}
      <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Stats */}
        <div className="absolute bottom-3 right-3 flex gap-2 z-20">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs">
            <Star size={10} fill="currentColor" className="text-yellow-400" />
            {project.stats.stars}
          </span>

          <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs">
            <Users size={10} />
            {project.stats.users}
          </span>

          <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs">
            <Clock size={10} />
            {project.stats.time}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-foreground font-bold text-base sm:text-lg mb-1.5">
          {project.title}
        </h3>
        {/* Show short desc on mobile, long on desktop */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:hidden">
          {project.desc}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 hidden sm:block">
          {project.longDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-lg text-xs font-semibold"
              style={{
                color: techColors[tag] || "hsl(var(--primary))",
                background: `${techColors[tag] || "hsl(var(--primary))"}12`,
                border: `1px solid ${techColors[tag] || "hsl(var(--primary))"}35`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-border bg-background/50 text-muted-foreground text-sm font-medium hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 active:scale-95"
          >
            <Github size={14} />
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 border"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              borderColor: "transparent",
              color: "white",
              boxShadow: "0 4px 14px hsl(var(--primary) / 0.35)",
            }}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? featured.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % featured.length);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <section ref={ref} className="py-20 md:py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A collection of my recent work showcasing my skills in web
            development
          </p>
        </div>

        {/* ── MOBILE: single card carousel ── */}
        <div
          className={`md:hidden mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative">
            {/* Card */}
            <div className="rounded-2xl border border-primary/30 overflow-hidden bg-card shadow-xl shadow-primary/10">
              {/* Banner */}
              <div
                className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${featured[current].gradient} overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <span className="text-6xl filter drop-shadow-2xl">
                  {featured[current].emoji}
                </span>
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs">
                    <Star
                      size={9}
                      fill="currentColor"
                      className="text-yellow-400"
                    />{" "}
                    {featured[current].stats.stars}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs">
                    <Users size={9} /> {featured[current].stats.users}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-foreground font-bold text-lg mb-2">
                  {featured[current].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {featured[current].desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {featured[current].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        color: techColors[tag] || "hsl(var(--primary))",
                        background: `${techColors[tag] || "hsl(var(--primary))"}15`,
                        border: `1px solid ${techColors[tag] || "hsl(var(--primary))"}40`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-border text-muted-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-all active:scale-95">
                    <Github size={14} /> Code
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white text-sm font-semibold active:scale-95"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </button>
                </div>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-20 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border text-muted-foreground shadow-lg active:scale-95 z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-20 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border text-muted-foreground shadow-lg active:scale-95 z-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-7" : "bg-border w-2"}`}
              />
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-2">
            Swipe to navigate
          </p>
        </div>

        {/* ── DESKTOP: 3-column carousel ── */}
        <div
          className={`hidden md:block mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-stretch gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-200 flex-shrink-0 self-center"
              data-testid="button-projects-prev"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-4 flex-1 min-w-0">
              {featured.map((project, i) => (
                <FeaturedCard
                  key={project.title}
                  project={project}
                  isActive={i === current}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-200 flex-shrink-0 self-center"
              data-testid="button-projects-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-7" : "bg-border hover:bg-primary/40 w-2"}`}
              />
            ))}
          </div>
        </div>

        {/* More Projects */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="flex items-center gap-3 whitespace-nowrap">
              <h3 className="text-xl font-bold text-foreground">
                More Projects
              </h3>

              <a
                href="https://github.com/DipanPramanik098"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                title="View all projects on GitHub"
              >
                <Github size={18} />
              </a>
            </div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
