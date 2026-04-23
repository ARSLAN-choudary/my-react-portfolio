import { ArrowUp, Github, Linkedin, Phone, MapPin, Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github,    href: "https://github.com/ARSLAN-choudary",                 label: "GitHub" },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/arslan-aslam-557511324/", label: "LinkedIn" },
];

const navLinks = [
  { name: "Home",       href: "#hero" },
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const contactInfo = [
  { icon: Mail,    text: "arslanchoudary23@gmail.com", href: "mailto:arslanchoudary23@gmail.com" },
  { icon: Phone,   text: "0309-7037742",               href: "tel:+923097037742" },
  { icon: MapPin,  text: "Pakistan",                   href: null },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border overflow-hidden">
      {/* top glow line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* bg orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">

          {/* brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))" }}>
                <Code2 className="h-4 w-4 text-black" />
              </div>
              <span className="text-xl font-black text-foreground tracking-tight">ARSLAN</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Engineer crafting scalable web solutions for startups and enterprises.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {href ? (
                    <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{text}</a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* availability */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-emerald-400 font-medium">Open to Work</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available for freelance projects, full-time roles, and collaborations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} <span className="text-foreground font-semibold">Arslan</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <motion.a
              href="#hero"
              aria-label="Back to top"
              whileHover={{ y: -2 }}
              className="p-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
