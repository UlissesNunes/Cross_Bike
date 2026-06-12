function lerMais() {
    const pontos = document.querySelector('#pontos');
    const maisTexto = document.querySelector('#mais');
    const btnLerMais = document.querySelector('#buttonLeiaMais');
    if (!pontos || !maisTexto || !btnLerMais) return;

    const expandido = maisTexto.style.display === 'inline';
    pontos.style.display = expandido ? 'inline' : 'none';
    maisTexto.style.display = expandido ? 'none' : 'inline';
    btnLerMais.textContent = expandido ? 'Leia mais' : 'Ler menos';
    btnLerMais.setAttribute('aria-expanded', expandido ? 'false' : 'true');
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#buttonLeiaMais');
    if (btn) btn.setAttribute('aria-expanded', 'false');
});