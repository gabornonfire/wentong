import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const CommunicationSectionEn = () => (
  <>
    <SectionHeading num="5" title="How to Communicate This to a Professional?" id="kommunikacio" />

    <motion.div
      className="card-elevated rounded-lg p-6 md:p-8 border-l-2 border-success/40 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-xs font-mono text-success uppercase tracking-widest mb-3">Recommended communication</p>
      <p className="font-display italic text-foreground text-sm leading-[1.75]">
        "The Wentong 1.0 combines four well-documented biophysical modalities: far-infrared heat therapy, photobiomodulation (red and blue LED), negative ion generation, and plantar stimulation. Decades of peer-reviewed literature support the infrared and photobiomodulation effects — including publications by Harvard and MGH researchers. The device is primarily a combined regeneration and wellness therapy: vasodilation, microcirculation enhancement, muscle relaxation, and antimicrobial surface effects. It is a CE-certified, non-medical wellness device."
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-2 max-[540px]:grid-cols-1 gap-3.5 mb-7"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-elevated rounded-lg p-[18px] border-l-2 border-destructive/40">
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-3 flex items-center gap-1.5">✗ What NOT to say</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          Do not claim the device cures, diagnoses, destroys cancer cells, "detoxifies" in the simplified marketing sense, or is a clinically tested medical device. These are unsubstantiated and legally risky.
        </div>
      </div>
      <div className="card-elevated rounded-lg p-[18px] border-l-2 border-success/40">
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-success mb-3 flex items-center gap-1.5">✓ What you CAN say</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          <ul className="list-none p-0 space-y-1.5">
            <li>✓ "Multimodal far-infrared wellness device"</li>
            <li>✓ "Photobiomodulation with red and blue light"</li>
            <li>✓ "Documented microcirculation improvement"</li>
            <li>✓ "Anti-inflammatory and muscle relaxation effects"</li>
            <li>✓ "CE-certified complementary regeneration device"</li>
            <li>✓ "Plantar stimulation with negative ion air purification"</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </>
);

export default CommunicationSectionEn;
