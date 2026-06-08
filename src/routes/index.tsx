import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Solucoes } from "@/components/site/Solucoes";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Projetos } from "@/components/site/Projetos";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luçolli Sistemas — Sites, sistemas e automações sob medida" },
      {
        name: "description",
        content:
          "Criamos sites, sistemas web e automações sob medida. Integrações com WhatsApp, planilhas, APIs e webhooks para empresas que querem reduzir tarefas manuais.",
      },
      { property: "og:title", content: "Luçolli Sistemas — Tecnologia prática para empresas" },
      {
        property: "og:description",
        content:
          "Sites, sistemas e automações sob medida. Integrações com WhatsApp, planilhas, APIs e webhooks.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Solucoes />
        <ComoFunciona />
        <Projetos />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
