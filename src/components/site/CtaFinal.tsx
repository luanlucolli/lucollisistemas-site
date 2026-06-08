import { ArrowRight, MessageCircle } from "lucide-react";
import nodesAsset from "@/assets/nodes-network.png.asset.json";
import { WHATSAPP_URL } from "./contact";

export function CtaFinal() {
  return (
    <section id="contato" className="relative bg-[var(--color-ink)] overflow-hidden border-b-2 border-[var(--color-rust)]">
      <img
        src={nodesAsset.url}
        alt=""
        aria-hidden
        className="absolute -right-20 -top-10 w-[700px] max-w-none opacity-[0.12] pointer-events-none select-none"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-rust)] mb-4">
          // 05 — Próximo passo
        </div>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--color-bone)] max-w-4xl leading-[1.05]">
          Vamos transformar um processo manual em uma{" "}
          <span className="text-[var(--color-rust)]">ferramenta simples</span> de usar?
        </h2>
        <p className="mt-6 text-[var(--color-bone)]/75 text-base md:text-lg max-w-2xl">
          Solicite um diagnóstico e descubra o que faz mais sentido para sua empresa: site,
          sistema, automação ou integração.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[var(--color-rust)] text-[var(--color-bone)] px-6 py-4 font-semibold uppercase tracking-wide text-sm border-2 border-[var(--color-rust)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-bone)] transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Chamar no WhatsApp
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
    </section>
  );
}
