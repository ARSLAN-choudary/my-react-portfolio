import { ArrowRight, Download, Mail, Github, Linkedin, Shield, TrendingUp, Award, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ── Typewriter titles ─────────────────────────────────────────── */
const TITLES = ["Full-Stack Engineer", "React Developer", "Node.js Expert", "UI/UX Specialist"];

const stats = [
  { number: "3+",   label: "Years Exp",     icon: Shield },
  { number: "20+",  label: "Projects",      icon: TrendingUp },
  { number: "100%", label: "Satisfaction",  icon: Award },
  { number: "10+",  label: "Clients",       icon: Zap },
];

const socials = [
  { icon: Github,   href: "https://github.com/ARSLAN-choudary",                 label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arslan-aslam-557511324/", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:arslanchoudary23@gmail.com",                   label: "Email" },
];

/* ── Marquee strip items ───────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "React", "★", "Next.js", "★", "Node.js", "★", "Angular", "★",
  "TypeScript", "★", "MongoDB", "★", "Tailwind CSS", "★", "Express", "★",
  "PostgreSQL", "★", "Docker", "★", "AWS", "★", "REST API", "★",
];

/* ── Marquee component ─────────────────────────────────────────── */
const Marquee = ({ reverse = false }) => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden flex">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`text-sm font-semibold tracking-widest uppercase ${
              item === "★" ? "text-primary/60" : "text-muted-foreground/50"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ── Floating orb ──────────────────────────────────────────────── */
const Orb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] pointer-events-none -z-10 ${className}`}
    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ── Stagger container ─────────────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const fadeSlideLeft = {
  hidden: { opacity: 0, x: 60 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const HeroSection = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* typewriter */
  useEffect(() => {
    const full = TITLES[titleIdx];
    if (!deleting && displayed.length < full.length) {
      const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === full.length) {
      const t = setTimeout(() => setDeleting(true), 2400);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
  }, [displayed, deleting, titleIdx]);

  const handleResume = () => window.open("/arslan-resume.pdf", "_blank", "noopener,noreferrer");

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── layered background ── */}
      <div className="absolute inset-0 -z-20">
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(185 100% 52% / 0.13) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_30%,hsl(232,30%,4%)_100%)]" />
      </div>

      {/* ── animated orbs ── */}
      <Orb className="w-[420px] h-[420px] bg-primary/15 top-[-80px] left-[-80px]" delay={0} />
      <Orb className="w-[320px] h-[320px] bg-secondary/15 bottom-[60px] right-[-60px]" delay={2} />
      <Orb className="w-[200px] h-[200px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />

      {/* ── parallax wrapper for main content ── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8"
      >
        <div className="container max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-14 lg:gap-20">

            {/* ══ LEFT TEXT ══ */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {/* badge */}
              <motion.div variants={fadeSlideUp}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary inline-block"
                />
                Available for new opportunities
              </motion.div>

              {/* big name */}
              <motion.div variants={fadeSlideUp} className="mb-3">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
                  <motion.span
                    className="block text-foreground"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                  >
                    I'm
                  </motion.span>
                  <motion.span
                    className="block"
                    style={{
                      background: "linear-gradient(135deg, hsl(185,100%,52%) 0%, hsl(268,75%,62%) 60%, hsl(330,80%,60%) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.9, delay: 0.45, ease: [0.77, 0, 0.175, 1] }}
                  >
                    Arslan
                  </motion.span>
                </h1>
              </motion.div>

              {/* typewriter subtitle */}
              <motion.div variants={fadeSlideUp}
                className="h-8 flex items-center justify-center lg:justify-start gap-1 mb-5"
              >
                <span className="text-sm sm:text-lg md:text-xl font-semibold text-muted-foreground">{displayed}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-[2px] h-5 bg-primary"
                />
              </motion.div>

              {/* description */}
              <motion.p variants={fadeSlideUp}
                className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8"
              >
                I craft{" "}
                <span className="text-foreground font-semibold">high-performance web apps</span>{" "}
                for startups & enterprises — React, Next.js, Node.js, Angular, MongoDB, end-to-end.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeSlideUp} className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-6 sm:mb-8">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(185,100%,52%/0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-black transition-all"
                  style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))" }}
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, borderColor: "hsl(185,100%,52%)", backgroundColor: "hsl(185,100%,52%/0.08)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm border border-border text-muted-foreground transition-all duration-300"
                >
                  <Mail className="h-4 w-4" /> Hire Me
                </motion.a>

                <motion.button
                  onClick={handleResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm border border-border text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                </motion.button>
              </motion.div>

              {/* socials */}
              <motion.div variants={fadeSlideUp} className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                {socials.map(({ icon: Icon, href, label }, i) => (
                  <motion.a
                    key={label} href={href} aria-label={label}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="p-2 sm:p-2.5 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
                <div className="h-px w-6 sm:w-8 bg-border hidden sm:block" />
                <motion.span
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                  className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block"
                >
                  arslanchoudary23@gmail.com
                </motion.span>
              </motion.div>
            </motion.div>

            {/* ══ RIGHT — 3-D tilt terminal card ══ */}
            <motion.div
              variants={fadeSlideLeft}
              initial="hidden"
              animate="show"
              className="flex-1 flex justify-center lg:justify-end w-full max-w-sm sm:max-w-md"
            >
              <motion.div
                whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="relative w-full"
              >
                {/* glow halo */}
                <div
                  className="absolute inset-0 rounded-2xl scale-105 -z-10 blur-2xl"
                  style={{ background: "linear-gradient(135deg, hsl(185,100%,52%/0.2), hsl(268,75%,62%/0.2))" }}
                />

                {/* card */}
                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
                  {/* terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">arslan.config.js</span>
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                    />
                  </div>

                  {/* code lines — animate in one by one */}
                  <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm text-left space-y-1">
                    {[
                      <><span className="text-purple-400">const </span><span className="text-cyan-400">developer</span><span className="text-muted-foreground"> = {"{"}</span></>,
                      <><span className="text-muted-foreground pl-4">  </span><span className="text-blue-400">name</span><span className="text-muted-foreground">: </span><span className="text-amber-400">'Arslan Aslam'</span><span className="text-muted-foreground">,</span></>,
                      <><span className="text-muted-foreground pl-4">  </span><span className="text-blue-400">role</span><span className="text-muted-foreground">: </span><span className="text-amber-400">'Full-Stack Engineer'</span><span className="text-muted-foreground">,</span></>,
                      <><span className="text-muted-foreground pl-4">  </span><span className="text-blue-400">stack</span><span className="text-muted-foreground">: [</span><span className="text-green-400">'React'</span><span className="text-muted-foreground">, </span><span className="text-green-400">'Node'</span><span className="text-muted-foreground">, </span><span className="text-green-400">'Angular'</span><span className="text-muted-foreground">],</span></>,
                      <><span className="text-muted-foreground pl-4">  </span><span className="text-blue-400">exp</span><span className="text-muted-foreground">: </span><span className="text-orange-400">3</span><span className="text-muted-foreground">,</span><span className="text-muted-foreground/40 text-xs"> // years</span></>,
                      <><span className="text-muted-foreground pl-4">  </span><span className="text-blue-400">projects</span><span className="text-muted-foreground">: </span><span className="text-orange-400">20</span><span className="text-muted-foreground">,</span></>,
                      <><span className="text-muted-foreground pl-4">  </span><span className="text-blue-400">status</span><span className="text-muted-foreground">: </span><span className="text-amber-400">'open to work'</span><span className="text-muted-foreground">,</span></>,
                      <><span className="text-muted-foreground">{"}"}</span></>,
                      <></>,
                      <><span className="text-purple-400">await </span><span className="text-cyan-400">developer</span><span className="text-muted-foreground">.</span><span className="text-yellow-400">connect</span><span className="text-muted-foreground">();</span></>,
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                        className="min-h-[20px]"
                      >
                        {line}
                      </motion.div>
                    ))}

                    {/* blinking cursor line */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="flex items-center gap-1.5 pt-1"
                    >
                      <span className="text-green-400 text-xs">// Ready to build 🚀</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-2 h-4 bg-primary"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* floating chips */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl border border-primary/30 bg-card text-xs font-bold text-primary shadow-xl"
                >
                  ⚡ 3+ Yrs Exp
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl border border-secondary/30 bg-card text-xs font-bold text-secondary shadow-xl"
                >
                  20+ Projects ✓
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* ══ STATS BAR ══ */}
          <motion.div
            className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } } }}
          >
            {stats.map(({ number, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: "backOut" } },
                }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex flex-col items-center gap-1.5 p-3 sm:p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card transition-all duration-200 group cursor-default"
              >
                <Icon className="h-4 w-4 text-primary mb-1 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-2xl font-black text-foreground">{number}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══ MARQUEE STRIP ══ */}
      <div className="w-full border-t border-border py-4 bg-card/30 backdrop-blur-sm overflow-hidden">
        <Marquee />
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};
