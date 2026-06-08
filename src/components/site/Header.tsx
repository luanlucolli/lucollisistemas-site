import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoImage from "@/assets/lucolli-logo.png.png";
import { WHATSAPP_URL } from "./contact";

const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // aumentei um pouco pra não engatilhar tão fácil
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-in-out ${
        scrolled ? "bg-[var(--color-ink)]/95 backdrop-blur-md border-transparent shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logoImage} alt="Luçolli Sistemas" className="h-7 md:h-9 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[var(--color-bone)]/78 hover:text-[var(--color-rust)] text-sm font-medium tracking-[-0.01em] transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[var(--color-rust)] text-[var(--color-bone)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--color-bone)] transition-all border-2 border-[var(--color-rust)]"
          >
            Solicitar diagnóstico
          </a>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="bg-[var(--color-rust)] text-[var(--color-bone)] p-2.5 border-2 border-[var(--color-rust)]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="text-[var(--color-bone)] p-2.5 border-2 border-[var(--color-bone)]/30"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--color-bone)]/10 bg-[var(--color-ink)]">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-[var(--color-bone)] py-3 border-b border-[var(--color-bone)]/10 font-medium"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
