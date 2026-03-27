import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

interface Claim {
  title: string;
  verdict: string;
  verdictColor: string;
  body: string;
}

const claims: Claim[] = [
  { title: "Migliora la microcircolazione", verdict: "✓ VERO", verdictColor: "text-success", body: "Attraverso l'effetto termico FIR e il rilascio di ossido nitrico — questo è l'effetto più supportato dalle evidenze del dispositivo." },
  { title: "Effetto anti-infiammatorio", verdict: "✓ VERO (infrarosso/PBM)", verdictColor: "text-success", body: "La riduzione delle citochine pro-infiammatorie (TNF-α, IL-6) è documentata per FIR e luce rossa." },
  { title: "Rilassamento muscolare immediato", verdict: "✓ VERO", verdictColor: "text-success", body: "Rilassamento termico + stimolazione dei termorecettori + rilascio di endorfine spiegano insieme l'effetto rapido." },
  { title: "Antimicrobico (sul piede)", verdict: "~ PARZIALMENTE VERO", verdictColor: "text-info", body: "La luce blu (415nm) è dimostrata battericida. L'effetto atmosferico dello ionizzatore è reale ma di intensità limitata." },
  { title: "Migliora il sonno", verdict: "~ PARZIALMENTE VERO", verdictColor: "text-info", body: "Il riscaldamento del piede migliora l'induzione del sonno (Ko & Lee, 2018). Anche l'effetto rilassante della ionizzazione può contribuire." },
  { title: "Penetra fino a 10–12 cm", verdict: "~ DA PRECISARE", verdictColor: "text-warning", body: "Penetrazione FIR diretta: 1–3 cm. I 10–12 cm si riferiscono agli effetti circolatori secondari — reali, ma nel contesto preciso." },
  { title: "Attiva le cellule, rigenera", verdict: "~ RICERCATO", verdictColor: "text-info", body: "L'attivazione mitocondriale tramite luce rossa: documentata. \"Attivazione cellulare\" in generale: una semplificazione, ma biologicamente interpretabile." },
  { title: "Guarisce / fa diagnosi", verdict: "✗ NO", verdictColor: "text-destructive", body: "Questo non è un dispositivo medico. Affermazioni che implicano guarigione, diagnosi o terapia antitumorale non sono supportate e legalmente problematiche." },
];

const ClaimsSectionIt = () => (
  <>
    <SectionHeading num="4" title="Valutazione rapida delle affermazioni" />

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

export default ClaimsSectionIt;
