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
    <motion.nav
      className="hidden lg:flex fixed right-6 bottom-6 z-50 flex-col gap-2"
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
  );
};

export default Navbar;
