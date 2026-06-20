(function () {
    var btnHamburguer = document.getElementById('btn-hamburguer');
    var sidebarNav = document.getElementById('sidebar-nav');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var sidebarFechar = document.getElementById('sidebar-fechar');

    if (!btnHamburguer || !sidebarNav) return;

    function abrirSidebar() {
        sidebarNav.classList.add('sidebar--aberta');
        sidebarOverlay.classList.add('sidebar--aberta');
        sidebarNav.setAttribute('aria-hidden', 'false');
        btnHamburguer.setAttribute('aria-expanded', 'true');
        btnHamburguer.classList.add('ativo');
        document.body.style.overflow = 'hidden';
        sidebarFechar.focus();
    }

    function fecharSidebar() {
        sidebarNav.classList.remove('sidebar--aberta');
        sidebarOverlay.classList.remove('sidebar--aberta');
        sidebarNav.setAttribute('aria-hidden', 'true');
        btnHamburguer.setAttribute('aria-expanded', 'false');
        btnHamburguer.classList.remove('ativo');
        document.body.style.overflow = '';
        btnHamburguer.focus();
    }

    btnHamburguer.addEventListener('click', abrirSidebar);
    sidebarFechar.addEventListener('click', fecharSidebar);
    sidebarOverlay.addEventListener('click', fecharSidebar);

    sidebarNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', fecharSidebar);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebarNav.classList.contains('sidebar--aberta')) {
            fecharSidebar();
        }
    });
})();