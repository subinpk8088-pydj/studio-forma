import { Palette, Layout, Code2, Package } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logo systems, color, type, and the guidelines that keep it all consistent once your team is moving fast.",
  },
  {
    icon: Layout,
    title: "Web Design",
    desc: "Marketing sites and product interfaces designed to hold up under real content, not just polished mockups.",
  },
  {
    icon: Code2,
    title: "Front-End Build",
    desc: "We hand off more than a Figma file — production-ready, responsive code your team can actually ship.",
  },
  {
    icon: Package,
    title: "Packaging & Print",
    desc: "Physical touchpoints — packaging, decks, signage — designed to match the same system as your digital presence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt mb-3">What We Do</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Services</h2>
          </div>
          <p className="font-body text-inkSoft max-w-sm text-sm leading-relaxed">
            Every engagement starts with a working session to figure out
            which of these you actually need — not a package deal.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group border border-line rounded-2xl p-8 h-full hover:border-cobalt hover:bg-canvasSoft transition-all">
                <span className="w-12 h-12 rounded-xl bg-ink text-canvas flex items-center justify-center mb-6 group-hover:bg-cobalt transition-colors">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="font-body text-sm text-inkSoft leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
