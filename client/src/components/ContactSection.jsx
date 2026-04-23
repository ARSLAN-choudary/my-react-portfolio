import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Loader2,
  MessageCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";

// ── EmailJS config ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_b70fq7o";
const EMAILJS_TEMPLATE_ID = "template_kuojgfn";
const EMAILJS_PUBLIC_KEY  = "uwV8MPI3c5-uwdmvn";
emailjs.init(EMAILJS_PUBLIC_KEY);
// ──────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arslanchoudary23@gmail.com",
    href: "mailto:arslanchoudary23@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0309-7037742",
    href: "tel:+923097037742",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const socials = [
  { icon: Github,   href: "https://github.com/ARSLAN-choudary",               label: "GitHub",    color: "hover:text-white hover:bg-gray-800" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arslan-aslam-557511324/", label: "LinkedIn",  color: "hover:text-white hover:bg-blue-600" },
];

export const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [formData, setFormData] = useState({ name: "", email: "", title: "", message: "" });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title || "No Subject",
          message: formData.message,
          time: new Date().toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" }),
        }
      );
      setStatus("success");
      setFormData({ name: "", email: "", title: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err?.text || err?.message || err);
      alert("EmailJS Error: " + (err?.text || err?.message || JSON.stringify(err)));
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-3 sm:px-6 relative overflow-hidden bg-background">
      {/* subtle grid bg */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      {/* gradient blobs – small, cheap */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] -z-10 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] -z-10 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" /> Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8">
          {/* ── Left panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div
                key={label}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-200"
              >
                <div className={`p-3 rounded-xl ${bg} flex-shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium text-xs sm:text-sm hover:text-primary transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-xs sm:text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Available for work</p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </div>
              <Zap className="h-4 w-4 text-emerald-500 ml-auto" />
            </div>

            {/* Socials */}
            <div className="p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
              <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Find me on</p>
              <div className="flex gap-2 flex-wrap">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border border-border text-muted-foreground transition-all duration-200 ${color}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right panel: Form ── */}
          <div className="lg:col-span-3">
            <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
              {/* top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="p-4 rounded-full bg-emerald-500/10">
                    <CheckCircle className="h-10 w-10 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* hidden time field — matches {{time}} in EmailJS template */}
                  <input type="hidden" name="time" value={new Date().toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" })} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Arslan"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="title" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500 bg-red-500/10 px-4 py-2.5 rounded-xl border border-red-500/20">
                      Something went wrong. Please email me directly at{" "}
                      <a href="mailto:arslanchoudary23@gmail.com" className="underline font-medium">
                        arslanchoudary23@gmail.com
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-primary/20"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
