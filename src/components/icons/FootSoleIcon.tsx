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
    {/* Left footprint - sole */}
    <path d="M5 21c-1.2-.8-1.8-2.2-1.5-4 .3-2 1.2-4 1.5-6.5.2-1.5 0-3-.5-4.2" />
    <path d="M9.5 20.5c.8-1.5.5-3.5 0-5.5-.5-2-.8-4-.3-5.8.3-1.2.2-2.5-.2-3.5" />
    <path d="M5 21c1.5.5 3.2.3 4.5-.5" />
    {/* Left toes */}
    <ellipse cx="3.5" cy="5.5" rx=".7" ry="1" />
    <ellipse cx="5" cy="4" rx=".65" ry="1" />
    <ellipse cx="6.5" cy="3.2" rx=".65" ry="1" />
    <ellipse cx="8" cy="3" rx=".6" ry=".9" />
    <ellipse cx="9.3" cy="3.8" rx=".5" ry=".8" />
    {/* Right footprint - sole */}
    <path d="M19 21c1.2-.8 1.8-2.2 1.5-4-.3-2-1.2-4-1.5-6.5-.2-1.5 0-3 .5-4.2" />
    <path d="M14.5 20.5c-.8-1.5-.5-3.5 0-5.5.5-2 .8-4 .3-5.8-.3-1.2-.2-2.5.2-3.5" />
    <path d="M19 21c-1.5.5-3.2.3-4.5-.5" />
    {/* Right toes */}
    <ellipse cx="20.5" cy="5.5" rx=".7" ry="1" />
    <ellipse cx="19" cy="4" rx=".65" ry="1" />
    <ellipse cx="17.5" cy="3.2" rx=".65" ry="1" />
    <ellipse cx="16" cy="3" rx=".6" ry=".9" />
    <ellipse cx="14.7" cy="3.8" rx=".5" ry=".8" />
  </svg>
);

export default FootSoleIcon;
