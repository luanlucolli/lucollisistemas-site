
## Visão geral

Landing page única em `/` para a Luçolli Sistemas, com identidade neobrutalista (linhas retas, bordas marcadas, blocos definidos), tipografia Space Grotesk + IBM Plex Sans, paleta chumbo `#22252A`, laranja ferrugem `#D9531E` e osso `#F5F3EE`. Foco: conversão para WhatsApp `47984802779`.

## Tokens e tipografia (src/styles.css)

- Tokens semânticos em `@theme`:
  - `--color-ink: #22252A` (chumbo / background escuro)
  - `--color-bone: #F5F3EE` (off-white / background claro)
  - `--color-rust: #D9531E` (laranja ação)
  - `--color-border-strong` (linhas pretas/chumbo dos cards)
  - `--font-display: "Space Grotesk"`, `--font-body: "IBM Plex Sans"`
- Fontes carregadas via `<link>` no `__root.tsx` (Google Fonts), nunca via `@import` em CSS.
- Radius base 4–6px (cantos quase retos).
- Atualizar `meta` SEO em `__root.tsx` e `index.tsx` (title: "Luçolli Sistemas — Sites, sistemas e automações sob medida").

## Assets

- Subir os 3 uploads como Lovable Assets:
  - Logo Luçolli (`ChatGPT_Image_..._19_52_19-removebg.png`) → header e footer.
  - Imagem de nós laranja (`...21_26_06-removebg.png`) → usada no lado direito do hero e como elemento sutil no CTA final (baixa opacidade).
  - Referência hero (`image.png`) NÃO é embarcada — só inspiração.

## Estrutura de componentes (src/components/site/)

- `Header.tsx` — fixo, fundo chumbo, logo, menu (Soluções / Como funciona / Projetos / Contato — anchors `#solucoes`, `#como-funciona`, `#projetos`, `#contato`), botão laranja "Solicitar diagnóstico" (link WhatsApp). Mobile: hamburger + ícone WhatsApp.
- `Hero.tsx` — split screen. Esquerda: H1, subtítulo, frase de reforço, 2 CTAs, microbenefícios (Fácil de usar • Menos retrabalho • Mais controle) com separadores. Direita: imagem dos nós laranja em moldura/bloco chumbo com borda; espaço já pronto para o usuário substituir o asset depois (componente recebe `src` e tem placeholder com borda tracejada + label "área reservada para imagem"). 
- `Problemas.tsx` — grid 2×2 de 4 cards bone com borda preta marcada, ícones lineares (lucide-react: MessageSquareOff, Repeat, Unplug, FileWarning) em laranja.
- `Solucoes.tsx` — 3 cards grandes "tipo módulo": header com etiqueta "MÓDULO 01/02/03", título, descrição, lista de tags/chips com borda. Card 2 com fundo chumbo invertido para quebra visual.
- `ComoFunciona.tsx` — linha horizontal com 4 etapas (01–04), números display gigantes em laranja, linha conectora reta. Mobile: cards empilhados com conector vertical.
- `Projetos.tsx` — grid de 4 cards com etiqueta laranja (Site / Sistema / Integração / Landing Page), título, descrição e área reservada para print futuro (placeholder com borda tracejada).
- `CtaFinal.tsx` — bloco chumbo full-width, imagem de nós laranja como background sutil (opacity ~10%), título, texto, botão WhatsApp + secundário.
- `Footer.tsx` — chumbo, logo, frase, colunas de links, contato (WhatsApp 47984802779, Instagram @lucollisistemas, e-mail `contato@lucolli.com.br` como placeholder marcado com comentário), copyright.

## Página

- Substituir `src/routes/index.tsx` (remover placeholder) compondo as seções acima.
- Smooth scroll para anchors via `scroll-behavior: smooth` no html.
- Link WhatsApp padrão: `https://wa.me/5547984802779?text=Olá!%20Quero%20solicitar%20um%20diagnóstico.`

## Responsividade

- Breakpoints Tailwind padrão. Mobile-first.
- Hero vira coluna única no `<md`; imagem dos nós abaixo do texto.
- Solucões e Projetos viram 1 coluna no mobile; Problemas vira 1 coluna; Como funciona empilha vertical.
- Header com sheet/drawer mobile (shadcn `sheet`).

## Animações (sutis)

- Hover em botões: leve translate + sombra dura neobrutalista (`shadow-[4px_4px_0_#22252A]`).
- Fade/slide-up de entrada nos cards via classes Tailwind + `tw-animate-css` (já instalado), sem framer-motion para manter leve.

## SEO

- Title, description, og:title, og:description em `index.tsx` head().
- H1 único no hero. Alt text em todas imagens. Lang `pt-BR` no `__root.tsx`.

## Fora de escopo

- Backend / formulários (CTAs apontam para WhatsApp).
- Páginas internas (single page com anchors).
- Substituição manual do e-mail e prints reais — ficarão como placeholders comentados.
