import { ArrowDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section section-about">
      <SectionHeading index="01" eyebrow="Introduction" title="A creative practice built between instinct and technology." />
      <div className="about-grid reveal">
        <p className="about-lead">
          I’m Rabindra Kshetri, a content creator and developer focused on creating engaging visual
          experiences.
        </p>
        <div className="about-copy">
          <p>
            My work combines creative storytelling, professional video editing, and AI-powered tools
            to transform early ideas into compelling, audience-ready content.
          </p>
          <p>
            From the first frame to the final cut, I care about rhythm, feeling, and the details that
            make a story memorable.
          </p>
        </div>
        <a className="round-link" href="#services" aria-label="Explore my services"><ArrowDown /></a>
      </div>
    </section>
  );
}