import ibApoioImage from "@/assets/ibapoio.png";
import focoPromotoraImage from "@/assets/leadsuy3.focopromotora.com.br_.png";
import landingvilleImage from "@/assets/landingville.png";
import vbbTechImage from "@/assets/vbbtech.png";
import { siteCopy } from "@/config/copy";

const CASE_IMAGES = {
  "ib-apoio": ibApoioImage,
  "vbb-tech": vbbTechImage,
  leads: focoPromotoraImage,
  landingville: landingvilleImage,
} as const;

const CASE_IMAGE_ALTS = {
  "ib-apoio":
    "Captura do site institucional IB Apoio Administrativo desenvolvido pela Luçolli Sistemas",
  "vbb-tech": "Captura do site institucional VBB Tech desenvolvido pela Luçolli Sistemas",
  leads: "Captura do painel interno para gestão de leads desenvolvido pela Luçolli Sistemas",
  landingville: "Captura da landing page Landingville criada como projeto próprio de captação",
} as const;

export function Projetos() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="bg-[var(--color-ink)] border-b-2 border-[var(--color-bone)]"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2
            id="projetos-title"
            className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[var(--color-bone)]"
          >
            {siteCopy.projetos.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[var(--color-bone)]/70 text-base md:text-lg leading-relaxed font-medium">
            {siteCopy.projetos.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {siteCopy.projetos.cards.map((c) => (
            <article
              key={c.title}
              aria-labelledby={`projeto-${c.id}`}
              className="bg-[var(--color-ink-2)] border-2 border-[var(--color-bone)] flex flex-col overflow-hidden"
            >
              <div className="aspect-[16/9] border-b-2 border-[var(--color-bone)] bg-[var(--color-ink-2)] relative overflow-hidden">
                <img
                  src={CASE_IMAGES[c.id]}
                  alt={CASE_IMAGE_ALTS[c.id]}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-7">
                <span className="inline-block bg-[var(--color-rust)] text-[var(--color-bone)] text-[10px] font-mono uppercase tracking-widest px-2 py-1 mb-4">
                  {c.tag}
                </span>
                <h3
                  id={`projeto-${c.id}`}
                  className="font-display text-xl md:text-[1.75rem] font-bold tracking-[-0.02em] leading-[1.08] text-[var(--color-bone)]"
                >
                  {c.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-[var(--color-bone)]/70 leading-relaxed font-medium">
                  {c.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
