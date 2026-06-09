import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Solucoes } from "@/components/site/Solucoes";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { NetworkBackground } from "@/components/site/NetworkBackground";
import { Projetos } from "@/components/site/Projetos";
import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://lucollisistemas.com.br";
const SITE_NAME = "Luçolli Sistemas";

const PAGE_TITLE =
  "Luçolli Sistemas | Sites, sistemas e automações para empresas";
const PAGE_DESCRIPTION =
  "Criamos sites, sistemas web, automações e integrações com WhatsApp, planilhas, APIs e webhooks para empresas que querem reduzir trabalho manual.";
const PAGE_KEYWORDS =
  "sites para empresas, sistemas web, automações para empresas, integração WhatsApp, integração planilhas, APIs, webhooks, landing pages, desenvolvimento web, Luçolli Sistemas";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: PAGE_DESCRIPTION,
  email: "contato@lucollisistemas.com.br",
  sameAs: ["https://instagram.com/lucollisistemas"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-47-98480-2779",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "pt-BR",
  description: PAGE_DESCRIPTION,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Sites, sistemas web, automações e integrações sob medida para empresas.",
  areaServed: [
    {
      "@type": "Country",
      name: "Brasil",
    },
    {
      "@type": "State",
      name: "Santa Catarina",
    },
  ],
  serviceType: [
    "Criação de sites",
    "Criação de landing pages",
    "Desenvolvimento de sistemas web",
    "Automações para empresas",
    "Integrações com WhatsApp",
    "Integrações com planilhas",
    "Integrações com APIs e webhooks",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-47-98480-2779",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Serviços da Luçolli Sistemas",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Sites e Landing Pages",
      description:
        "Criação de sites institucionais e landing pages para empresas que precisam apresentar serviços com clareza e facilitar o contato.",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Sistemas Web",
      description:
        "Desenvolvimento de sistemas web sob medida para organizar dados, processos internos, clientes, relatórios e operações.",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Automações e Integrações",
      description:
        "Automações e integrações com WhatsApp, planilhas, APIs, webhooks, CRMs e e-mails automáticos.",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },
      {
        name: "keywords",
        content: PAGE_KEYWORDS,
      },
      {
        property: "og:title",
        content: PAGE_TITLE,
      },
      {
        property: "og:description",
        content: PAGE_DESCRIPTION,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/og-image.png`,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Luçolli Sistemas — sites, sistemas e automações para empresas",
      },
      {
        name: "twitter:title",
        content: PAGE_TITLE,
      },
      {
        name: "twitter:description",
        content: PAGE_DESCRIPTION,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/og-image.png`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: SITE_URL,
      },
    ],
  }),
  component: Index,
});

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] overflow-x-hidden">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={servicesSchema} />

      <Header />

      <main id="conteudo-principal">
        <div className="relative overflow-hidden">
          <NetworkBackground />
          <Hero />
          <Solucoes />
          <ComoFunciona />
        </div>
        <Projetos />
      </main>

      <Footer />
    </div>
  );
}