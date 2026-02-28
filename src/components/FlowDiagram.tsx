import { motion } from "framer-motion";

interface FlowNode {
  icon: string;
  label: string;
  sub: string;
  highlight?: boolean;
}

interface FlowDiagramProps {
  nodes: FlowNode[];
}

const FlowDiagram = ({ nodes }: FlowDiagramProps) => (
  <div className="flex items-center justify-center gap-0 my-5 mb-7 flex-wrap">
    {nodes.map((node, i) => (
      <div key={i} className="flex items-center">
        <motion.div
          className={`card-elevated rounded-lg p-2.5 px-3.5 text-center ${
            node.highlight ? "!border-primary !shadow-[var(--shadow-primary)]" : ""
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <span className="text-lg block mb-1">{node.icon}</span>
          <span className="text-foreground font-medium text-[11px] block">{node.label}</span>
          <span className="text-subtle text-[9px] block">{node.sub}</span>
        </motion.div>
        {i < nodes.length - 1 && (
          <span className="text-subtle text-base px-1.5">→</span>
        )}
      </div>
    ))}
  </div>
);

export default FlowDiagram;
