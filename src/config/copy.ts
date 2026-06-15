export const siteCopy = {
  header: {
    logoAlt: "Luçolli Sistemas",
    nav: [
      { href: "#solucoes", label: "Soluções" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#projetos", label: "Projetos" },
      { href: "#contato", label: "Contato" },
    ],
    primaryCta: "Falar no WhatsApp",
    whatsappAriaLabel: "WhatsApp",
    menuAriaLabel: "Menu",
  },

  hero: {
    titleStart: "Sites, sistemas e automações para",
    titleHighlight: "organizar",
    titleEnd: "a rotina da sua empresa.",
    description:
      "Criamos ferramentas sob medida para empresas que precisam melhorar o atendimento, centralizar informações e reduzir tarefas manuais.",
    eyebrow: "Sites, painéis internos e integrações com WhatsApp, planilhas, APIs e webhooks.",
    primaryCta: "Chamar no WhatsApp",
    secondaryCta: "Ver soluções",
  },

  solucoes: {
    title: "A solução certa depende da sua rotina.",
    description:
      "Pode ser um site para explicar melhor o seu serviço, um sistema para organizar dados ou uma automação para evitar trabalho repetido.",
    badgePrefix: "Solução",
    cards: [
      {
        id: "01",
        num: "01",
        title: "Sites e Landing Pages",
        text: "Para apresentar sua empresa com clareza, facilitar o contato e ajudar o cliente a entender o que você oferece.",
        items: [
          "Sites institucionais",
          "Páginas de venda",
          "Formulários integrados",
          "Botão para WhatsApp",
          "SEO básico",
        ],
      },
      {
        id: "02",
        num: "02",
        title: "Sistemas Web",
        text: "Para tirar informações de planilhas soltas, organizar processos internos e acompanhar tudo em um painel próprio.",
        items: [
          "Acesso seguro",
          "Painel de controle",
          "Gestão de clientes",
          "Relatórios simples",
          "Dados centralizados",
        ],
      },
      {
        id: "03",
        num: "03",
        title: "Automações e Integrações",
        text: "Para conectar ferramentas, preencher dados automaticamente e reduzir tarefas que hoje são feitas no braço.",
        items: [
          "WhatsApp",
          "Planilhas automáticas",
          "Integração de sistemas",
          "Avisos e alertas",
          "E-mails automáticos",
        ],
      },
    ],
  },

  comoFunciona: {
    titleLine1: "A gente entende o problema.",
    titleLine2: "Depois constrói a",
    titleHighlight: "ferramenta.",
    description:
      "O processo começa com uma conversa simples sobre como sua empresa trabalha hoje. A partir disso, definimos o que precisa ser feito e criamos uma solução que faça sentido no uso real.",
    phasePrefix: "Passo",
    steps: [
      {
        id: "01",
        title: "Entendimento",
        desc: "Conversamos para entender como sua empresa atende, vende, organiza informações e quais partes da rotina ainda dependem de controles manuais.",
      },
      {
        id: "02",
        title: "Definição",
        desc: "Separamos o que é prioridade, o que pode esperar e qual solução faz mais sentido: site, sistema, automação ou integração.",
      },
      {
        id: "03",
        title: "Construção",
        desc: "Criamos a ferramenta pensando no uso do dia a dia, com telas claras, fluxo simples e informações fáceis de encontrar.",
      },
      {
        id: "04",
        title: "Entrega e ajustes",
        desc: "Colocamos em funcionamento, testamos com você e ajustamos o que aparecer no uso real.",
      },
    ],
  },

  projetos: {
    title: "Projetos que já saíram do papel.",
    description:
      "Alguns trabalhos criados para empresas e operações que precisavam se apresentar melhor, organizar dados ou reduzir etapas manuais.",
    cards: [
      {
        id: "ib-apoio",
        tag: "Site institucional",
        title: "IB Apoio Administrativo",
        text: "Site criado para apresentar os serviços da empresa de forma clara e transmitir organização para quem busca apoio em rotinas administrativas.",
      },
      {
        id: "vbb-tech",
        tag: "Site institucional",
        title: "VBB Tech",
        text: "Site institucional para uma empresa de engenharia, com foco em explicar os serviços, reforçar responsabilidade técnica e facilitar o primeiro contato.",
      },
      {
        id: "leads",
        tag: "Sistema web",
        title: "Painel interno para gestão de leads",
        text: "Sistema criado para receber contatos automaticamente via webhook, organizar os dados em um painel e permitir filtros por período e exportação CSV.",
      },
      {
        id: "landingville",
        tag: "Landing Page",
        title: "Landingville",
        text: "Página de captação criada para apresentar uma oferta de sites para negócios locais, com explicação simples do serviço e contato direto pelo WhatsApp.",
      },
    ],
  },

  footer: {
    logoAlt: "Luçolli Sistemas",
    description: "Sites, sistemas e automações para deixar a rotina da empresa mais organizada.",
    navTitle: "Navegar",
    nav: [
      { href: "#solucoes", label: "Soluções" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#projetos", label: "Projetos" },
      { href: "#contato", label: "Contato" },
    ],
    contactTitle: "Contato",
    whatsappLabel: "WhatsApp",
    instagramLabel: "Instagram",
    copyright: "© Luçolli Sistemas. Ferramentas digitais feitas para rotinas reais.",
    versionLabel: "v1.0",
  },
} as const;
