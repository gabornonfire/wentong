const FootSoleIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Left foot */}
    <path d="M4.5 21C3.5 18 3 15.5 3.5 13C4 10.5 3.8 9 4.5 6.5C5 4.5 6.5 3.5 7.5 3.5C8.5 3.5 9.5 4.5 9.5 6C9.5 8 10 10 9.5 13C9 16 9.5 18.5 8.5 21C7.5 22.5 5.5 22.5 4.5 21Z" />
    {/* Left toes */}
    <ellipse cx="4.2" cy="5" rx="0.7" ry="0.9" />
    <ellipse cx="5.5" cy="3.8" rx="0.6" ry="0.8" />
    <ellipse cx="6.8" cy="3.2" rx="0.6" ry="0.8" />
    <ellipse cx="8.1" cy="3" rx="0.6" ry="0.8" />
    <ellipse cx="9.3" cy="3.8" rx="0.5" ry="0.7" />
    {/* Right foot */}
    <path d="M15.5 19C14.5 16.5 14 14 14.5 11.5C15 9 14.8 7.5 15.5 5.5C16 3.8 17 3 18 3C19 3 20 3.8 20 5C20 6.5 20.5 8.5 20 11C19.5 14 20 16 19 18.5C18.2 20.5 16.2 20.5 15.5 19Z" />
    {/* Right toes */}
    <ellipse cx="14.8" cy="4.5" rx="0.5" ry="0.7" />
    <ellipse cx="15.8" cy="3.2" rx="0.6" ry="0.8" />
    <ellipse cx="17" cy="2.5" rx="0.6" ry="0.8" />
    <ellipse cx="18.3" cy="2.2" rx="0.6" ry="0.8" />
    <ellipse cx="19.5" cy="2.8" rx="0.5" ry="0.7" />
  </svg>
);

export default FootSoleIcon;
