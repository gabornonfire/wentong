const HeroSection = () => {
  return (
    <header className="min-h-[88vh] flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.025]" />
      <div className="relative z-10 max-w-[720px] text-center animate-fade-up">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-6 block">
          Tudományos összefoglaló · 2024
        </span>
        <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
          <span className="text-gold-gradient">Wentong</span>{" "}
          <span className="text-foreground">1.0</span>
        </h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[480px] mx-auto mb-9">
          A távol-infravörös sugárzás, fotobiomoduláció, negatív ionterápia és reflexológia
          tudományos alapú szinergiája – egyetlen eszközben.
        </p>
        <div className="divider-line max-w-[200px] mx-auto" />

        <div className="flex justify-center gap-2 flex-wrap mt-8">
          {[
            { label: "FIR", cls: "text-primary border-primary/30 bg-primary-dim" },
            { label: "PBM", cls: "text-rose border-rose/30 bg-rose/10" },
            { label: "ION", cls: "text-purple border-purple/30 bg-purple-dim" },
            { label: "REFLEX", cls: "text-accent border-accent/25 bg-accent-dim" },
          ].map((pill) => (
            <span
              key={pill.label}
              className={`font-mono text-[9px] tracking-[0.1em] uppercase py-1 px-3 rounded-full border ${pill.cls}`}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
