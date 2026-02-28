const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border h-[52px] flex items-center justify-between px-6">
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">
        Wentong 1.0
      </span>
      <ul className="hidden sm:flex gap-5 list-none">
        {["Áttekintés", "Technológia", "Bizonyítékok", "Hatások", "Összegzés"].map((label, i) => (
          <li key={i}>
            <a
              href={`#section-${i + 1}`}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
