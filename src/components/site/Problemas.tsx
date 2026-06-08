import { MessageSquareOff, Repeat, Unplug, FileWarning } from "lucide-react";

const ITEMS = [
  {
    icon: MessageSquareOff,
    title: "Atendimento espalhado",
    text: "Contatos, pedidos e orçamentos perdidos entre WhatsApp, planilhas e anotações.",
  },
  {
    icon: Repeat,
    title: "Processos manuais",
    text: "Tarefas repetitivas que tomam tempo da equipe e aumentam o risco de erro.",
  },
  {
    icon: Unplug,
    title: "Ferramentas desconectadas",
    text: "Sistemas, formulários e planilhas que não conversam entre si.",
  },
  {
    icon: FileWarning,
    title: "Site sem resultado",
    text: "Páginas bonitas, mas que não explicam bem o serviço nem geram contatos.",
  },
];

export function Problemas() {
  return (
    <section className="relative border-b-2 border-[var(--color-bone)]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-bone)]">
            Sua empresa não precisa de mais complicação.
          </h2>
          <p className="mt-4 text-[var(--color-bone)]/70 text-base md:text-lg">
            Precisa de ferramentas simples, bem feitas e conectadas com o dia a dia do negócio.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5 md:gap-6">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-[var(--color-ink-2)] border-2 border-[var(--color-bone)] p-6 md:p-8 hover:brutal-shadow-rust transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <Icon
                  className="h-8 w-8 text-[var(--color-rust)]"
                  strokeWidth={1.75}
                />
                <span className="text-[10px] font-mono text-[var(--color-bone)]/40 uppercase tracking-widest">
                  Problema
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--color-bone)]">
                {title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-[var(--color-bone)]/70 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
