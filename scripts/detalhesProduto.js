document.addEventListener('DOMContentLoaded', () => {
  const produtosData = {

    "Bicicleta aro29 verde" : {

        imagem: "produtos-bikes/bike-aro29-verde.webp",
        titulo: "Bicicleta aro29 verde"
    },

    "Bicicleta Evolo cor azul | aro 29" : {
        imagem: "produtos-bikes/bike-aro29-azul1.webp",
        titulo: "Bicicleta Evolo cor azul | aro 29"
    },

    "Bicicleta aro 16 | Cor verde" : {
        imagem: "produtos-bikes/bike-aro16-verde.webp",
        titulo: "Bicicleta aro 16 | Cor verde"
    },

    "Bicicleta z-rader retrô aro 26 | cor azul" : {
        imagem: "produtos-bikes/retro-azul.webp",
        titulo: "Bicicleta z-rader retrô aro 26 | cor azul"
    },

    "Bicicleta aro 20 cor vermelho" : {
        imagem: "produtos-bikes/bikearo20-vermelho.webp",
        titulo: "Bicicleta aro 20 cor vermelho"
    },

    "Bicicleta aro 20 cor rosa" : {
        imagem: "produtos-bikes/bikearo20-rosa.webp",
        titulo: "Bicicleta aro 20 cor rosa"
    },

    "Bicicleta aro 20 cor Lilás" : {
        imagem: "produtos-bikes/bikearo20-roxo.webp",
        titulo: "Bicicleta aro 20 cor Lilás"
    }, 




    "Bicicleta Aro 26 Sans - cor Violeta" : {
        imagem: "produtos-bikes/bike-violeta-26.webp",
        titulo: "Bicicleta Aro 26 Sans - cor Violeta"
     },

        "Bicicleta Aro 24 | Cor Preta" : {
        imagem: "produtos-bikes/bikearo24-preta.webp",
        titulo: "Bicicleta Aro 24 | Cor Preta"
     },

        "Bicicleta Caloi Ceci | aro 26 | Cor Rosa": {  
        imagem: "produtos-bikes/image (3).webp",
        titulo: "Bicicleta Caloi Ceci | aro 26 | Cor Rosa", 
    },

    ">Bicicleta aro 24 Sport Xr | Cor verde": {
        imagem: "produtos-bikes/bikearo24mobilete.webp",
        titulo: ">Bicicleta aro 24 Sport Xr | Cor verde"
    },

    "Bicicleta Monaco Aro 29": {
      imagem: "produtos-bikes/29monaco1.webp",
        titulo: "Bicicleta Monaco Aro 29",
    },
    "Bicicleta aro 29 Cor Laranja": {
      imagem: "produtos-bikes/bike29laranja.webp",
        titulo: "Bicicleta EVOLO Aro 29 Laranja",
    },
    "Bicicleta Absolute | aro 29": {
      imagem: "produtos-bikes/29absolute.webp",
      titulo: "Bicicleta Aro 29 Absolute Azul/Rosa"
    },
    "Bicicleta EVOLO | aro 29 | Cor Amarela": {  
        imagem: "produtos-bikes/bike-amarela-29.webp",
        titulo: "Bicicleta EVOLO | aro 29 | Cor Amarela",  
    },
    "Bicicleta Caloi Ceci | aro 26 | Cor Verde": {  
        imagem: "produtos-bikes/bike-verde-1200.png",
        titulo: "Bicicleta Caloi Ceci | aro 26 | Cor Verde",
    },
    "Bicicleta Caloi Ceci | aro 26 | Cor Azul": {  
        imagem: "produtos-bikes/bike-azul1200.png",
        titulo: "Bicicleta Caloi Ceci | aro 26 | Cor Azul",
    },
    "Bicicleta Caloi Ceci | aro 26 | Cor Preto": {  
        imagem: "produtos-bikes/bike-preta-branca-1200.png",
        titulo: "Bicicleta Caloi Ceci | aro 26 | Cor Preto",
    },
    "Bicicleta EVOLO | aro 29 | Cor Preto/Roxo": {  
        imagem: "produtos-bikes/bike-preto-roxo-29.webp",
        titulo: "Bicicleta EVOLO | aro 29 | Cor Preto/Roxo",
    },
    "Bicicleta aro 26 | Cor Laranja": {  
        imagem: "produtos-bikes/bike-laranja-26.png",
        titulo: "Bicicleta aro 26 | Cor Laranja",
    },
    "Bicicleta Infantil | cor vermelha": {  
        imagem: "imagens/bike-infantil-redimencionada.webp",
        titulo: "Bicicleta Infantil | aro 16 | Cor Vermelha",
    },
    "Quadro para bikes multicores": {  
        imagem: "imagens/bikes-quadro-redimencionada.webp",
        titulo: "Quadros para Bikes",
    },
"Bicicleta aro 26 | Cor Branca": {  
        imagem: "produtos-bikes/bike-branca-26.png",
        titulo: "Bicicleta aro 26 | Cor Branca",
    },
    "Bicicleta aro 26 | Cor Verde": {  
        imagem: "produtos-bikes/bike-verde-26.png",
        titulo: "Bicicleta aro 26 | Cor Verde",   
    },
    "Garrafas de plástico squeeze PTK": {  
        imagem: "produtos-acessorios/garrafa-trio.webp",
        titulo: "Garrafas de plástico squeeze PTK",    
    },
    "Pedal de alumínio | Cor Prata": {  
        imagem: "produtos-acessorios/pedal-prata.webp",
        titulo: "Pedal de alumínio | Cor Prata",   
    },
    "Câmara de ar Pirelli | aro 20/22/24/26/29": {  
        imagem: "produtos-acessorios/camara-de-ar-pirelli.webp",
        titulo: "Câmara de ar Pirelli | aro 20/22/24/26/29",   
    },
    "Câmara de ar Kenda | aro 20/22/24/26/29": {  
        imagem: "produtos-acessorios/camara-de-ar-kenda.webp",
        titulo: "Câmara de ar Kenda | aro 20/22/24/26/29",
    },
    "Bicicleta aro 26 | Cor Laranja": {  
        imagem: "produtos-bikes/bike-laranja-26.png",
        titulo: "Bicicleta aro 26 | Cor Laranja",
    },
    "Guidom esportivo | Cor prata | Alumínio": {  
        imagem: "produtos-acessorios/guidon-prata.webp",
        titulo: "Guidom esportivo | Cor prata | Alumínio",
    },
    " Guidom esportivo Alumínio Reto | Cor preto": {  
        imagem: "produtos-acessorios/guidon-preto (2).webp",
        titulo: " Guidom esportivo Alumínio Reto | Cor preto",
    },
    "Cadeado De Segredo Evolo | C/ senha": {  
        imagem: "produtos-acessorios/cadeado-evelo-amplo.webp",
        titulo: "Cadeado De Segredo Evolo | C/ senha",
    },
    "Câmara de ar Lerovrin | aro 20/26": {  
        imagem: "produtos-acessorios/camara-de-ar-levorin.webp",
        titulo: "Câmara de ar Lerovrin | aro 20/26",
    },
    "Mesa Monaco para Bikes": {  
        imagem: "produtos-acessorios/mesa-sport.webp",
        titulo: "Mesa Monaco para Bikes",
    },
    "Movimento Central e rosca": {  
        imagem: "produtos-acessorios/movimento-central-e-rosca-removebg-preview.webp",
        titulo: "Movimento Central e rosca",
    },
    " Corrente para Bikes sem marcha": {  
        imagem: "produtos-acessorios/corrente-evolo-bike-removebg-preview.webp",
        titulo: " Corrente para Bikes sem marcha",
    },
    "Corrente YBN de marcha para Bikes": {  
        imagem: "produtos-acessorios/corrente-de-marcha-removebg-preview.webp",
        titulo: "Corrente YBN de marcha para Bikes",
    },
    "Cubo de rolamento Multicores": {  
        imagem: "produtos-acessorios/tubo-de-enrolamento-removebg-preview.webp",
        titulo: "Cubo de rolamento",
    },
    "Corrente de 9 Velocidades": {  
        imagem: "produtos-acessorios/corrente-9velocidades-removebg-preview.webp",
        titulo: "Corrente de 9 Velocidades",
    },
    "Cadeado Evolo C/ chave | P": {  
        imagem: "produtos-acessorios/cadeado-evelo-amplo.webp",
        titulo: "Cadeado Evolo C/ chave | P",
    },
    "Cadeado Evolo Amplo C/chaves | G": {  
        imagem: "produtos-acessorios/cadeado-evolo-chaves.webp",
        titulo: "Cadeado Evolo Amplo C/chaves | G",
    },
    " Catraca 24 Dentes | Inviktus": {  
        imagem: "produtos-acessorios/catraca-24dentes-inviktus.webp",
        titulo: " Catraca 24 Dentes | Inviktus",
    },
    " Garrafa Termica PTK | Cor branco": {  
        imagem: "produtos-acessorios/garrafa-branca.webp",
        titulo: " Garrafa Termica PTK | Cor branco",
    },
    "Catraca 20 Dentes | EVOLO": {  
        imagem: "produtos-acessorios/catraca-20dentes-evolo-removebg-preview.webp",
        titulo: "Catraca 20 Dentes | EVOLO",
    },
    "Catraca 22 Dentes Shiftech": {  
        imagem: "produtos-acessorios/catraca-22dentes-shiftech-removebg-preview.webp",
        titulo: "Catraca 22 Dentes Shiftech",
    },  
  }
  const modalDinamico = document.getElementById('modal-dinamico');
  const modalImagem = document.getElementById('modal-imagem-produto');
  const modalTitulo = document.getElementById('modal-titulo-produto');
  const modalTexto = document.getElementById('modal-texto-produto');
  const fecharModalBtn = document.querySelector('.fechar-modal');
  // Encontrando TODOS os botões "Ver Detalhes"
  document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId; // Pega o ID do produto clicado
      const produto = produtosData[productId]; // Busca os detalhes desse produto no "catálogo"
      if (produto) {
        modalImagem.src = produto.imagem;
        modalImagem.alt = produto.titulo;
        modalTitulo.textContent = produto.titulo;
        modalTexto.textContent = produto.descricao;
        modalDinamico.style.display = 'flex';
      }
    });
  });
  // Funcionalidade para fechar o modal
  fecharModalBtn.addEventListener('click', () => {
    modalDinamico.style.display = 'none';
  });
  modalDinamico.addEventListener('click', (event) => {
    if (event.target === modalDinamico) { // Se clicou no fundo escuro, fecha
      modalDinamico.style.display = 'none';
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalDinamico.style.display === 'flex') {
      modalDinamico.style.display = 'none';
    }
  });
});