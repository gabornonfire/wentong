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
    {/* Foot sole outline */}
    <path d="M12 2C9.5 2 7.5 3.5 7 6C6.3 9.5 5 11 5 14C5 17.5 7.5 22 12 22C16.5 22 19 17.5 19 14C19 11 17.7 9.5 17 6C16.5 3.5 14.5 2 12 2Z" />
    {/* Toe dots */}
    <circle cx="9" cy="5.5" r="0.8" />
    <circle cx="11" cy="4.5" r="0.8" />
    <circle cx="13" cy="4.5" r="0.8" />
    <circle cx="15" cy="5.5" r="0.8" />
    {/* Arch line */}
    <path d="M9 13C10 11.5 14 11.5 15 13" />
  </svg>
);

export default FootSoleIcon;
