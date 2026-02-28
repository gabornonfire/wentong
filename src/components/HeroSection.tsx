const HeroSection = () => {
  return (
    <header className="min-h-[88vh] flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.025]" />
      <div className="relative z-10 max-w-[720px] text-center animate-fade-up">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-6 block">
          Foherb / Whieda · Tudományos Összefoglaló
        </span>
        <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
          <span className="text-foreground">A Wentong 1.0:</span>
          <br />
          <span className="text-gold-gradient">Mi a valódi tudomány mögötte?</span>
        </h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[480px] mx-auto mb-9">
          Objektív áttekintés terapeuták, fitnesz-szakemberek és érdeklődők számára — négy technológia, egy eszköz, a bizonyítotttól a feltörekvőig
        </p>
        <div className="divider-line max-w-[200px] mx-auto" />
      </div>
    </header>
  );
};

export default HeroSection;
