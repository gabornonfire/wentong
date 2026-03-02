const FootSoleIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Single clean footprint */}
    <path d="M12 22c-2.5 0-4-1.5-4.5-3.5-.5-2.5.5-5 1-7.5.3-1.5.3-3-.2-4.5" />
    <path d="M12 22c2.5 0 4-1.5 4.5-3.5.5-2.5-.5-5-1-7.5-.3-1.5-.3-3 .2-4.5" />
    {/* Five toes */}
    <ellipse cx="7" cy="5" rx="1" ry="1.3" />
    <ellipse cx="9.2" cy="3.3" rx="1" ry="1.4" />
    <ellipse cx="12" cy="2.5" rx="1" ry="1.4" />
    <ellipse cx="14.8" cy="3.3" rx="1" ry="1.4" />
    <ellipse cx="17" cy="5" rx="1" ry="1.3" />
  </svg>
);

export default FootSoleIcon;
