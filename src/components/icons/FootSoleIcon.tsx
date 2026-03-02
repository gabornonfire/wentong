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
    {/* Left foot */}
    <path d="M4.5 20.5c-.8-.6-1.2-1.8-1-3.2.3-1.8 1-3.5 1.2-5.3.2-1.5.1-2.8-.3-4" />
    <path d="M8.8 19.8c.5-1.2.3-2.8-.1-4.5-.4-1.7-.6-3.2-.2-4.8.2-.8.1-1.8-.1-2.7" />
    <path d="M4.5 20.5c1.2.4 2.8.2 4.3-.7" />
    <circle cx="3.2" cy="6.8" r=".55" />
    <circle cx="4.5" cy="5.6" r=".55" />
    <circle cx="5.9" cy="4.9" r=".55" />
    <circle cx="7.2" cy="4.8" r=".5" />
    <circle cx="8.4" cy="5.5" r=".45" />

    {/* Right foot */}
    <path d="M19.5 20.5c.8-.6 1.2-1.8 1-3.2-.3-1.8-1-3.5-1.2-5.3-.2-1.5-.1-2.8.3-4" />
    <path d="M15.2 19.8c-.5-1.2-.3-2.8.1-4.5.4-1.7.6-3.2.2-4.8-.2-.8-.1-1.8.1-2.7" />
    <path d="M19.5 20.5c-1.2.4-2.8.2-4.3-.7" />
    <circle cx="20.8" cy="6.8" r=".55" />
    <circle cx="19.5" cy="5.6" r=".55" />
    <circle cx="18.1" cy="4.9" r=".55" />
    <circle cx="16.8" cy="4.8" r=".5" />
    <circle cx="15.6" cy="5.5" r=".45" />
  </svg>
);

export default FootSoleIcon;
