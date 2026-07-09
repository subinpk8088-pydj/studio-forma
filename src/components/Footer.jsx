export default function Footer() {
  return (
    <footer className="bg-ink text-canvas pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div>
            <h2 className="font-display font-bold text-2xl mb-3">
              Studio <span className="text-lime">Forma</span>
            </h2>
            <p className="font-body text-canvas/60 text-sm leading-relaxed max-w-xs">
              A brand and digital design studio building identities that
              hold up under real use, not just in a pitch deck.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-canvas/50 mb-4">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#about" className="text-sm text-canvas/70 hover:text-lime transition-colors">About</a></li>
              <li><a href="#services" className="text-sm text-canvas/70 hover:text-lime transition-colors">Services</a></li>
              <li><a href="#contact" className="text-sm text-canvas/70 hover:text-lime transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-canvas/50 mb-4">Contact</p>
            <p className="text-sm text-canvas/70 mb-2">hello@studioforma.example</p>
            <p className="text-sm text-canvas/70">118 Harrow Street, Chicago, IL</p>
          </div>
        </div>

        <div className="border-t border-canvas/15 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-mono text-[11px] text-canvas/40">
            &copy; {new Date().getFullYear()} Studio Forma. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-canvas/40">Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
