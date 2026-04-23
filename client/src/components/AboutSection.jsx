import { useState } from "react";
import { Briefcase, Code, User, Download, Calendar, Target, Github, Linkedin, Mail, Star, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { number: "20+", label: "Projects",  icon: Briefcase },
  { number: "3",   label: "Years Exp", icon: Calendar, suffix: "+" },
  { number: "99",  label: "Success",   icon: Target,   suffix: "%" },
  { number: "10",  label: "Clients",   icon: User,     suffix: "+" },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind", "Bootstrap"] },
  { category: "Backend",  items: ["Node.js", "Express", "REST APIs"] },
  { category: "Database & Cloud", items: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Vercel"] },
];

const features = [
  "Full-stack expertise",
  "Clean, maintainable code",
  "Performance optimization",
  "Agile methodology",
  "24/7 support",
  "Timely delivery",
];

const socials = [
  { icon: Github,   href: "https://github.com/ARSLAN-choudary",                label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arslan-aslam-557511324/",label: "LinkedIn" },
  { icon: Mail,     href: "mailto:arslanchoudary23@gmail.com",                  label: "Email" },
];

const tabContent = {
  personal:      "Passionate about creating digital solutions that make a real difference. When I'm not coding, I explore new technologies, contribute to open-source, and mentor aspiring developers.",
  professional:  "With 3+ years in full-stack development, I've delivered 20+ successful projects using modern technologies. I specialize in scalable architecture and performance optimization.",
  approach:      "I believe in clean code, thorough testing, and user-centered design. My process emphasizes collaboration, agile methodologies, and continuous improvement.",
};

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/arslan-resume.pdf";
    a.download = "Arslan-Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="about" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle, hsl(185 100% 52% / 0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* glow orbs */}
      <div className="absolute top-20 right-0 w-[350px] h-[350px] rounded-full bg-secondary/8 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-5">
            <Sparkles className="h-4 w-4" /> About Me
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-foreground">Transforming </span>
            <span style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Ideas Into Reality
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Building digital experiences that combine <span className="text-primary font-semibold">innovation</span>, <span className="text-primary font-semibold">performance</span>, and <span className="text-primary font-semibold">elegance</span>.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 sm:gap-8">
          {/* ── Left (profile + tabs) ── */}
          <div className="xl:col-span-2 space-y-6">
            {/* profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 overflow-hidden"
            >
              {/* top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10">
                    <img src="/my-img.jpg" alt="Arslan" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full border-2 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* name + stats */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5">Arslan Aslam</h3>
                  <p className="text-primary font-semibold mb-4">Full Stack Developer</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {stats.map(({ number, label, icon: Icon, suffix = "" }) => (
                      <div key={label} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                        <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-bold text-sm">{number}{suffix}</div>
                          <div className="text-[10px] text-muted-foreground">{label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* tabs */}
              <div className="mt-6">
                <div className="flex border-b border-border mb-4">
                  {["personal", "professional", "approach"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2.5 text-sm font-medium transition-all duration-200 capitalize ${
                        activeTab === tab
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="min-h-[80px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                    >
                      {tabContent[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8"
            >
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" /> Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {techStack.map(({ category, items }) => (
                  <div key={category} className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-5">
            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-card p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
              <h3 className="text-lg font-bold mb-4 text-center">Let's Work Together</h3>
              <div className="space-y-3">
                <a href="#contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))" }}>
                  <User className="h-4 w-4" /> Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <button onClick={handleDownload} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all hover:scale-105">
                  <Download className="h-4 w-4" /> Download Resume
                </button>
              </div>
              {/* socials */}
              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center mb-3">Quick Connect</p>
                <div className="flex justify-center gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* why choose me */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" /> Why Choose Me
              </h3>
              <div className="space-y-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 flex items-center gap-4"
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <div>
                <p className="font-semibold text-sm text-emerald-400">Available for new projects</p>
                <p className="text-xs text-muted-foreground mt-0.5">⚡ Response under 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
