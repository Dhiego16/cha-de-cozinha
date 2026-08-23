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
    dataISO: "2026-09-06T12:00:00",
    dataFormatada: "06 de Setembro de 2026",
    diaSemana: "Domingo",
    horario: "12h00"
  },

  /* ---------------------------------------------------------------------
     7. LOCAL DO EVENTO
  --------------------------------------------------------------------- */
  cerimonia: {
    titulo: "Chá de Cozinha",
    local: "Espaço Veneza",
    endereco: "Espaço Veneza, Goiânia - GO",
    data: "06 de Setembro de 2026",
    horario: "12h",
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

    // Categorias exibidas em seções, nessa ordem, com scroll na mesma
    // página. Categoria sem nenhum item vinculado simplesmente não
    // aparece — pode deixar cadastrada aqui mesmo sem itens ainda.
    // "icone" é opcional (emoji ao lado do título da seção).
    categorias: [
      { id: "cozinha", nome: "Cozinha", icone: "🍳" },
      { id: "mesa", nome: "Mesa", icone: "🍽️" },
      { id: "eletrodomesticos", nome: "Eletrodomésticos", icone: "🔌" },
      { id: "quarto", nome: "Quarto", icone: "🛏️" },
      { id: "banheiro", nome: "Banheiro", icone: "🚿" },
      { id: "sala", nome: "Sala", icone: "🛋️" },
      { id: "limpeza", nome: "Limpeza", icone: "🧹" },
      { id: "vale-presente", nome: "Vale-Presente", icone: "🎁" }
    ],

    itens: [
      {
        // "id" precisa ser único e ESTÁVEL — é o que amarra este item à
        // reserva salva no Firestore. Pode mudar nome/descrição à
        // vontade, mas evite mudar o "id" depois que alguém já reservou.
        // "categoria" precisa bater com um dos "id" da lista de
        // categorias acima.
        id: "jogo-cama",
        nome: "Jogo de Cama",
        descricao: "Pra deixar o quarto ainda mais aconchegante",
        imagem: "assets/images/jogodecama.png",
        categoria: "quarto",
        linkExterno: null
      },
      {
        id: "jogo-copos",
        nome: "Jogo de Copos",
        descricao: "Para os cafés e sucos do dia a dia",
        imagem: "assets/images/jogodecopo.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-pratos",
        nome: "Jogo de Pratos",
        descricao: "Louças para as refeições em família",
        imagem: "assets/images/jogodeprato.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-tacas",
        nome: "Jogo de Taças",
        descricao: "Pra brindar os bons momentos",
        imagem: "assets/images/jogodetaca.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-xicaras",
        nome: "Jogo de Xícaras",
        descricao: "Pro cafezinho e chá de todo dia",
        imagem: "assets/images/jogodexicara.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "conjunto-panelas",
        nome: "Conjunto de Panelas",
        descricao: "Ajude a equipar a nova cozinha",
        imagem: "assets/images/conjuntodepanela.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "potes-hermeticos",
        nome: "Potes Herméticos",
        descricao: "Praticidade pra organizar a despensa",
        imagem: "assets/images/poteshermeticos.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "panela-pressao",
        nome: "Panela de Pressão",
        descricao: "Pra deixar o feijão pronto rapidinho",
        imagem: "assets/images/paneladepressao.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "guardanapos",
        nome: "Guardanapos",
        descricao: "Detalhes que fazem a diferença na mesa",
        imagem: "assets/images/guardanapos.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "formas-bolo",
        nome: "Formas de Bolo",
        descricao: "Pros bolos e doces caseiros",
        imagem: "assets/images/formasdebolo.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "jogo-sobremesa",
        nome: "Jogo de Sobremesa",
        descricao: "Pra servir a sobremesa com estilo",
        imagem: "assets/images/jogodesobremessa.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "escorredor-louca",
        nome: "Escorredor de Louça",
        descricao: "Praticidade pro dia a dia na pia",
        imagem: "assets/images/escorredor.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "talheres",
        nome: "Talheres",
        descricao: "Pra completar a mesa posta",
        imagem: "assets/images/talheres.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "liquidificador",
        nome: "Liquidificador",
        descricao: "Um clássico que nunca pode faltar",
        imagem: "assets/images/liquidificador.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "batedeira",
        nome: "Batedeira",
        descricao: "Pra ajudar nas receitas do dia a dia",
        imagem: "assets/images/batedeira.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "travessas",
        nome: "Travessas",
        descricao: "Pra servir com charme nas ocasiões especiais",
        imagem: "assets/images/travessas.png",
        categoria: "mesa",
        linkExterno: null
      },
      // --- itens novos abaixo, ainda com imagem placeholder (SVG genérico)
      // até as fotos reais chegarem — só trocar o campo "imagem" depois ---
      {
        id: "frigideira",
        nome: "Frigideira",
        descricao: "Pra fritar e refogar no dia a dia",
        imagem: "assets/images/frigideira.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "sanduicheira",
        nome: "Sanduicheira",
        descricao: "Pros lanches rápidos do dia a dia",
        imagem: "assets/images/sanduicheira.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "assadeira",
        nome: "Assadeira",
        descricao: "Pra deixar as receitas assadas sempre no ponto",
        imagem: "assets/images/assadeira.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "kit-panos-prato",
        nome: "Kit de Pano de Prato",
        descricao: "Pra manter a cozinha sempre em ordem",
        imagem: "assets/images/kit-panos-prato.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "toalha-mesa",
        nome: "Toalha de Mesa",
        descricao: "Pra deixar a mesa ainda mais bonita",
        imagem: "assets/images/toalha-mesa.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "chaleira-eletrica",
        nome: "Chaleira Elétrica",
        descricao: "Pra esquentar água rapidinho",
        imagem: "assets/images/chaleira-eletrica.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "conchas",
        nome: "Conchas",
        descricao: "Pra servir sopas e caldos com praticidade",
        imagem: "assets/images/conchas.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "kit-cortina",
        nome: "Kit de Cortina",
        descricao: "Pra deixar a casa nova com a nossa cara",
        imagem: "assets/images/kit-cortina.png",
        categoria: "sala",
        linkExterno: null
      },
      {
        id: "cesto-roupas",
        nome: "Cesto para Roupas",
        descricao: "Pra organizar as roupas do dia a dia",
        imagem: "assets/images/cesto-roupas.png",
        categoria: "banheiro",
        linkExterno: null
      },
      {
        id: "toalhas-banho",
        nome: "Toalhas de Banho",
        descricao: "Pra deixar o banho ainda mais aconchegante",
        imagem: "assets/images/toalhas-banho.png",
        categoria: "banheiro",
        linkExterno: null
      },
      {
        id: "toalhas-rosto",
        nome: "Toalhas de Rosto",
        descricao: "Pra completar o kit do banheiro novo",
        imagem: "assets/images/toalhas-rosto.png",
        categoria: "banheiro",
        linkExterno: null
      },
      {
        id: "boleiras",
        nome: "Boleiras",
        descricao: "Pra servir os bolos com estilo",
        imagem: "assets/images/boleiras.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "jogo-facas",
        nome: "Jogo de Facas",
        descricao: "Pra cortar e preparar com precisão",
        imagem: "assets/images/jogo-facas.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "air-fryer",
        nome: "Air Fryer",
        descricao: "Pra fritar sem óleo no dia a dia",
        imagem: "assets/images/air-fryer.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "fogao-cooktop",
        nome: "Fogão Cooktop",
        descricao: "Pra equipar a cozinha nova com estilo",
        imagem: "assets/images/fogao-cooktop.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "potinhos-temperos",
        nome: "Potinhos de Temperos",
        descricao: "Pra organizar os temperos com praticidade",
        imagem: "assets/images/potinhos-temperos.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "cuscuzeira",
        nome: "Cuscuzeira",
        descricao: "Pra não faltar cuscuz no café da manhã",
        imagem: "assets/images/cuscuzeira.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "escorredor-macarrao",
        nome: "Escorredor de Macarrão",
        descricao: "Pra ajudar no preparo das massas",
        imagem: "assets/images/escorredor-macarrao.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "ferro-passar",
        nome: "Ferro de Passar",
        descricao: "Pra deixar as roupas sempre em ordem",
        imagem: "assets/images/ferro-passar.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "jarras-suco",
        nome: "Jarras de Suco",
        descricao: "Pra servir os sucos do dia a dia",
        imagem: "assets/images/jarras-suco.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-americanos",
        nome: "Jogo Americanos",
        descricao: "Pra deixar a mesa com mais estilo",
        imagem: "assets/images/jogo-americanos.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-pratos-fundos",
        nome: "Jogo de Pratos Fundos",
        descricao: "Pra sopas, caldos e massas",
        imagem: "assets/images/jogo-pratos-fundos.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "kit-colheres-silicone",
        nome: "Kit Colheres de Silicone",
        descricao: "Pra não riscar as panelas no preparo",
        imagem: "assets/images/kit-colheres-silicone.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "pipoqueira",
        nome: "Pipoqueira",
        descricao: "Pra pipoca fresquinha no dia a dia",
        imagem: "assets/images/pipoqueira.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "fruteira",
        nome: "Fruteira",
        descricao: "Pra deixar as frutas sempre à mão",
        imagem: "assets/images/fruteira.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "taca-espumante",
        nome: "Jogo de Taça para Espumante",
        descricao: "Pra brindar as ocasiões especiais",
        imagem: "assets/images/taca-espumante.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "taca-vinho",
        nome: "Jogo de Taça para Vinho",
        descricao: "Pra harmonizar os jantares em casa",
        imagem: "assets/images/taca-vinho.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "taca-gin",
        nome: "Jogo de Taça para Gin",
        descricao: "Pra receber os amigos com estilo",
        imagem: "assets/images/taca-gin.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-xicara-pires",
        nome: "Jogo de Xícara com Pires",
        descricao: "Pro cafezinho servido com charme",
        imagem: "assets/images/jogo-xicara-pires.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "ventilador",
        nome: "Ventilador",
        descricao: "Pra deixar a casa nova mais fresquinha",
        imagem: "assets/images/ventilador.png",
        categoria: "sala",
        linkExterno: null
      },
      {
        id: "jogo-fronhas",
        nome: "Jogo de Fronhas para Travesseiros",
        descricao: "Pra completar o enxoval do quarto",
        imagem: "assets/images/jogo-fronhas.png",
        categoria: "quarto",
        linkExterno: null
      },
      {
        id: "jogo-pratos-rasos",
        nome: "Jogo de Pratos Rasos",
        descricao: "Pras refeições do dia a dia",
        imagem: "assets/images/jogo-pratos-rasos.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "jogo-pratos-sobremesa",
        nome: "Jogo de Pratos Sobremesa",
        descricao: "Pra sobremesa servida com estilo",
        imagem: "assets/images/jogo-pratos-sobremesa.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "colheres-sobremesa",
        nome: "Colheres de Sobremesa",
        descricao: "Pra completar a mesa posta",
        imagem: "assets/images/colheres-sobremesa.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "organizador-geladeira",
        nome: "Organizador de Geladeira",
        descricao: "Pra manter a geladeira sempre organizada",
        imagem: "assets/images/organizador-geladeira.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "manteigueira",
        nome: "Manteigueira",
        descricao: "Pra manter a manteiga sempre à mão",
        imagem: "assets/images/manteigueira.png",
        categoria: "mesa",
        linkExterno: null
      },
      {
        id: "vale-presente-casa",
        nome: "Vale-Presente para Casa/Construção",
        descricao: "Pra ajudar a construir e equipar o novo lar",
        imagem: "assets/images/vale-presente-casa.png",
        categoria: "vale-presente",
        linkExterno: null
      },
      {
        id: "vale-presente-lua-de-mel",
        nome: "Vale-Presente Lua de Mel",
        descricao: "Pra ajudar a gente a curtir a viagem dos sonhos",
        imagem: "assets/images/vale-presente-lua-de-mel.png",
        categoria: "vale-presente",
        linkExterno: null
      },
      {
        id: "tapetes-cozinha",
        nome: "Tapetes para Cozinha",
        descricao: "Pra deixar a cozinha nova com mais conforto",
        imagem: "assets/images/tapetes-cozinha.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "garrafa-termica-cafe",
        nome: "Garrafa Térmica para Café",
        descricao: "Pro café quentinho a qualquer hora do dia",
        imagem: "assets/images/garrafa-termica-cafe.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "coador",
        nome: "Coador",
        descricao: "Pra coar o café fresquinho de todo dia",
        imagem: "assets/images/coador.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "varal-chao",
        nome: "Varal de Chão",
        descricao: "Pra secar as roupas com praticidade",
        imagem: "assets/images/varal-chao.png",
        categoria: "limpeza",
        linkExterno: null
      },
      {
        id: "jogo-potes-vidro",
        nome: "Jogo de Potes de Vidro com Tampa",
        descricao: "Pra guardar mantimentos com estilo e durabilidade",
        imagem: "assets/images/jogo-potes-vidro.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "microondas",
        nome: "Microondas",
        descricao: "Praticidade pra esquentar e descongelar no dia a dia",
        imagem: "assets/images/microondas.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "espremedor-frutas",
        nome: "Espremedor de Frutas",
        descricao: "Pros sucos naturais fresquinhos toda manhã",
        imagem: "assets/images/espremedor-frutas.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "maquina-lavar",
        nome: "Máquina de Lavar Roupas",
        descricao: "Um item essencial pra rotina da casa nova",
        imagem: "assets/images/maquina-lavar.png",
        categoria: "eletrodomesticos",
        linkExterno: null
      },
      {
        id: "porta-frios-queijeira",
        nome: "Porta Frios + Queijeira de Vidro",
        descricao: "Pra servir frios e queijos com elegância",
        imagem: "assets/images/porta-frios-queijeira.png",
        categoria: "cozinha",
        linkExterno: null
      },
      {
        id: "kit-pia-cozinha",
        nome: "Kit para Pia da Cozinha",
        descricao: "Organização e praticidade na hora de lavar louça",
        imagem: "assets/images/kit-pia-cozinha.png",
        categoria: "cozinha",
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
    titulo: "Chá de Cozinha de Ana e Maicon | 06 de Setembro de 2026",
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
