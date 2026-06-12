(function () {
  const WHATSAPP_URL = 'https://wa.me/5571987261711';
  const WHATSAPP_ICON = 'adicionais/icons8-whatsapp.gif';

  function resolveAssetPath(file) {
    const inPages = /\/pages\//.test(window.location.pathname);
    return inPages ? `../${file}` : `./${file}`;
  }

  function voltarAoTopo(event) {
    if (event) event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.voltarAoTopo = voltarAoTopo;

  function injectSkipLink() {
    if (document.querySelector('.skip-link')) return;
    const main = document.querySelector('main') || document.querySelector('.section');
    const targetId = main?.id || main?.closest('.section')?.id || 'Home';
    const link = document.createElement('a');
    link.href = `#${targetId}`;
    link.className = 'skip-link';
    link.textContent = 'Ir para o conteúdo';
    link.addEventListener('click', (e) => {
      const el = document.getElementById(targetId) || document.querySelector('main');
      if (el) {
        e.preventDefault();
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
    document.body.insertBefore(link, document.body.firstChild);
  }

  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initBackToTop() {
    if (document.querySelector('.btn-topo-flutuante')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-topo-flutuante';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.innerHTML = '&#9650;';
    btn.addEventListener('click', voltarAoTopo);
    document.body.appendChild(btn);

    const toggle = () => {
      btn.classList.toggle('btn-topo-flutuante--visivel', window.scrollY > 400);
    };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }

  function initWhatsAppFab() {
    if (document.querySelector('.btn-whatsapp-flutuante')) return;
    const link = document.createElement('a');
    link.href = WHATSAPP_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'btn-whatsapp-flutuante';
    link.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');
    const img = document.createElement('img');
    img.src = resolveAssetPath(WHATSAPP_ICON);
    img.alt = '';
    img.width = 36;
    img.height = 36;
    link.appendChild(img);
    document.body.appendChild(link);
  }

  function initComprarLinks() {
    document.querySelectorAll('a.compra-agora, a.compra-agora-vip').forEach((link) => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('onclick')) {
          e.preventDefault();
        }
      });
    });
  }

  function initExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      if (!link.rel?.includes('noopener')) {
        link.rel = `${link.rel || ''} noopener noreferrer`.trim();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectSkipLink();
    initHeaderScroll();
    initBackToTop();
    initWhatsAppFab();
    initComprarLinks();
    initExternalLinks();
  });
})();
