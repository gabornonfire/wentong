import React from "react";

interface TechBlockProps {
  icon: string;
  title: string;
  subtitle: string;
  gradientColor: string;
  children: React.ReactNode;
  mechSteps?: string[];
}

const TechBlock = ({ icon, title, subtitle, gradientColor, children, mechSteps }: TechBlockProps) => (
  <div className="bg-card border border-border rounded-lg p-7 mb-5 relative overflow-hidden">
    <div
      className="absolute top-0 left-0 right-0 h-0.5"
      style={{ background: `linear-gradient(90deg, ${gradientColor}, transparent)` }}
    />
    <span className="text-[28px] mb-2.5 block">{icon}</span>
    <h3 className="font-display text-xl font-semibold mb-1.5">{title}</h3>
    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-subtle mb-4 block">
      {subtitle}
    </span>
    <div className="text-[13px] text-muted-foreground leading-[1.75] [&_p]:mb-3 [&_strong]:text-foreground [&_strong]:font-medium">
      {children}
    </div>
    {mechSteps && mechSteps.length > 0 && (
      <div className="bg-black/25 border border-border rounded-lg p-3.5 px-4 mt-4">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mb-2">
          Hatásmechanizmus
        </div>
        <div className="flex flex-col gap-2">
          {mechSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className="text-primary font-mono text-[11px] min-w-[18px] pt-px">→</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TechBlock;
