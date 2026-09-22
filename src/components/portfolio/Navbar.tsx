import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="brand-mark" href="#home" aria-label="Rabindra Kshetri, home">
        <span>RK</span>
        <strong>Rabindra Kshetri</strong>
      </a>

      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>

      <Button asChild variant="editorial" size="editorial" className="nav-contact">
        <a href="#contact">Start a project</a>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}