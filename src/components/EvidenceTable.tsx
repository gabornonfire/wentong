interface EvidenceRow {
  area: string;
  level: string;
  levelColor: string;
  finding: string;
  refs: string;
}

interface EvidenceTableProps {
  rows: EvidenceRow[];
}

const EvidenceTable = ({ rows }: EvidenceTableProps) => (
  <div className="overflow-x-auto mb-8">
    <table className="w-full border-collapse text-xs">
      <thead>
        <tr>
          {["Terület", "Szint", "Megállapítás", "Hivatkozások"].map((h) => (
            <th
              key={h}
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-subtle p-2 px-3 text-left border-b border-border"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-white/[0.02]">
            <td className="p-2.5 px-3 border-b border-border text-muted-foreground align-top">{row.area}</td>
            <td className={`p-2.5 px-3 border-b border-border font-mono font-medium align-top`} style={{ color: row.levelColor }}>{row.level}</td>
            <td className="p-2.5 px-3 border-b border-border text-muted-foreground align-top">{row.finding}</td>
            <td className="p-2.5 px-3 border-b border-border text-muted-foreground align-top italic">{row.refs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EvidenceTable;
