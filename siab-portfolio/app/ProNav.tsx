"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
];

export default function ProNav({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="proNav">
      <div className="proContainer proNavInner">
        <a href="#top" className="proLogo" onClick={() => setOpen(false)}>
          Israfil<span>.</span>
        </a>

        <nav className={`proNavLinks ${open ? "isOpen" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="proNavMobileOnly" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="proNavRight">
          <a href={`mailto:${email}`} className="proBtn proBtnPrimary proBtnSmall">
            Contact
          </a>
          <button
            type="button"
            className="proMenuToggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
