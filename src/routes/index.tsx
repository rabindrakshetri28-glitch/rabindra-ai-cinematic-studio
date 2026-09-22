import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabindra Kshetri — Creative Editor & Content Creator" },
      {
        name: "description",
        content: "Portfolio of Rabindra Kshetri — content creation, creative storytelling, professional video editing, and AI-powered visual work.",
      },
      { property: "og:title", content: "Rabindra Kshetri — Creative Editor & Content Creator" },
      {
        property: "og:description",
        content: "Creative storytelling, video editing, and AI-powered visual content by Rabindra Kshetri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}