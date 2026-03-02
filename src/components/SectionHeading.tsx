import { motion } from "framer-motion";

interface SectionHeadingProps {
  num: string;
  title: string;
  id?: string;
}

const SectionHeading = ({ num, title, id }: SectionHeadingProps) => (
  <motion.div
    id={id}
    className="flex items-baseline gap-4 mb-8 pt-16 scroll-mt-16"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-gold-gradient font-display text-5xl md:text-6xl font-light opacity-40 shrink-0">
      {num}
    </span>
    <h2 className="font-display text-2xl md:text-3xl font-extralight text-foreground tracking-normal">
      {title}
    </h2>
  </motion.div>
);

export default SectionHeading;
