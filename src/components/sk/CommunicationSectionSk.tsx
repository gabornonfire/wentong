import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const CommunicationSectionSk = () => (
  <>
    <SectionHeading num="5" title="Ako to komunikovať odborníkovi?" id="kommunikacio" />

    <motion.div
      className="card-elevated rounded-lg p-6 md:p-8 border-l-2 border-success/40 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-xs font-mono text-success uppercase tracking-widest mb-3">Odporúčaná komunikácia</p>
      <p className="font-display italic text-foreground text-sm leading-[1.75]">
        „Wentong 1.0 spája štyri dobre zdokumentované biofyzikálne modality: termoterapiu vzdialenými infračervenými lúčmi, fotobiomoduláciu (červené a modré LED), generáciu negatívnych iónov a stimuláciu chodidla. Účinky infračervených lúčov a fotobiomodulácie podporujú desaťročia recenzovanej literatúry — vrátane publikácií výskumníkov z Harvardu a MGH. Zariadenie je predovšetkým kombinovanou regeneračnou a wellness terapiou: vazodilatácia, zlepšenie mikrocirkulácie, svalová relaxácia a povrchové antimikrobiálne účinky. Je to wellness zariadenie s certifikátom CE, nie zdravotnícka pomôcka."
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
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-3 flex items-center gap-1.5">✗ Čo NEhovoriť</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          Netvrďte, že zariadenie lieči, stanovuje diagnózu, ničí rakovinové bunky, „detoxikuje" v zjednodušenom marketingovom zmysle alebo že je to klinicky overená zdravotnícka pomôcka. Tieto tvrdenia nie sú podložené a sú právne rizikové.
        </div>
      </div>
      <div className="card-elevated rounded-lg p-[18px] border-l-2 border-success/40">
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-success mb-3 flex items-center gap-1.5">✓ Čo MOŽNO povedať</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          <ul className="list-none p-0 space-y-1.5">
            <li>✓ „Multimodálne wellness zariadenie s vzdialenými infračervenými lúčmi"</li>
            <li>✓ „Fotobiomodulácia červeným a modrým svetlom"</li>
            <li>✓ „Dokumentované zlepšenie mikrocirkulácie"</li>
            <li>✓ „Protizápalový a svalovo-relaxačný účinok"</li>
            <li>✓ „Doplnkové regeneračné zariadenie s certifikátom CE"</li>
            <li>✓ „Stimulácia chodidla s čistením vzduchu negatívnymi iónmi"</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </>
);

export default CommunicationSectionSk;
