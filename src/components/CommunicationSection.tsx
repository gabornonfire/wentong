import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CommunicationSection = () => (
  <>
    <SectionHeading num="5" title="Hogyan kommunikáld egy szakembernek?" id="kommunikacio" />

    <motion.div
      className="card-elevated rounded-lg p-6 md:p-8 border-l-2 border-success/40 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-xs font-mono text-success uppercase tracking-widest mb-3">Ajánlott kommunikáció</p>
      <p className="font-display italic text-foreground text-sm leading-[1.75]">
        „A Wentong 1.0 négy, jól dokumentált biofizikai modalitást von össze: far-infrared hőterápiát, fotobiomodulációt (vörös és kék LED), negatív ion generációt és talpstimulációt. Az infravörös és fotobiomodulációs hatásokra évtizedes, peer-reviewed irodalom áll rendelkezésre — Harvard és MGH kutatók publikációival. Az eszköz elsősorban kombinált regenerációs és wellness-célú terápia: értágítás, mikrokeringés-fokozás, izomrelaxáció és antimikrobiális felszíni hatás. CE-minősítéssel rendelkező, nem orvosi wellness eszköz."
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-2 max-[540px]:grid-cols-1 gap-3.5 mb-7"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-elevated rounded-lg p-[18px] border-l-2 border-destructive/40">
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-3 flex items-center gap-1.5">✗ Mit NE mondj</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          Ne állítsd, hogy az eszköz gyógyít, diagnózist állít fel, rákos sejteket pusztít el, „méregtelenít" az egyszerűsített marketingértelemben, vagy klinikai vizsgálatokkal igazolt gyógyász eszköz. Ezek nem igazoltak és jogilag kockázatosak.
        </div>
      </div>
      <div className="card-elevated rounded-lg p-[18px] border-l-2 border-success/40">
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
    </motion.div>
  </>
);

export default CommunicationSection;
