const CASES = [
  { tag: "Site", title: "Site institucional personalizado", text: "Criação de site responsivo para apresentar serviços, facilitar contato e melhorar a presença digital da empresa." },
  { tag: "Sistema", title: "Sistema web com backend", text: "Desenvolvimento de painel para organizar informações internas, cadastros e processos operacionais." },
  { tag: "Integração", title: "Integração via webhook", text: "Automação para receber dados de uma plataforma e enviar para outra API, reduzindo preenchimento manual." },
  { tag: "Landing Page", title: "Landing page de captação", text: "Página focada em conversão, com formulário e direcionamento para atendimento comercial." },
];

export function Projetos() {
  return (
    <section id="projetos" className="bg-[var(--color-ink-2)] border-b-2 border-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-rust)] mb-4">
            // 04 — Projetos
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-bone)]">
            Projetos que já saíram do papel.
          </h2>
          <p className="mt-4 text-[var(--color-bone)]/70 text-base md:text-lg">
            Antes da Luçolli Sistemas, já foram entregues sites, aplicações e integrações para
            negócios reais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {CASES.map((c, i) => (
            <article
              key={c.title}
              className="bg-[var(--color-ink-2)] border-2 border-[var(--color-bone)] flex flex-col"
            >
              {/* Área reservada para print real */}
              <div className="aspect-[16/9] border-b-2 border-[var(--color-bone)] bg-[var(--color-ink-2)] relative overflow-hidden">
                <div className="absolute inset-3 border border-dashed border-[var(--color-bone)]/30 flex items-center justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-bone)]/40">
                    print do projeto
                  </span>
                </div>
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[var(--color-bone)]/50">
                  case_{String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-6 md:p-7">
                <span className="inline-block bg-[var(--color-rust)] text-[var(--color-bone)] text-[10px] font-mono uppercase tracking-widest px-2 py-1 mb-4">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--color-bone)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-bone)]/70 leading-relaxed">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
