import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Heart } from "lucide-react";

export default function Footer() {
  const handleScroll = (href) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
              <span className="text-foreground font-extrabold text-xl text-gradient-primary">
                Portfolio
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A modern portfolio website showcasing my projects, skills, and
              experience in web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-primary" />
              <h3 className="text-foreground font-semibold">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              {[
                ["#home", "Home"],
                ["#skills", "Skills"],
                ["#projects", "Projects"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(href);
                    }}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-accent" />
              <h3 className="text-foreground font-semibold">Resources</h3>
            </div>

            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/Dipan_Pramanik7"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/DipanPramanik098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-primary" />
              <h3 className="text-foreground font-semibold">Follow</h3>
            </div>
            <div className="flex gap-2">
              {[
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
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            &copy; 2025{" "}
            <span className="text-gradient-primary font-semibold">
              Dipan Pramanik
            </span>
            . Made with <Heart size={13} className="text-primary inline" /> All
            rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="https://github.com/DipanPramanik098"
                  className="text-muted-foreground text-xs hover:text-primary transition-colors"
                  target="_blank"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
