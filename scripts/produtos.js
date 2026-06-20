(function () {
  const WA = 'https://wa.me/5571987261711';
  let catalogo = {};
  let basePath = '';

  function fmt(v) {
    return v.toFixed(2).replace('.', ',');
  }

  function resolveImg(path) {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('../')) return path;
    return basePath + path;
  }

  function precoHtml(p, vip) {
    const px = vip ? '-vip' : '';
    const parc = p.parcelas
      ? `<p class="preco-parcelado${px}"> POR ${p.parcelas[0]}x de <span>R$ ${fmt(p.parcelas[1])}</span> sem juros</p>`
      : '';
    const avista = p.somentePix
      ? `<p class="preco-avista${px}">POR R$ ${fmt(p.pix)}</p>`
      : `<p class="preco-avista${px}">OU R$${fmt(p.pix)} no Pix</p>`;
    const desc = p.desconto ? `<p class="preco-desconto-visual${vip ? '-vip' : ''}">(${p.desconto}% DE DESCONTO A VISTA)</p>` : '';
    return `<del>DE R$ ${fmt(p.de)}</del>${parc}${avista}${desc}`;
  }

  function cardHtml(id, opts) {
    const p = catalogo[id];
    if (!p) return '';
    const vip = opts && opts.vip;
    const cls = vip ? 'produto-item-vip' : 'produto-item';
    const descCls = vip ? 'product-description-vip' : 'product-description';
    const estrelas = vip
      ? '<div class="div-estrelas-D-vip"><img src="' + basePath + 'imagens/estrelas.png" alt="Avaliação 5 estrelas" class="estrelas-D-vip" width="50" height="15" loading="lazy"></div>'
      : '<div class="pai-A"><img src="' + basePath + 'imagens/estrelas.png" alt="Avaliação 5 estrelas" class="estrelaA" width="50" height="15" loading="lazy"></div>';
    const esgotado = p.esgotado
      ? '<p class="estoque-msg">ESGOTADO</p>'
      : '';
    const imgCls = p.esgotado ? ' class="estoque-zerado"' : '';
    const breve = p.breve ? `<p class="breve-descricao">${p.breve}</p>` : '';
    const btnVer = p.esgotado ? 'Ver Detalhes' : (p.cat === 'bike' ? 'Ver Bike' : 'Ver Detalhes');
    const btnCls = vip ? 'carousel-button-vip' : 'carousel-button';

    return `<div class="${cls}">
      <img src="${resolveImg(p.img)}" alt="${p.titulo}" width="350" height="250" loading="lazy" decoding="async"${imgCls}>
      <div class="produto-detalhes${vip ? '-vip' : ''}">
        ${esgotado}
        <h3 class="${descCls}">${p.titulo}</h3>
        ${breve}
        ${estrelas}
        <div class="product-price${vip ? '-vip' : ''}">
          ${precoHtml(p, vip)}
        </div>
        <div class="botoes-produto-container${vip ? '-vip' : ''}">
          <a href="${WA}" target="_blank" rel="noopener noreferrer" class="${btnCls} compra-agora${vip ? '-vip' : ''}" data-comprar="${id}">Comprar Agora</a>
          <button type="button" class="${btnCls} view-button${vip ? '-vip' : ''}" data-product-id="${id}">${btnVer}</button>
        </div>
      </div>
    </div>`;
  }

  function renderGrupo(ids, opts) {
    const items = ids.map((id) => cardHtml(id, opts)).join('');
    return `<div class="carousel-container">
      <div class="carousel-slide active">
        <div class="produto-linha">${items}</div>
      </div>
    </div>`;
  }

  function renderSecao(container, grupos, opts) {
    container.innerHTML = grupos.map((g) => renderGrupo(g, opts)).join('');
  }

  function abrirModal(id) {
    const p = catalogo[id];
    const modal = document.getElementById('modal-dinamico');
    if (!p || !modal) return;
    const img = document.getElementById('modal-imagem-produto');
    const titulo = document.getElementById('modal-titulo-produto');
    const texto = document.getElementById('modal-texto-produto');
    img.src = resolveImg(p.img);
    img.alt = p.titulo;
    img.width = 400;
    img.height = 300;
    img.loading = 'lazy';
    titulo.textContent = p.titulo;
    texto.textContent = p.descricao || p.breve || '';
    modal.style.display = 'flex';
    modal.classList.add('modal--visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.fechar-modal')?.focus();
  }

  function fecharModal() {
    const modal = document.getElementById('modal-dinamico');
    if (!modal) return;
    modal.style.display = 'none';
    modal.classList.remove('modal--visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function bindEvents() {
    document.addEventListener('click', (e) => {
      const ver = e.target.closest('[data-product-id]');
      if (ver) {
        e.preventDefault();
        abrirModal(ver.dataset.productId);
        return;
      }
      const compra = e.target.closest('[data-comprar]');
      if (compra) {
        e.preventDefault();
        const p = catalogo[compra.dataset.comprar];
        if (p && typeof comprar === 'function') comprar(p.titulo);
      }
      if (e.target.classList.contains('fechar-modal') || e.target === document.getElementById('modal-dinamico')) {
        fecharModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') fecharModal();
    });
  }

  function detectPage() {
    const path = window.location.pathname;
    if (path.includes('nossasbikes')) return 'bikes';
    if (path.includes('nossositens')) return 'itens';
    return 'index';
  }

  async function init() {
    const inPages = window.location.pathname.includes('/pages/');
    basePath = inPages ? '../' : './';

    try {
      const res = await fetch(basePath + 'data/produtos.json');
      const data = await res.json();
      catalogo = data.catalogo;
      const pagina = detectPage();
      const layout = data.paginas[pagina];
      if (!layout) return;

      layout.forEach((bloco) => {
        const el = document.querySelector(`[data-produtos="${bloco.id}"]`);
        if (!el) return;
        if (bloco.tipo === 'vip') {
          const inner = el.querySelector('.produto-linha-vip') || el;
          inner.innerHTML = cardHtml(bloco.produtos[0], { vip: true });
        } else {
          renderSecao(el, bloco.grupos, {});
        }
      });

      bindEvents();
      document.dispatchEvent(new CustomEvent('produtos:ready', { detail: { catalogo } }));
    } catch (err) {
      console.error('Erro ao carregar produtos:', err);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
