import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

interface Claim {
  title: string;
  verdict: string;
  verdictColor: string;
  body: string;
}

const claims: Claim[] = [
  { title: "Boosts microcirculation", verdict: "✓ TRUE", verdictColor: "text-success", body: "Through FIR heat effect and nitric oxide release — this is the device's strongest evidence-backed effect." },
  { title: "Anti-inflammatory effect", verdict: "✓ TRUE (infrared/PBM)", verdictColor: "text-success", body: "Reduction of pro-inflammatory cytokines (TNF-α, IL-6) is documented for FIR and red light." },
  { title: "Immediate muscle relaxation", verdict: "✓ TRUE", verdictColor: "text-success", body: "Thermal relaxation + thermoreceptor stimulation + endorphin release together explain the rapid effect." },
  { title: "Antimicrobial (on foot)", verdict: "~ PARTIALLY TRUE", verdictColor: "text-info", body: "Blue light (415nm) is proven bactericidal. The ionizer's atmospheric effect is real but limited in intensity." },
  { title: "Improves sleep", verdict: "~ PARTIALLY TRUE", verdictColor: "text-info", body: "Foot warming improves sleep induction (Ko & Lee, 2018). The relaxing effect of ionization may also contribute." },
  { title: "Penetrates 10–12 cm deep", verdict: "~ NEEDS CLARIFICATION", verdictColor: "text-warning", body: "Direct FIR penetration: 1–3 cm. The 10–12 cm refers to secondary circulatory effects — real, but within precise context." },
  { title: "Activates cells, regenerates", verdict: "~ RESEARCHED", verdictColor: "text-info", body: 'Mitochondrial activation by red light: documented. "Cell activation" in general: an oversimplification, but biologically interpretable.' },
  { title: "Cures / makes diagnoses", verdict: "✗ NO", verdictColor: "text-destructive", body: "This is not a medical device. Claims implying cure, diagnosis, or cancer therapy are unsubstantiated and legally problematic." },
];

const ClaimsSectionEn = () => (
  <>
    <SectionHeading num="4" title="Quick Claim Assessment" />

    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5 mb-8">
      {claims.map((c, i) => (
        <motion.div
          key={i}
          className="card-elevated rounded-lg p-5 flex flex-col gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <div>
            <p className="text-xs text-muted-foreground mb-1">{c.title}</p>
            <span className={`font-mono text-[10px] tracking-[0.1em] font-medium ${c.verdictColor}`}>{c.verdict}</span>
          </div>
          <p className="text-[11.5px] text-muted-foreground leading-relaxed">{c.body}</p>
        </motion.div>
      ))}
    </div>
  </>
);

export default ClaimsSectionEn;
