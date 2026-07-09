import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt mb-6"
        >
          Brand &amp; Digital Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl mb-8"
        >
          Identity that holds up when things get loud.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-inkSoft text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          We're a small studio that builds brand systems, websites, and
          product design for companies who'd rather be distinct than
          trendy. No templates, no filler slides.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-ink text-canvas font-body text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-cobalt transition-colors"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-ink/20 font-body text-sm font-semibold px-6 py-3.5 rounded-full hover:border-cobalt hover:text-cobalt transition-colors"
          >
            See What We Do
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-line max-w-xl"
        >
          {[
            { value: "60+", label: "Brands Launched" },
            { value: "9 yrs", label: "In Practice" },
            { value: "94%", label: "Client Return Rate" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-2xl md:text-3xl">{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-inkSoft mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
