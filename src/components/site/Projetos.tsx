import ibApoioImage from "@/assets/ibapoio.png";
import focoPromotoraImage from "@/assets/leadsuy3.focopromotora.com.br_.png";
import landingvilleImage from "@/assets/landingville.png";
import vbbTechImage from "@/assets/vbbtech.png";

const CASES = [
  {
    tag: "Site institucional",
    title: "IB Apoio Administrativo",
    text: "Site institucional para uma empresa de apoio administrativo, com foco em transmitir organização, segurança e eficiência operacional para negócios que precisam de suporte em rotinas administrativas.",
    image: ibApoioImage,
  },
  {
    tag: "Site institucional",
    title: "VBB Tech",
    text: "Site institucional para uma empresa de engenharia em Porto Alegre/RS, com foco em segurança, qualidade, responsabilidade técnica e cumprimento de prazos.",
    image: vbbTechImage,
  },
  {
    tag: "Sistema web",
    title: "Painel interno para gestão de leads",
    text: "Sistema criado para receber leads automaticamente via webhook, organizar os dados em um painel e permitir filtros por período e exportação CSV. Menos conferência manual, mais controle da operação.",
    image: focoPromotoraImage,
  },
  {
    tag: "Landing Page",
    title: "Landingville",
    text: "Página de captação criada para negócios locais, com diagnóstico rápido, apresentação de serviços, exemplos visuais e contato direto por WhatsApp ou Instagram.",
    image: landingvilleImage,
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="bg-[var(--color-ink)] border-b-2 border-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12 md:mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[var(--color-bone)]">
            Projetos que já saíram do papel.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-bone)]/70 text-base md:text-lg leading-relaxed">
            Projetos reais, desenvolvidos e entregues para clientes que precisavam melhorar sua
            presença digital, organizar operações e reduzir trabalho manual no dia a dia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="bg-[var(--color-ink-2)] border-2 border-[var(--color-bone)] flex flex-col overflow-hidden"
            >
              <div className="aspect-[16/9] border-b-2 border-[var(--color-bone)] bg-[var(--color-ink-2)] relative overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-7">
                <span className="inline-block bg-[var(--color-rust)] text-[var(--color-bone)] text-[10px] font-mono uppercase tracking-widest px-2 py-1 mb-4">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl md:text-[1.75rem] font-bold tracking-[-0.02em] leading-[1.08] text-[var(--color-bone)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[var(--color-bone)]/70 leading-relaxed">
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
