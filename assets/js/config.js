/* =========================================================================
   config.js
   ÚNICO arquivo que você precisa editar para personalizar este convite.
   Todo o site lê os dados daqui. Não é necessário tocar em index.html,
   style.css ou script.js para trocar o conteúdo.
   ========================================================================= */

const CONVITE_CONFIG = {

  /* ---------------------------------------------------------------------
     1. IDENTIDADE DA HOMENAGEADA
  --------------------------------------------------------------------- */
  homenageada: {
    nomeCompleto: "Ana e Maicon",
    primeiroNome: "Ana e Maicon",
    // Usado no monograma SVG animado (tela de loading + hero + rodapé).
    // Pode ser uma letra só ("N") ou algo curto como "N.S."
    monograma: "A & M"
  },

  /* ---------------------------------------------------------------------
     2. TEMA / PALETA (aplicado via CSS variables em tempo de execução)
  --------------------------------------------------------------------- */
  tema: {
    corFundo: "#0a0a0b",
    corFundoAlt: "#121214",
    corDourado: "#c9a868",
    corDouradoClaro: "#e3cfa0",
    corTexto: "#f5f3ee",
    corTextoSuave: "#a8a49c",
    fonteDisplay: "'Fraunces', serif",
    fonteCorpo: "'Manrope', sans-serif"
  },

  /* ---------------------------------------------------------------------
     3. TELA INICIAL (HERO)
  --------------------------------------------------------------------- */
  hero: {
    imagemFundo: "assets/images/hero.jpg",
    frase: "Estamos montando a nossa nova casinha e cada detalhe fica ainda mais especial com você por perto.",
    textoBotao: "Ver Convite"
  },

  /* ---------------------------------------------------------------------
     3.5 TELA DE CARREGAMENTO
  --------------------------------------------------------------------- */
  carregamento: {
    texto: "Você foi convidado para o Chá de Cozinha!"
  },

  /* ---------------------------------------------------------------------
     4. DATA & HORA DO CHÁ DE COZINHA
     Formato ISO 8601 — usado pela contagem regressiva.
  --------------------------------------------------------------------- */
  evento: {
    dataISO: "2026-12-13T15:00:00",
    dataFormatada: "13 de Dezembro de 2026",
    diaSemana: "Domingo",
    horario: "15h00"
  },

  /* ---------------------------------------------------------------------
     7. LOCAL DO EVENTO
  --------------------------------------------------------------------- */
  cerimonia: {
    titulo: "Chá de Cozinha",
    local: "Espaço Veneza",
    endereco: "Espaço Veneza, Goiânia - GO",
    data: "13 de Dezembro de 2026",
    horario: "15h",
    // Coordenadas exatas do local (pino preciso no mapa, sem depender de
    // busca por texto).
    latitude: -16.6737783,
    longitude: -49.1364499,
    linkMaps: "https://www.google.com/maps/place/Espa%C3%A7o+Veneza/@-16.6737783,-49.1364499,17z",
    // Usado só como reserva caso latitude/longitude não estejam definidas.
    mapaQuery: "Espaço Veneza"
  },

  /* ---------------------------------------------------------------------
     8. LISTA DE PRESENTES
  --------------------------------------------------------------------- */
  presentes: {
    titulo: "Lista de Presentes",
    subtitulo: "Sua presença é o nosso maior presente. Reserve um item abaixo pra gente não repetir presentes — assim que você reservar, ele já some da lista de qualquer outra pessoa que estiver vendo, na hora.",
    itens: [
      {
        // "id" precisa ser único e ESTÁVEL — é o que amarra este item à
        // reserva salva no Firestore. Pode mudar nome/descrição à
        // vontade, mas evite mudar o "id" depois que alguém já reservou.
        id: "jogo-cama",
        nome: "Jogo de Cama",
        descricao: "Pra deixar o quarto ainda mais aconchegante",
        imagem: "assets/images/presente-07.svg",
        linkExterno: null
      },
      {
        id: "jogo-copos",
        nome: "Jogo de Copos",
        descricao: "Para os cafés e sucos do dia a dia",
        imagem: "assets/images/presente-02.svg",
        linkExterno: null
      },
      {
        id: "jogo-pratos",
        nome: "Jogo de Pratos",
        descricao: "Louças para as refeições em família",
        imagem: "assets/images/presente-03.svg",
        linkExterno: null
      },
      {
        id: "jogo-tacas",
        nome: "Jogo de Taças",
        descricao: "Pra brindar os bons momentos",
        imagem: "assets/images/presente-08.svg",
        linkExterno: null
      },
      {
        id: "jogo-xicaras",
        nome: "Jogo de Xícaras",
        descricao: "Pro cafezinho e chá de todo dia",
        imagem: "assets/images/presente-09.svg",
        linkExterno: null
      },
      {
        id: "conjunto-panelas",
        nome: "Conjunto de Panelas",
        descricao: "Ajude a equipar a nova cozinha",
        imagem: "assets/images/presente-01.svg",
        linkExterno: null
      },
      {
        id: "potes-hermeticos",
        nome: "Potes Herméticos",
        descricao: "Praticidade pra organizar a despensa",
        imagem: "assets/images/presente-10.svg",
        linkExterno: null
      },
      {
        id: "panela-pressao",
        nome: "Panela de Pressão",
        descricao: "Pra deixar o feijão pronto rapidinho",
        imagem: "assets/images/presente-11.svg",
        linkExterno: null
      },
      {
        id: "guardanapos",
        nome: "Guardanapos",
        descricao: "Detalhes que fazem a diferença na mesa",
        imagem: "assets/images/presente-12.svg",
        linkExterno: null
      },
      {
        id: "formas-bolo",
        nome: "Formas de Bolo",
        descricao: "Pros bolos e doces caseiros",
        imagem: "assets/images/presente-13.svg",
        linkExterno: null
      },
      {
        id: "jogo-sobremesa",
        nome: "Jogo de Sobremesa",
        descricao: "Pra servir a sobremesa com estilo",
        imagem: "assets/images/presente-14.svg",
        linkExterno: null
      },
      {
        id: "escorredor-louca",
        nome: "Escorredor de Louça",
        descricao: "Praticidade pro dia a dia na pia",
        imagem: "assets/images/presente-06.svg",
        linkExterno: null
      },
      {
        id: "talheres",
        nome: "Talheres",
        descricao: "Pra completar a mesa posta",
        imagem: "assets/images/presente-05.svg",
        linkExterno: null
      },
      {
        id: "liquidificador",
        nome: "Liquidificador",
        descricao: "Um clássico que nunca pode faltar",
        imagem: "assets/images/presente-04.svg",
        linkExterno: null
      },
      {
        id: "batedeira",
        nome: "Batedeira",
        descricao: "Pra ajudar nas receitas do dia a dia",
        imagem: "assets/images/presente-15.svg",
        linkExterno: null
      },
      {
        id: "travessas",
        nome: "Travessas",
        descricao: "Pra servir com charme nas ocasiões especiais",
        imagem: "assets/images/presente-16.svg",
        linkExterno: null
      }
    ]
  },

  /* ---------------------------------------------------------------------
     8.5 FIREBASE — reserva de presentes em tempo real
     Sem essa configuração preenchida, a lista de presentes funciona
     normalmente pra exibir, mas o botão "Reservar" fica desativado com
     um aviso, porque não tem onde salvar a reserva.

     Como pegar esses valores:
     1. Crie um projeto em https://console.firebase.google.com (grátis)
     2. Adicione um app Web (ícone </>) e copie o objeto de config que
        aparece — é isso que vai aqui embaixo.
     3. Ative o Firestore Database (modo produção) em Build > Firestore.
     4. Ative Authentication > Sign-in method > Anônimo (Anonymous).
     5. Em Firestore > Regras, cole as regras que estão no README deste
        projeto (seção "Configurando o Firebase").
  --------------------------------------------------------------------- */
  firebase: {
    apiKey: "AIzaSyCq6xCzIpvuzqp9ZPj9346ZZvhrkCRQBYQ",
    authDomain: "cha-de-cozinha-b6c21.firebaseapp.com",
    projectId: "cha-de-cozinha-b6c21",
    storageBucket: "cha-de-cozinha-b6c21.firebasestorage.app",
    messagingSenderId: "3035028040",
    appId: "1:3035028040:web:b7dafeace8844431c1567d"
  },

  /* ---------------------------------------------------------------------
     8.6 CONFIRMAÇÃO DE PRESENÇA (RSVP)
     Ao clicar em "Confirmar Presença", abre o WhatsApp já com uma
     mensagem pronta (nome, acompanhantes e o presente escolhido, se
     houver) pro número configurado abaixo.
  --------------------------------------------------------------------- */
  confirmacaoPresenca: {
    titulo: "Confirme sua Presença",
    subtitulo: "Ajude a gente a organizar tudo com carinho — confirme se vai poder vir!",
    // Número com DDI + DDD, só números (ex: Brasil, DDD 62): "5562999999999"
    // Sem isso preenchido, o botão de confirmar fica desativado.
    whatsapp: "5562994415344"
  },

  /* ---------------------------------------------------------------------
     9. MENSAGEM FINAL
  --------------------------------------------------------------------- */
  mensagemFinal: {
    texto: "Obrigado de coração por fazer parte desse momento com a gente. Sua presença é o que mais importa!"
  },

  /* ---------------------------------------------------------------------
     10. MÚSICA DE FUNDO
     Se ainda não tiver o arquivo mp3, deixe "arquivo": "" que o player
     some sozinho da tela sem quebrar nada.
  --------------------------------------------------------------------- */
  musica: {
    arquivo: "",
    autoplay: true,
    volumeInicial: 0.5
  },

  /* ---------------------------------------------------------------------
     11. COMPARTILHAMENTO / SEO
  --------------------------------------------------------------------- */
  compartilhamento: {
    // IMPORTANTE: como o site é 100% estático, o WhatsApp/Facebook/Instagram
    // NÃO executam esse JS antes de gerar o preview do link — eles leem
    // direto as tags <meta og:title>/<meta og:description> do index.html.
    // Ou seja: se mudar titulo/descricao aqui, troque também as mesmas
    // tags no <head> do index.html, senão o preview do link continua
    // mostrando o texto genérico antigo.
    titulo: "Chá de Cozinha de Ana e Maicon | 13 de Dezembro de 2026",
    descricao: "Você está convidado para o chá de cozinha de Ana e Maicon.",
    imagemPreview: "assets/images/share-preview.jpg",
    urlSite: "https://chadacozinha-marina.vercel.app"
  }

};

/* Exposição explícita em window — necessária porque `const` no escopo
   global NÃO cria propriedade em window (diferente de `var`). */
if (typeof window !== "undefined") {
  window.CONVITE_CONFIG = CONVITE_CONFIG;
}
