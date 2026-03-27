import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import EvidenceTable from "../EvidenceTable";

const evidenceRows = [
  { area: "Termoterapia FIR", level: "🟢 Forte", levelColor: "hsl(150, 60%, 45%)", finding: "Circolazione, vasodilatazione, rilassamento muscolare, infiammazione", refs: "Vatansever & Hamblin, 2012" },
  { area: "PBM — luce rossa", level: "🟢 Forte", levelColor: "hsl(150, 60%, 45%)", finding: "Produzione ATP, recupero muscolare, anti-infiammazione", refs: "Hamblin, 2017 (Harvard)" },
  { area: "PBM — luce blu", level: "🟢 Forte (in vitro)", levelColor: "hsl(150, 60%, 45%)", finding: "Battericida, attivazione porfirinica", refs: "Dai T., 2012, Virulence" },
  { area: "Ionizzazione negativa", level: "🔵 Moderato", levelColor: "hsl(210, 70%, 55%)", finding: "Antimicrobico atmosferico, effetti respiratori e sull'umore", refs: "Comini et al., 2021 (PMC)" },
  { area: "Stimolazione plantare", level: "🟢 Forte", levelColor: "hsl(150, 60%, 45%)", finding: "Circolazione periferica, miglioramento induzione del sonno", refs: "Ko & Lee, 2018, PMC" },
  { area: "Riflessologia (specifica)", level: "🟡 Debole", levelColor: "hsl(45, 90%, 55%)", finding: "Rilassamento soggettivo; connessione organi non dimostrata", refs: "Ernst, 2009, Med J Aust" },
  { area: "Combinazione multimodale", level: "🟡 Nessun dato", levelColor: "hsl(45, 90%, 55%)", finding: "Effetto combinato: probabilmente sinergico, ma non testato", refs: "—" },
];

const ReferenceSectionIt = () => (
  <>
    <SectionHeading num="7" title="Riferimento rapido: livelli di evidenza" id="referencia" />

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
        Riassunto in una frase
      </span>
      <p className="font-display italic text-foreground text-base leading-[1.75]">
        Il Wentong 1.0 combina quattro modalità biofisiche ben documentate e scientificamente fondate — termoterapia a infrarossi lontani, fotobiomodulazione, ionizzazione negativa e stimolazione plantare — in un unico dispositivo. Decenni di letteratura clinica supportano gli effetti infrarossi e di fotobiomodulazione; le altre modalità sono reali e studiate ma dipendenti dal contesto. Non è un dispositivo medico, ma gli effetti di rigenerazione, miglioramento della circolazione e rilassamento sperimentati sono scientificamente interpretabili per ciascun componente.
      </p>
    </motion.div>

    {/* Footnotes */}
    <div className="mt-[52px]">
      <div className="divider-line mb-6" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Da fonti scientifiche peer-reviewed
      </span>
      <p className="text-[11px] text-subtle leading-[1.7] mb-4">
        Vatansever F. & Hamblin MR. (2012). Photonics & Lasers in Medicine 4:255–266 · Hamblin MR. (2017). AIMS Biophysics 4(3):337–361 · Dai T. (2012). Virulence — blue light bactericidal effects · Ko Y. & Lee HY. (2018). Journal of Physiological Anthropology 37:13 (PMC) · Comini LR. et al. (2021). Microbiology Spectrum (PMC) · Ernst E. (2009). Medical Journal of Australia 191(5):263–266 · Lin CC et al. (2012). Cardiology Research and Practice
      </p>
      <div className="divider-line my-5" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Avvertenza legale
      </span>
      <p className="text-[10px] text-subtle leading-relaxed mb-5">
        Questo riassunto è un documento informale ed educativo basato su letteratura peer-reviewed. Non costituisce consiglio medico. Il dispositivo non è un dispositivo medico. Le affermazioni non sono state valutate da alcuna autorità sanitaria. Per problemi di salute, consultare un medico.
      </p>
      <p className="text-[10px] text-subtle text-center">
        Compilato da: Claude AI (Anthropic) — Febbraio 2026 · Foherb / WHIEDA
      </p>
    </div>
  </>
);

export default ReferenceSectionIt;
