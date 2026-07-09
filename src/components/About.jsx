import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-canvasSoft">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <Reveal direction="left">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&q=80"
              alt="Studio Forma design team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt mb-4">About the Studio</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-6">
            Nine years, one small team, no account managers between you and the work.
          </h2>
          <p className="font-body text-inkSoft leading-relaxed mb-5">
            Studio Forma started in 2017 as two designers who'd both left
            larger agencies frustrated by how much distance existed
            between the people making decisions and the people making the
            actual work. We kept the team small on purpose.
          </p>
          <p className="font-body text-inkSoft leading-relaxed mb-8">
            Every project is led by someone who's actually doing the
            design — no handoffs, no telephone game. Clients get direct
            access to the person making the calls, and we get to keep
            standards high because there's nowhere to hide.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-display font-bold text-xl mb-1">Small by design</p>
              <p className="font-body text-sm text-inkSoft">A five-person team, deliberately.</p>
            </div>
            <div>
              <p className="font-display font-bold text-xl mb-1">Full ownership</p>
              <p className="font-body text-sm text-inkSoft">One lead designer per project, start to finish.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
