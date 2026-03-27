import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const effects = [
  { icon: "🌡", title: "Calore Far-Infrared", timing: "Immediato · 30–60 secondi", body: "L'elemento riscaldante riscalda direttamente la pelle e il tessuto della pianta del piede. Provoca vasodilatazione e aumento del flusso capillare — calore percepibile, leggerezza e sollievo dalla fatica in pochi minuti." },
  { icon: "⚡", title: "Stimolazione neurale", timing: "Immediato · segnale neurale", body: "7.200 terminazioni nervose/cm² nella pianta del piede — calore, luce e stimolazione ionica attivano una risposta neurale complessa, seguita dal rilascio di endorfine e serotonina nel cervello." },
  { icon: "💡", title: "Fotobiomodulazione", timing: "Rapido · 2–5 minuti", body: "La luce rossa agisce a livello cellulare — i processi di produzione di ATP e le vie di segnalazione anti-infiammatorie si attivano in pochi minuti." },
  { icon: "🦶", title: "Zone riflesse ed effetto parasimpatico", timing: "Progressivo · 5–15 minuti", body: "La stimolazione plantare attiva il sistema nervoso parasimpatico — rilassamento, riduzione della frequenza cardiaca, diminuzione degli ormoni dello stress. Questo spiega la sensazione di rilassamento su tutto il corpo." },
];

const EffectsSectionIt = () => (
  <>
    <SectionHeading num="6" title="Perché l'effetto si avverte così rapidamente?" id="hatas" />

    <motion.p
      className="text-sm text-muted-foreground leading-relaxed mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      L'effetto rapido ha molteplici meccanismi che si rafforzano reciprocamente e agiscono simultaneamente:
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
        Contesto importante per i professionisti
      </span>
      <p className="text-sm text-muted-foreground leading-[1.7]">
        L'effetto rapido percepito soggettivamente (<strong className="text-foreground font-medium">gambe più leggere, riduzione della tensione muscolare, stato rilassato</strong>) è spiegato principalmente dalla combinazione di termoterapia a infrarossi + stimolazione neurale + rilascio di endorfine. Ciò non significa che i componenti di fotobiomodulazione e ionizzazione non contribuiscano — ma questi sono più associati a effetti a lungo termine e cumulativi.
      </p>
    </motion.div>
  </>
);

export default EffectsSectionIt;
