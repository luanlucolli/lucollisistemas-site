import { siteCopy } from "@/config/copy";
import { MonitorSmartphone, Database, Workflow } from "lucide-react";

// Adicionamos ícones para dar uma âncora visual em cada card
const CARD_VISUALS = {
  "01": { invert: false, icon: MonitorSmartphone },
  "02": { invert: true, icon: Database },
  "03": { invert: false, icon: Workflow },
} as const;

export function Solucoes() {
  return (
    <section id="solucoes" className="relative z-10 border-b-2 border-[var(--color-bone)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          {/* Badge novo para chamar a atenção logo de cara */}
          <span className="inline-block bg-[var(--color-rust)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest px-3 py-1.5 mb-6 border-2 border-[var(--color-rust)] brutal-shadow">
            Nossas Especialidades
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[var(--color-bone)]">
            {siteCopy.solucoes.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[var(--color-bone)]/75 leading-relaxed font-medium">
            {siteCopy.solucoes.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {siteCopy.solucoes.cards.map((c) => {
            const visual = CARD_VISUALS[c.id as keyof typeof CARD_VISUALS];
            const dark = visual.invert;
            const Icon = visual.icon;

            return (
              <div
                key={c.num}
                className={`group relative z-20 border-2 border-[var(--color-bone)] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0_var(--color-rust)] ${
                  dark
                    ? "bg-[var(--color-bone)] text-[var(--color-ink)]"
                    : "bg-[var(--color-ink-2)] text-[var(--color-bone)]"
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  {/* Container do ícone com efeito de hover */}
                  <div
                    className={`p-3 border-2 transition-colors ${
                      dark
                        ? "border-[var(--color-ink)] bg-[var(--color-bone-2)] text-[var(--color-ink)] group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bone)]"
                        : "border-[var(--color-bone)] bg-[var(--color-ink)] text-[var(--color-bone)] group-hover:bg-[var(--color-bone)] group-hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  {/* Número maior e mais impactante */}
                  <span className="text-[var(--color-rust)] font-display font-bold text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {c.num}
                  </span>
                </div>

                <div className="mb-6 pb-6 border-b-2 border-current/20">
                  <h3 className="font-display text-xl md:text-[1.75rem] font-bold leading-[1.08] tracking-[-0.02em]">
                    {c.title}
                  </h3>
                  <p
                    className={`mt-4 text-base md:text-lg leading-relaxed font-medium ${
                      dark ? "text-[var(--color-ink)]/80" : "text-[var(--color-bone)]/80"
                    }`}
                  >
                    {c.text}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2.5">
                  {c.items.map((i) => (
                    <li
                      key={i}
                      className={`text-sm font-mono px-3 py-1.5 border-2 transition-colors ${
                        dark
                          ? "border-[var(--color-ink)]/20 text-[var(--color-ink)]/80 group-hover:border-[var(--color-ink)]/60"
                          : "border-[var(--color-bone)]/30 text-[var(--color-bone)]/90 group-hover:border-[var(--color-bone)]/70"
                      }`}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
