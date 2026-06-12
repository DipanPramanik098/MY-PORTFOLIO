import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
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

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_5ticgl8", //service ID
        "template_j0lttjf", //template ID
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "xWOpgMgPr_6aHLjtC", //public key
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm";

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "myselfdipan6@gmail.com",
      href: "myselfdipan6@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9883280905",
      href: "tel:+91 9883280905",
    },
    { icon: MapPin, label: "Location", value: "Kolkata, West Bengal, India", href: "#" },
  ];

  const socials = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/DipanPramanik098",
      desc: "Check out my repositories",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dipan-pramanik-3b929a25b/",
      desc: "Let's connect professionally",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "https://x.com/Dipan_Pramanik7",
      desc: "Follow for updates",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            Let's Talk
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        {/* Contact info cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              className="card-glass p-6 rounded-2xl flex flex-col items-center gap-3 text-center group"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`link-contact-${label.toLowerCase()}`}
            >
              <div className="p-3.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold">{label}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Form */}
          <div className="card-glass p-7 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClass}
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={inputClass}
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className={inputClass}
                  data-testid="input-subject"
                />
              </div>
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className={inputClass + " resize-none"}
                  data-testid="input-message"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  sent
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                    : "btn-primary text-white"
                } disabled:opacity-60`}
                data-testid="button-submit-contact"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                ) : loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Connect with me
            </h3>

            {socials.map(({ icon: Icon, label, href, desc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass flex items-center gap-4 p-4 rounded-2xl group"
                data-testid={`link-social-contact-${label.toLowerCase()}`}
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-xs">{desc}</p>
                </div>
              </a>
            ))}

            <div className="card-glass p-5 rounded-2xl">
              <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Quick Response
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent
                matters, please call or email directly.
              </p>
            </div>

            <div className="card-glass p-5 rounded-2xl">
              <h4 className="text-foreground font-semibold mb-3">
                Availability
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Currently available for:
              </p>
              <ul className="space-y-2">
                {[
                  "Full-time positions",
                  "Freelance projects",
                  "Contract work",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-foreground text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
