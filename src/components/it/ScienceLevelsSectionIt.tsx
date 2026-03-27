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

const ScienceLevelsSectionIt = () => (
  <>
    <SectionHeading num="3" title="Cosa dice la scienza? — Revisione per livelli" id="tudomany" />

    <motion.div
      className="bg-gold-subtle border border-gold-subtle rounded-lg p-5 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mb-2 block">
        Il messaggio chiave per i professionisti
      </span>
      <p className="text-sm text-foreground leading-relaxed">
        Ciascuna delle quattro modalità del Wentong 1.0 ha <strong>letteratura peer-reviewed</strong> alle spalle. La termoterapia a infrarossi e la fotobiomodulazione dispongono di decenni di solide evidenze cliniche. Le prove sull'ionizzazione e la riflessologia sono reali ma dipendenti dalla scala, e in parte rimangono a livello preclinico.
      </p>
    </motion.div>

    <LevelBlock
      level="A"
      label="Evidenze solidamente dimostrate"
      colorClass="text-success"
      entries={[
        { title: "Termoterapia a infrarossi — vasodilatazione e microcircolazione", body: "Studi randomizzati e controllati confermano gli effetti FIR sulla circolazione periferica, sul rilascio endoteliale di NO, sul rilassamento muscolare e sulla riduzione del dolore cronico.", ref: "(Vatansever & Hamblin, 2012, Photonics & Lasers in Medicine — Harvard/MGH)" },
        { title: "Fotobiomodulazione — recupero muscolare, anti-infiammazione", body: "Studi controllati sugli atleti confermano che la luce rossa a 630–660 nm riduce i livelli post-esercizio di creatina chinasi, i DOMS e accelera il recupero.", ref: "(Hamblin, 2017, AIMS Biophysics — Harvard)" },
        { title: "Luce blu — effetto battericida", body: "La luce blu a 415 nm è documentata nell'uccisione di S. aureus, P. acnes e altri patogeni in coltura. Applicazione clinica: trattamento dell'acne (protocolli approvati FDA).", ref: "(Dai T., Virulence, 2012)" },
        { title: "Stimolazione plantare per circolazione e sonno", body: "La stimolazione termica del piede migliora significativamente il flusso sanguigno periferico e la latenza di addormentamento nelle popolazioni anziane.", ref: "(Ko & Lee, 2018, J Physiol Anthropol, PMC)" },
      ]}
    />

    <LevelBlock
      level="B"
      label="Indagato e parzialmente supportato"
      colorClass="text-info"
      entries={[
        { title: "Ioni negativi e qualità dell'aria", body: "In studi in ambienti chiusi, gli ioni negativi hanno mostrato una riduzione di ~95% di S. aureus e ~70% di E. coli. L'efficacia nei dispositivi consumer dipende dalla scala.", ref: "(Comini et al., 2021, Microbiology Spectrum, PMC)" },
        { title: "FIR e infiammazione articolare, dolore cronico", body: "Studi clinici riportano risultati positivi per l'artrite reumatoide e la fibromialgia — la terapia a infrarossi ha ridotto i punteggi del dolore.", ref: "(Lin CC et al., Cardiol Res Pract, 2012)" },
        { title: "Riflessologia e sollievo sintomatico", body: "Una revisione sistematica (Ernst, Med J Aust, 2009) non ha trovato evidenze forti per malattie specifiche, ma sono state osservate tendenze positive per il rilassamento soggettivo e il sollievo dal dolore, in particolare nelle terapie combinate." },
      ]}
    />

    <LevelBlock
      level="C"
      label="Giustificato ma senza conferma clinica"
      colorClass="text-warning"
      entries={[
        { title: "Sinergismo multimodale — effetto combinato delle quattro modalità", body: "Non esiste uno studio clinico sul dispositivo combinato come unità. Tuttavia, esistono evidenze per ciascuna singola modalità — l'effetto combinato è probabilmente sinergico, ma richiede una conferma da studi specifici." },
        { title: "Effetto disintossicante sistemico", body: "Giustificato meccanicamente attraverso il miglioramento della circolazione e del flusso linfatico, ma la \"disintossicazione attraverso la sudorazione\" è una forte semplificazione. Formulazione più precisa: \"miglioramento della circolazione periferica e del drenaggio linfatico\"." },
      ]}
    />
  </>
);

export default ScienceLevelsSectionIt;
