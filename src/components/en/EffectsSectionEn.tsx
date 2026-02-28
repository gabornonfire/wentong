import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const effects = [
  { icon: "🌡", title: "Far-Infrared heat", timing: "Immediate · 30–60 seconds", body: "The heating element directly warms the skin and tissue of the sole. It causes vasodilation and increased capillary flow — noticeable warmth, lightness, and fatigue relief within minutes." },
  { icon: "⚡", title: "Neural stimulation", timing: "Immediate · neural signal", body: "7,200 nerve endings/cm² in the sole — heat, light, and ionic stimulation triggers a complex neural response, followed by endorphin and serotonin release in the brain." },
  { icon: "💡", title: "Photobiomodulation", timing: "Fast · 2–5 minutes", body: "Red light acts at the cellular level — ATP production processes and anti-inflammatory signaling pathways are initiated within minutes." },
  { icon: "🦶", title: "Reflex zones and parasympathetic effect", timing: "Progressive · 5–15 minutes", body: "Plantar stimulation triggers parasympathetic nervous system activation — relaxation, heart rate reduction, stress hormone decrease. This explains the full-body relaxation sensation." },
];

const EffectsSectionEn = () => (
  <>
    <SectionHeading num="6" title="Why Is the Effect Felt So Quickly?" id="hatas" />

    <motion.p
      className="text-sm text-muted-foreground leading-relaxed mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      The rapid effect has multiple, mutually reinforcing and simultaneously acting mechanisms:
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
        Important context for professionals
      </span>
      <p className="text-sm text-muted-foreground leading-[1.7]">
        The rapid, subjectively experienced effect (<strong className="text-foreground font-medium">lighter legs, reduced muscle tension, relaxed state</strong>) is primarily explained by the combination of infrared heat therapy + neural stimulation + endorphin release. This does not mean that the photobiomodulation and ionization components don't contribute — but these are more associated with longer-term, cumulative effects.
      </p>
    </motion.div>
  </>
);

export default EffectsSectionEn;
