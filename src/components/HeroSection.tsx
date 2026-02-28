import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
          Foherb / Whieda · Tudományos Összefoglaló
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
          <span className="text-foreground">A Wentong 1.0:</span>
          <br />
          <span className="text-gold-gradient">Mi a valódi tudomány mögötte?</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Objektív áttekintés terapeuták, fitnesz-szakemberek és érdeklődők számára — négy technológia, egy eszköz, a bizonyítotttól a feltörekvőig
        </p>
        <div className="divider-line max-w-xs mx-auto" />
      </motion.div>
    </header>
  );
};

export default HeroSection;
