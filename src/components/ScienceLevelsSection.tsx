import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

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
  A: { dot: "bg-success/10 text-success", border: "border-success/20" },
  B: { dot: "bg-info/10 text-info", border: "border-info/20" },
  C: { dot: "bg-warning/10 text-warning", border: "border-warning/20" },
};

const LevelBlock = ({ level, label, colorClass, entries }: LevelBlockProps) => (
  <div className="mb-8">
    <div className="font-display text-[1.05rem] font-semibold mb-4 flex items-center gap-2.5">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-medium ${levelStyles[level].dot}`}>
        {level}
      </div>
      <span className={colorClass}>{label}</span>
    </div>
    <div className={`pl-5 border-l ${levelStyles[level].border} flex flex-col gap-4`}>
      {entries.map((e, i) => (
        <div key={i}>
          <div className="text-[13px] font-medium text-foreground mb-1">{e.title}</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            {e.body}
            {e.ref && <span className="italic"> {e.ref}</span>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScienceLevelsSection = () => (
  <>
    <RevealOnScroll>
      <SectionHeading num="3" title="Mit mond a tudomány? — Szintenkénti áttekintés" id="tudomany" />
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="bg-accent/10 border border-accent/25 rounded-lg p-5 px-[22px] mb-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-2 block">
          A legfontosabb üzenet szakemberek számára
        </span>
        <p className="text-[13px] text-muted-foreground leading-[1.7]">
          A Wentong 1.0 négy modalitása közül <strong className="text-foreground font-medium">mindegyikre létezik peer-reviewed irodalom</strong>. Az infravörös hőterápiára és a fotobiomodulációra évtizedes, erős klinikai bizonyítékbázis áll rendelkezésre. Az ionizáció és a reflexterápia esetén a bizonyítékok valósak, de skálafüggők, illetve részben preklinkiai szinten maradnak.
        </p>
      </div>
    </RevealOnScroll>

    <RevealOnScroll>
      <LevelBlock
        level="A"
        label="Ami szilárdan bizonyított"
        colorClass="text-success"
        entries={[
          { title: "Infravörös hőterápia — értágítás és mikrokeringés", body: "Randomizált, kontrollos vizsgálatok igazolják FIR hatását a perifériás keringésre, az endotéliális NO-felszabadulásra, az izomlazításra és a krónikus fájdalom csökkentésére.", ref: "(Vatansever & Hamblin, 2012, Photonics & Lasers in Medicine — Harvard/MGH)" },
          { title: "Fotobiomoduláció — izomregeneráció, gyulladáscsökkentés", body: "Sportolókban végzett kontrollált vizsgálatok igazolják, hogy 630–660 nm vörös fény csökkenti az edzés utáni kreatin-kináz szintet, a DOMS-t, és gyorsítja a regenerációt.", ref: "(Hamblin, 2017, AIMS Biophysics — Harvard)" },
          { title: "Kék fény — baktériumölő hatás", body: "A 415 nm-es kék fény dokumentáltan elpusztítja az S. aureus, P. acnes és más kórokozók tenyészeteit. Klinikai alkalmazás: akné-kezelés (FDA-jóváhagyott protokollok).", ref: "(Dai T., Virulence, 2012)" },
          { title: "Talpstimulációs keringésfokozás és alvás", body: "Lábfej termikus stimulálása szignifikánsan javítja a perifériás véráramlást és az alvás-indukcióját idős populációban.", ref: "(Ko & Lee, 2018, J Physiol Anthropol, PMC)" },
        ]}
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <LevelBlock
        level="B"
        label="Amit a tudomány kutat és részben alátámaszt"
        colorClass="text-info"
        entries={[
          { title: "Negatív ionok és levegőminőség", body: "Zárt teres vizsgálatokban negatív ionok ~95%-os S. aureus és ~70%-os E. coli redukcióját mutatták. Hatékonyság fogyasztói eszközben: skálahatástól függ.", ref: "(Comini et al., 2021, Microbiology Spectrum, PMC)" },
          { title: "FIR és ízületi gyulladás, krónikus fájdalom", body: "Klinikai vizsgálatok pozitív eredményeket közölnek rheumatoid arthritis és fibromyalgia esetén — az infravörös terápia fájdalom-pontszámokat csökkentett.", ref: "(Lin CC et al., Cardiol Res Pract, 2012)" },
          { title: "Reflexológia és tüneti megkönnyebbülés", body: "Egy szisztematikus áttekintés (Ernst, Med J Aust, 2009) nem talált erős bizonyítékot specifikus betegségekre, de szubjektív relaxáció és fájdalomcsillapítás tekintetében pozitív tendenciák mutatkoznak, különösen kombinált terápiákban." },
        ]}
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <LevelBlock
        level="C"
        label="Ami indokolt, de klinikai igazolás nélkül"
        colorClass="text-warning"
        entries={[
          { title: "Multimodális szinergizmus — a négy modalitás kombinált hatása", body: "Az összetett eszközre mint egységre vonatkozó klinikai vizsgálat nem áll rendelkezésre. Az egyedi modalitásokra viszont igen — a kombinált hatás valószínűleg szinergista, de ezt specifikus vizsgálatnak kellene alátámasztania." },
          { title: "Szisztémás méregtelenítő hatás", body: 'A fokozott keringés és nyirokáramlás révén mechanisztikailag indokolt, de az „izzadással méregtelenítés" fogalma erősen leegyszerűsített. Precízebb megfogalmazás: „fokozott perifériás keringés és nyirokdrainage".' },
        ]}
      />
    </RevealOnScroll>
  </>
);

export default ScienceLevelsSection;
