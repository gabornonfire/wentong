import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

interface LevelEntry {
  title: string;
  body: string;
  ref?: string;
}

interface LevelBlockProps {
  level: "A" | "B" | "C";
  label: string;
  colorClass: string;
  entries: LevelEntry[];
}

const levelStyles = {
  A: { dot: "bg-success/20 text-success", border: "border-success/20" },
  B: { dot: "bg-info/20 text-info", border: "border-info/20" },
  C: { dot: "bg-warning/20 text-warning", border: "border-warning/20" },
};

const LevelBlock = ({ level, label, colorClass, entries }: LevelBlockProps) => (
  <motion.div
    className="mb-10"
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2.5">
      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-medium ${levelStyles[level].dot}`}>
        {level}
      </span>
      <span className={colorClass}>{label}</span>
    </h3>
    <div className={`pl-4 border-l ${levelStyles[level].border} space-y-4`}>
      {entries.map((e, i) => (
        <div key={i}>
          <p className="text-sm text-foreground font-semibold mb-1">{e.title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {e.body}
            {e.ref && <span className="italic"> {e.ref}</span>}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ScienceLevelsSectionEn = () => (
  <>
    <SectionHeading num="3" title="What Does Science Say? — Level-by-Level Review" id="tudomany" />

    <motion.div
      className="bg-gold-subtle border border-gold-subtle rounded-lg p-5 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mb-2 block">
        The key message for professionals
      </span>
      <p className="text-sm text-foreground leading-relaxed">
        Each of the Wentong 1.0's four modalities has <strong>peer-reviewed literature</strong> behind it. Infrared heat therapy and photobiomodulation have decades of strong clinical evidence. Ionization and reflexology evidence is real but scale-dependent, and partly remains at the preclinical level.
      </p>
    </motion.div>

    <LevelBlock
      level="A"
      label="Firmly established evidence"
      colorClass="text-success"
      entries={[
        { title: "Infrared heat therapy — vasodilation and microcirculation", body: "Randomized controlled trials confirm FIR effects on peripheral circulation, endothelial NO release, muscle relaxation, and chronic pain reduction.", ref: "(Vatansever & Hamblin, 2012, Photonics & Lasers in Medicine — Harvard/MGH)" },
        { title: "Photobiomodulation — muscle recovery, anti-inflammation", body: "Controlled studies in athletes confirm that 630–660 nm red light reduces post-exercise creatine kinase levels, DOMS, and accelerates recovery.", ref: "(Hamblin, 2017, AIMS Biophysics — Harvard)" },
        { title: "Blue light — bactericidal effect", body: "415 nm blue light is documented to kill S. aureus, P. acnes, and other pathogens in culture. Clinical application: acne treatment (FDA-approved protocols).", ref: "(Dai T., Virulence, 2012)" },
        { title: "Plantar stimulation for circulation and sleep", body: "Thermal stimulation of the foot significantly improves peripheral blood flow and sleep onset latency in elderly populations.", ref: "(Ko & Lee, 2018, J Physiol Anthropol, PMC)" },
      ]}
    />

    <LevelBlock
      level="B"
      label="Investigated and partially supported"
      colorClass="text-info"
      entries={[
        { title: "Negative ions and air quality", body: "In enclosed space studies, negative ions showed ~95% S. aureus and ~70% E. coli reduction. Effectiveness in consumer devices depends on scale.", ref: "(Comini et al., 2021, Microbiology Spectrum, PMC)" },
        { title: "FIR and joint inflammation, chronic pain", body: "Clinical studies report positive results for rheumatoid arthritis and fibromyalgia — infrared therapy reduced pain scores.", ref: "(Lin CC et al., Cardiol Res Pract, 2012)" },
        { title: "Reflexology and symptomatic relief", body: "A systematic review (Ernst, Med J Aust, 2009) found no strong evidence for specific diseases, but positive trends were observed for subjective relaxation and pain relief, particularly in combined therapies." },
      ]}
    />

    <LevelBlock
      level="C"
      label="Justified but without clinical confirmation"
      colorClass="text-warning"
      entries={[
        { title: "Multimodal synergism — combined effect of four modalities", body: "No clinical trial exists for the combined device as a unit. However, evidence exists for each individual modality — the combined effect is likely synergistic, but requires specific study confirmation." },
        { title: "Systemic detoxification effect", body: 'Mechanistically justified through enhanced circulation and lymphatic flow, but "detox through sweating" is a gross oversimplification. More precise phrasing: "enhanced peripheral circulation and lymphatic drainage".' },
      ]}
    />
  </>
);

export default ScienceLevelsSectionEn;
