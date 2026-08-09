# Convite Digital de Chá de Cozinha — Premium

Convite 100% estático (HTML5 + CSS3 + JavaScript puro), sem frameworks, sem
back-end. Todo o conteúdo é controlado por **um único arquivo**:

```
assets/js/config.js
```

Este projeto é adaptado do template de convite de casamento, mantendo o
mesmo visual, tipografia e animações — só trocando o conteúdo.

## Como personalizar

1. Abra `assets/js/config.js`.
2. Edite os campos (nome da homenageada, data, local, itens da lista de
   presentes, Pix, etc.). Cada campo tem comentário explicando o que é.
3. Substitua as imagens em `assets/images/` pelas fotos reais, mantendo os
   mesmos nomes de arquivo (ou ajuste os caminhos no `config.js`).
   - **Os arquivos atuais são placeholders** (marca d'água "SUBSTITUA..."):
     `hero.jpg`, `galeria-01.jpg` a `galeria-06.jpg` e `share-preview.jpg`.
   - Os ícones `presente-01.svg` a `presente-06.svg` são ícones simples
     gerados pra representar os itens padrão da lista — pode trocar por
     fotos reais dos produtos se preferir.
   - Recomendado: fotos `.jpg` otimizadas, hero em pelo menos 1600×1000px.
4. Se tiver uma trilha sonora, coloque o `.mp3` em `assets/music/` e aponte
   o caminho em `musica.arquivo` dentro do `config.js`. Enquanto esse campo
   estiver vazio (`""`), o player de música some da tela sozinho.
5. Não é necessário editar `index.html`, `style.css` ou `script.js` — eles
   já leem tudo do `config.js` automaticamente.

## Estrutura

```
/index.html                 → estrutura semântica de todas as seções
/assets/css/style.css       → design system completo (tokens, componentes)
/assets/js/config.js        → ÚNICA fonte de conteúdo do convite
/assets/js/script.js        → lógica (render, countdown, lightbox, presentes, etc.)
/assets/images/             → fotos e ícones do convite
/assets/music/              → trilha sonora (mp3), se houver
```

## Funcionalidades incluídas

- Tela de carregamento com monograma animado (stroke-draw SVG)
- Hero em tela cheia com parallax e monograma
- Player de música flutuante (play/pause/volume) — some sozinho se não
  houver trilha configurada
- Contagem regressiva em tempo real, com mensagem especial quando chega a zero
- Botão "Adicionar à Agenda" (gera um arquivo `.ics` compatível com Google
  Calendar, Apple Calendar e Outlook)
- Galeria com lightbox (zoom, swipe, teclado, navegação)
- Local do evento com mapa incorporado (Google Maps, sem API key)
- Lista de presentes com cópia automática da chave Pix + toast de confirmação
- Mensagem final de encerramento
- Botão voltar ao topo + barra de progresso de scroll
- Cursor personalizado discreto (desktop)
- 100% responsivo (desktop, tablet, mobile)

**Sem RSVP** — este convite não tem confirmação de presença (a pedido).

## Publicando

Como é um site 100% estático, basta subir a pasta inteira em qualquer
hospedagem estática: GitHub Pages, Netlify, Vercel, Cloudflare Pages ou até
um servidor compartilhado comum. Não há dependências de build — é só HTML,
CSS e JS puros.

## Mapa sem API key

O bloco de mapa usa o embed público do Google Maps a partir de uma busca
por texto (`cerimonia.mapaQuery` em `config.js`) — não precisa de latitude/
longitude nem de chave de API. Só editar o endereço nesse campo.

## Checklist antes de publicar

- [ ] Trocar as imagens placeholder (`hero.jpg`, `galeria-*.jpg`,
      `share-preview.jpg`) pelas fotos reais.
- [ ] Conferir `homenageada.nomeCompleto`/`primeiroNome`/`monograma` em
      `config.js`.
- [ ] Conferir `evento.dataISO`, `evento.dataFormatada` e
      `cerimonia.data`/`horario` — precisam bater entre si.
- [ ] Preencher `cerimonia.local`, `endereco` e `mapaQuery` com o endereço real.
- [ ] Preencher `presentes.chavePix` e revisar os itens da lista.
- [ ] **Meta tags de compartilhamento**: as tags `<title>`, `og:title` e
      `og:description` no `<head>` do `index.html` são fixas — precisam ser
      editadas manualmente sempre que mudar `compartilhamento` em
      `config.js`, porque o preview de link do WhatsApp/Facebook não executa
      o JavaScript do site antes de montar o preview.

## Performance

- Fontes carregadas via `<link>` com `preconnect`.
- Imagens da galeria com `loading="lazy"`.
- Áudio com `preload="none"` (só carrega ao dar play).
- CSS e JS organizados em seções numeradas e comentadas.
