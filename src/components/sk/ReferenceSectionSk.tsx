import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import EvidenceTable from "../EvidenceTable";

const evidenceRows = [
  { area: "FIR termoterapia", level: "🟢 Silné", levelColor: "hsl(150, 60%, 45%)", finding: "Cirkulácia, vazodilatácia, svalová relaxácia, zápal", refs: "Vatansever & Hamblin, 2012" },
  { area: "PBM — červené svetlo", level: "🟢 Silné", levelColor: "hsl(150, 60%, 45%)", finding: "Tvorba ATP, svalová regenerácia, protizápalový účinok", refs: "Hamblin, 2017 (Harvard)" },
  { area: "PBM — modré svetlo", level: "🟢 Silné (in vitro)", levelColor: "hsl(150, 60%, 45%)", finding: "Baktericídne, aktivácia porfyrínov", refs: "Dai T., 2012, Virulence" },
  { area: "Negatívna ionizácia", level: "🔵 Stredné", levelColor: "hsl(210, 70%, 55%)", finding: "Atmosférické antimikrobiálne, dýchacie a náladové účinky", refs: "Comini a kol., 2021 (PMC)" },
  { area: "Stimulácia chodidla", level: "🟢 Silné", levelColor: "hsl(150, 60%, 45%)", finding: "Periférna cirkulácia, zlepšenie indukcie spánku", refs: "Ko & Lee, 2018, PMC" },
  { area: "Reflexológia (špecifická)", level: "🟡 Slabé", levelColor: "hsl(45, 90%, 55%)", finding: "Subjektívna relaxácia; spojenie orgánov nepreukázané", refs: "Ernst, 2009, Med J Aust" },
  { area: "Multimodálna kombinácia", level: "🟡 Bez dát", levelColor: "hsl(45, 90%, 55%)", finding: "Kombinovaný účinok: pravdepodobne synergický, ale netestovaný", refs: "—" },
];

const ReferenceSectionSk = () => (
  <>
    <SectionHeading num="7" title="Rýchly prehľad: úrovne dôkazov" id="referencia" />

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
        Zhrnutie v jednej vete
      </span>
      <p className="font-display italic text-foreground text-base leading-[1.75]">
        Wentong 1.0 spája štyri dobre zdokumentované a vedecky podložené biofyzikálne modality — termoterapiu vzdialenými infračervenými lúčmi, fotobiomoduláciu, negatívnu ionizáciu a stimuláciu chodidla — v jedinom zariadení. Desaťročia klinickej literatúry podporujú účinky infračervených lúčov a fotobiomodulácie; ostatné modality sú reálne a skúmané, ale závislé od kontextu. Nie je to zdravotnícka pomôcka, ale pozorované účinky regenerácie, zlepšenia cirkulácie a relaxácie sú vedecky interpretovateľné pre každý komponent.
      </p>
    </motion.div>

    {/* Footnotes */}
    <div className="mt-[52px]">
      <div className="divider-line mb-6" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Z recenzovaných vedeckých zdrojov
      </span>
      <p className="text-[11px] text-subtle leading-[1.7] mb-4">
        Vatansever F. & Hamblin MR. (2012). Photonics & Lasers in Medicine 4:255–266 · Hamblin MR. (2017). AIMS Biophysics 4(3):337–361 · Dai T. (2012). Virulence — blue light bactericidal effects · Ko Y. & Lee HY. (2018). Journal of Physiological Anthropology 37:13 (PMC) · Comini LR. et al. (2021). Microbiology Spectrum (PMC) · Ernst E. (2009). Medical Journal of Australia 191(5):263–266 · Lin CC et al. (2012). Cardiology Research and Practice
      </p>
      <div className="divider-line my-5" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Právne upozornenie
      </span>
      <p className="text-[10px] text-subtle leading-relaxed mb-5">
        Toto zhrnutie je neformálny a vzdelávací dokument založený na recenzovanej literatúre. Nepredstavuje lekársku radu. Zariadenie nie je zdravotnícka pomôcka. Tvrdenia neboli posúdené žiadnym zdravotníckym úradom. V prípade zdravotných problémov sa poraďte s lekárom.
      </p>
      <p className="text-[10px] text-subtle text-center">
        Zostavil: Claude AI (Anthropic) — Február 2026 · Foherb / WHIEDA
      </p>
    </div>
  </>
);

export default ReferenceSectionSk;
