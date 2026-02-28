import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const effects = [
  { icon: "🌡", title: "Far-Infrared hő", timing: "Azonnali · 30–60 másodperc", body: "A fűtőelem közvetlenül melegíti a talpbőrt és a szövetet. Értágulatot és megnövelt kapilláris áramlást okoz — perceken belül érezhető melegség, súlytalanság, fáradtság-oldás." },
  { icon: "⚡", title: "Idegi stimuláció", timing: "Azonnali · idegi jel", body: "7200 idegvégződés/cm² a talpon — hő, fény és ionos stimuláció komplex idegi választ vált ki, amelyre az agyban endorfin és szerotonin felszabadulás követi." },
  { icon: "💡", title: "Fotobiomoduláció", timing: "Gyors · 2–5 perc", body: "A vörös fény hatása sejtszinten lejátszódik — perceken belül elindulnak az ATP-termelési folyamatok és a gyulladás-gátló jelpályák." },
  { icon: "🦶", title: "Reflexzónák és paraszimpatikus hatás", timing: "Progresszív · 5–15 perc", body: "A talpi stimuláció paraszimpatikus idegrendszeri aktivációt indít — relaxáció, szívritmus lassulás, stresszhormon csökkentés. Ez magyarázza az egész testre terjedő ellazuló érzést." },
];

const EffectsSection = () => (
  <>
    <SectionHeading num="6" title="Miért érezhető olyan gyorsan a hatás?" id="hatas" />

    <motion.p
      className="text-sm text-muted-foreground leading-relaxed mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      A gyors hatásnak több, egymást erősítő és szimultán ható mechanizmusa van:
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
        Fontos kontextus szakembereknek
      </span>
      <p className="text-sm text-muted-foreground leading-[1.7]">
        A gyors, szubjektívan tapasztalt hatás (<strong className="text-foreground font-medium">könnyebb lábak, csökkent izomfeszültség, relaxált állapot</strong>) döntően az infravörös hőterápia + idegi stimuláció + endorfin felszabadulás kombinációjával magyarázható. Ez nem jelenti, hogy a fotobiomodulációs és ionizációs komponens nem járul hozzá — de ezek inkább a hosszabb időn keresztüli, kumulatív hatáshoz kapcsolódnak.
      </p>
    </motion.div>
  </>
);

export default EffectsSection;
