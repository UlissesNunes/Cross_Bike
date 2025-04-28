function lerMais() {
    const pontos = document.querySelector('#pontos');
    const maisTexto = document.querySelector('#mais');
    const btnLerMais = document.querySelector('#buttonLeiaMais');

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline';
        btnLerMais.innerHTML = 'Ler mais';
        maisTexto.style.display = 'none';
    } else {
        pontos.style.display = 'none';
        btnLerMais.innerHTML = 'Ler menos';
        maisTexto.style.display = 'inline';
    }
}