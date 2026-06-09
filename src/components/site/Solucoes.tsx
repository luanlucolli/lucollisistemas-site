import { siteCopy } from "@/config/copy";

const CARD_VISUALS = {
  "01": { invert: false },
  "02": { invert: true },
  "03": { invert: false },
} as const;

export function Solucoes() {
  return (
    <section id="solucoes" className="relative z-10 border-b-2 border-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12 md:mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[var(--color-bone)]">
            {siteCopy.solucoes.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[var(--color-bone)]/70 leading-relaxed">
            {siteCopy.solucoes.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
          {siteCopy.solucoes.cards.map((c) => {
            const dark = CARD_VISUALS[c.id].invert;
            return (
              <div
                key={c.num}
                className={`relative z-20 border-2 border-[var(--color-bone)] p-6 md:p-8 flex flex-col ${
                  dark
                    ? "bg-[var(--color-bone)] text-[var(--color-ink)]"
                    : "bg-[var(--color-ink-2)] text-[var(--color-bone)]"
                }`}
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-current">
                  <span className="text-xs font-mono uppercase tracking-widest opacity-60">
                    {siteCopy.solucoes.badgePrefix} {c.num}
                  </span>
                  <span className="text-[var(--color-rust)] font-display font-bold text-2xl">
                    {c.num}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-[1.75rem] font-bold leading-[1.08] tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p
                  className={`mt-3 text-sm md:text-base leading-relaxed ${
                    dark ? "text-[var(--color-ink)]/75" : "text-[var(--color-bone)]/70"
                  }`}
                >
                  {c.text}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.items.map((i) => (
                    <li
                      key={i}
                      className={`text-xs font-mono px-2.5 py-1.5 border ${
                        dark
                          ? "border-[var(--color-ink)]/40 text-[var(--color-ink)]"
                          : "border-[var(--color-bone)]/40 text-[var(--color-bone)]"
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
