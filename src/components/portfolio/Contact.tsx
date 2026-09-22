import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true"><span>RK</span></div>
      <div className="contact-copy reveal">
        <span className="contact-kicker">Have a project in mind?</span>
        <h2>Let’s create<br /><em>something memorable.</em></h2>
        <p>
          Whether you need creative content, AI-powered video editing, or professional editing,
          let’s turn your idea into something people remember.
        </p>
        <Button asChild variant="editorial" size="editorial">
          <a href="mailto:hello@rabindrakshetri.com">Get in touch <ArrowUpRight /></a>
        </Button>
      </div>
      <div className="contact-links">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube <ArrowUpRight /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
      </div>
    </section>
  );
}