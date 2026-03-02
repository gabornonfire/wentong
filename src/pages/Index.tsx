import { Link } from "react-router-dom";
import { Flame, Lightbulb, Zap, Footprints, Waves, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TechBlock from "@/components/TechBlock";
import FlowDiagram from "@/components/FlowDiagram";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScienceLevelsSection from "@/components/ScienceLevelsSection";
import ClaimsSection from "@/components/ClaimsSection";
import CommunicationSection from "@/components/CommunicationSection";
import EffectsSection from "@/components/EffectsSection";
import ReferenceSection from "@/components/ReferenceSection";
import ThemeToggle from "@/components/ThemeToggle";
import FootSoleIcon from "@/components/icons/FootSoleIcon";
import firIcon from "@/assets/fir-icon-gold.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ThemeToggle />

      {/* Language switcher */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link to="/en" className="text-xs font-mono text-primary hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          🇬🇧 EN
        </Link>
      </div>

      <HeroSection />

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {/* Foreword */}
        <RevealOnScroll>
          <div className="my-16 card-elevated rounded-lg p-6 md:p-8 border-l-2 border-gold-subtle">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Előszó — a szerzőről</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ez az összefoglaló egy AI-asszisztens által végzett, peer-reviewed tudományos irodalomra alapuló elemzés. Célja nem az, hogy orvosi állításokat tegyen, hanem hogy a valódi tudományos alapokat megkülönböztesse a marketingnyelvtől — tisztességesen, mindkét irányban. A Wentong 1.0 négy különböző jól tanulmányozott modalitást ötvöz egyetlen eszközben — ezek mindegyikét külön-külön megvizsgáljuk.
            </p>
          </div>
        </RevealOnScroll>

        {/* SECTION 1 */}
        <SectionHeading num="1" title="Mi a Wentong 1.0 pontosan?" id="eszkoz" />

        <RevealOnScroll>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A Wentong 1.0 egy professzionális, hordozható multimodális wellness eszköz, amelyet elsősorban talpkezelésre és a test reflexpontjainak stimulálására terveztek. Az eszköz négy különálló, egymást erősítő terápiás modalitást von össze egyetlen kompakt egységbe:
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex gap-2 flex-wrap mb-7">
            {[
              { label: "FIR termoterápia", icon: <Waves size={13} strokeWidth={1.5} className="rotate-90" />, cls: "text-accent border-accent/30 bg-accent/10" },
              { label: "Fotobiomoduláció", icon: <Lightbulb size={13} strokeWidth={1.5} />, cls: "text-rose border-rose/30 bg-rose/10" },
              { label: "Ionizáció", icon: <Atom size={13} strokeWidth={1.5} />, cls: "text-purple border-purple/30 bg-purple-dim" },
              { label: "Reflexterápia", icon: <FootSoleIcon size={13} />, cls: "text-primary border-primary/30 bg-primary-dim" },
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
              { key: "Sugárzási modalitások", val: "FIR + vörös fény + kék fény + ionok" },
              { key: "Infravörös hullámhossz", val: "4–14 µm (közép- és közel-FIR)" },
              { key: "Fény modalitások", val: "630–660 nm (vörös) + 415 nm (kék)" },
              { key: "Ionizáció", val: "Negatív ion kibocsátás" },
              { key: "Elsődleges célterület", val: "Talp, reflex zónák, izomfelületek" },
              { key: "Besorolás", val: "CE-tanúsítványú wellness eszköz" },
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
              { icon: "⚡", label: "Elektromos", sub: "áramforrás", highlight: true },
              { icon: "🌡", label: "FIR fűtőelem", sub: "4–14 µm" },
              { icon: "💡", label: "LED panel", sub: "vörös + kék" },
              { icon: "⚡", label: "Ionizátor", sub: "negatív ionok" },
              { icon: "🦶", label: "Talp / szövet", sub: "hatásterület", highlight: true },
            ]}
          />
        </RevealOnScroll>

        <div className="divider-line my-16" />

        {/* SECTION 2 */}
        <SectionHeading num="2" title="A négy technológia mélyebben" id="technologiak" />

        {/* FIR */}
        <TechBlock
          icon={<Waves size={28} strokeWidth={1.5} className="text-primary rotate-90" />}
          title="Távoli infravörös sugárzás (FIR – Far Infrared)"
          subtitle="Far Infrared Radiation · 4–14 µm hullámhossz"
          gradientColor="hsl(190, 60%, 45%)"
          mechSteps={[
            "01 → FIR sugárzás elnyelése a szövetben → helyi hőmérséklet-emelkedés",
            "02 → Hőreceptorok (TRPV csatornák) aktiválódása → idegi jelzés",
            "03 → Endotél NO-felszabadulás → értágulat, keringésfokozás",
            "04 → Mitokondriális légzéslánc stimulációja → fokozott ATP",
            "05 → Gyulladásos citokinek (TNF-α, IL-6) csökkentése",
            "06 → Izomlazítás, fájdalomcsökkentés (β-endorfin felszabadulás)",
          ]}
          badge={{ label: "🟢 Erős klinikai irodalom", variant: "success" }}
        >
          <p>Az infravörös sugárzás az elektromágneses spektrum látható fény alatti tartománya, amelyet az emberi bőr hőként érzékel, de amely nem korlátozódik a bőr felszínére. A <strong>Far-Infrared (FIR)</strong> tartomány (4–14 µm) különösen fontos a biológiai rendszerek szempontjából, mert pontosan egybeesik azzal a hullámhossz-tartománnyal, amelyet a vízzel teli biológiai szövetek a leghatékonyabban abszorbeálnak.</p>
          <p><strong>Miért hatol be a szövetbe?</strong> A bőr, az izomszövet és a kötőszövet felépítése megengedi, hogy a sugárzás több centiméteres mélységbe hatoljon, ahol közvetlen termikus és nem-termikus biofizikai hatást fejt ki. A FIR tartomány 1–3 cm mélységig hat közvetlen hőhatással, de a másodlagos értágulatból eredő keringésfokozás ennél jóval mélyebb szöveteket érint.</p>
          <p><strong>Mitokondriális aktiváció:</strong> A közeli és közepes infravörös fény kölcsönhat a sejtek mitokondriális légzési láncával — különösen a citokróm-c-oxidáz (CcO) enzimmel. Ez fokozott ATP-termelést, oxidatív stressz csökkentést és sejt-szintű regenerációs jelpályák beindítását eredményezi.</p>
          <p><strong>Mikrokeringési hatás:</strong> A FIR sugárzás fokozza a nitrogén-monoxid (NO) felszabadulását az endotél sejtekből. A NO a legerősebb ismert endogén értágító — hatására az artériák és kapillárisok ellazulnak, az áramlási sebesség nő, a szövetoxigenizáció javul. Ezt a mechanizmust randomizált kontrollos vizsgálatok igazolták.</p>
        </TechBlock>

        {/* PBM */}
        <TechBlock
          icon={<Lightbulb size={28} strokeWidth={1.5} className="text-primary" />}
          title="Fotobiomoduláció (PBM)"
          subtitle="Low-Level Light Therapy · 630–660 nm vörös + 415 nm kék"
          gradientColor="hsl(345, 74%, 60%)"
          mechSteps={[
            "🔴 Vörös (660nm): citokróm-c-oxidáz aktiváció → ATP ↑ · ROS ↓ · sejtregeneráció ↑",
            "🔵 Kék (415nm): porfirin aktiváció → baktericid hatás · sebáceummirigy csökkentés",
          ]}
          mechLabel="Vörös vs. kék fény — eltérő mechanizmusok"
          badges={[
            { label: "🟢 Erős irodalmi alap", variant: "success" as const },
            { label: "🔵 Kombinált talphasználatra: preklinkiai", variant: "info" as const },
          ]}
        >
          <p>A fotobiomoduláció (PBM) az a biofizikai jelenség, amelynek során meghatározott hullámhosszú, alacsony intenzitású fény biológiai hatást vált ki hőtermelés nélkül. <strong>Nem hőhatásról van szó</strong>, hanem fény által indukált kémiai reakciókról a sejtekben.</p>
          <p><strong>Vörös fény (630–660 nm) — a regeneráció tartománya:</strong> A vörös fény a mitokondriális légzéslánc citokróm-c-oxidáz enzimének egyik fő abszorpciós csúcsában esik. Az enzim felszívja a fotonokat, felgyorsul az elektrontranszport lánc. Az eredmény: fokozott ATP-szintézis, csökkent reaktív oxigéngyök (ROS) szint, és pro-regeneratív jelpályák aktiválódása.</p>
          <p>A Journal of Photochemistry and Photobiology áttekintéseiben dokumentált, hogy a 630–670 nm-es vörös fény gyorsítja a sebgyógyulást, csökkenti az izomfáradás markerereit (kreatin-kináz), és mérsékli a gyulladásos citokinek szintjét sportolókban.</p>
          <p><strong>Kék fény (415 nm) — az antimikrobiális tartomány:</strong> A 400–430 nm tartomány aktiválja a porfirin kromofórokat a baktériumok sejtmembránjában — különösen az S. aureus esetén. Az aktivált porfirinek reaktív oxigéngyököket termelnek, amelyek a baktérium sejtfalát és DNS-ét károsítják. Antibiotikum-rezisztens törzsekre is hatékony lehet.</p>
        </TechBlock>

        {/* ION */}
        <TechBlock
          icon={<Atom size={28} strokeWidth={1.5} className="text-primary" />}
          title="Negatív ionizáció"
          subtitle="Negative Ion Generation · Levegőminőség és légzés"
          gradientColor="hsl(268, 43%, 70%)"
          badge={{ label: "🔵 Dokumentált, skálafüggő hatás", variant: "info" }}
        >
          <p>A levegő ionjai elektromos töltéssel rendelkező légköri részecskék. A természetben negatív ionok keletkeznek vízesések közelében, erdőkben fenyők illó anyagainak hatására, és elektromos kisülések során. A városokban, zárt terekben ezzel szemben negatív ion hiány és pozitív ion túlsúly jellemző.</p>
          <p><strong>Hogyan hat a levegő ionizálása?</strong> A negatív ionok elektrosztatikusan kötik meg a levegőben lebegő részecskéket (por, pollenek, aerosolok, baktériumok). Az összetapadt, negatívan töltött klaszterek leülepednek — ezzel csökkentik a légúti expozíciót.</p>
          <p><strong>Mikrobicid hatás:</strong> A Comini és munkatársai (2021, Microbiology Spectrum) vizsgálatában negatív ion generátor ~95%-kal csökkentette az S. aureus, és ~70%-kal az E. coli légköri koncentrációját zárt térben. A mechanizmus: az ionok reaktív oxigén intermediereket indukálnak a baktérium sejtfalán.</p>
          <p><strong>Légzőszervi és hangulati hatások:</strong> Több vizsgálat pozitív tendenciákat talált a légúti tünetekre és szubjektívan javuló légzésminőségre. Néhány vizsgálat összefüggést talált a magas negatív ion koncentráció és a szerotonin metabolizmus között — ezek az adatok azonban előzetesek.</p>
        </TechBlock>

        {/* Contra box for ION */}
        <RevealOnScroll>
          <div className="bg-destructive-dim border border-destructive/25 rounded-lg p-4 px-[18px] -mt-1 mb-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-2 block">
              ⚠ Fontos kontextus
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A negatív ionizátor hatékonysága szorosan függ a generált ion-koncentrációtól és a tér méretétől. A fogyasztói eszközök ionkoncentrációja jellemzően alacsonyabb, mint a klinikai vizsgálatokban használt ipari generátoroké. A hatás valódi és dokumentált, de mértéke kisebb léptékű.
            </p>
          </div>
        </RevealOnScroll>

        {/* REFLEX */}
        <TechBlock
          icon={<FootSoleIcon size={28} className="text-primary" />}
          title="Talp-stimuláció és reflexterápia"
          subtitle="Plantar Stimulation · Reflex Zones · Mechanoreceptors"
          gradientColor="hsl(38, 75%, 55%)"
          mechSteps={[
            "01 → 7200 idegvégződés/cm² a talpon → azonnali szisztémás idegi válasz",
            "02 → FIR értágítás + fokozott talpkeringés → test-szintű véráramlás javulás",
            "03 → Endorfin és szerotonin felszabadulás → fájdalomcsillapítás, hangulat",
            "04 → Paraszimpatikus idegrendszer aktiváció → relaxáció, stresszcsökkentés",
          ]}
          mechLabel="Miért érzékelhető az egész testen?"
          badges={[
            { label: "🟡 Reflexológia mechanizmusa: kutatott, részben alátámasztott", variant: "warning" as const },
            { label: "🟢 Talpkeringési hatás: klinikai igazolással", variant: "success" as const },
          ]}
        >
          <p>A talp az emberi test egyik legsűrűbben innervált felülete. Négyzetcentimétere körülbelül <strong>7200 idegvégződést</strong> tartalmaz — köztük mechanoceptorokat, proprioceptorokat és szabad idegvégződéseket. Ez az idegi sűrűség magyarázza, miért vált ki talpmasszázs azonnali, az egész testen érzékelhető választ.</p>
          <p><strong>Keringési hatás a lábfejben:</strong> Ko és Lee (2018, Journal of Physiological Anthropology, PMC) igazolta, hogy a lábfej termikus stimulálása szignifikánsan javítja a periférián mért véráramlást és lerövidíti az elalvási latenciát — a test termális szabályozásán keresztül.</p>
          <p><strong>A kombinált stimuláció szinergizmusa:</strong> A Wentong 1.0 esetén a FIR hőterápia, fotobiomoduláció és ionizáció kombinálódik a talpstimulációval. A hőterápia értágít és ellazít, a fény mitokondriálisan aktivál, az ionok felszínileg hatnak, míg a reflexzónák stimulálása szisztémás idegi válaszokat indít be.</p>
        </TechBlock>

        <div className="divider-line my-16" />

        <ScienceLevelsSection />

        <div className="divider-line my-16" />

        <ClaimsSection />

        <div className="divider-line my-16" />

        <CommunicationSection />

        <div className="divider-line my-16" />

        <EffectsSection />

        <div className="divider-line my-16" />

        <ReferenceSection />
      </main>
    </div>
  );
};

export default Index;
