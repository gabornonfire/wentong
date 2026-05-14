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

const ScienceLevelsSectionSk = () => (
  <>
    <SectionHeading num="3" title="Čo hovorí veda? — Hodnotenie podľa úrovní" id="tudomany" />

    <motion.div
      className="bg-gold-subtle border border-gold-subtle rounded-lg p-5 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mb-2 block">
        Kľúčové posolstvo pre odborníkov
      </span>
      <p className="text-sm text-foreground leading-relaxed">
        Každá zo štyroch modalít zariadenia Wentong 1.0 má za sebou <strong>recenzovanú odbornú literatúru</strong>. Infračervená termoterapia a fotobiomodulácia majú desaťročia silných klinických dôkazov. Dôkazy o ionizácii a reflexológii sú reálne, ale závislé od mierky a sčasti zostávajú na predklinickej úrovni.
      </p>
    </motion.div>

    <LevelBlock
      level="A"
      label="Pevne preukázané dôkazy"
      colorClass="text-success"
      entries={[
        { title: "Infračervená termoterapia — vazodilatácia a mikrocirkulácia", body: "Randomizované kontrolované štúdie potvrdzujú účinky FIR na periférnu cirkuláciu, endotelové uvoľňovanie NO, svalovú relaxáciu a redukciu chronickej bolesti.", ref: "(Vatansever & Hamblin, 2012, Photonics & Lasers in Medicine — Harvard/MGH)" },
        { title: "Fotobiomodulácia — svalová regenerácia, protizápalový účinok", body: "Kontrolované štúdie u športovcov potvrdzujú, že červené svetlo 630–660 nm znižuje pozáťažové hladiny kreatínkinázy, DOMS a urýchľuje regeneráciu.", ref: "(Hamblin, 2017, AIMS Biophysics — Harvard)" },
        { title: "Modré svetlo — baktericídny účinok", body: "Modré svetlo 415 nm má dokumentovaný baktericídny účinok na S. aureus, P. acnes a iné patogény v kultúre. Klinické využitie: liečba akné (FDA-schválené protokoly).", ref: "(Dai T., Virulence, 2012)" },
        { title: "Stimulácia chodidla pre cirkuláciu a spánok", body: "Termálna stimulácia chodidla významne zlepšuje periférne meraný prietok krvi a latenciu zaspávania u staršej populácie.", ref: "(Ko & Lee, 2018, J Physiol Anthropol, PMC)" },
      ]}
    />

    <LevelBlock
      level="B"
      label="Skúmané a čiastočne podložené"
      colorClass="text-info"
      entries={[
        { title: "Negatívne ióny a kvalita vzduchu", body: "V štúdiách v uzavretých priestoroch negatívne ióny ukázali zníženie S. aureus o ~95 % a E. coli o ~70 %. Účinnosť pri spotrebiteľských zariadeniach závisí od mierky.", ref: "(Comini a kol., 2021, Microbiology Spectrum, PMC)" },
        { title: "FIR a kĺbový zápal, chronická bolesť", body: "Klinické štúdie uvádzajú pozitívne výsledky pri reumatoidnej artritíde a fibromyalgii — infračervená terapia znížila skóre bolesti.", ref: "(Lin CC a kol., Cardiol Res Pract, 2012)" },
        { title: "Reflexológia a symptomatická úľava", body: "Systematický prehľad (Ernst, Med J Aust, 2009) nenašiel silné dôkazy pre konkrétne ochorenia, ale boli pozorované pozitívne tendencie pre subjektívnu relaxáciu a úľavu od bolesti, najmä v kombinovaných terapiách." },
      ]}
    />

    <LevelBlock
      level="C"
      label="Mechanisticky podložené, bez klinického potvrdenia"
      colorClass="text-warning"
      entries={[
        { title: "Multimodálny synergizmus — kombinovaný účinok štyroch modalít", body: "Neexistuje klinická štúdia o kombinovanom zariadení ako celku. Pre každú jednotlivú modalitu však existujú dôkazy — kombinovaný účinok je pravdepodobne synergický, ale vyžaduje potvrdenie cielenými štúdiami." },
        { title: "Systémový detoxikačný účinok", body: "Mechanisticky podložený zlepšením cirkulácie a lymfatického toku, ale „detoxikácia potením\" je výrazné zjednodušenie. Presnejšia formulácia: „zlepšenie periférnej cirkulácie a lymfatickej drenáže\"." },
      ]}
    />
  </>
);

export default ScienceLevelsSectionSk;
