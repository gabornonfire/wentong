import React from "react";

type BadgeVariant = "success" | "info" | "warning" | "danger";

interface BadgeStatusProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "text-success bg-success-dim",
  info: "text-info bg-info-dim",
  warning: "text-warning bg-warning-dim",
  danger: "text-destructive bg-destructive-dim",
};

const StatusBadge = ({ variant, children }: BadgeStatusProps) => (
  <span
    className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] uppercase py-0.5 px-2 rounded-full mb-2.5 ${variantStyles[variant]}`}
  >
    {children}
  </span>
);

export default StatusBadge;
