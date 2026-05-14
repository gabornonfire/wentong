import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

interface Claim {
  title: string;
  verdict: string;
  verdictColor: string;
  body: string;
}

const claims: Claim[] = [
  { title: "Zlepšuje mikrocirkuláciu", verdict: "✓ PRAVDA", verdictColor: "text-success", body: "Prostredníctvom tepelného účinku FIR a uvoľňovania oxidu dusnatého — toto je najlepšie podložený účinok zariadenia." },
  { title: "Protizápalový účinok", verdict: "✓ PRAVDA (infračervené/PBM)", verdictColor: "text-success", body: "Zníženie prozápalových cytokínov (TNF-α, IL-6) je dokumentované pre FIR a červené svetlo." },
  { title: "Okamžitá svalová relaxácia", verdict: "✓ PRAVDA", verdictColor: "text-success", body: "Termická relaxácia + stimulácia termoreceptorov + uvoľňovanie endorfínov spolu vysvetľujú rýchly účinok." },
  { title: "Antimikrobiálne (na chodidle)", verdict: "~ ČIASTOČNE PRAVDA", verdictColor: "text-info", body: "Modré svetlo (415nm) je preukázateľne baktericídne. Atmosférický účinok ionizátora je reálny, ale obmedzenej intenzity." },
  { title: "Zlepšuje spánok", verdict: "~ ČIASTOČNE PRAVDA", verdictColor: "text-info", body: "Zahriatie chodidla zlepšuje indukciu spánku (Ko & Lee, 2018). Relaxačný účinok ionizácie môže tiež prispieť." },
  { title: "Preniká do hĺbky 10–12 cm", verdict: "~ NA SPRESNENIE", verdictColor: "text-warning", body: "Priama penetrácia FIR: 1–3 cm. 10–12 cm sa vzťahuje na sekundárne cirkulačné účinky — reálne, ale v presnom kontexte." },
  { title: "Aktivuje bunky, regeneruje", verdict: "~ SKÚMANÉ", verdictColor: "text-info", body: "Mitochondriálna aktivácia červeným svetlom: dokumentovaná. „Aktivácia buniek\" všeobecne: zjednodušenie, ale biologicky interpretovateľné." },
  { title: "Lieči / stanovuje diagnózu", verdict: "✗ NIE", verdictColor: "text-destructive", body: "Toto nie je zdravotnícka pomôcka. Tvrdenia implikujúce liečbu, diagnózu alebo onkologickú terapiu nie sú podložené a sú právne problematické." },
];

const ClaimsSectionSk = () => (
  <>
    <SectionHeading num="4" title="Rýchle hodnotenie tvrdení" />

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

export default ClaimsSectionSk;
