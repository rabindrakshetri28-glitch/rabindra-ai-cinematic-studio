import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rabindra-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="hero-shell" aria-labelledby="hero-title">
      <div className="hero-visual">
        <img
          src={heroImage}
          alt="A film editor at work overlooking Kathmandu and the Himalayas"
          width={1200}
          height={1504}
          fetchPriority="high"
        />
        <div className="hero-visual__shade" />
        <div className="hero-reel" aria-hidden="true">
          <Play fill="currentColor" />
          <span>Play reel</span>
          <span>01:24</span>
        </div>
        <p className="hero-manifesto">Ideas in motion.<br />Stories that stay.</p>
        <span className="hero-caption">Kathmandu · Available worldwide</span>
      </div>

      <div className="hero-copy">
        <div className="hero-copy__top">
          <span>Creative director · editor</span>
          <span>Selected work · 2026</span>
        </div>
        <div className="hero-copy__body">
          <p className="hero-kicker">Rabindra Kshetri</p>
          <h1 id="hero-title">Creating stories.<br />Shaping ideas.<br /><em>Powered by AI.</em></h1>
          <p className="hero-summary">
            I create engaging digital content through human storytelling, AI-powered video editing,
            and professional post-production.
          </p>
          <div className="hero-actions">
            <Button asChild variant="editorial" size="editorial">
              <a href="#work">View my work <ArrowDownRight /></a>
            </Button>
            <Button asChild variant="editorial-outline" size="editorial">
              <a href="#contact">Let’s work together <ArrowUpRight /></a>
            </Button>
          </div>
        </div>
        <div className="hero-copy__footer">
          <span>Content</span><i />
          <span>Film</span><i />
          <span>AI</span>
        </div>
      </div>
    </section>
  );
}