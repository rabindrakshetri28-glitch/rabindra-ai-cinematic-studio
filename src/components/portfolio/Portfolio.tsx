import { ArrowUpRight, Play } from "lucide-react";
import aiFilm from "@/assets/project-ai-film.jpg";
import documentary from "@/assets/project-documentary.jpg";
import motion from "@/assets/project-motion.jpg";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Beyond the Known",
    category: "AI Video",
    description: "A speculative film where Himalayan memory meets an imagined future.",
    image: aiFilm,
    className: "project-card--wide",
  },
  {
    title: "Hands of Time",
    category: "Video Editing",
    description: "A quiet portrait shaped through observation, rhythm, and natural sound.",
    image: documentary,
    className: "",
  },
  {
    title: "Liquid Signal",
    category: "Creative Project",
    description: "An experimental visual study exploring motion, texture, and light.",
    image: motion,
    className: "",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="section section-work">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Stories made to move."
        description="A selection of concept films, edits, and visual experiments. Placeholder projects are ready to be replaced with your work."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card reveal ${project.className}`} key={project.title}>
            <a href="#contact" className="project-media" aria-label={`View ${project.title}`}>
              <img src={project.image} alt="" width={1200} height={800} loading="lazy" />
              <span className="project-play"><Play fill="currentColor" /></span>
              <span className="project-index">0{index + 1}</span>
            </a>
            <div className="project-meta">
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a href="#contact" aria-label={`View ${project.title}`}><ArrowUpRight /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}