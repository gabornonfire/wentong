import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import StatusBadge from "@/components/StatusBadge";
import TechBlock from "@/components/TechBlock";
import FlowDiagram from "@/components/FlowDiagram";
import EvidenceTable from "@/components/EvidenceTable";
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <main className="max-w-[760px] mx-auto px-6 pb-32">
        {/* Foreword */}
        <RevealOnScroll>
          <div className="bg-card-elevated border border-border border-l-2 border-l-accent/25 rounded-lg p-5 px-6 mt-14">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mb-2 block">
              Előszó
            </span>
            <p className="text-[12.5px] text-muted-foreground leading-[1.75]">
              Ez a dokumentum a Wentong 1.0 készülék mögötti négy alaptechnológia — FIR sugárzás, fotobiomoduláció,
              negatív ionterápia és reflexológia — aktuális tudományos irodalmának összefoglalása. Célja, hogy
              tényalapú tájékoztatást nyújtson a szakemberek és felhasználók számára.
            </p>
          </div>
        </RevealOnScroll>

        {/* Section 1: Overview */}
        <RevealOnScroll>
          <SectionHeading num="01" title="Áttekintés és működési elv" id="section-1" />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-card border border-border rounded-lg p-5 mb-5">
            <p className="text-[13px] text-muted-foreground leading-[1.75]">
              A Wentong 1.0 egy <strong className="text-foreground font-medium">többkomponensű wellness eszköz</strong>, amely négy, egymást kiegészítő fizikai modalitást
              egyesít egyetlen lábra helyezhető platformban. A rendszer alapelve a szinergikus hatás: az egyes
              technológiák önmagukban is dokumentált biológiai válaszokat váltanak ki, kombinációjuk azonban
              potenciálisan fokozott és kiterjedtebb hatást eredményez.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <FlowDiagram
            nodes={[
              { icon: "🔴", label: "FIR", sub: "Hősugárzás" },
              { icon: "💡", label: "PBM", sub: "Fototerápia", highlight: true },
              { icon: "⚡", label: "ION", sub: "Negatív ionok" },
              { icon: "🦶", label: "Reflex", sub: "Nyomáspont" },
            ]}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-accent-dim border border-accent/25 rounded-lg p-5 px-5.5 mb-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-2 block">
              Kulcs koncepció
            </span>
            <p className="text-[13px] text-muted-foreground leading-[1.7]">
              A négy technológia <strong className="text-foreground font-medium">egyidejű alkalmazása</strong> nem csupán additív: a FIR által
              megnövelt szöveti perfúzió elősegíti a PBM fotonok mélyebb penetrációját, míg a reflexológiai
              stimuláció fokozza a helyi keringést, tovább javítva a többi modalitás hatékonyságát.
            </p>
          </div>
        </RevealOnScroll>

        {/* Spec Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-0.5 bg-border rounded-lg overflow-hidden mb-6">
            {[
              { key: "Típus", val: "Többfunkciós wellness eszköz" },
              { key: "Célterület", val: "Talp és alsó végtag" },
              { key: "Technológiák", val: "4 integrált modalitás" },
              { key: "Használat", val: "Napi 30–60 perc" },
            ].map((spec) => (
              <div key={spec.key} className="bg-card p-3 px-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-subtle mb-1">{spec.key}</div>
                <div className="text-[12.5px] text-foreground font-medium">{spec.val}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Section 2: Technologies */}
        <RevealOnScroll>
          <SectionHeading num="02" title="Technológiai háttér" id="section-2" />
        </RevealOnScroll>

        <RevealOnScroll>
          <TechBlock
            icon="🔴"
            title="Távol-infravörös sugárzás"
            subtitle="Far Infrared Radiation · FIR"
            gradientColor="hsl(189, 100%, 39.6%)"
            mechSteps={[
              "FIR fotonok elnyelődése a szövetekben (3–12 μm)",
              "Vízmolekulák rezgési energiájának növekedése",
              "Lokális hőmérséklet-emelkedés → értágulat",
              "Fokozott mikrokeringés és szöveti oxigenizáció",
            ]}
          >
            <p>
              A <strong>távol-infravörös sugárzás</strong> (3–100 μm, jellemzően 4–14 μm terápiás sáv) nem-ionizáló
              elektromágneses energia, amely a vízmolekulák rezonáns rezgési frekvenciájával hat. A szövetbe hatolva
              hőt generál, amely értágulatot és fokozott keringést eredményez.
            </p>
            <p>
              Szisztematikus áttekintések igazolják a FIR kedvező hatását a <strong>kardiovaszkuláris funkciókra</strong>,
              krónikus fájdalomra és a szöveti regenerációra. Vatansever & Bhore (2019) meta-analízise szignifikáns
              javulást mutatott ki az endothel funkcióban és a perifériás keringésben.
            </p>
          </TechBlock>
        </RevealOnScroll>

        <RevealOnScroll>
          <TechBlock
            icon="💡"
            title="Fotobiomoduláció"
            subtitle="Photobiomodulation · PBM / LLLT"
            gradientColor="hsl(345, 74%, 60%)"
            mechSteps={[
              "Fotonok abszorpciója a citokróm c oxidáz által",
              "Mitokondriális elektrontranszport-lánc aktiválása",
              "ATP-szintézis fokozódása",
              "ROS/NO szignálmolekulák felszabadulása → génexpresszió moduláció",
            ]}
          >
            <p>
              A <strong>fotobiomoduláció</strong> alacsony intenzitású vörös (620–700 nm) és közeli infravörös
              (700–1100 nm) fényt alkalmaz. A fotonokat elsősorban a <strong>citokróm c oxidáz</strong> — a mitokondriális
              légzési lánc IV. komplexe — nyeli el, ami az ATP-termelés fokozódásához vezet.
            </p>
            <p>
              Hamblin (2017) átfogó review-ja szerint a PBM <strong>gyulladáscsökkentő</strong>, szöveti regenerációt
              serkentő és fájdalomcsillapító hatású. A bifázisos dózis-válasz görbe miatt a pontos paraméterezés
              kulcsfontosságú.
            </p>
          </TechBlock>
        </RevealOnScroll>

        <RevealOnScroll>
          <TechBlock
            icon="⚡"
            title="Negatív ionterápia"
            subtitle="Negative Air Ionization · NAI"
            gradientColor="hsl(268, 43%, 70%)"
            mechSteps={[
              "Negatív ionok belégzése / bőrkontaktus",
              "Szerotonin-metabolizmus modulálása",
              "Légutak nyálkahártya ciliáris aktivitásának fokozása",
              "Antioxidáns kapacitás növekedése",
            ]}
          >
            <p>
              A <strong>negatív ionok</strong> (jellemzően szuperoxid O₂⁻ és más negatív töltésű oxigénspecieszek)
              természetes módon keletkeznek vízesések, hullámverés és villámok környezetében. Terápiás alkalmazásuk
              a 20. század közepe óta kutatott terület.
            </p>
            <p>
              Perez és mtsai (2013) szisztematikus review-ja szerint a <strong>magas denzitású negatív ion-expozíció</strong> szignifikáns
              hatást mutatott a szezonális depresszió (SAD) kezelésében. Az alacsony denzitás esetén az eredmények
              kevésbé konzisztensek.
            </p>
          </TechBlock>
        </RevealOnScroll>

        <RevealOnScroll>
          <TechBlock
            icon="🦶"
            title="Reflexológia"
            subtitle="Reflexology · Pressure Point Stimulation"
            gradientColor="hsl(42, 52%, 54%)"
            mechSteps={[
              "Talpfelszíni nyomáspontok mechanikus stimulációja",
              "Afferens idegrostok aktiválása",
              "Autonóm idegrendszeri válasz (paraszimpatikus dominancia)",
              "Szisztémás relaxáció és fájdalommoduláció",
            ]}
          >
            <p>
              A <strong>reflexológia</strong> a talp specifikus zónáinak nyomásos stimulációján alapul. Bár a hagyományos
              zónatérkép tudományos validálása korlátozott, a mechanikus nyomás által kiváltott neurofiziológiai
              válaszok — beleértve az autonóm idegrendszer modulációját — jól dokumentáltak.
            </p>
            <p>
              Ernst (2009) Cochrane-szintű áttekintése óvatos pozitív eredményeket azonosított a
              <strong> fájdalomcsillapítás</strong> és a <strong>szorongáscsökkentés</strong> terén, hangsúlyozva
              a további, jól tervezett RCT-k szükségességét.
            </p>
          </TechBlock>
        </RevealOnScroll>

        {/* Section 3: Evidence */}
        <RevealOnScroll>
          <SectionHeading num="03" title="Bizonyítékok értékelése" id="section-3" />
        </RevealOnScroll>

        <RevealOnScroll>
          <EvidenceTable
            rows={[
              { area: "FIR – Keringésjavítás", level: "A", levelColor: "hsl(152, 40%, 49%)", finding: "Szignifikáns javulás a perifériás keringésben", refs: "Vatansever 2019, Shui 2015" },
              { area: "PBM – Fájdalomcsökkentés", level: "A", levelColor: "hsl(152, 40%, 49%)", finding: "Mérsékelt-erős hatás krónikus fájdalomban", refs: "Hamblin 2017, Chung 2012" },
              { area: "PBM – Szövetregeneráció", level: "A", levelColor: "hsl(152, 40%, 49%)", finding: "Gyorsabb sebgyógyulás, csökkent gyulladás", refs: "Avci 2013, de Freitas 2016" },
              { area: "NAI – Hangulat (SAD)", level: "B", levelColor: "hsl(213, 76%, 61%)", finding: "Pozitív hatás magas denzitásnál", refs: "Perez 2013, Terman 2006" },
              { area: "Reflexológia – Fájdalom", level: "B", levelColor: "hsl(213, 76%, 61%)", finding: "Mérsékelt fájdalomcsökkentés", refs: "Ernst 2009, Lee 2011" },
              { area: "Kombináció – Szinergia", level: "C", levelColor: "hsl(33, 76%, 55%)", finding: "Elméleti alapon ígéretes, klinikai adat korlátozott", refs: "Nincs közvetlen RCT" },
            ]}
          />
        </RevealOnScroll>

        {/* Evidence Levels */}
        <RevealOnScroll>
          <div className="mb-8">
            {[
              {
                level: "A",
                label: "Erős bizonyíték",
                color: "success",
                borderColor: "border-l-success/20",
                dotBg: "bg-success-dim text-success",
                entries: [
                  { title: "FIR keringésjavító hatása", body: "Többszörös RCT és meta-analízis támasztja alá az endothel funkció és a perifériás véráramlás javulását." },
                  { title: "PBM sejtszintű hatásmechanizmusa", body: "A citokróm c oxidáz-mediált ATP-szintézis fokozódás in vitro és in vivo egyaránt bizonyított." },
                ],
              },
              {
                level: "B",
                label: "Mérsékelt bizonyíték",
                color: "info",
                borderColor: "border-l-info/20",
                dotBg: "bg-info-dim text-info",
                entries: [
                  { title: "Negatív ionok és hangulat", body: "A magas denzitású expozíció szignifikáns hatása igazolt, de a mechanizmus pontosítása folyamatban." },
                  { title: "Reflexológia fájdalomra", body: "Több RCT pozitív trend, de a heterogenitás és módszertani korlátok óvatosságra intenek." },
                ],
              },
              {
                level: "C",
                label: "Korlátozott bizonyíték",
                color: "warning",
                borderColor: "border-l-warning/20",
                dotBg: "bg-warning-dim text-warning",
                entries: [
                  { title: "Multimodális szinergia", body: "A négy technológia kombinált hatásáról nincs közvetlen klinikai vizsgálat; az elméleti modell plauzibilis." },
                ],
              },
            ].map((block) => (
              <div key={block.level} className="mb-8">
                <div className="font-display text-[1.05rem] font-semibold mb-4 flex items-center gap-2.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-medium ${block.dotBg}`}>
                    {block.level}
                  </div>
                  {block.label}
                </div>
                <div className={`pl-5 border-l ${block.borderColor} flex flex-col gap-4`}>
                  {block.entries.map((entry, i) => (
                    <div key={i}>
                      <div className="text-[13px] font-medium text-foreground mb-1">{entry.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{entry.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Section 4: Effects */}
        <RevealOnScroll>
          <SectionHeading num="04" title="Várható hatások és időtáv" id="section-4" />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {[
              { icon: "🌡️", title: "Keringésjavulás", timing: "Azonnali · 5–15 perc", body: "A FIR sugárzás által kiváltott értágulat és a reflexológiai stimuláció következtében a talpban és az alsó végtagban azonnal mérhető perfúzió-növekedés." },
              { icon: "⚡", title: "Energiaszint növekedés", timing: "Rövid távú · 1–2 hét", body: "A PBM-mediált mitokondriális ATP-szintézis fokozódása szubjektíven érzékelhető energianövekedésként jelentkezhet rendszeres használat mellett." },
              { icon: "🧠", title: "Hangulat és relaxáció", timing: "Közép távú · 2–4 hét", body: "A negatív ionok szerotonin-moduláló hatása és a reflexológia paraszimpatikus aktiválása együttesen javíthatja a hangulati állapotot." },
              { icon: "🔄", title: "Regeneráció és adaptáció", timing: "Hosszú távú · 4–12 hét", body: "A szöveti regeneráció, az immunfunkció optimalizálása és a krónikus gyulladás mérséklése kumulatív hatásként jelentkezik." },
            ].map((effect) => (
              <div key={effect.title} className="bg-card-elevated border border-border rounded-lg p-4">
                <span className="text-[22px] mb-2.5 block">{effect.icon}</span>
                <div className="text-[13px] font-medium text-foreground mb-0.5">{effect.title}</div>
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary mb-2 block">{effect.timing}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{effect.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Contraindications */}
        <RevealOnScroll>
          <div className="bg-destructive-dim border border-destructive/25 rounded-lg p-4 px-4.5 mt-5 mb-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-2 block">
              ⚠ Ellenjavallatok
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Terhesség, aktív trombózis, nyílt sebek a kezelési területen, súlyos perifériás neuropátia (csökkent
              hőérzékelés), fényérzékenyítő gyógyszerek szedése (PBM esetén), pacemakerrel élők (orvosi konzultáció
              szükséges). 14 év alatti gyermekek esetén orvosi felügyelet javasolt.
            </p>
          </div>
        </RevealOnScroll>

        {/* Section 5: Summary */}
        <RevealOnScroll>
          <SectionHeading num="05" title="Összegzés és kommunikáció" id="section-5" />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
            <div className="bg-card-elevated border border-border rounded-lg p-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-success mb-3 flex items-center gap-1.5">
                ✓ Ajánlott megfogalmazások
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5 list-none">
                <li>„Tudományosan vizsgált technológiákon alapul"</li>
                <li>„Segítheti a keringés javulását"</li>
                <li>„Hozzájárulhat a relaxációhoz"</li>
                <li>„Kiegészítő wellness eszköz"</li>
              </ul>
            </div>
            <div className="bg-card-elevated border border-border rounded-lg p-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-3 flex items-center gap-1.5">
                ✗ Kerülendő állítások
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5 list-none">
                <li>„Gyógyítja a betegségeket"</li>
                <li>„Orvosi kezelést helyettesít"</li>
                <li>„Garantált eredmény"</li>
                <li>„Minden betegségre megoldás"</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        {/* Final Summary Card */}
        <RevealOnScroll>
          <div className="bg-card-elevated border border-accent/25 rounded-lg p-7 px-8 shadow-[var(--shadow-gold)] mt-14">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary mb-3 block">
              Záró összefoglalás
            </span>
            <p className="font-display italic text-base leading-[1.75] text-foreground">
              A Wentong 1.0 négy, egyenként tudományosan vizsgált fizikai modalitást integrál egyetlen platformba.
              Bár az egyes technológiák hatékonysága eltérő szintű evidenciával rendelkezik, szinergikus
              kombinációjuk ígéretes megközelítést kínál a wellness és az életminőség-javítás területén. Az eszköz
              orvosi kezelést nem helyettesít, de tudományos alapokon nyugvó kiegészítő szerepet tölthet be.
            </p>
          </div>
        </RevealOnScroll>

        {/* Footnotes */}
        <RevealOnScroll>
          <div className="mt-14">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2 block">
              Hivatkozások és megjegyzések
            </span>
            <div className="text-[11px] text-subtle leading-[1.7] space-y-1">
              <p>Vatansever, F. & Bhore, S.J. (2019). Far-infrared radiation: Health benefits. J Biomedical Science.</p>
              <p>Hamblin, M.R. (2017). Mechanisms and applications of the anti-inflammatory effects of PBM. AIMS Biophysics.</p>
              <p>Perez, V. et al. (2013). Air ions and mood outcomes. BMC Psychiatry.</p>
              <p>Ernst, E. (2009). Is reflexology an effective intervention? MJA.</p>
            </div>
            <div className="divider-line my-6" />
            <p className="text-[10px] text-subtle leading-relaxed">
              Ez a dokumentum kizárólag tájékoztató jellegű, nem minősül orvosi tanácsnak. Az itt szereplő
              megállapítások a hivatkozott publikációk szerzőinek következtetései. A Wentong 1.0 nem orvostechnikai
              eszköz, hanem wellness célú készülék.
            </p>
            <p className="text-[10px] text-subtle text-center mt-5">
              Wentong 1.0 · Tudományos Összefoglaló · v1.0 · 2024
            </p>
          </div>
        </RevealOnScroll>
      </main>
    </div>
  );
};

export default Index;
