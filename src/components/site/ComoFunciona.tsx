import { MessageSquare, Map, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Diagnóstico Real",
    desc: "Mapeamos seu processo atual e identificamos os gargalos. Sem tentar empurrar ferramentas que não fazem sentido pro seu momento.",
  },
  {
    id: "02",
    icon: Map,
    title: "Estratégia",
    desc: "Desenhamos a solução ideal focando no que traz resultado rápido. Menos firula técnica, mais eficiência pro dia a dia.",
  },
  {
    id: "03",
    icon: Code2,
    title: "Execução",
    desc: "Desenvolvimento sob medida. Criamos seu site, sistema ou automação integrando com as plataformas que sua equipe já domina.",
  },
  {
    id: "04",
    icon: Rocket,
    title: "Lançamento",
    desc: "Colocamos tudo no ar, testamos na prática e damos o suporte inicial. Sua operação começa a rodar mais leve imediatamente.",
  },
];

export function ComoFunciona() {
  return (
    <section 
      id="como-funciona" 
      className="relative z-10 bg-[var(--color-bone)] text-[var(--color-ink)] border-b-2 border-[var(--color-ink)]"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* lado esquerdo: travado (sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[var(--color-ink)]">
              Menos teoria.<br/>
              Mais <span className="text-[var(--color-rust)]">prática.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[var(--color-ink)]/75 leading-relaxed font-medium">
              Nosso método é direto ao ponto. Entendemos a raiz do problema e construímos exatamente o que você precisa pra resolver, sem adicionar complexidade à toa.
            </p>
          </div>

          {/* lado direito: scroll dos passos */}
          <div className="lg:w-2/3 flex flex-col gap-6 md:gap-8">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="group bg-[var(--color-bone-2)] border-2 border-[var(--color-ink)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-[8px_8px_0_var(--color-rust)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 bg-[var(--color-ink)] text-[var(--color-bone)] border-2 border-[var(--color-ink)] group-hover:bg-[var(--color-rust)] group-hover:text-[var(--color-bone)] transition-colors">
                    <Icon strokeWidth={2} className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-[var(--color-rust)] uppercase tracking-wider">
                        Fase {step.id}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-[var(--color-ink)]/80 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}