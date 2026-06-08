import logoImage from "@/assets/lucolli-logo.png.png";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, INSTAGRAM, INSTAGRAM_URL, EMAIL } from "./contact";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink-2)] text-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
        <div>
          <img src={logoImage} alt="Luçolli Sistemas" className="h-9 w-auto mb-5" />
          <p className="text-[var(--color-bone)]/70 text-sm md:text-base max-w-sm leading-relaxed">
            Sites, sistemas e automações para empresas.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-rust)] mb-4">
            Navegar
          </div>
          <ul className="space-y-2.5 text-sm md:text-base">
            <li><a href="#solucoes" className="hover:text-[var(--color-rust)]">Soluções</a></li>
            <li><a href="#como-funciona" className="hover:text-[var(--color-rust)]">Como funciona</a></li>
            <li><a href="#projetos" className="hover:text-[var(--color-rust)]">Projetos</a></li>
            <li><a href="#contato" className="hover:text-[var(--color-rust)]">Contato</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-rust)] mb-4">
            Contato
          </div>
          <ul className="space-y-2.5 text-sm md:text-base">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--color-rust)]">
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--color-rust)]">
                Instagram · @{INSTAGRAM}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-[var(--color-rust)]">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-bone)]/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 text-xs font-mono text-[var(--color-bone)]/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© Luçolli Sistemas. Soluções digitais sob medida.</span>
          <span>v1.0 / {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
