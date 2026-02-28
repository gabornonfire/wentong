import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

const CommunicationSection = () => (
  <>
    <RevealOnScroll>
      <SectionHeading num="5" title="Hogyan kommunikáld egy szakembernek?" id="kommunikacio" />
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="bg-card-elevated border border-border border-l-2 border-l-success/40 rounded-lg p-6 px-7 mb-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-success mb-3 block">Ajánlott kommunikáció</span>
        <p className="font-display italic text-foreground text-[13px] leading-[1.75]">
          „A Wentong 1.0 négy, jól dokumentált biofizikai modalitást von össze: far-infrared hőterápiát, fotobiomodulációt (vörös és kék LED), negatív ion generációt és talpstimulációt. Az infravörös és fotobiomodulációs hatásokra évtizedes, peer-reviewed irodalom áll rendelkezésre — Harvard és MGH kutatók publikációival. Az eszköz elsősorban kombinált regenerációs és wellness-célú terápia: értágítás, mikrokeringés-fokozás, izomrelaxáció és antimikrobiális felszíni hatás. CE-minősítéssel rendelkező, nem orvosi wellness eszköz."
        </p>
      </div>
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="grid grid-cols-2 max-[540px]:grid-cols-1 gap-3.5 mb-7">
        <div className="bg-card-elevated border border-border border-l-2 border-l-destructive/40 rounded-lg p-[18px]">
          <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-3 flex items-center gap-1.5">✗ Mit NE mondj</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            Ne állítsd, hogy az eszköz gyógyít, diagnózist állít fel, rákos sejteket pusztít el, „méregtelenít" az egyszerűsített marketingértelemben, vagy klinikai vizsgálatokkal igazolt gyógyász eszköz. Ezek nem igazoltak és jogilag kockázatosak.
          </div>
        </div>
        <div className="bg-card-elevated border border-border border-l-2 border-l-success/40 rounded-lg p-[18px]">
          <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-success mb-3 flex items-center gap-1.5">✓ Amit IGEN mondhatsz</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            <ul className="list-none p-0 space-y-1.5">
              <li>✓ „Multimodális far-infrared wellness eszköz"</li>
              <li>✓ „Fotobiomoduláció vörös és kék fénnyel"</li>
              <li>✓ „Dokumentált mikrokeringés-javítás"</li>
              <li>✓ „Gyulladáscsökkentő és izomrelaxáló hatás"</li>
              <li>✓ „CE-minősítésű kiegészítő regenerációs eszköz"</li>
              <li>✓ „Talpstimulációs negatív ionos légtisztítással"</li>
            </ul>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </>
);

export default CommunicationSection;
