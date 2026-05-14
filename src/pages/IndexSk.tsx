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
import ScienceLevelsSectionSk from "@/components/sk/ScienceLevelsSectionSk";
import ClaimsSectionSk from "@/components/sk/ClaimsSectionSk";
import CommunicationSectionSk from "@/components/sk/CommunicationSectionSk";
import EffectsSectionSk from "@/components/sk/EffectsSectionSk";
import ReferenceSectionSk from "@/components/sk/ReferenceSectionSk";

const IndexSk = () => {
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
        <Link to="/it" className="text-xs font-mono text-primary hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          🇮🇹 IT
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
            Foherb / Whieda · Vedecké zhrnutie
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-foreground">Wentong 1.0</span>
            <br />
            <span className="text-gold-gradient">Aká je skutočná veda za tým?</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Objektívny prehľad pre terapeutov, fitness profesionálov a zvedavých — štyri technológie, jedno zariadenie, od preukázaného po vznikajúce
          </p>
          <div className="divider-line max-w-xs mx-auto" />
        </motion.div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {/* Foreword */}
        <RevealOnScroll>
          <div className="my-16 card-elevated rounded-lg p-6 md:p-8 border-l-2 border-gold-subtle">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Predslov — o autorovi</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Toto zhrnutie je analýza vykonaná AI asistentom, založená na recenzovanej vedeckej literatúre. Jeho cieľom nie je robiť lekárske tvrdenia, ale odlíšiť skutočné vedecké základy od marketingového jazyka — spravodlivo, v oboch smeroch. Wentong 1.0 spája štyri rôzne dobre preskúmané modality v jedinom zariadení — každú z nich skúmame samostatne.
            </p>
          </div>
        </RevealOnScroll>

        {/* SECTION 1 */}
        <SectionHeading num="1" title="Čo presne je Wentong 1.0?" id="eszkoz" />

        <RevealOnScroll>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Wentong 1.0 je profesionálne, prenosné multimodálne wellness zariadenie navrhnuté predovšetkým na ošetrenie chodidla a stimuláciu reflexných bodov tela. Zariadenie spája štyri odlišné, vzájomne sa posilňujúce terapeutické modality v jednej kompaktnej jednotke:
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex gap-2 flex-wrap mb-7">
            {[
              { label: "FIR termoterapia", icon: <Waves size={13} strokeWidth={1.5} className="rotate-90" />, cls: "text-accent border-accent/30 bg-accent/10" },
              { label: "Fotobiomodulácia", icon: <Lightbulb size={13} strokeWidth={1.5} />, cls: "text-rose border-rose/30 bg-rose/10" },
              { label: "Ionizácia", icon: <Atom size={13} strokeWidth={1.5} />, cls: "text-purple border-purple/30 bg-purple-dim" },
              { label: "Reflexológia", icon: <FootSoleIcon size={13} />, cls: "text-primary border-primary/30 bg-primary-dim" },
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
              { key: "Modality žiarenia", val: "FIR + červené svetlo + modré svetlo + ióny" },
              { key: "Vlnová dĺžka infračerveného", val: "4–14 µm (stredné a blízke FIR)" },
              { key: "Svetelné modality", val: "630–660 nm (červené) + 415 nm (modré)" },
              { key: "Ionizácia", val: "Emisia negatívnych iónov" },
              { key: "Hlavná cieľová oblasť", val: "Chodidlo, reflexné zóny, povrchy svalov" },
              { key: "Klasifikácia", val: "Wellness zariadenie s certifikátom CE" },
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
              { icon: "⚡", label: "Elektrický", sub: "zdroj napájania", highlight: true },
              { icon: "🌡", label: "FIR ohrievač", sub: "4–14 µm" },
              { icon: "💡", label: "LED panel", sub: "červené + modré" },
              { icon: "⚡", label: "Ionizátor", sub: "negatívne ióny" },
              { icon: "🦶", label: "Chodidlo / tkanivo", sub: "cieľová oblasť", highlight: true },
            ]}
          />
        </RevealOnScroll>

        <div className="divider-line my-16" />

        {/* SECTION 2 */}
        <SectionHeading num="2" title="Štyri technológie do hĺbky" id="technologiak" />

        {/* FIR */}
        <TechBlock
          icon={<Waves size={28} strokeWidth={1.5} className="text-primary rotate-90" />}
          title="Vzdialené infračervené žiarenie (FIR)"
          subtitle="Far Infrared Radiation · Vlnová dĺžka 4–14 µm"
          gradientColor="hsl(190, 60%, 45%)"
          mechSteps={[
            "01 → Absorpcia FIR v tkanive → lokálne zvýšenie teploty",
            "02 → Aktivácia termoreceptorov (TRPV kanály) → nervová signalizácia",
            "03 → Endotelové uvoľnenie NO → vazodilatácia, zlepšenie cirkulácie",
            "04 → Stimulácia mitochondriálneho dýchacieho reťazca → zvýšené ATP",
            "05 → Zníženie zápalových cytokínov (TNF-α, IL-6)",
            "06 → Svalová relaxácia, redukcia bolesti (uvoľnenie β-endorfínov)",
          ]}
          badge={{ label: "🟢 Silná klinická literatúra", variant: "success" }}
        >
          <p>Infračervené žiarenie je časť elektromagnetického spektra pod viditeľným svetlom, vnímaná ľudskou pokožkou ako teplo, ale neobmedzená na povrch kože. Rozsah <strong>Far-Infrared (FIR)</strong> (4–14 µm) je obzvlášť dôležitý pre biologické systémy, pretože sa presne zhoduje s rozsahom vlnových dĺžok, ktoré biologické tkanivá bohaté na vodu absorbujú najefektívnejšie.</p>
          <p><strong>Prečo preniká do tkaniva?</strong> Štruktúra kože, svalového a spojivového tkaniva umožňuje žiareniu prenikať do hĺbky niekoľkých centimetrov, kde uplatňuje priame termálne aj netermálne biofyzikálne účinky. Rozsah FIR pôsobí priamym tepelným účinkom do hĺbky 1–3 cm, ale zlepšenie cirkulácie z druhotnej vazodilatácie ovplyvňuje oveľa hlbšie tkanivá.</p>
          <p><strong>Mitochondriálna aktivácia:</strong> Blízke a stredné infračervené svetlo interaguje s mitochondriálnym dýchacím reťazcom — konkrétne s cytochróm c oxidázou (CcO). To vedie k zvýšenej tvorbe ATP, zníženému oxidatívnemu stresu a aktivácii regeneračných signálnych dráh na bunkovej úrovni.</p>
          <p><strong>Účinok na mikrocirkuláciu:</strong> Žiarenie FIR zvyšuje uvoľňovanie oxidu dusnatého (NO) z endotelových buniek. NO je najúčinnejší známy endogénny vazodilatátor — uvoľňuje artérie a kapiláry, zvyšuje rýchlosť toku a zlepšuje okysličenie tkanív. Tento mechanizmus bol potvrdený randomizovanými kontrolovanými štúdiami.</p>
        </TechBlock>

        {/* PBM */}
        <TechBlock
          icon={<Lightbulb size={28} strokeWidth={1.5} className="text-primary" />}
          title="Fotobiomodulácia (PBM)"
          subtitle="Low-Level Light Therapy · 630–660 nm červené + 415 nm modré"
          gradientColor="hsl(345, 74%, 60%)"
          mechSteps={[
            "🔴 Červené (660nm): aktivácia cytochróm c oxidázy → ATP ↑ · ROS ↓ · regenerácia buniek ↑",
            "🔵 Modré (415nm): aktivácia porfyrínov → baktericídny účinok · zníženie mazových žliaz",
          ]}
          mechLabel="Červené vs. modré svetlo — rôzne mechanizmy"
          badges={[
            { label: "🟢 Silný literárny základ", variant: "success" as const },
            { label: "🔵 Kombinované plantárne použitie: predklinické", variant: "info" as const },
          ]}
        >
          <p>Fotobiomodulácia (PBM) je biofyzikálny jav, pri ktorom konkrétne vlnové dĺžky svetla nízkej intenzity vyvolávajú biologické účinky bez tvorby tepla. <strong>Nejde o termálny účinok</strong>, ale o chemické reakcie v bunkách indukované svetlom.</p>
          <p><strong>Červené svetlo (630–660 nm) — rozsah regenerácie:</strong> Červené svetlo spadá do jedného z hlavných absorpčných vrcholov enzýmu cytochróm c oxidázy mitochondriálneho dýchacieho reťazca. Enzým absorbuje fotóny, čím urýchľuje elektrónový transportný reťazec. Výsledok: zvýšená syntéza ATP, znížené reaktívne formy kyslíka (ROS) a aktivácia pro-regeneračných signálnych dráh.</p>
          <p>Prehľady v Journal of Photochemistry and Photobiology dokumentujú, že červené svetlo 630–670 nm urýchľuje hojenie rán, znižuje markery svalovej únavy (kreatínkináza) a zmierňuje hladiny zápalových cytokínov u športovcov.</p>
          <p><strong>Modré svetlo (415 nm) — antimikrobiálny rozsah:</strong> Rozsah 400–430 nm aktivuje porfyrínové chromofóry v bunkových membránach baktérií — najmä u S. aureus. Aktivované porfyríny produkujú reaktívne formy kyslíka, ktoré poškodzujú bunkovú stenu a DNA baktérií. Môže byť účinné aj proti kmeňom rezistentným na antibiotiká.</p>
        </TechBlock>

        {/* ION */}
        <TechBlock
          icon={<Atom size={28} strokeWidth={1.5} className="text-primary" />}
          title="Negatívna ionizácia"
          subtitle="Generovanie negatívnych iónov · Kvalita vzduchu a dýchanie"
          gradientColor="hsl(268, 43%, 70%)"
          badge={{ label: "🔵 Dokumentovaný účinok závislý od mierky", variant: "info" }}
        >
          <p>Vzdušné ióny sú elektricky nabité atmosférické častice. V prírode vznikajú negatívne ióny v blízkosti vodopádov, v lesoch prostredníctvom prchavých zlúčenín borovíc a počas elektrických výbojov. V mestách a uzavretých priestoroch je typický nedostatok negatívnych iónov a prebytok pozitívnych iónov.</p>
          <p><strong>Ako funguje ionizácia vzduchu?</strong> Negatívne ióny elektrostaticky viažu častice unášané vzduchom (prach, peľ, aerosóly, baktérie). Agregované, negatívne nabité klastre sa usadzujú — čím sa znižuje expozícia dýchacích ciest.</p>
          <p><strong>Mikrobicídny účinok:</strong> V štúdii Comini a kol. (2021, Microbiology Spectrum) generátor negatívnych iónov znížil atmosférickú koncentráciu S. aureus o ~95 % a E. coli o ~70 % v uzavretých priestoroch. Mechanizmus: ióny indukujú reaktívne kyslíkové medziprodukty na bunkovej stene baktérií.</p>
          <p><strong>Účinky na dýchanie a náladu:</strong> Niekoľko štúdií zistilo pozitívne tendencie pri respiračných symptómoch a subjektívne zlepšenú kvalitu dýchania. Niektoré štúdie zistili korelácie medzi vysokou koncentráciou negatívnych iónov a metabolizmom serotonínu — tieto údaje však zostávajú predbežné.</p>
        </TechBlock>

        {/* Contra box for ION */}
        <RevealOnScroll>
          <div className="bg-destructive-dim border border-destructive/25 rounded-lg p-4 px-[18px] -mt-1 mb-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-2 block">
              ⚠ Dôležitý kontext
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Účinnosť negatívneho ionizátora úzko súvisí s vytvorenou koncentráciou iónov a veľkosťou priestoru. Koncentrácie iónov u spotrebiteľských zariadení sú zvyčajne nižšie ako u priemyselných generátorov používaných v klinických štúdiách. Účinok je reálny a dokumentovaný, ale menšieho rozsahu.
            </p>
          </div>
        </RevealOnScroll>

        {/* REFLEX */}
        <TechBlock
          icon={<FootSoleIcon size={28} className="text-primary" />}
          title="Stimulácia chodidla a reflexológia"
          subtitle="Plantar Stimulation · Reflexné zóny · Mechanoreceptory"
          gradientColor="hsl(38, 75%, 55%)"
          mechSteps={[
            "01 → 7 200 nervových zakončení/cm² na chodidle → okamžitá systémová nervová odpoveď",
            "02 → FIR vazodilatácia + zlepšená cirkulácia chodidla → zlepšenie celotelového prietoku krvi",
            "03 → Uvoľnenie endorfínov a serotonínu → úľava od bolesti, zlepšenie nálady",
            "04 → Aktivácia parasympatického nervového systému → relaxácia, zníženie stresu",
          ]}
          mechLabel="Prečo je účinok cítiť v celom tele?"
          badges={[
            { label: "🟡 Mechanizmus reflexológie: skúmaný, čiastočne podporený", variant: "warning" as const },
            { label: "🟢 Účinok na cirkuláciu chodidla: klinicky potvrdený", variant: "success" as const },
          ]}
        >
          <p>Chodidlo je jedným z najhustejšie inervovaných povrchov ľudského tela. Každý štvorcový centimeter obsahuje približne <strong>7 200 nervových zakončení</strong> — vrátane mechanoreceptorov, proprioreceptorov a voľných nervových zakončení. Táto nervová hustota vysvetľuje, prečo masáž chodidla spúšťa okamžitú celotelovú odpoveď.</p>
          <p><strong>Cirkulačný účinok v chodidle:</strong> Ko a Lee (2018, Journal of Physiological Anthropology, PMC) potvrdili, že termálna stimulácia chodidla významne zlepšuje periférne meraný prietok krvi a skracuje latenciu zaspávania — prostredníctvom termálnej regulácie tela.</p>
          <p><strong>Synergizmus kombinovanej stimulácie:</strong> Vo Wentong 1.0 sa FIR tepelná terapia, fotobiomodulácia a ionizácia kombinujú so stimuláciou chodidla. Tepelná terapia rozširuje a uvoľňuje, svetlo aktivuje mitochondriálne, ióny pôsobia na povrchu, zatiaľ čo stimulácia reflexných zón spúšťa systémové nervové odpovede.</p>
        </TechBlock>

        <div className="divider-line my-16" />

        <ScienceLevelsSectionSk />

        <div className="divider-line my-16" />

        <ClaimsSectionSk />

        <div className="divider-line my-16" />

        <CommunicationSectionSk />

        <div className="divider-line my-16" />

        <EffectsSectionSk />

        <div className="divider-line my-16" />

        <ReferenceSectionSk />
      </main>
    </div>
  );
};

export default IndexSk;
