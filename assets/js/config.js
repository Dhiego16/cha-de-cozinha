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
    nomeCompleto: "Marina Ferreira",
    primeiroNome: "Marina",
    // Usado no monograma SVG animado (tela de loading + hero + rodapé).
    // Pode ser uma letra só ("N") ou algo curto como "N.S."
    monograma: "M"
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
    frase: "Estou montando a minha nova casinha e cada detalhe fica ainda mais especial com você por perto.",
    textoBotao: "Ver Convite"
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
     5. MENSAGEM DE ABERTURA
  --------------------------------------------------------------------- */
  mensagemAbertura: {
    titulo: "Vem comemorar comigo",
    texto: "Estou montando a minha nova casinha e nada me deixaria mais feliz do que ter você por perto nesse momento tão especial. Vem tomar um chazinho e comemorar comigo!"
  },

  /* ---------------------------------------------------------------------
     6. GALERIA DE FOTOS
  --------------------------------------------------------------------- */
  galeria: {
    titulo: "Galeria",
    subtitulo: "Momentos que guardamos com carinho",
    fotos: [
      { src: "assets/images/galeria-01.jpg" },
      { src: "assets/images/galeria-02.jpg" },
      { src: "assets/images/galeria-03.jpg" },
      { src: "assets/images/galeria-04.jpg" },
      { src: "assets/images/galeria-05.jpg" },
      { src: "assets/images/galeria-06.jpg" }
    ]
  },

  /* ---------------------------------------------------------------------
     7. LOCAL DO EVENTO
  --------------------------------------------------------------------- */
  cerimonia: {
    titulo: "Chá de Cozinha",
    local: "Espaço Jardim Flor de Lis",
    endereco: "Av. Perimetral, Qd. 12, Lt. 05, Setor Central, Senador Canedo - GO",
    data: "13 de Dezembro de 2026",
    horario: "15h",
    linkMaps: "https://maps.google.com/?q=Espaco+Jardim+Flor+de+Lis+Senador+Canedo",
    // Mapa embutido por busca de endereço (sem API key, sem precisar de
    // latitude/longitude na mão — o Google localiza a partir do texto
    // abaixo). Se quiser trocar o local, só editar essa linha.
    mapaQuery: "Espaço Jardim Flor de Lis, Av. Perimetral, Setor Central, Senador Canedo - GO"
  },

  /* ---------------------------------------------------------------------
     8. LISTA DE PRESENTES
  --------------------------------------------------------------------- */
  presentes: {
    titulo: "Lista de Presentes",
    subtitulo: "Sua presença é o nosso maior presente. Mas se desejar contribuir com a nova cozinha, preparamos esta lista com carinho.",
    chavePix: "marina.ferreira@email.com",
    tipoChave: "E-mail",
    itens: [
      {
        nome: "Jogo de Panelas",
        descricao: "Ajude a equipar a nova cozinha",
        valor: 350.00,
        imagem: "assets/images/presente-01.svg",
        linkExterno: null
      },
      {
        nome: "Jogo de Copos",
        descricao: "Para os cafés e sucos do dia a dia",
        valor: 120.00,
        imagem: "assets/images/presente-02.svg",
        linkExterno: null
      },
      {
        nome: "Jogo de Pratos",
        descricao: "Louças para as refeições em família",
        valor: 280.00,
        imagem: "assets/images/presente-03.svg",
        linkExterno: null
      },
      {
        nome: "Liquidificador",
        descricao: "Um clássico que nunca pode faltar",
        valor: 250.00,
        imagem: "assets/images/presente-04.svg",
        linkExterno: null
      },
      {
        nome: "Jogo de Talheres",
        descricao: "Detalhes que fazem a diferença na mesa",
        valor: 190.00,
        imagem: "assets/images/presente-05.svg",
        linkExterno: null
      },
      {
        nome: "Escorredor de Louça",
        descricao: "Praticidade pro dia a dia na pia",
        valor: 150.00,
        imagem: "assets/images/presente-06.svg",
        linkExterno: null
      }
    ]
  },

  /* ---------------------------------------------------------------------
     9. MENSAGEM FINAL
  --------------------------------------------------------------------- */
  mensagemFinal: {
    texto: "Obrigada de coração por fazer parte desse momento comigo. Sua presença é o que mais importa!"
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
    titulo: "Chá de Cozinha da Marina | 13 de Dezembro de 2026",
    descricao: "Você está convidado para o chá de cozinha da Marina.",
    imagemPreview: "assets/images/share-preview.jpg",
    urlSite: "https://chadacozinha-marina.vercel.app"
  }

};

/* Exposição explícita em window — necessária porque `const` no escopo
   global NÃO cria propriedade em window (diferente de `var`). */
if (typeof window !== "undefined") {
  window.CONVITE_CONFIG = CONVITE_CONFIG;
}
