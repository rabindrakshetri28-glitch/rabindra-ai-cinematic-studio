import { Aperture, BrainCircuit, Clapperboard, Film, Layers3, Sparkles, WandSparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const skills = [
  { title: "Content Creation", note: "Concept to final story", Icon: Aperture },
  { title: "Content Development", note: "Ideas with structure", Icon: Layers3 },
  { title: "AI Video Editing", note: "New tools, human taste", Icon: BrainCircuit },
  { title: "Professional Editing", note: "Pace, sound, emotion", Icon: Film },
  { title: "Creative Storytelling", note: "Narratives people feel", Icon: Clapperboard },
  { title: "Visual Production", note: "Distinct visual systems", Icon: Sparkles },
  { title: "AI Workflows", note: "Smarter creative output", Icon: WandSparkles },
];

export function Skills() {
  return (
    <section id="services" className="section section-dark">
      <SectionHeading
        index="02"
        eyebrow="Expertise"
        title="Craft, sharpened by intelligent tools."
        description="A hybrid practice for brands, creators, and teams that need thoughtful content with visual impact."
        light
      />
      <div className="skills-list">
        {skills.map(({ title, note, Icon }, index) => (
          <article className="skill-row reveal" key={title}>
            <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}