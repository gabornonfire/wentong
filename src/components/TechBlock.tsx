import React from "react";

type BadgeVariant = "success" | "info" | "warning" | "danger";

interface TechBadge {
  label: string;
  variant: BadgeVariant;
}

interface TechBlockProps {
  icon: string;
  title: string;
  subtitle: string;
  gradientColor: string;
  children: React.ReactNode;
  mechSteps?: string[];
  mechLabel?: string;
  badge?: TechBadge;
  badges?: TechBadge[];
}

const badgeStyles: Record<BadgeVariant, string> = {
  success: "text-success bg-success-dim",
  info: "text-info bg-info-dim",
  warning: "text-warning bg-warning-dim",
  danger: "text-destructive bg-destructive-dim",
};

const TechBlock = ({ icon, title, subtitle, gradientColor, children, mechSteps, mechLabel, badge, badges }: TechBlockProps) => {
  const allBadges = badges || (badge ? [badge] : []);

  return (
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
            {mechLabel || "Hatásmechanizmus"}
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
      {allBadges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {allBadges.map((b, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] uppercase py-0.5 px-2 rounded-full ${badgeStyles[b.variant]}`}
            >
              {b.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechBlock;
