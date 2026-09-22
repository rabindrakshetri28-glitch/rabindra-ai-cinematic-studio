import { SectionHeading } from "./SectionHeading";

const steps = [
  ["Idea", "Understand the concept and set a clear creative direction."],
  ["Create", "Produce the content using the right creative and technical tools."],
  ["Edit", "Refine footage, visuals, sound, pacing, and story."],
  ["AI + Enhance", "Use intelligent workflows to expand and elevate the output."],
  ["Deliver", "Prepare a polished final piece ready for its audience."],
];

export function Process() {
  return (
    <section className="section section-process">
      <SectionHeading index="04" eyebrow="Process" title="From first thought to final frame." />
      <ol className="process-list">
        {steps.map(([title, text], index) => (
          <li className="process-step reveal" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}