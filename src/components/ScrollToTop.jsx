import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 20;
  const circumference = 2 * Math.PI * r;
  const strokeDash = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      data-testid="button-scroll-to-top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-30 translate-y-1 scale-90"
      }`}
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        boxShadow: visible ? "0 4px 20px hsl(var(--primary) / 0.3)" : "none",
      }}
    >
      {/* Progress ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 48 48"
        fill="none"
      >
        {/* Track */}
        <circle
          cx="24" cy="24" r={r}
          stroke="hsl(var(--border))"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Progress */}
        <circle
          cx="24" cy="24" r={r}
          stroke="url(#progressGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDash}
          style={{ transition: "stroke-dashoffset 0.15s ease" }}
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon */}
      <ChevronUp
        size={18}
        className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5"
        style={{ color: visible ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
      />
    </button>
  );
}
