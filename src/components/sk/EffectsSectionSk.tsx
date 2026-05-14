import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const effects = [
  { icon: "🌡", title: "Far-Infrared teplo", timing: "Okamžite · 30–60 sekúnd", body: "Vyhrievací prvok priamo zahrieva pokožku a tkanivo chodidla. Spôsobuje vazodilatáciu a zvýšený kapilárny prietok — vnímateľné teplo, ľahkosť a úľavu od únavy v priebehu niekoľkých minút." },
  { icon: "⚡", title: "Nervová stimulácia", timing: "Okamžite · nervový signál", body: "7 200 nervových zakončení/cm² na chodidle — teplo, svetlo a iónová stimulácia aktivujú komplexnú nervovú odpoveď, po ktorej nasleduje uvoľnenie endorfínov a serotonínu v mozgu." },
  { icon: "💡", title: "Fotobiomodulácia", timing: "Rýchlo · 2–5 minút", body: "Červené svetlo pôsobí na bunkovej úrovni — procesy tvorby ATP a protizápalové signálne dráhy sa aktivujú v priebehu niekoľkých minút." },
  { icon: "🦶", title: "Reflexné zóny a parasympatický účinok", timing: "Postupne · 5–15 minút", body: "Stimulácia chodidla aktivuje parasympatický nervový systém — relaxácia, zníženie srdcovej frekvencie, pokles stresových hormónov. To vysvetľuje pocit relaxácie v celom tele." },
];

const EffectsSectionSk = () => (
  <>
    <SectionHeading num="6" title="Prečo je účinok cítiť tak rýchlo?" id="hatas" />

    <motion.p
      className="text-sm text-muted-foreground leading-relaxed mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Rýchly účinok má viacero vzájomne sa posilňujúcich mechanizmov, ktoré pôsobia súčasne:
    </motion.p>

    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5 mb-8">
      {effects.map((e, i) => (
        <motion.div
          key={i}
          className="card-elevated rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-gold-subtle flex items-center justify-center text-lg">
              {e.icon}
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground">{e.title}</h4>
              <span className="text-[10px] font-mono text-primary uppercase tracking-wider">{e.timing}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{e.body}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="bg-gold-subtle border border-gold-subtle rounded-lg p-5 mb-7"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mb-2 block">
        Dôležitý kontext pre odborníkov
      </span>
      <p className="text-sm text-muted-foreground leading-[1.7]">
        Subjektívne vnímaný rýchly účinok (<strong className="text-foreground font-medium">ľahšie nohy, zníženie svalového napätia, uvoľnený stav</strong>) vysvetľuje predovšetkým kombinácia infračervenej termoterapie + nervovej stimulácie + uvoľňovania endorfínov. To neznamená, že komponenty fotobiomodulácie a ionizácie neprispievajú — tie sú však viac spojené s dlhodobými a kumulatívnymi účinkami.
      </p>
    </motion.div>
  </>
);

export default EffectsSectionSk;
