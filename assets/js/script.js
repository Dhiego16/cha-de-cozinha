/* =========================================================================
   script.js
   Toda a lógica do convite. Lê exclusivamente de CONVITE_CONFIG
   (definido em config.js). Não deve conter conteúdo hard-coded.
   ========================================================================= */

(() => {
  "use strict";

  const cfg = window.CONVITE_CONFIG;
  if (!cfg) {
    console.error("CONVITE_CONFIG não encontrado. Verifique se config.js foi carregado antes de script.js.");
    return;
  }

  /* -----------------------------------------------------------------------
     Utilitários
  ----------------------------------------------------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* -----------------------------------------------------------------------
     1. TEMA — injeta paleta do config.js como CSS variables
  ----------------------------------------------------------------------- */
  function aplicarTema() {
    const t = cfg.tema || {};
    const root = document.documentElement.style;
    if (t.corFundo) root.setProperty("--color-bg", t.corFundo);
    if (t.corFundoAlt) root.setProperty("--color-bg-alt", t.corFundoAlt);
    if (t.corDourado) root.setProperty("--color-gold", t.corDourado);
    if (t.corDouradoClaro) root.setProperty("--color-gold-soft", t.corDouradoClaro);
    if (t.corTexto) root.setProperty("--color-text", t.corTexto);
    if (t.corTextoSuave) root.setProperty("--color-text-muted", t.corTextoSuave);
    if (t.fonteDisplay) root.setProperty("--font-display", t.fonteDisplay);
    if (t.fonteCorpo) root.setProperty("--font-body", t.fonteCorpo);
  }

  /* -----------------------------------------------------------------------
     2. SEO / metadados dinâmicos
  ----------------------------------------------------------------------- */
  function aplicarSEO() {
    const s = cfg.compartilhamento || {};
    if (s.titulo) document.title = s.titulo;
    const desc = $('meta[name="description"]');
    if (desc && s.descricao) desc.setAttribute("content", s.descricao);
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle && s.titulo) ogTitle.setAttribute("content", s.titulo);
    const ogDesc = $('meta[property="og:description"]');
    if (ogDesc && s.descricao) ogDesc.setAttribute("content", s.descricao);
  }

  /* -----------------------------------------------------------------------
     3. TELA DE CARREGAMENTO
  ----------------------------------------------------------------------- */
  function initLoading() {
    const el = $("#loading-screen");
    const textoEl = $("#loading-text");
    if (textoEl && cfg.carregamento && cfg.carregamento.texto) {
      textoEl.textContent = cfg.carregamento.texto;
    }
    const minDuration = 1800;
    const start = Date.now();
    document.body.style.overflow = "hidden";
    window.addEventListener("load", () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        el.classList.add("hidden");
        document.body.style.overflow = "";
      }, wait);
    });
    // fallback caso 'load' já tenha disparado
    setTimeout(() => { document.body.style.overflow = ""; }, minDuration + 600);
  }

  /* -----------------------------------------------------------------------
     4. CURSOR PERSONALIZADO (apenas desktop)
  ----------------------------------------------------------------------- */
  function initCursor() {
    const cursor = $("#custom-cursor");
    if (!cursor || window.matchMedia("(hover: none)").matches) return;
    let active = false;
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      if (!active) { cursor.classList.add("active"); active = true; }
    });
    $$("a, button, .gallery-item").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("grow"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
    });
  }

  /* -----------------------------------------------------------------------
     5. HERO — preenchimento + parallax
  ----------------------------------------------------------------------- */
  function initHero() {
    const h = cfg.hero || {};
    const homenageada = cfg.homenageada || {};
    const evento = cfg.evento || {};

    const bg = $("#hero-bg");
    if (bg && h.imagemFundo) bg.style.backgroundImage = `url('${h.imagemFundo}')`;

    const dataEl = $("#hero-data");
    if (dataEl) dataEl.textContent = `${evento.diaSemana || ""} · ${evento.dataFormatada || ""}`.trim().replace(/^·\s*/, "");

    const monogramaHero = $("#hero-monogram-text");
    if (monogramaHero && homenageada.monograma) monogramaHero.textContent = homenageada.monograma;

    const namesEl = $("#hero-names");
    if (namesEl && homenageada.primeiroNome) {
      namesEl.textContent = homenageada.primeiroNome;
    }

    const phraseEl = $("#hero-phrase");
    if (phraseEl) phraseEl.textContent = h.frase || "";

    const btnEl = $("#hero-btn span");
    if (btnEl) btnEl.textContent = h.textoBotao || "Ver Convite";

    // Parallax discreto no scroll
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2 && bg) {
          bg.style.transform = `scale(1.12) translateY(${y * 0.18}px)`;
        }
        ticking = false;
      });
    }, { passive: true });

    // Monograma do rodapé
    const footerMono = $("#footer-monogram");
    if (footerMono && homenageada.monograma) footerMono.textContent = homenageada.monograma;
    const footerNames = $("#footer-names");
    if (footerNames && homenageada.primeiroNome) {
      footerNames.textContent = homenageada.primeiroNome;
    }
    const footerData = $("#footer-data");
    if (footerData && evento.dataISO) {
      const d = new Date(evento.dataISO);
      footerData.textContent = `${String(d.getDate()).padStart(2,"0")} · ${String(d.getMonth()+1).padStart(2,"0")} · ${d.getFullYear()}`;
    }

    // Monograma da tela de loading
    const loadingMono = $("#loading-svg text");
    if (loadingMono && homenageada.monograma) loadingMono.textContent = homenageada.monograma;
  }

  /* -----------------------------------------------------------------------
     6. MENSAGEM DE ABERTURA
  ----------------------------------------------------------------------- */
  function initMensagem() {
    const m = cfg.mensagemAbertura || {};
    const titulo = $("#mensagem-titulo");
    const texto = $("#mensagem-texto");
    if (titulo && m.titulo) titulo.textContent = m.titulo;
    if (texto && m.texto) texto.textContent = m.texto;
  }

  /* -----------------------------------------------------------------------
     7. CONTAGEM REGRESSIVA
  ----------------------------------------------------------------------- */
  function initCountdown() {
    const evento = cfg.evento || {};
    const dataEl = $("#countdown-data");
    if (dataEl) dataEl.textContent = `${evento.dataFormatada || ""} · ${evento.horario || ""}`;

    const target = new Date(evento.dataISO).getTime();
    if (Number.isNaN(target)) return;

    const grid = $("#countdown-grid");
    const arrivedEl = $("#countdown-arrived");
    const elDias = $("#cd-dias"), elHoras = $("#cd-horas"), elMin = $("#cd-min"), elSeg = $("#cd-seg");
    let intervalId = null;

    function tick() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        if (grid) grid.hidden = true;
        if (arrivedEl) arrivedEl.hidden = false;
        if (intervalId) clearInterval(intervalId);
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const min = Math.floor((diff / (1000 * 60)) % 60);
      const seg = Math.floor((diff / 1000) % 60);

      if (elDias) elDias.textContent = String(dias).padStart(2, "0");
      if (elHoras) elHoras.textContent = String(horas).padStart(2, "0");
      if (elMin) elMin.textContent = String(min).padStart(2, "0");
      if (elSeg) elSeg.textContent = String(seg).padStart(2, "0");
    }

    tick();
    intervalId = setInterval(tick, 1000);
  }

  /* -----------------------------------------------------------------------
     7.5 ADICIONAR À AGENDA (arquivo .ics)
  ----------------------------------------------------------------------- */
  function initAddToCalendar() {
    const btn = $("#add-to-calendar");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const evento = cfg.evento || {};
      const cerimonia = cfg.cerimonia || {};
      const homenageada = cfg.homenageada || {};

      const start = new Date(evento.dataISO);
      if (Number.isNaN(start.getTime())) return;
      const end = new Date(start.getTime() + 3 * 60 * 60 * 1000); // duração estimada: 3h

      const fmt = (d) => (
        d.getFullYear().toString().padStart(4, "0") +
        String(d.getMonth() + 1).padStart(2, "0") +
        String(d.getDate()).padStart(2, "0") + "T" +
        String(d.getHours()).padStart(2, "0") +
        String(d.getMinutes()).padStart(2, "0") +
        String(d.getSeconds()).padStart(2, "0")
      );

      const titulo = `Chá de Cozinha de ${homenageada.primeiroNome || ""}`;
      const local = [cerimonia.local, cerimonia.endereco].filter(Boolean).join(", ");
      const descricao = "Confirme sua presença: " + (window.location.href || "");

      const escapeICS = (str) => String(str).replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");

      const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Cha de Cozinha//PT-BR",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `UID:${Date.now()}@convite-cha-de-cozinha`,
        `DTSTAMP:${fmt(new Date())}`,
        `DTSTART:${fmt(start)}`,
        `DTEND:${fmt(end)}`,
        `SUMMARY:${escapeICS(titulo)}`,
        `DESCRIPTION:${escapeICS(descricao)}`,
        `LOCATION:${escapeICS(local)}`,
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "cha-de-cozinha.ics";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    });
  }

  /* -----------------------------------------------------------------------
     9. GALERIA + LIGHTBOX
  ----------------------------------------------------------------------- */
  function initGaleria() {
    const g = cfg.galeria || {};
    const titulo = $("#galeria-titulo");
    const subtitulo = $("#galeria-subtitulo");
    if (titulo && g.titulo) titulo.textContent = g.titulo;
    if (subtitulo && g.subtitulo) subtitulo.textContent = g.subtitulo;

    const grid = $("#gallery-grid");
    const fotos = Array.isArray(g.fotos) ? g.fotos : [];
    if (!grid) return;

    grid.innerHTML = fotos.map((f, i) => `
      <figure class="gallery-item" data-aos="zoom-in" data-aos-delay="${(i % 3) * 80}" data-index="${i}">
        <img src="${f.src}" alt="${f.legenda || ''}" loading="lazy">
        <figcaption class="gallery-caption">${f.legenda || ''}</figcaption>
      </figure>
    `).join("");

    // Lightbox
    const lightbox = $("#lightbox");
    const imgEl = $("#lightbox-img");
    const capEl = $("#lightbox-caption");
    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      const foto = fotos[currentIndex];
      if (!foto) return;
      imgEl.src = foto.src;
      imgEl.alt = foto.legenda || "";
      capEl.textContent = foto.legenda || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    function showRelative(delta) {
      currentIndex = (currentIndex + delta + fotos.length) % fotos.length;
      openLightbox(currentIndex);
    }

    $$(".gallery-item", grid).forEach((item) => {
      item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
    });
    $("#lightbox-close")?.addEventListener("click", closeLightbox);
    $("#lightbox-prev")?.addEventListener("click", () => showRelative(-1));
    $("#lightbox-next")?.addEventListener("click", () => showRelative(1));
    lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showRelative(-1);
      if (e.key === "ArrowRight") showRelative(1);
    });

    // Swipe (touch) no lightbox
    let touchStartX = 0;
    lightbox?.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    lightbox?.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 50) showRelative(dx > 0 ? -1 : 1);
    }, { passive: true });
  }

  /* -----------------------------------------------------------------------
     10. CERIMÔNIA & RECEPÇÃO
  ----------------------------------------------------------------------- */
  function preencherLocal(prefixo, dados) {
    if (!dados) return;
    const set = (id, val) => { const el = $(`#${id}`); if (el) el.textContent = val; };
    set(`${prefixo}-titulo`, dados.titulo);
    set(`${prefixo}-local`, dados.local);
    set(`${prefixo}-endereco`, dados.endereco);
    set(`${prefixo}-data`, dados.data);
    set(`${prefixo}-horario`, dados.horario);

    const link = $(`#${prefixo}-maps-link`);
    if (link && dados.linkMaps) link.setAttribute("href", dados.linkMaps);

    const mapEl = $(`#${prefixo}-map`);
    if (mapEl && dados.mapaQuery) {
      const src = `https://maps.google.com/maps?q=${encodeURIComponent(dados.mapaQuery)}&output=embed`;
      mapEl.innerHTML = `<iframe src="${src}" loading="lazy" title="Mapa - ${dados.local || ''}"></iframe>`;
    }
  }
  function initLocais() {
    preencherLocal("cerimonia", cfg.cerimonia);
  }

  /* -----------------------------------------------------------------------
     11. MENSAGEM FINAL
  ----------------------------------------------------------------------- */
  function initMensagemFinal() {
    const m = cfg.mensagemFinal || {};
    const texto = $("#mensagem-final-texto");
    if (texto && m.texto) texto.textContent = m.texto;
  }

  /* -----------------------------------------------------------------------
     11.5 LISTA DE PRESENTES — reserva em tempo real via Firestore
  ----------------------------------------------------------------------- */
  const formatBRL = (n) => (Number(n) || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const FIRESTORE_COLLECTION = "presentes-reservas";
  const RSVP_COLLECTION = "confirmacoes-presenca";

  // Guarda o nome do último presente reservado nesta sessão, pra já
  // preencher automaticamente na Confirmação de Presença logo abaixo.
  let ultimoPresenteReservado = null;
  let atualizarRsvpGiftInfo = null; // ligado por initConfirmacaoPresenca()

  function initPresentes() {
    const p = cfg.presentes || {};
    const titulo = $("#presentes-titulo");
    const subtitulo = $("#presentes-subtitulo");
    if (titulo && p.titulo) titulo.textContent = p.titulo;
    if (subtitulo && p.subtitulo) subtitulo.textContent = p.subtitulo;

    const grid = $("#gifts-grid");
    const itens = Array.isArray(p.itens) ? p.itens : [];
    if (!grid) return;

    // --- toast reutilizado pra avisos ("reservado!", "já foi reservado", etc.) ---
    const toast = $("#toast");
    const toastText = $("#toast-text");
    let toastTimer = null;
    function mostrarToast(texto) {
      if (!toast) return;
      if (toastText) toastText.textContent = texto;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
    }

    // --- render inicial dos cards (estado "carregando") ---
    function botaoHtml(item, estado) {
      if (item.linkExterno) {
        return `<a href="${item.linkExterno}" target="_blank" rel="noopener" class="gift-btn">Presentear</a>`;
      }
      if (estado === "carregando") {
        return `<button type="button" class="gift-btn" disabled>Carregando…</button>`;
      }
      if (estado === "indisponivel") {
        return `<button type="button" class="gift-btn" disabled title="Reserva ainda não configurada">Reservar</button>`;
      }
      return `<button type="button" class="gift-btn" data-reservar-btn data-id="${item.id}">Reservar</button>`;
    }

    grid.innerHTML = itens.map((item, i) => `
      <article class="gift-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}" data-item-id="${item.id}">
        <div class="gift-image"><img src="${item.imagem}" alt="${item.nome}" loading="lazy"></div>
        <div class="gift-body">
          <h3 class="gift-name">${item.nome}</h3>
          <p class="gift-desc">${item.descricao}</p>
          <div class="gift-footer">
            <span class="gift-value">${formatBRL(item.valor)}</span>
            ${botaoHtml(item, "carregando")}
          </div>
        </div>
      </article>
    `).join("");

    // --- atualiza um card específico conforme o estado de reserva ---
    function aplicarEstado(item, reserva) {
      const card = grid.querySelector(`[data-item-id="${item.id}"]`);
      if (!card) return;
      const footer = card.querySelector(".gift-footer");
      card.classList.toggle("gift-card--reservado", !!reserva);

      if (item.linkExterno) return; // link externo não participa da reserva

      if (reserva) {
        footer.innerHTML = `
          <span class="gift-value">${formatBRL(item.valor)}</span>
          <span class="gift-reservado-badge"><i class="fa-solid fa-check"></i> Reservado por ${reserva.nome}</span>
        `;
      } else {
        footer.innerHTML = `
          <span class="gift-value">${formatBRL(item.valor)}</span>
          ${botaoHtml(item, "disponivel")}
        `;
        const btn = footer.querySelector("[data-reservar-btn]");
        btn?.addEventListener("click", () => abrirModalReserva(item));
      }
    }

    // --- Firebase indisponível/não configurado: mostra tudo como indisponível ---
    if (!window.firebaseDb) {
      itens.forEach((item) => {
        const card = grid.querySelector(`[data-item-id="${item.id}"]`);
        const footer = card?.querySelector(".gift-footer");
        if (footer && !item.linkExterno) {
          footer.innerHTML = `
            <span class="gift-value">${formatBRL(item.valor)}</span>
            ${botaoHtml(item, "indisponivel")}
          `;
        }
      });
      return;
    }

    // --- assina a coleção inteira em tempo real ---
    const db = window.firebaseDb;
    db.collection(FIRESTORE_COLLECTION).onSnapshot((snapshot) => {
      const reservas = {};
      snapshot.forEach((doc) => { reservas[doc.id] = doc.data(); });
      itens.forEach((item) => aplicarEstado(item, reservas[item.id] || null));
    }, (err) => {
      console.error("Firestore (presentes) erro ao ouvir mudanças:", err);
      mostrarToast("Não foi possível carregar as reservas agora.");
    });

    // --- modal de reserva (pede o nome de quem está reservando) ---
    const modal = $("#reserve-modal");
    const modalItemName = $("#reserve-modal-item");
    const modalInput = $("#reserve-modal-input");
    const modalConfirm = $("#reserve-modal-confirm");
    const modalCancel = $("#reserve-modal-cancel");
    let itemAtual = null;

    function abrirModalReserva(item) {
      if (!modal) return;
      itemAtual = item;
      if (modalItemName) modalItemName.textContent = item.nome;
      if (modalInput) modalInput.value = "";
      modal.hidden = false;
      setTimeout(() => modalInput?.focus(), 50);
    }
    function fecharModal() {
      if (modal) modal.hidden = true;
      itemAtual = null;
    }

    modalCancel?.addEventListener("click", fecharModal);
    modal?.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });

    async function confirmarReserva() {
      const nome = (modalInput?.value || "").trim();
      if (!nome || !itemAtual) return;
      if (modalConfirm) modalConfirm.disabled = true;

      const ref = db.collection(FIRESTORE_COLLECTION).doc(itemAtual.id);
      try {
        await db.runTransaction(async (tx) => {
          const doc = await tx.get(ref);
          if (doc.exists) {
            throw new Error("JA_RESERVADO");
          }
          tx.set(ref, {
            nome,
            reservadoEm: firebase.firestore.FieldValue.serverTimestamp()
          });
        });
        mostrarToast(`Presente reservado, obrigado ${nome}! 🎉`);
        ultimoPresenteReservado = itemAtual.nome;
        if (atualizarRsvpGiftInfo) atualizarRsvpGiftInfo();
        fecharModal();
      } catch (err) {
        if (err && err.message === "JA_RESERVADO") {
          mostrarToast("Ops! Alguém acabou de reservar esse item agora. Escolha outro. 😅");
          fecharModal();
        } else {
          console.error("Erro ao reservar presente:", err);
          mostrarToast("Não foi possível reservar agora. Tente de novo em instantes.");
        }
      } finally {
        if (modalConfirm) modalConfirm.disabled = false;
      }
    }

    modalConfirm?.addEventListener("click", confirmarReserva);
    modalInput?.addEventListener("keydown", (e) => { if (e.key === "Enter") confirmarReserva(); });
  }

  /* -----------------------------------------------------------------------
     11.6 CONFIRMAÇÃO DE PRESENÇA — grava no Firestore, junto com o
     presente escolhido (se a pessoa já tiver reservado um nesta sessão)
  ----------------------------------------------------------------------- */
  function initConfirmacaoPresenca() {
    const c = cfg.confirmacaoPresenca || {};
    const titulo = $("#confirmacao-titulo");
    const subtitulo = $("#confirmacao-subtitulo");
    if (titulo && c.titulo) titulo.textContent = c.titulo;
    if (subtitulo && c.subtitulo) subtitulo.textContent = c.subtitulo;

    const card = $(".rsvp-card");
    const giftInfo = $("#rsvp-gift-info");
    const giftName = $("#rsvp-gift-name");
    const nomeInput = $("#rsvp-nome");
    const acompanhantesInput = $("#rsvp-acompanhantes");
    const btn = $("#rsvp-confirm-btn");
    const confirmedMsg = $("#rsvp-confirmed-msg");
    if (!btn) return;

    // Exposto pra initPresentes() chamar assim que alguém reservar um item.
    atualizarRsvpGiftInfo = () => {
      if (giftInfo && giftName && ultimoPresenteReservado) {
        giftName.textContent = ultimoPresenteReservado;
        giftInfo.hidden = false;
      }
    };
    atualizarRsvpGiftInfo();

    const toast = $("#toast");
    const toastText = $("#toast-text");
    let toastTimer = null;
    function mostrarToast(texto) {
      if (!toast) return;
      if (toastText) toastText.textContent = texto;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
    }

    if (!window.firebaseDb) {
      btn.disabled = true;
      btn.title = "Confirmação ainda não configurada";
      return;
    }

    const db = window.firebaseDb;
    let enviando = false;

    btn.addEventListener("click", async () => {
      if (enviando) return;
      const nome = (nomeInput?.value || "").trim();
      const acompanhantes = Math.max(1, Math.min(10, Number(acompanhantesInput?.value) || 1));
      if (!nome) {
        nomeInput?.focus();
        mostrarToast("Digite seu nome pra confirmar.");
        return;
      }

      enviando = true;
      btn.disabled = true;

      try {
        await db.collection(RSVP_COLLECTION).add({
          nome,
          acompanhantes,
          presente: ultimoPresenteReservado || null,
          confirmadoEm: firebase.firestore.FieldValue.serverTimestamp()
        });

        if (card) {
          $$("label, input", card).forEach((el) => { el.hidden = true; });
          if (giftInfo) giftInfo.hidden = true;
          btn.hidden = true;
        }
        if (confirmedMsg) confirmedMsg.hidden = false;
      } catch (err) {
        console.error("Erro ao confirmar presença:", err);
        mostrarToast("Não foi possível confirmar agora. Tente de novo em instantes.");
        btn.disabled = false;
        enviando = false;
      }
    });
  }

  /* -----------------------------------------------------------------------
     14. PLAYER DE MÚSICA
  ----------------------------------------------------------------------- */
  function initMusica() {
    const m = cfg.musica || {};
    const player = $("#music-player");
    const audio = $("#bg-audio");
    const toggle = $("#music-toggle");
    const volume = $("#volume-range");
    if (!audio || !toggle) return;

    // Sem arquivo de música configurado ainda: some com o player inteiro
    // em vez de deixar um botão na tela que não faz nada.
    if (!m.arquivo) { player?.remove(); return; }

    audio.src = m.arquivo;
    audio.volume = typeof m.volumeInicial === "number" ? m.volumeInicial : 0.4;
    if (volume) volume.value = audio.volume;

    let isPlaying = false;

    function play() {
      audio.play().then(() => {
        isPlaying = true;
        toggle.classList.add("playing");
      }).catch(() => { /* autoplay bloqueado — aguarda interação */ });
    }
    function pause() {
      audio.pause();
      isPlaying = false;
      toggle.classList.remove("playing");
    }

    toggle.addEventListener("click", () => { isPlaying ? pause() : play(); });
    volume?.addEventListener("input", (e) => { audio.volume = Number(e.target.value); });

    if (m.autoplay) {
      // Navegadores bloqueiam autoplay COM SOM sem gesto do usuário — mas
      // autoplay MUDO é sempre permitido. Então a música já começa a
      // tocar (muda) assim que o site abre, e é desmutada automaticamente
      // no primeiro toque/clique/scroll/tecla do visitante — sem precisar
      // caçar o botão de play.
      audio.muted = true;
      let autoplayOk = false;
      audio.play().then(() => {
        autoplayOk = true;
        isPlaying = true;
        toggle.classList.add("playing");
      }).catch(() => { /* até mudo foi bloqueado; cai no fallback abaixo */ });

      const eventosInteracao = ["click", "touchstart", "keydown", "scroll"];
      const primeiraInteracao = () => {
        audio.muted = false;
        if (!autoplayOk) play(); // autoplay mudo foi bloqueado, toca agora
        eventosInteracao.forEach((ev) => document.removeEventListener(ev, primeiraInteracao));
      };
      eventosInteracao.forEach((ev) => document.addEventListener(ev, primeiraInteracao, { passive: true }));
    }
  }

  /* -----------------------------------------------------------------------
     16. SCROLL: barra de progresso + botão voltar ao topo
  ----------------------------------------------------------------------- */
  function initScrollEffects() {
    const progressFill = $("#progress-fill");
    const backToTop = $("#back-to-top");

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressFill) progressFill.style.width = pct + "%";
      if (backToTop) backToTop.classList.toggle("visible", scrollTop > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -----------------------------------------------------------------------
     11.4 FIREBASE — inicialização (auth anônima + Firestore)
  ----------------------------------------------------------------------- */
  function initFirebase() {
    const fb = cfg.firebase || {};
    const configurado = !!(fb.apiKey && fb.projectId);

    if (!configurado || typeof firebase === "undefined") {
      // Sem config preenchida (ou SDK não carregado): segue sem Firebase,
      // a lista de presentes mostra o botão "Reservar" desativado.
      initPresentes();
      initConfirmacaoPresenca();
      return;
    }

    try {
      firebase.initializeApp(fb);
      firebase.auth().signInAnonymously()
        .then(() => {
          window.firebaseDb = firebase.firestore();
          initPresentes();
          initConfirmacaoPresenca();
        })
        .catch((err) => {
          console.error("Firebase — falha na autenticação anônima:", err);
          initPresentes();
          initConfirmacaoPresenca();
        });
    } catch (err) {
      console.error("Firebase — falha ao inicializar:", err);
      initPresentes();
      initConfirmacaoPresenca();
    }
  }

  /* -----------------------------------------------------------------------
     BOOTSTRAP
  ----------------------------------------------------------------------- */
  function init() {
    aplicarTema();
    aplicarSEO();
    initLoading();
    initCursor();
    initHero();
    initMensagem();
    initCountdown();
    initAddToCalendar();
    initGaleria();
    initLocais();
    initFirebase();
    initMensagemFinal();
    initMusica();
    initScrollEffects();

    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
