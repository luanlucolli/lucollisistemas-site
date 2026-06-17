import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import logoImage from "@/assets/lucolli-logo.png.png";
import { siteCopy } from "@/config/copy";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, INSTAGRAM, INSTAGRAM_URL, EMAIL } from "./contact";

export function Footer() {
  return (
    <footer id="contato" className="bg-[var(--color-ink)] text-[var(--color-bone)] border-t-2 border-[var(--color-bone)] relative z-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16">
        
        {/* Coluna 1: Logo e Descrição */}
        <div className="flex flex-col items-start">
          <img src={logoImage} alt={siteCopy.footer.logoAlt} className="h-10 md:h-12 w-auto mb-6" />
          <p className="text-[var(--color-bone)]/80 text-base md:text-lg max-w-md leading-relaxed font-medium mb-8">
            {siteCopy.footer.description}
          </p>
          
          {/* CTA Brutalista direto no Footer */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-[var(--color-rust)] text-[var(--color-bone)] px-6 py-3 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-bone)] brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-ink)] transition-all"
          >
            Falar no WhatsApp
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[var(--color-bone)] mb-6 pb-2 border-b-2 border-[var(--color-bone)]/20">
            {siteCopy.footer.navTitle}
          </h3>
          <ul className="space-y-4 text-base font-medium">
            {siteCopy.footer.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[var(--color-bone)]/75 hover:text-[var(--color-rust)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-rust)] hidden md:block opacity-0 -ml-3 transition-all"></span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[var(--color-bone)] mb-6 pb-2 border-b-2 border-[var(--color-bone)]/20">
            {siteCopy.footer.contactTitle}
          </h3>
          <ul className="space-y-4 text-base font-medium">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[var(--color-bone)]/75 hover:text-[var(--color-rust)] transition-colors"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[var(--color-bone)]/75 hover:text-[var(--color-rust)] transition-colors"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                @{INSTAGRAM}
              </a>
            </li>
            <li>
              <a 
                href={`mailto:${EMAIL}`} 
                className="group flex items-center gap-3 text-[var(--color-bone)]/75 hover:text-[var(--color-rust)] transition-colors break-all"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform shrink-0" strokeWidth={2} />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Faixa Inferior */}
      <div className="border-t-2 border-[var(--color-bone)]/10 bg-[var(--color-ink-2)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-sm font-mono text-[var(--color-bone)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span>{siteCopy.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}