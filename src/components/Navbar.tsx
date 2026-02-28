import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "eszkoz", label: "Eszköz" },
  { id: "technologiak", label: "Technológiák" },
  { id: "tudomany", label: "Tudomány" },
  { id: "kommunikacio", label: "Kommunikáció" },
  { id: "referencia", label: "Referencia" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border h-[52px] flex items-center justify-between px-6">
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">
          Foherb / Whieda · Wentong 1.0
        </span>
        <ul className="hidden sm:flex gap-5 list-none">
          {sections.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Side nav for large screens */}
      <motion.nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-[10px] font-mono tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 text-right ${
              active === id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </a>
        ))}
      </motion.nav>
    </>
  );
};

export default Navbar;
