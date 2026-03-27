import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, Lightbulb, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import SectionHeading from "@/components/SectionHeading";
import TechBlock from "@/components/TechBlock";
import FlowDiagram from "@/components/FlowDiagram";
import RevealOnScroll from "@/components/RevealOnScroll";
import FootSoleIcon from "@/components/icons/FootSoleIcon";
import ScienceLevelsSectionIt from "@/components/it/ScienceLevelsSectionIt";
import ClaimsSectionIt from "@/components/it/ClaimsSectionIt";
import CommunicationSectionIt from "@/components/it/CommunicationSectionIt";
import EffectsSectionIt from "@/components/it/EffectsSectionIt";
import ReferenceSectionIt from "@/components/it/ReferenceSectionIt";
import firIcon from "@/assets/fir-icon-gold.png";

const IndexIt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ThemeToggle />

      {/* Language switcher */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link to="/" className="text-xs font-mono text-primary hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          🇭🇺 HU
        </Link>
        <Link to="/en" className="text-xs font-mono text-primary hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          🇬🇧 EN
        </Link>
      </div>

      {/* Hero */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
            Foherb / Whieda · Sintesi Scientifica
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-foreground">Il Wentong 1.0</span>
            <br />
            <span className="text-gold-gradient">Qual è la vera scienza dietro?</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Una revisione oggettiva per terapisti, professionisti del fitness e curiosi — quattro tecnologie, un dispositivo, dal comprovato all'emergente
          </p>
          <div className="divider-line max-w-xs mx-auto" />
        </motion.div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {/* Foreword */}
        <RevealOnScroll>
          <div className="my-16 card-elevated rounded-lg p-6 md:p-8 border-l-2 border-gold-subtle">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Prefazione — sull'autore</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Questa sintesi è un'analisi condotta da un assistente AI, basata su letteratura scientifica peer-reviewed. Il suo scopo non è fare affermazioni mediche, ma distinguere le vere basi scientifiche dal linguaggio di marketing — in modo equo, in entrambe le direzioni. Il Wentong 1.0 combina quattro diverse modalità ben studiate in un unico dispositivo — esaminiamo ciascuna separatamente.
            </p>
          </div>
        </RevealOnScroll>

        {/* SECTION 1 */}
        <SectionHeading num="1" title="Cos'è esattamente il Wentong 1.0?" id="eszkoz" />

        <RevealOnScroll>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Il Wentong 1.0 è un dispositivo benessere multimodale professionale e portatile, progettato principalmente per il trattamento del piede e la stimolazione dei punti riflessi del corpo. Il dispositivo combina quattro modalità terapeutiche distinte e sinergiche in un'unica unità compatta:
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex gap-2 flex-wrap mb-7">
            {[
              { label: "Termoterapia FIR", icon: <Waves size={13} strokeWidth={1.5} className="rotate-90" />, cls: "text-accent border-accent/30 bg-accent/10" },
              { label: "Fotobiomodulazione", icon: <Lightbulb size={13} strokeWidth={1.5} />, cls: "text-rose border-rose/30 bg-rose/10" },
              { label: "Ionizzazione", icon: <Atom size={13} strokeWidth={1.5} />, cls: "text-purple border-purple/30 bg-purple-dim" },
              { label: "Riflessologia", icon: <FootSoleIcon size={13} />, cls: "text-primary border-primary/30 bg-primary-dim" },
            ].map((pill) => (
              <span
                key={pill.label}
                className={`inline-flex items-center font-mono text-[9px] tracking-[0.1em] uppercase py-[5px] px-3 rounded-full border ${pill.cls}`}
              >
                <span className="mr-2 inline-flex items-center">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Spec Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-0.5 bg-border rounded-lg overflow-hidden mb-6">
            {[
              { key: "Modalità di radiazione", val: "FIR + luce rossa + luce blu + ioni" },
              { key: "Lunghezza d'onda infrarossa", val: "4–14 µm (medio e vicino FIR)" },
              { key: "Modalità luminose", val: "630–660 nm (rosso) + 415 nm (blu)" },
              { key: "Ionizzazione", val: "Emissione di ioni negativi" },
              { key: "Area target principale", val: "Pianta del piede, zone riflesse, superfici muscolari" },
              { key: "Classificazione", val: "Dispositivo benessere certificato CE" },
            ].map((spec) => (
              <div key={spec.key} className="bg-card p-3 px-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-subtle mb-1">{spec.key}</div>
                <div className="text-[12.5px] text-foreground font-medium">{spec.val}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Flow Diagram */}
        <RevealOnScroll>
          <FlowDiagram
            nodes={[
              { icon: "⚡", label: "Elettrico", sub: "alimentazione", highlight: true },
              { icon: "🌡", label: "Riscaldatore FIR", sub: "4–14 µm" },
              { icon: "💡", label: "Pannello LED", sub: "rosso + blu" },
              { icon: "⚡", label: "Ionizzatore", sub: "ioni negativi" },
              { icon: "🦶", label: "Pianta / tessuto", sub: "area target", highlight: true },
            ]}
          />
        </RevealOnScroll>

        <div className="divider-line my-16" />

        {/* SECTION 2 */}
        <SectionHeading num="2" title="Le quattro tecnologie in profondità" id="technologiak" />

        {/* FIR */}
        <TechBlock
          icon={<Waves size={28} strokeWidth={1.5} className="text-primary rotate-90" />}
          title="Radiazione infrarossa lontana (FIR)"
          subtitle="Far Infrared Radiation · Lunghezza d'onda 4–14 µm"
          gradientColor="hsl(190, 60%, 45%)"
          mechSteps={[
            "01 → Assorbimento FIR nel tessuto → aumento locale della temperatura",
            "02 → Attivazione dei termorecettori (canali TRPV) → segnalazione neurale",
            "03 → Rilascio endoteliale di NO → vasodilatazione, miglioramento della circolazione",
            "04 → Stimolazione della catena respiratoria mitocondriale → aumento ATP",
            "05 → Riduzione delle citochine infiammatorie (TNF-α, IL-6)",
            "06 → Rilassamento muscolare, riduzione del dolore (rilascio β-endorfine)",
          ]}
          badge={{ label: "🟢 Forte letteratura clinica", variant: "success" }}
        >
          <p>La radiazione infrarossa è la parte dello spettro elettromagnetico sotto la luce visibile, percepita dalla pelle umana come calore, ma non limitata alla superficie cutanea. L'intervallo <strong>Far-Infrared (FIR)</strong> (4–14 µm) è particolarmente importante per i sistemi biologici perché coincide precisamente con l'intervallo di lunghezze d'onda che i tessuti biologici ricchi d'acqua assorbono più efficientemente.</p>
          <p><strong>Perché penetra nei tessuti?</strong> La struttura della pelle, del tessuto muscolare e del tessuto connettivo permette alla radiazione di penetrare per diversi centimetri in profondità, dove esercita effetti biofisici termici e non termici diretti. L'intervallo FIR agisce con effetto termico diretto fino a 1–3 cm di profondità, ma il miglioramento della circolazione dalla vasodilatazione secondaria influenza tessuti molto più profondi.</p>
          <p><strong>Attivazione mitocondriale:</strong> La luce infrarossa vicina e media interagisce con la catena respiratoria mitocondriale — specificamente con la citocromo c ossidasi (CcO). Ciò risulta in un aumento della produzione di ATP, riduzione dello stress ossidativo e attivazione delle vie di segnalazione rigenerativa a livello cellulare.</p>
          <p><strong>Effetto sulla microcircolazione:</strong> La radiazione FIR aumenta il rilascio di ossido nitrico (NO) dalle cellule endoteliali. L'NO è il più potente vasodilatatore endogeno conosciuto — rilassa le arterie e i capillari, aumenta la velocità del flusso e migliora l'ossigenazione dei tessuti. Questo meccanismo è stato confermato da studi randomizzati e controllati.</p>
        </TechBlock>

        {/* PBM */}
        <TechBlock
          icon={<Lightbulb size={28} strokeWidth={1.5} className="text-primary" />}
          title="Fotobiomodulazione (PBM)"
          subtitle="Low-Level Light Therapy · 630–660 nm rosso + 415 nm blu"
          gradientColor="hsl(345, 74%, 60%)"
          mechSteps={[
            "🔴 Rosso (660nm): attivazione citocromo c ossidasi → ATP ↑ · ROS ↓ · rigenerazione cellulare ↑",
            "🔵 Blu (415nm): attivazione porfirinica → effetto battericida · riduzione ghiandole sebacee",
          ]}
          mechLabel="Luce rossa vs. blu — meccanismi diversi"
          badges={[
            { label: "🟢 Forte base letteraria", variant: "success" as const },
            { label: "🔵 Uso plantare combinato: preclinico", variant: "info" as const },
          ]}
        >
          <p>La fotobiomodulazione (PBM) è il fenomeno biofisico per cui specifiche lunghezze d'onda di luce a bassa intensità producono effetti biologici senza generazione di calore. <strong>Non si tratta di un effetto termico</strong>, ma di reazioni chimiche indotte dalla luce nelle cellule.</p>
          <p><strong>Luce rossa (630–660 nm) — l'intervallo della rigenerazione:</strong> La luce rossa rientra in uno dei principali picchi di assorbimento dell'enzima citocromo c ossidasi della catena respiratoria mitocondriale. L'enzima assorbe i fotoni, accelerando la catena di trasporto degli elettroni. Il risultato: aumento della sintesi di ATP, riduzione delle specie reattive dell'ossigeno (ROS) e attivazione delle vie di segnalazione pro-rigenerative.</p>
          <p>Le revisioni nel Journal of Photochemistry and Photobiology documentano che la luce rossa a 630–670 nm accelera la guarigione delle ferite, riduce i marcatori di affaticamento muscolare (creatina chinasi) e modera i livelli di citochine infiammatorie negli atleti.</p>
          <p><strong>Luce blu (415 nm) — l'intervallo antimicrobico:</strong> L'intervallo 400–430 nm attiva i cromofori porfirinici nelle membrane cellulari batteriche — in particolare in S. aureus. Le porfirine attivate producono specie reattive dell'ossigeno che danneggiano la parete cellulare e il DNA batterico. Può essere efficace contro ceppi resistenti agli antibiotici.</p>
        </TechBlock>

        {/* ION */}
        <TechBlock
          icon={<Atom size={28} strokeWidth={1.5} className="text-primary" />}
          title="Ionizzazione negativa"
          subtitle="Generazione di ioni negativi · Qualità dell'aria e respirazione"
          gradientColor="hsl(268, 43%, 70%)"
          badge={{ label: "🔵 Effetto documentato, dipendente dalla scala", variant: "info" }}
        >
          <p>Gli ioni dell'aria sono particelle atmosferiche cariche elettricamente. In natura, gli ioni negativi vengono generati vicino alle cascate, nelle foreste attraverso i composti volatili dei pini e durante le scariche elettriche. Nelle città e negli spazi chiusi, la carenza di ioni negativi e l'eccesso di ioni positivi sono tipici.</p>
          <p><strong>Come funziona la ionizzazione dell'aria?</strong> Gli ioni negativi legano elettrostaticamente le particelle sospese nell'aria (polvere, polline, aerosol, batteri). I cluster aggregati, carichi negativamente, si depositano — riducendo l'esposizione respiratoria.</p>
          <p><strong>Effetto microbicida:</strong> In uno studio di Comini et al. (2021, Microbiology Spectrum), un generatore di ioni negativi ha ridotto la concentrazione atmosferica di S. aureus di ~95% e di E. coli di ~70% in ambienti chiusi. Il meccanismo: gli ioni inducono intermedi reattivi dell'ossigeno sulla parete cellulare batterica.</p>
          <p><strong>Effetti respiratori e sull'umore:</strong> Diversi studi hanno trovato tendenze positive per i sintomi respiratori e una qualità respiratoria soggettivamente migliorata. Alcuni studi hanno trovato correlazioni tra alta concentrazione di ioni negativi e metabolismo della serotonina — tuttavia, questi dati rimangono preliminari.</p>
        </TechBlock>

        {/* Contra box for ION */}
        <RevealOnScroll>
          <div className="bg-destructive-dim border border-destructive/25 rounded-lg p-4 px-[18px] -mt-1 mb-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-2 block">
              ⚠ Contesto importante
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              L'efficacia dello ionizzatore negativo è strettamente legata alla concentrazione di ioni generata e alle dimensioni dell'ambiente. Le concentrazioni di ioni dei dispositivi consumer sono tipicamente inferiori a quelle dei generatori industriali utilizzati negli studi clinici. L'effetto è reale e documentato, ma di scala minore.
            </p>
          </div>
        </RevealOnScroll>

        {/* REFLEX */}
        <TechBlock
          icon={<FootSoleIcon size={28} className="text-primary" />}
          title="Stimolazione plantare e riflessologia"
          subtitle="Stimolazione Plantare · Zone Riflesse · Meccanocettori"
          gradientColor="hsl(38, 75%, 55%)"
          mechSteps={[
            "01 → 7.200 terminazioni nervose/cm² nella pianta → risposta neurale sistemica immediata",
            "02 → Vasodilatazione FIR + circolazione plantare migliorata → miglioramento del flusso sanguigno corporeo",
            "03 → Rilascio di endorfine e serotonina → sollievo dal dolore, miglioramento dell'umore",
            "04 → Attivazione del sistema nervoso parasimpatico → rilassamento, riduzione dello stress",
          ]}
          mechLabel="Perché l'effetto si sente in tutto il corpo?"
          badges={[
            { label: "🟡 Meccanismo riflessologico: ricercato, parzialmente supportato", variant: "warning" as const },
            { label: "🟢 Effetto circolatorio plantare: clinicamente confermato", variant: "success" as const },
          ]}
        >
          <p>La pianta del piede è una delle superfici più densamente innervate del corpo umano. Ogni centimetro quadrato contiene circa <strong>7.200 terminazioni nervose</strong> — inclusi meccanocettori, propriocettori e terminazioni nervose libere. Questa densità neurale spiega perché il massaggio del piede innesca una risposta immediata su tutto il corpo.</p>
          <p><strong>Effetto circolatorio nel piede:</strong> Ko e Lee (2018, Journal of Physiological Anthropology, PMC) hanno confermato che la stimolazione termica del piede migliora significativamente il flusso sanguigno misurato perifericamente e riduce la latenza di addormentamento — attraverso la regolazione termica del corpo.</p>
          <p><strong>Il sinergismo della stimolazione combinata:</strong> Nel Wentong 1.0, la termoterapia FIR, la fotobiomodulazione e la ionizzazione si combinano con la stimolazione plantare. La termoterapia dilata e rilassa, la luce attiva a livello mitocondriale, gli ioni agiscono sulle superfici, mentre la stimolazione delle zone riflesse innesca risposte neurali sistemiche.</p>
        </TechBlock>

        <div className="divider-line my-16" />

        <ScienceLevelsSectionIt />

        <div className="divider-line my-16" />

        <ClaimsSectionIt />

        <div className="divider-line my-16" />

        <CommunicationSectionIt />

        <div className="divider-line my-16" />

        <EffectsSectionIt />

        <div className="divider-line my-16" />

        <ReferenceSectionIt />
      </main>
    </div>
  );
};

export default IndexIt;
