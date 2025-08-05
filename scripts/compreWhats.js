  function comprar(produto) {
    const telefone = '5571987261711'; // seu número com DDD
    const mensagem = `Olá! Vim pelo Site Oficial da CrossBike Tenho interesse no produto: ${produto}.  Poderia me enviar mais informações?`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank'); }