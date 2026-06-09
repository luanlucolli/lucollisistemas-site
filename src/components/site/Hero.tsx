import { ArrowRight } from "lucide-react";
import { siteCopy } from "@/config/copy";
import { WHATSAPP_URL } from "./contact";

export function Hero() {
  return (
    <section id="top" className="relative z-10">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-32 pb-14 md:pt-40 md:pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative z-10">
          <h1 className="max-w-4xl font-display text-[2.75rem] leading-[0.98] sm:text-5xl md:text-[3.9rem] lg:text-[4.35rem] font-bold tracking-[-0.03em] text-[var(--color-bone)]">
            {siteCopy.hero.titleStart}{" "}
            <span className="inline-block bg-gradient-to-t from-[var(--color-rust)] from-90% to-transparent to-90% text-[var(--color-bone)] px-2">
              {siteCopy.hero.titleHighlight}
            </span>{" "}
            {siteCopy.hero.titleEnd}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[var(--color-bone)]/74 leading-relaxed">
            {siteCopy.hero.description}
          </p>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-[var(--color-bone)]/92 font-medium leading-relaxed">
            {siteCopy.hero.eyebrow}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 relative z-20">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[var(--color-rust)] text-[var(--color-bone)] px-6 py-4 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-bone)] brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-ink)] transition-all"
          >
              {siteCopy.hero.primaryCta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-bone)] px-6 py-4 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-bone)] hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
            >
              {siteCopy.hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* coluna direita vazia, para manter o grid segurando a barra no layout */}
        <div />
      </div>
    </section>
  );
}
