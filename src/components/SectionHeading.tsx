interface SectionHeadingProps {
  num: string;
  title: string;
  id: string;
}

const SectionHeading = ({ num, title, id }: SectionHeadingProps) => (
  <div id={id} className="flex items-start gap-4 mt-[72px] mb-7 scroll-mt-16">
    <div className="w-9 h-9 min-w-[36px] rounded-full border border-border flex items-center justify-center font-mono text-[11px] text-primary mt-1">
      {num}
    </div>
    <h2 className="font-display text-[1.65rem] font-semibold leading-[1.2] text-foreground">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
