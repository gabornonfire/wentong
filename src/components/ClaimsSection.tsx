import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Claim {
  title: string;
  verdict: string;
  verdictColor: string;
  body: string;
}

const claims: Claim[] = [
  { title: "Fokozza a mikrokeringést", verdict: "✓ IGAZ", verdictColor: "text-success", body: "FIR hőhatás és nitrogén-monoxid felszabadulás révén — ez az eszköz legerősebb bizonyítékkal bíró hatása." },
  { title: "Gyulladáscsökkentő hatás", verdict: "✓ IGAZ (infravörös/PBM)", verdictColor: "text-success", body: "Pro-inflammatorikus citokinek (TNF-α, IL-6) csökkentése dokumentált FIR és vörös fény esetén." },
  { title: "Azonnali izomrelaxáció", verdict: "✓ IGAZ", verdictColor: "text-success", body: "Termikus relaxáció + hőreceptor-stimuláció + endorfin felszabadulás együttesen magyarázzák a gyors hatást." },
  { title: "Antimikrobiális (talpon)", verdict: "~ RÉSZBEN IGAZ", verdictColor: "text-info", body: "Kék fény (415nm) bizonyítottan baktériumölő. Az ionizátor légköri hatása valós, de korlátozott intenzitású." },
  { title: "Javítja az alvást", verdict: "~ RÉSZBEN IGAZ", verdictColor: "text-info", body: "Lábfej-melegítés javítja az alvás-indukciót (Ko & Lee, 2018). Az ionizáció relaxáló hatása is hozzájárulhat." },
  { title: "10–12 cm mélységig hat", verdict: "~ PONTOSÍTANDÓ", verdictColor: "text-warning", body: "Közvetlen FIR penetráció: 1–3 cm. A 10–12 cm a másodlagos keringési hatásra vonatkozik — valódi, de pontos keretek közt." },
  { title: "Sejteket aktivál, regenerál", verdict: "~ KUTATOTT", verdictColor: "text-info", body: 'Mitokondriális aktiváció vörös fény által: dokumentált. „Sejtek aktiválása" általánosan: leegyszerűsítés, de biológiailag interpretálható.' },
  { title: "Gyógyít / diagnózist állít fel", verdict: "✗ NEM", verdictColor: "text-destructive", body: "Ez nem orvosi eszköz. Gyógyítást, diagnózist, rákterápiát implikáló állítások nem igazoltak és jogilag problémásak." },
];

const ClaimsSection = () => (
  <>
    <SectionHeading num="4" title="Állítások gyors értékelése" />

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

export default ClaimsSection;
