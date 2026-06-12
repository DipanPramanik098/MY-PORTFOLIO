import { useState, useEffect } from "react";
import { Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const roles = [
  "MERN Stack Developer",
  "Problem Solver",
  "DevOps Enthusiast",
  "AI/ML Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (typing) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setTyping(false), 1800);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setTyping(true);
          }
        }
      },
      typing ? 80 : 45,
    );
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/DipanPramanik098",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/dipan-pramanik-3b929a25b/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/Dipan_Pramanik7",
      label: "Twitter",
    },
    { icon: FaEnvelope, href: "mailto:myselfdipan6@gmail.com", label: "Email" },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for hire
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-muted-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dipan
              </span>
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[60px]">
              <span className="text-gradient-shimmer">
                {displayed}
                <span className="text-primary animate-pulse">|</span>
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-8 max-w-lg">
              I&apos;m a passionate full-stack developer with expertise in
              building modern web applications. I love creating beautiful,
              functional, and user-centric digital experiences that make a
              difference.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Dipan.CV.pdf";
                  link.download = "Dipan.CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn-primary flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl"
                data-testid="button-download-resume"
              >
                <Download size={18} />
                Download Resume
              </button>
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowDown size={16} />
              </button>
            </div>
          </div>

          {/* Right — animated avatar */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-80 h-80">
              {/* Spinning outer rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-dashed border-accent/20 animate-spin-rev" />

              {/* Glow blob */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl animate-glow-pulse" />

              {/* Avatar circle */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/40 via-card to-accent/30 flex items-center justify-center overflow-hidden">
                  <img
                    src="/myImage.png"
                    alt="Dipan Pramanik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              {[
                { text: "React", x: "-14%", y: "18%", delay: "0s" },
                { text: "Node.js", x: "82%", y: "15%", delay: "0.5s" },
                { text: "UI/UX", x: "-18%", y: "72%", delay: "1s" },
                { text: "TypeScript", x: "76%", y: "70%", delay: "1.5s" },
              ].map(({ text, x, y, delay }) => (
                <div
                  key={text}
                  className="absolute px-2.5 py-1 rounded-lg bg-card border border-primary/30 text-primary text-xs font-semibold shadow-lg animate-float whitespace-nowrap"
                  style={{ left: x, top: y, animationDelay: delay }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
