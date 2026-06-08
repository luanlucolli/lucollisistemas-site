import { ArrowRight } from "lucide-react";
import nodesAsset from "@/assets/nodes-network.png.asset.json";
import { WHATSAPP_URL } from "./contact";

export function Hero() {
  return (
    <section id="top" className="bg-[var(--color-ink)] border-b-2 border-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-widest text-[var(--color-bone)]/70">
            <span className="h-px w-8 bg-[var(--color-rust)]" />
            Luçolli Sistemas / v1.0
          </div>
          <h1 className="font-display text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[var(--color-bone)]">
            Sites, sistemas e automações que{" "}
            <span className="bg-[var(--color-rust)] text-[var(--color-bone)] px-2">organizam</span>{" "}
            seu negócio.
          </h1>
          <p className="mt-6 text-base md:text-lg text-[var(--color-bone)]/75 max-w-xl leading-relaxed">
            Criamos soluções digitais sob medida para empresas que precisam captar clientes,
            integrar ferramentas e reduzir tarefas manuais.
          </p>
          <p className="mt-4 text-sm md:text-base text-[var(--color-bone)] font-medium max-w-xl">
            Integrações com WhatsApp, planilhas, APIs e webhooks. Tudo feito para o seu processo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-bone)]/70 font-mono">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[var(--color-rust)]" /> Fácil de usar
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[var(--color-rust)]" /> Menos retrabalho
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[var(--color-rust)]" /> Mais controle
            </li>
          </ul>
        </div>

        {/* Lado direito — bloco com imagem dos nós (substituível) */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 right-6 bottom-6 bg-[var(--color-rust)]" aria-hidden />
          <div className="relative bg-[var(--color-ink-2)] border-2 border-[var(--color-bone)] aspect-[4/5] sm:aspect-[5/4] lg:aspect-square overflow-hidden">
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--color-bone)]/60 z-10">
              <span>// rede.integrações</span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 bg-[var(--color-rust)]" />
                live
              </span>
            </div>
            <img
              src={nodesAsset.url}
              alt="Diagrama de integrações: WhatsApp, APIs e webhooks conectados"
              className="absolute inset-0 w-full h-full object-contain p-6"
            />
            <div className="absolute bottom-0 left-0 right-0 border-t-2 border-[var(--color-bone)] bg-[var(--color-ink)] px-4 py-3 grid grid-cols-3 gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--color-bone)]/70">
              <div>
                <div className="text-[var(--color-rust)] font-bold text-base">WHATSAPP</div>
                <div>canal ativo</div>
              </div>
              <div>
                <div className="text-[var(--color-rust)] font-bold text-base">APIs</div>
                <div>conectadas</div>
              </div>
              <div>
                <div className="text-[var(--color-rust)] font-bold text-base">WEBHOOKS</div>
                <div>em fluxo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
