import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import SectionHeading from "@/components/SectionHeading";
import TechBlock from "@/components/TechBlock";
import FlowDiagram from "@/components/FlowDiagram";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScienceLevelsSectionEn from "@/components/en/ScienceLevelsSectionEn";
import ClaimsSectionEn from "@/components/en/ClaimsSectionEn";
import CommunicationSectionEn from "@/components/en/CommunicationSectionEn";
import EffectsSectionEn from "@/components/en/EffectsSectionEn";
import ReferenceSectionEn from "@/components/en/ReferenceSectionEn";

const IndexEn = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ThemeToggle />

      {/* Language switcher */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link to="/" className="text-xs font-mono text-primary hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          🇭🇺 HU
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
            Foherb / Whieda · Scientific Summary
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-foreground">The Wentong 1.0</span>
            <br />
            <span className="text-gold-gradient">What's the Real Science Behind It?</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            An objective review for therapists, fitness professionals, and the curious — four technologies, one device, from proven to emerging
          </p>
          <div className="divider-line max-w-xs mx-auto" />
        </motion.div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {/* Foreword */}
        <RevealOnScroll>
          <div className="my-16 card-elevated rounded-lg p-6 md:p-8 border-l-2 border-gold-subtle">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Foreword — about the author</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This summary is an analysis conducted by an AI assistant, based on peer-reviewed scientific literature. Its purpose is not to make medical claims, but to distinguish genuine scientific foundations from marketing language — fairly, in both directions. The Wentong 1.0 combines four different well-studied modalities into a single device — we examine each one separately.
            </p>
          </div>
        </RevealOnScroll>

        {/* SECTION 1 */}
        <SectionHeading num="1" title="What Exactly Is the Wentong 1.0?" id="eszkoz" />

        <RevealOnScroll>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            The Wentong 1.0 is a professional, portable multimodal wellness device designed primarily for foot treatment and stimulation of the body's reflex points. The device combines four distinct, mutually reinforcing therapeutic modalities into a single compact unit:
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex gap-2 flex-wrap mb-7">
            {[
              { label: "🌡 FIR Thermotherapy", cls: "text-accent border-accent/30 bg-accent/10" },
              { label: "💡 Photobiomodulation", cls: "text-rose border-rose/30 bg-rose/10" },
              { label: "⚡ Ionization", cls: "text-purple border-purple/30 bg-purple-dim" },
              { label: "🦶 Reflexology", cls: "text-primary border-primary/30 bg-primary-dim" },
            ].map((pill) => (
              <span
                key={pill.label}
                className={`font-mono text-[9px] tracking-[0.1em] uppercase py-[5px] px-3 rounded-full border ${pill.cls}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Spec Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-0.5 bg-border rounded-lg overflow-hidden mb-6">
            {[
              { key: "Radiation modalities", val: "FIR + red light + blue light + ions" },
              { key: "Infrared wavelength", val: "4–14 µm (mid- and near-FIR)" },
              { key: "Light modalities", val: "630–660 nm (red) + 415 nm (blue)" },
              { key: "Ionization", val: "Negative ion emission" },
              { key: "Primary target area", val: "Sole, reflex zones, muscle surfaces" },
              { key: "Classification", val: "CE-certified wellness device" },
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
              { icon: "⚡", label: "Electrical", sub: "power source", highlight: true },
              { icon: "🌡", label: "FIR heater", sub: "4–14 µm" },
              { icon: "💡", label: "LED panel", sub: "red + blue" },
              { icon: "⚡", label: "Ionizer", sub: "negative ions" },
              { icon: "🦶", label: "Sole / tissue", sub: "target area", highlight: true },
            ]}
          />
        </RevealOnScroll>

        <div className="divider-line my-16" />

        {/* SECTION 2 */}
        <SectionHeading num="2" title="The Four Technologies in Depth" id="technologiak" />

        {/* FIR */}
        <TechBlock
          icon="🌡"
          title="Far-Infrared Radiation (FIR)"
          subtitle="Far Infrared Radiation · 4–14 µm wavelength"
          gradientColor="hsl(190, 60%, 45%)"
          mechSteps={[
            "01 → FIR absorption in tissue → local temperature increase",
            "02 → Thermoreceptor (TRPV channel) activation → neural signaling",
            "03 → Endothelial NO release → vasodilation, improved circulation",
            "04 → Mitochondrial respiratory chain stimulation → increased ATP",
            "05 → Inflammatory cytokine (TNF-α, IL-6) reduction",
            "06 → Muscle relaxation, pain reduction (β-endorphin release)",
          ]}
          badge={{ label: "🟢 Strong clinical literature", variant: "success" }}
        >
          <p>Infrared radiation is the part of the electromagnetic spectrum below visible light, perceived by human skin as heat, but not limited to the skin surface. The <strong>Far-Infrared (FIR)</strong> range (4–14 µm) is particularly important for biological systems because it precisely coincides with the wavelength range that water-rich biological tissues absorb most efficiently.</p>
          <p><strong>Why does it penetrate tissue?</strong> The structure of skin, muscle tissue, and connective tissue allows radiation to penetrate several centimeters deep, where it exerts direct thermal and non-thermal biophysical effects. The FIR range acts with direct heat effect to 1–3 cm depth, but the circulation enhancement from secondary vasodilation affects much deeper tissues.</p>
          <p><strong>Mitochondrial activation:</strong> Near- and mid-infrared light interacts with the mitochondrial respiratory chain — specifically cytochrome c oxidase (CcO). This results in increased ATP production, reduced oxidative stress, and activation of cell-level regenerative signaling pathways.</p>
          <p><strong>Microcirculation effect:</strong> FIR radiation increases nitric oxide (NO) release from endothelial cells. NO is the most potent known endogenous vasodilator — it relaxes arteries and capillaries, increases flow velocity, and improves tissue oxygenation. This mechanism has been confirmed by randomized controlled trials.</p>
        </TechBlock>

        {/* PBM */}
        <TechBlock
          icon="💡"
          title="Photobiomodulation (PBM)"
          subtitle="Low-Level Light Therapy · 630–660 nm red + 415 nm blue"
          gradientColor="hsl(345, 74%, 60%)"
          mechSteps={[
            "🔴 Red (660nm): cytochrome c oxidase activation → ATP ↑ · ROS ↓ · cell regeneration ↑",
            "🔵 Blue (415nm): porphyrin activation → bactericidal effect · sebaceous gland reduction",
          ]}
          mechLabel="Red vs. blue light — different mechanisms"
          badges={[
            { label: "🟢 Strong literature base", variant: "success" as const },
            { label: "🔵 Combined plantar use: preclinical", variant: "info" as const },
          ]}
        >
          <p>Photobiomodulation (PBM) is the biophysical phenomenon where specific wavelengths of low-intensity light produce biological effects without heat generation. <strong>This is not a thermal effect</strong>, but light-induced chemical reactions in cells.</p>
          <p><strong>Red light (630–660 nm) — the regeneration range:</strong> Red light falls within one of the main absorption peaks of the mitochondrial respiratory chain enzyme cytochrome c oxidase. The enzyme absorbs photons, accelerating the electron transport chain. The result: increased ATP synthesis, reduced reactive oxygen species (ROS), and activation of pro-regenerative signaling pathways.</p>
          <p>Reviews in the Journal of Photochemistry and Photobiology document that 630–670 nm red light accelerates wound healing, reduces muscle fatigue markers (creatine kinase), and moderates inflammatory cytokine levels in athletes.</p>
          <p><strong>Blue light (415 nm) — the antimicrobial range:</strong> The 400–430 nm range activates porphyrin chromophores in bacterial cell membranes — particularly in S. aureus. Activated porphyrins produce reactive oxygen species that damage the bacterial cell wall and DNA. It may be effective against antibiotic-resistant strains.</p>
        </TechBlock>

        {/* ION */}
        <TechBlock
          icon="⚡"
          title="Negative Ionization"
          subtitle="Negative Ion Generation · Air quality and respiration"
          gradientColor="hsl(268, 43%, 70%)"
          badge={{ label: "🔵 Documented, scale-dependent effect", variant: "info" }}
        >
          <p>Air ions are electrically charged atmospheric particles. In nature, negative ions are generated near waterfalls, in forests through volatile compounds from pine trees, and during electrical discharges. In cities and enclosed spaces, negative ion deficiency and positive ion excess are typical.</p>
          <p><strong>How does air ionization work?</strong> Negative ions electrostatically bind airborne particles (dust, pollen, aerosols, bacteria). The aggregated, negatively charged clusters settle — reducing respiratory exposure.</p>
          <p><strong>Microbicidal effect:</strong> In a study by Comini et al. (2021, Microbiology Spectrum), a negative ion generator reduced atmospheric S. aureus concentration by ~95% and E. coli by ~70% in enclosed spaces. The mechanism: ions induce reactive oxygen intermediates on the bacterial cell wall.</p>
          <p><strong>Respiratory and mood effects:</strong> Several studies found positive trends for respiratory symptoms and subjectively improved breathing quality. Some studies found correlations between high negative ion concentration and serotonin metabolism — however, this data remains preliminary.</p>
        </TechBlock>

        {/* Contra box for ION */}
        <RevealOnScroll>
          <div className="bg-destructive-dim border border-destructive/25 rounded-lg p-4 px-[18px] -mt-1 mb-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-destructive mb-2 block">
              ⚠ Important context
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The effectiveness of the negative ionizer is closely tied to the generated ion concentration and room size. Consumer device ion concentrations are typically lower than industrial generators used in clinical studies. The effect is real and documented, but smaller in scale.
            </p>
          </div>
        </RevealOnScroll>

        {/* REFLEX */}
        <TechBlock
          icon="🦶"
          title="Plantar Stimulation and Reflexology"
          subtitle="Plantar Stimulation · Reflex Zones · Mechanoreceptors"
          gradientColor="hsl(38, 75%, 55%)"
          mechSteps={[
            "01 → 7,200 nerve endings/cm² in the sole → immediate systemic neural response",
            "02 → FIR vasodilation + enhanced plantar circulation → whole-body blood flow improvement",
            "03 → Endorphin and serotonin release → pain relief, mood improvement",
            "04 → Parasympathetic nervous system activation → relaxation, stress reduction",
          ]}
          mechLabel="Why is the effect felt throughout the body?"
          badges={[
            { label: "🟡 Reflexology mechanism: researched, partially supported", variant: "warning" as const },
            { label: "🟢 Plantar circulation effect: clinically confirmed", variant: "success" as const },
          ]}
        >
          <p>The sole of the foot is one of the most densely innervated surfaces of the human body. Each square centimeter contains approximately <strong>7,200 nerve endings</strong> — including mechanoreceptors, proprioceptors, and free nerve endings. This neural density explains why foot massage triggers an immediate, whole-body response.</p>
          <p><strong>Circulatory effect in the foot:</strong> Ko and Lee (2018, Journal of Physiological Anthropology, PMC) confirmed that thermal stimulation of the foot significantly improves peripherally measured blood flow and shortens sleep onset latency — through the body's thermal regulation.</p>
          <p><strong>The synergism of combined stimulation:</strong> In the Wentong 1.0, FIR heat therapy, photobiomodulation, and ionization combine with plantar stimulation. Heat therapy dilates and relaxes, light activates mitochondrially, ions act on surfaces, while reflex zone stimulation triggers systemic neural responses.</p>
        </TechBlock>

        <div className="divider-line my-16" />

        <ScienceLevelsSectionEn />

        <div className="divider-line my-16" />

        <ClaimsSectionEn />

        <div className="divider-line my-16" />

        <CommunicationSectionEn />

        <div className="divider-line my-16" />

        <EffectsSectionEn />

        <div className="divider-line my-16" />

        <ReferenceSectionEn />
      </main>
    </div>
  );
};

export default IndexEn;
