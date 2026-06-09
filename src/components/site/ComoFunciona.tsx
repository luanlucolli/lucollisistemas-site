import { MessageSquare, Map, Code2, Rocket } from "lucide-react";
import { siteCopy } from "@/config/copy";

const STEP_ICONS = {
  "01": MessageSquare,
  "02": Map,
  "03": Code2,
  "04": Rocket,
} as const;

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
              {siteCopy.comoFunciona.titleLine1}
              <br />
              {siteCopy.comoFunciona.titleLine2}{" "}
              <span className="text-[var(--color-rust)]">{siteCopy.comoFunciona.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[var(--color-ink)]/75 leading-relaxed font-medium">
              {siteCopy.comoFunciona.description}
            </p>
          </div>

          {/* lado direito: scroll dos passos */}
          <div className="lg:w-2/3 flex flex-col gap-6 md:gap-8">
            {siteCopy.comoFunciona.steps.map((step) => {
              const Icon = STEP_ICONS[step.id];
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
                        {siteCopy.comoFunciona.phasePrefix} {step.id}
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
