const STEPS = [
  {
    n: "01",
    t: "Diagnóstico",
    d: "Entendemos seu processo e identificamos onde a tecnologia pode ajudar.",
  },
  {
    n: "02",
    t: "Planejamento",
    d: "Definimos a solução ideal sem criar complexidade desnecessária.",
  },
  {
    n: "03",
    t: "Desenvolvimento",
    d: "Construímos a ferramenta com foco em uso real, clareza e performance.",
  },
  {
    n: "04",
    t: "Entrega",
    d: "Publicamos, testamos e acompanhamos os ajustes iniciais.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-[var(--color-ink-2)] border-b-2 border-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12 md:mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[var(--color-bone)]">
            Do problema à solução, sem complicar.
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[var(--color-bone)]/70 leading-relaxed">
            Um processo direto para transformar rotina manual em algo mais claro, organizado e fácil
            de usar no dia a dia.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-px bg-[var(--color-bone)] border-2 border-[var(--color-bone)]">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-[var(--color-ink-2)] p-6 md:p-8 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display font-bold text-5xl md:text-6xl text-[var(--color-rust)] leading-none">
                  {s.n}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-bone)]/40">
                  etapa
                </span>
              </div>
              <h3 className="font-display text-xl md:text-[1.75rem] font-bold tracking-[-0.02em] leading-[1.08] text-[var(--color-bone)]">
                {s.t}
              </h3>
              <p className="mt-3 text-sm md:text-base text-[var(--color-bone)]/70 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
