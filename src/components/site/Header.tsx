import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import logoImage from "@/assets/lucolli-logo.png.png";
import { siteCopy } from "@/config/copy";
import { WHATSAPP_URL } from "./contact";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitora o scroll para aplicar o blur no fundo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne o scroll da página quando o menu mobile estiver aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || open
          ? "bg-[var(--color-ink)]/95 backdrop-blur-md border-b-2 border-[var(--color-bone)]"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between relative z-50">
        <a href="#top" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoImage} alt={siteCopy.header.logoAlt} className="h-7 md:h-9 w-auto" />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {siteCopy.header.nav.map((n) => (
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
            {siteCopy.header.primaryCta}
          </a>
        </nav>

        {/* Controles Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={siteCopy.header.whatsappAriaLabel}
            className="bg-[var(--color-rust)] text-[var(--color-bone)] p-2 border-2 border-[var(--color-rust)] hover:bg-[var(--color-rust-2)] transition-colors"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={siteCopy.header.menuAriaLabel}
            className="text-[var(--color-bone)] p-2 border-2 border-[var(--color-bone)] hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
          >
            {open ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Fullscreen Overlay) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] md:top-[80px] h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] bg-[var(--color-ink)] transition-all duration-300 ease-in-out origin-top ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col h-full px-5 py-8 overflow-y-auto">
          <div className="flex flex-col gap-2 mb-8">
            {siteCopy.header.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between text-[var(--color-bone)] text-3xl font-display font-bold py-5 border-b-2 border-[var(--color-bone)]/10 hover:border-[var(--color-rust)] transition-colors"
              >
                <span>{n.label}</span>
                <ArrowRight className="h-6 w-6 text-[var(--color-rust)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-bone)]/50 mb-4">
              Iniciar projeto
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-[var(--color-rust)] text-[var(--color-bone)] px-6 py-5 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-rust)] brutal-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              {siteCopy.header.primaryCta}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}