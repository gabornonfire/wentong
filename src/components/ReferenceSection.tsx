import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import EvidenceTable from "./EvidenceTable";

const evidenceRows = [
  { area: "FIR hőterápia", level: "🟢 Erős", levelColor: "hsl(150, 60%, 45%)", finding: "Keringés, értágítás, izomlazítás, gyulladás", refs: "Vatansever & Hamblin, 2012" },
  { area: "PBM — vörös fény", level: "🟢 Erős", levelColor: "hsl(150, 60%, 45%)", finding: "ATP-termelés, izomregeneráció, gyulladáscsökkentés", refs: "Hamblin, 2017 (Harvard)" },
  { area: "PBM — kék fény", level: "🟢 Erős (in vitro)", levelColor: "hsl(150, 60%, 45%)", finding: "Bactericid, porfirin-aktiváció", refs: "Dai T., 2012, Virulence" },
  { area: "Negatív ionizáció", level: "🔵 Közepes", levelColor: "hsl(210, 70%, 55%)", finding: "Légköri antimikrobiális, légúti és hangulati hatás", refs: "Comini et al., 2021 (PMC)" },
  { area: "Talpstimulációs keringés", level: "🟢 Erős", levelColor: "hsl(150, 60%, 45%)", finding: "Perifériás keringés, alvás-indukció javítása", refs: "Ko & Lee, 2018, PMC" },
  { area: "Reflexológia (specifikus)", level: "🟡 Gyenge", levelColor: "hsl(45, 90%, 55%)", finding: "Szubjektív relaxáció; szerv-kapcsolat nem bizonyított", refs: "Ernst, 2009, Med J Aust" },
  { area: "Multimodális kombináció", level: "🟡 Nincs adat", levelColor: "hsl(45, 90%, 55%)", finding: "Összesített hatás: szinergista, de nem vizsgált", refs: "—" },
];

const ReferenceSection = () => (
  <>
    <SectionHeading num="7" title="Gyors referencia: bizonyítékok szintje" id="referencia" />

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <EvidenceTable rows={evidenceRows} />
    </motion.div>

    <motion.div
      className="card-elevated rounded-lg p-7 px-8 glow-gold border-gold-subtle mt-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary mb-3 block">
        Összefoglaló egy mondatban
      </span>
      <p className="font-display italic text-foreground text-base leading-[1.75]">
        A Wentong 1.0 négy jól dokumentált, önmagában is tudományosan megalapozott biofizikai modalitást — far-infrared hőterápiát, fotobiomodulációt, negatív ionizációt és talpstimulációt — ötvöz egyetlen eszközben. Az infravörös és fotobiomodulációs hatásokra évtizedes klinikai irodalom áll rendelkezésre, a többi modalitás valós és vizsgált, de kontextusfüggő. Nem orvosi eszköz, de a tapasztalt regenerációs, keringésjavító és relaxációs hatások minden komponensénél tudományosan értelmezhetők.
      </p>
    </motion.div>

    {/* Footnotes */}
    <div className="mt-[52px]">
      <div className="divider-line mb-6" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Referált tudományos forrásokból
      </span>
      <p className="text-[11px] text-subtle leading-[1.7] mb-4">
        Vatansever F. & Hamblin MR. (2012). Photonics & Lasers in Medicine 4:255–266 · Hamblin MR. (2017). AIMS Biophysics 4(3):337–361 · Dai T. (2012). Virulence — blue light bactericidal effects · Ko Y. & Lee HY. (2018). Journal of Physiological Anthropology 37:13 (PMC) · Comini LR. et al. (2021). Microbiology Spectrum (PMC) · Ernst E. (2009). Medical Journal of Australia 191(5):263–266 · Lin CC et al. (2012). Cardiology Research and Practice
      </p>
      <div className="divider-line my-5" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Jogi nyilatkozat
      </span>
      <p className="text-[10px] text-subtle leading-relaxed mb-5">
        Ez az összefoglaló informális, oktatási célú dokumentum, peer-reviewed irodalom alapján. Nem orvosi tanácsadás. Az eszköz nem orvosi eszköz. Az állításokat nem értékelte semmilyen egészségügyi hatóság. Egészségügyi problémák esetén fordulj orvoshoz.
      </p>
      <p className="text-[10px] text-subtle text-center">
        Összeállítva: Claude AI (Anthropic) — 2026. február · Foherb / WHIEDA
      </p>
    </div>
  </>
);

export default ReferenceSection;
