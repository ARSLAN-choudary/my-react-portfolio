import { Github, ExternalLink, Sparkles, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Project data ──────────────────────────────────────────────── */
const projects = [
  {
    id: 1, wide: true,
    title: "BetEver B2B",
    category: "Gambling / Games",
    desc: "Enterprise-grade B2B sports betting platform with real-time odds engine, multi-market support, agent management, and advanced risk controls built for bookmakers.",
    image: "/projects/betever.png",
    tags: ["Angular", "Tailwind CSS", "TypeScript", "RxJS"],
    githubUrl: "https://github.com/Aoun-Javaid/beteverb2b",
    color: "from-red-600 to-rose-700",
    glow: "rgba(239,68,68,0.3)",
  },
  {
    id: 2, wide: false,
    title: "D247 — B2B Gambling",
    category: "Gambling / Games",
    desc: "White-label gambling solution with live casino, sportsbook, and slots. Full back-office admin and reporting suite for operators.",
    image: "/projects/d247.png",
    tags: ["Angular", "Tailwind CSS", "TypeScript", "NgRx"],
    githubUrl: "https://github.com/connectwithfalco/d247-web-ag-b2b",
    color: "from-rose-600 to-pink-700",
    glow: "rgba(244,63,94,0.3)",
  },
  {
    id: 3, wide: false,
    title: "Tiger Exchange",
    category: "Gambling / Games",
    desc: "High-traffic sports exchange platform with live in-play betting, real-time P&L tracking, and multi-currency wallet system.",
    image: "/projects/tigerexch.png",
    tags: ["Angular", "Tailwind CSS", "TypeScript", "Socket.IO"],
    githubUrl: null,
    color: "from-orange-600 to-amber-700",
    glow: "rgba(234,88,12,0.3)",
  },
  {
    id: 4, wide: false,
    title: "PlayBro",
    category: "Gambling / Games",
    desc: "Consumer-facing gaming and casino platform featuring slot games, live dealers, tournament system, and VIP loyalty rewards.",
    image: "/projects/playbro.com.png",
    tags: ["Angular", "Tailwind CSS", "SCSS", "RxJS"],
    githubUrl: null,
    color: "from-yellow-600 to-orange-700",
    glow: "rgba(202,138,4,0.3)",
  },
  {
    id: 5, wide: true,
    title: "Blacklane — Chauffeur App",
    category: "Transport",
    desc: "Premium chauffeur booking platform with scheduled rides, live driver tracking, corporate accounts, and seamless Stripe payment flows. Inspired by Blacklane.",
    image: "/projects/blaclane.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Google Maps", "Stripe"],
    githubUrl: "https://github.com/ARSLAN-choudary/blacklane",
    color: "from-zinc-600 to-slate-800",
    glow: "rgba(113,113,122,0.3)",
  },
  {
    id: 6, wide: false,
    title: "Wolt — Food Delivery",
    category: "Food Delivery",
    desc: "Modern food delivery app with restaurant discovery, live order tracking, multi-vendor management, and seamless checkout experience.",
    image: "/projects/wolt.png",
    tags: ["React", "Node.js", "MongoDB", "Mapbox"],
    githubUrl: null,
    color: "from-sky-600 to-blue-700",
    glow: "rgba(2,132,199,0.3)",
  },
  {
    id: 7, wide: false,
    title: "United Motors",
    category: "Automotive",
    desc: "Full-featured automotive dealership platform with vehicle inventory, comparison tools, financing calculator, and test-drive booking.",
    image: "/projects/inited.png",
    tags: ["Angular", "Tailwind CSS", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/asjadBuilds/united-motors",
    color: "from-slate-600 to-gray-800",
    glow: "rgba(100,116,139,0.3)",
  },
  {
    id: 8, wide: false,
    title: "KCRE — CRM Dashboard",
    category: "CRM Dashboard",
    desc: "Enterprise CRM dashboard for real estate with lead pipeline, agent analytics, deal tracking, and automated follow-up management.",
    image: "/projects/kcre.png",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    githubUrl: null,
    color: "from-blue-600 to-indigo-700",
    glow: "rgba(37,99,235,0.3)",
  },
  {
    id: 9, wide: true,
    title: "Lushspaces — Real Estate CRM",
    category: "Real Estate",
    desc: "Lushspaces is a real estate admin panel and CRM system for managing property listings, client leads, agent performance, and deal pipelines in one unified dashboard.",
    image: "/projects/lush.png",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/fahadkhan1229/Lushspaces-adminpanel",
    color: "from-emerald-600 to-teal-700",
    glow: "rgba(5,150,105,0.3)",
  },
  {
    id: 10, wide: false,
    title: "Qutham — Dev Portfolio",
    category: "Portfolio",
    desc: "Sleek dark-themed developer portfolio with animated sections, project showcase, skills visualization, and integrated contact form.",
    image: "/projects/qutham.png",
    tags: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    githubUrl: "https://github.com/ARSLAN-choudary/qutham-portfolio",
    color: "from-violet-600 to-purple-700",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    id: 11, wide: false,
    title: "Property Site — Zameen",
    category: "Real Estate",
    desc: "Modern property listing website with map-based browsing, advanced search filters, agent profiles, and inquiry management.",
    image: "/projects/zameen.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Google Maps"],
    githubUrl: "https://github.com/ARSLAN-choudary/property-site",
    color: "from-teal-600 to-cyan-700",
    glow: "rgba(13,148,136,0.3)",
  },
];

const CATEGORIES = ["All", "Gambling / Games", "Transport", "Food Delivery", "Automotive", "CRM Dashboard", "Real Estate", "Portfolio"];

/* ── Single project card ─────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  const directions = [
    { x: -60, y: 0 }, { x: 60, y: 0 }, { x: 0, y: 60 },
    { x: -60, y: 0 }, { x: 0, y: -40 }, { x: 60, y: 0 },
  ];
  const dir = directions[index % directions.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: dir.x, y: dir.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={project.wide ? "md:col-span-2" : ""}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-border h-64 md:h-72 cursor-pointer group"
        style={{ boxShadow: hovered ? `0 0 40px ${project.glow}` : "none", transition: "box-shadow 0.4s ease" }}
      >
        {/* image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          loading="lazy"
        />

        {/* always-visible gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* category chip top-left */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${project.color} shadow-lg`}>
          {project.category}
        </div>

        {/* github chip top-right */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <Github size={14} />
          </a>
        )}

        {/* bottom info — always visible title, slide-up desc */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg leading-tight mb-1">{project.title}</h3>

          {/* slide-up description + tags */}
          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/80 text-xs leading-relaxed mb-3 line-clamp-2">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-sm text-white/90 text-[10px] font-medium border border-white/10">
                  {t}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/70 text-[10px]">+{project.tags.length - 3}</span>
              )}
            </div>
          </motion.div>
        </div>

        {/* hover overlay tint */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply`}
          animate={{ opacity: hovered ? 0.25 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

/* ── Section ─────────────────────────────────────────────────────── */
export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 overflow-hidden">

      {/* unique diagonal bg stripe */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-full opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, hsl(185,100%,52%) 0, hsl(185,100%,52%) 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* left glow */}
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        {/* right glow */}
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto">

        {/* ── header ── */}
        <motion.div
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" /> Selected Work
            </div>
            <h2 className="text-5xl sm:text-6xl font-black leading-none">
              <span className="text-foreground block">My</span>
              <span
                className="block"
                style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Projects
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed lg:text-right">
            A curated collection of real-world projects spanning betting platforms, transport apps, real estate, and more.
          </p>
        </motion.div>

        {/* ── filter tabs ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                style={active ? {
                  background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))",
                  color: "hsl(232,30%,4%)",
                  boxShadow: "0 0 20px hsl(185,100%,52%/0.35)",
                } : {
                  background: "hsl(var(--card))",
                  color: "hsl(var(--muted-foreground))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {cat}
                {active && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 rounded-full bg-white/30"
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── bento grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA ── */}
        <motion.div
          className="mt-20 relative overflow-hidden rounded-3xl border border-border p-10 md:p-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* CTA bg */}
          <div className="absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(185,100%,52%/0.08), transparent 70%)" }}
          />
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <h3 className="text-3xl md:text-4xl font-black mb-3 text-foreground">Like what you see?</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I'm always open to new challenges. Let's build something remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))" }}
            >
              Start a Project <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/ARSLAN-choudary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all hover:scale-105"
            >
              <Github size={16} /> View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
