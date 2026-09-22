interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <header className="section-heading reveal">
      <div className="section-heading__label">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2 className={light ? "text-paper" : "text-foreground"}>{title}</h2>
        {description ? (
          <p className={light ? "text-paper-muted" : "text-muted-foreground"}>{description}</p>
        ) : null}
      </div>
    </header>
  );
}