document.addEventListener('DOMContentLoaded', () => {
  const produtosData = {

   

    "Bicicleta Absolute | aro 29": {
      imagem: "produtos-bikes/image (6).webp",
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
        imagem: "produtos-bikes/image (3).png",
        titulo: "Bicicleta Caloi Ceci | aro 26 | Cor Preto",
        
    },
    "Bicicleta EVOLO | aro 29 | Cor Amarela": {  
        imagem: "produtos-bikes/image (3).png",
        titulo: "Bicicleta EVOLO | aro 29 | Cor Amarela",
        
    },
    "Bicicleta EVOLO | aro 29 | Cor Amarela": {  
        imagem: "produtos-bikes/image (3).png",
        titulo: "Bicicleta EVOLO | aro 29 | Cor Amarela",
        
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