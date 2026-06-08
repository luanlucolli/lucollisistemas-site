import { ArrowRight } from "lucide-react";
import nodesNetwork from "@/assets/conexoes-laranja-diagonal-transparente.svg";
import { WHATSAPP_URL } from "./contact";

export function Hero() {
  return (
    <section id="top" className="relative">
      {/* figura gigante vazando pras seções de cima e de baixo */}
      <img
        src={nodesNetwork}
        alt=""
        aria-hidden
        className="absolute top-[40%] md:top-1/2 -translate-y-1/2 right-0 translate-x-[40%] rotate-[330deg] md:translate-x-[48%] lg:translate-x-[30%] xl:translate-x-[24%] w-[1650px] md:w-[2200px] lg:w-[2450px] xl:w-[2900px] max-w-none object-contain pointer-events-none opacity-40 lg:opacity-70 [mask-image:linear-gradient(to_right,transparent_0%,black_40%)] lg:[mask-image:linear-gradient(to_right,transparent_10%,black_50%)] z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-32 pb-14 md:pt-40 md:pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative z-10">
          <h1 className="font-display text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[var(--color-bone)]">
            Sites, sistemas e automações que{" "}
            <span className="inline-block bg-gradient-to-t from-[var(--color-rust)] from-90% to-transparent to-90% text-[var(--color-bone)] px-2">
              organizam
            </span>{" "}
            seu negócio.
          </h1>
          <p className="mt-6 text-base md:text-lg text-[var(--color-bone)]/75 max-w-xl leading-relaxed">
            Criamos soluções digitais sob medida para empresas que precisam captar clientes,
            integrar ferramentas e reduzir tarefas manuais.
          </p>
          <p className="mt-4 text-sm md:text-base text-[var(--color-bone)] font-medium max-w-xl">
            Integrações com WhatsApp, planilhas, APIs e webhooks. Tudo feito para o seu processo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 relative z-20">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--color-rust)] text-[var(--color-bone)] px-6 py-4 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-bone)] brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-ink)] transition-all"
            >
              Solicitar diagnóstico
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-bone)] px-6 py-4 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-bone)] hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
            >
              Ver soluções
            </a>
          </div>
        </div>

        {/* coluna direita vazia, para manter o grid segurando a barra no layout */}
        <div />
      </div>
    </section>
  );
}
