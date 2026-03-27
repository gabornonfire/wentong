import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const CommunicationSectionIt = () => (
  <>
    <SectionHeading num="5" title="Come comunicarlo a un professionista?" id="kommunikacio" />

    <motion.div
      className="card-elevated rounded-lg p-6 md:p-8 border-l-2 border-success/40 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-xs font-mono text-success uppercase tracking-widest mb-3">Comunicazione consigliata</p>
      <p className="font-display italic text-foreground text-sm leading-[1.75]">
        "Il Wentong 1.0 combina quattro modalità biofisiche ben documentate: termoterapia a infrarossi lontani, fotobiomodulazione (LED rosso e blu), generazione di ioni negativi e stimolazione plantare. Decenni di letteratura peer-reviewed supportano gli effetti infrarossi e di fotobiomodulazione — incluse pubblicazioni di ricercatori di Harvard e MGH. Il dispositivo è principalmente una terapia combinata di rigenerazione e benessere: vasodilatazione, miglioramento della microcircolazione, rilassamento muscolare ed effetti antimicrobici di superficie. È un dispositivo benessere certificato CE, non medico."
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
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-3 flex items-center gap-1.5">✗ Cosa NON dire</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          Non affermare che il dispositivo guarisce, diagnostica, distrugge le cellule tumorali, "disintossica" nel senso marketing semplificato, o che è un dispositivo medico testato clinicamente. Queste affermazioni non sono supportate e sono legalmente rischiose.
        </div>
      </div>
      <div className="card-elevated rounded-lg p-[18px] border-l-2 border-success/40">
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-success mb-3 flex items-center gap-1.5">✓ Cosa SI PUÒ dire</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          <ul className="list-none p-0 space-y-1.5">
            <li>✓ "Dispositivo benessere multimodale a infrarossi lontani"</li>
            <li>✓ "Fotobiomodulazione con luce rossa e blu"</li>
            <li>✓ "Miglioramento documentato della microcircolazione"</li>
            <li>✓ "Effetti anti-infiammatori e di rilassamento muscolare"</li>
            <li>✓ "Dispositivo di rigenerazione complementare certificato CE"</li>
            <li>✓ "Stimolazione plantare con purificazione dell'aria a ioni negativi"</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </>
);

export default CommunicationSectionIt;
