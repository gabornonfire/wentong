import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

const effects = [
  { icon: "🌡", title: "Far-Infrared hő", timing: "Azonnali · 30–60 másodperc", body: "A fűtőelem közvetlenül melegíti a talpbőrt és a szövetet. Értágulatot és megnövelt kapilláris áramlást okoz — perceken belül érezhető melegség, súlytalanság, fáradtság-oldás." },
  { icon: "⚡", title: "Idegi stimuláció", timing: "Azonnali · idegi jel", body: "7200 idegvégződés/cm² a talpon — hő, fény és ionos stimuláció komplex idegi választ vált ki, amelyre az agyban endorfin és szerotonin felszabadulás követi." },
  { icon: "💡", title: "Fotobiomoduláció", timing: "Gyors · 2–5 perc", body: "A vörös fény hatása sejtszinten lejátszódik — perceken belül elindulnak az ATP-termelési folyamatok és a gyulladás-gátló jelpályák." },
  { icon: "🦶", title: "Reflexzónák és paraszimpatikus hatás", timing: "Progresszív · 5–15 perc", body: "A talpi stimuláció paraszimpatikus idegrendszeri aktivációt indít — relaxáció, szívritmus lassulás, stresszhormon csökkentés. Ez magyarázza az egész testre terjedő ellazuló érzést." },
];

const EffectsSection = () => (
  <>
    <RevealOnScroll>
      <SectionHeading num="6" title="Miért érezhető olyan gyorsan a hatás?" id="hatas" />
    </RevealOnScroll>

    <RevealOnScroll>
      <p className="text-muted-foreground mb-6 text-sm">A gyors hatásnak több, egymást erősítő és szimultán ható mechanizmusa van:</p>
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5 mb-6">
        {effects.map((e, i) => (
          <div key={i} className="bg-card-elevated border border-border rounded-lg p-[18px]">
            <span className="text-[22px] mb-2.5 block">{e.icon}</span>
            <div className="text-[13px] font-medium text-foreground mb-0.5">{e.title}</div>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary mb-2 block">{e.timing}</span>
            <div className="text-xs text-muted-foreground leading-relaxed">{e.body}</div>
          </div>
        ))}
      </div>
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="bg-accent/10 border border-accent/25 rounded-lg p-5 px-[22px] mb-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-2 block">
          Fontos kontextus szakembereknek
        </span>
        <p className="text-[13px] text-muted-foreground leading-[1.7]">
          A gyors, szubjektívan tapasztalt hatás (<strong className="text-foreground font-medium">könnyebb lábak, csökkent izomfeszültség, relaxált állapot</strong>) döntően az infravörös hőterápia + idegi stimuláció + endorfin felszabadulás kombinációjával magyarázható. Ez nem jelenti, hogy a fotobiomodulációs és ionizációs komponens nem járul hozzá — de ezek inkább a hosszabb időn keresztüli, kumulatív hatáshoz kapcsolódnak.
        </p>
      </div>
    </RevealOnScroll>
  </>
);

export default EffectsSection;
