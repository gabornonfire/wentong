import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import EvidenceTable from "../EvidenceTable";

const evidenceRows = [
  { area: "FIR heat therapy", level: "🟢 Strong", levelColor: "hsl(150, 60%, 45%)", finding: "Circulation, vasodilation, muscle relaxation, inflammation", refs: "Vatansever & Hamblin, 2012" },
  { area: "PBM — red light", level: "🟢 Strong", levelColor: "hsl(150, 60%, 45%)", finding: "ATP production, muscle recovery, anti-inflammation", refs: "Hamblin, 2017 (Harvard)" },
  { area: "PBM — blue light", level: "🟢 Strong (in vitro)", levelColor: "hsl(150, 60%, 45%)", finding: "Bactericidal, porphyrin activation", refs: "Dai T., 2012, Virulence" },
  { area: "Negative ionization", level: "🔵 Moderate", levelColor: "hsl(210, 70%, 55%)", finding: "Atmospheric antimicrobial, respiratory and mood effects", refs: "Comini et al., 2021 (PMC)" },
  { area: "Plantar stimulation", level: "🟢 Strong", levelColor: "hsl(150, 60%, 45%)", finding: "Peripheral circulation, sleep onset improvement", refs: "Ko & Lee, 2018, PMC" },
  { area: "Reflexology (specific)", level: "🟡 Weak", levelColor: "hsl(45, 90%, 55%)", finding: "Subjective relaxation; organ connection unproven", refs: "Ernst, 2009, Med J Aust" },
  { area: "Multimodal combination", level: "🟡 No data", levelColor: "hsl(45, 90%, 55%)", finding: "Combined effect: likely synergistic, but untested", refs: "—" },
];

const ReferenceSectionEn = () => (
  <>
    <SectionHeading num="7" title="Quick Reference: Evidence Levels" id="referencia" />

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
        Summary in one sentence
      </span>
      <p className="font-display italic text-foreground text-base leading-[1.75]">
        The Wentong 1.0 combines four well-documented, individually scientifically grounded biophysical modalities — far-infrared heat therapy, photobiomodulation, negative ionization, and plantar stimulation — into a single device. Decades of clinical literature support the infrared and photobiomodulation effects; the other modalities are real and studied but context-dependent. It is not a medical device, but the experienced regeneration, circulation-enhancing, and relaxation effects are scientifically interpretable for each component.
      </p>
    </motion.div>

    {/* Footnotes */}
    <div className="mt-[52px]">
      <div className="divider-line mb-6" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        From peer-reviewed scientific sources
      </span>
      <p className="text-[11px] text-subtle leading-[1.7] mb-4">
        Vatansever F. & Hamblin MR. (2012). Photonics & Lasers in Medicine 4:255–266 · Hamblin MR. (2017). AIMS Biophysics 4(3):337–361 · Dai T. (2012). Virulence — blue light bactericidal effects · Ko Y. & Lee HY. (2018). Journal of Physiological Anthropology 37:13 (PMC) · Comini LR. et al. (2021). Microbiology Spectrum (PMC) · Ernst E. (2009). Medical Journal of Australia 191(5):263–266 · Lin CC et al. (2012). Cardiology Research and Practice
      </p>
      <div className="divider-line my-5" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
        Legal disclaimer
      </span>
      <p className="text-[10px] text-subtle leading-relaxed mb-5">
        This summary is an informal, educational document based on peer-reviewed literature. It is not medical advice. The device is not a medical device. The claims have not been evaluated by any health authority. Consult a physician for health concerns.
      </p>
      <p className="text-[10px] text-subtle text-center">
        Compiled by: Claude AI (Anthropic) — February 2026 · Foherb / WHIEDA
      </p>
    </div>
  </>
);

export default ReferenceSectionEn;
