import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tight">
          Studio <span className="text-cobalt">Forma</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm font-medium text-inkSoft hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1.5 font-body text-sm font-semibold bg-ink text-canvas px-5 py-2.5 rounded-full hover:bg-cobalt transition-colors"
          >
            Start a Project
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-canvas border-t border-line"
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm font-medium text-inkSoft">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-body text-sm font-semibold bg-ink text-canvas px-5 py-3 rounded-full text-center"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
