import { useEffect, useState, useRef } from "react";
import { Home, User, Code, Briefcase, MessageSquare, Mail, Sun, Moon, Volume2, VolumeX, Github, Linkedin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home",        href: "#hero",         icon: Home },
  { name: "About",       href: "#about",        icon: User },
  { name: "Skills",      href: "#skills",       icon: Code },
  { name: "Projects",    href: "#projects",     icon: Briefcase },
  { name: "Testimonials",href: "#testimonials", icon: MessageSquare },
  { name: "Contact",     href: "#contact",      icon: Mail },
];

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Sun className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Moon className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    audioRef.current.preload = "auto";
    const onReady = () => setIsAudioReady(true);
    audioRef.current.addEventListener("canplaythrough", onReady);
    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("canplaythrough", onReady);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;
    isMusicPlaying ? audioRef.current.pause() : audioRef.current.play().catch(() => {});
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowNavbar(y < lastScrollYRef.current || y < 100);
      lastScrollYRef.current = y;

      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (y + 100 >= offsetTop && y + 100 < offsetTop + offsetHeight) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top-right pill (social + music + theme) ── */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-2 rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/ARSLAN-choudary"
          target="_blank" rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arslan-aslam-557511324/"
          target="_blank" rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <div className="w-px h-4 bg-border mx-0.5" />

        {/* Music */}
        <button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className={cn(
            "p-1.5 rounded-lg transition-all duration-200",
            isAudioReady
              ? "text-muted-foreground hover:text-primary hover:bg-primary/10 cursor-pointer"
              : "text-muted-foreground/30 cursor-not-allowed"
          )}
          aria-label={isMusicPlaying ? "Pause music" : "Play music"}
        >
          {isMusicPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Theme */}
        <ThemeToggle />
      </motion.div>

      {/* ── Bottom nav pill ── */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-xl shadow-black/40">
              {navItems.map((item) => {
                const active = activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      "relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-200",
                      active
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: "linear-gradient(135deg, hsl(185,100%,52%), hsl(268,75%,62%))" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <item.icon className="w-4 h-4 relative z-10" />
                    <span className="text-[10px] font-medium relative z-10 hidden sm:block">{item.name}</span>
                  </a>
                );
              })}
              <div className="w-px h-6 bg-border mx-1" />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
