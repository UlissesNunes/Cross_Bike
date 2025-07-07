document.addEventListener('DOMContentLoaded', () => {

  // O CATÁLOGO DE PRODUTOS: Isso pode vir de um arquivo separado ou de uma API depois.
  const produtosData = {

    "bicicleta-caloi-ceci-ROSA": { // Este é o 'data-product-id' que conecta com o HTML 
        imagem: "produtos-bikes/image (3).png",
        titulo: "Bicicleta Caloi Ceci - Aro 26 - cor rosa",
        descricao: "A bicicleta Caloi Ceci é perfeita para quem busca conforto e estilo. Com aro 26, é ideal para passeios urbanos e trilhas leves. Seu design moderno e cores vibrantes garantem destaque por onde passar. Feita com materiais de alta qualidade, oferece durabilidade e segurança."
    }
    ,
    "guidom-prata": { // Este é o 'data-product-id' que conecta com o HTML
      imagem: "produtos-acessorios/guidon-prata.webp",
      titulo: "Guidão esportivo | Cor prata | Alumínio",
      descricao: "Produto com um belo acabamento e confiabilidade. Ideal para quem busca performance e um toque de estilo na bicicleta. Feito com alumínio de alta qualidade, garante leveza e durabilidade. Marca nacional."
    },
    "capacete-vermelho": {
      imagem: "produtos-acessorios/capacete-vermelho.webp",
      titulo: "Capacete de Ciclismo | Vermelho | Tamanho M",
      descricao: "Capacete aerodinâmico com ventilação otimizada, perfeito para longos passeios. Material resistente a impactos, com ajuste confortável. Design moderno e segurança garantida."
    },
    // ... Aqui você adicionaria os dados dos seus MIL produtos ...
  };

  // Pegando os elementos do modal (a "mesa de leitura")
  const modalDinamico = document.getElementById('modal-dinamico');
  const modalImagem = document.getElementById('modal-imagem-produto');
  const modalTitulo = document.getElementById('modal-titulo-produto');
  const modalTexto = document.getElementById('modal-texto-produto');
  const fecharModalBtn = document.querySelector('.fechar-modal');

  // Encontrando TODOS os botões "Ver Detalhes"
  document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId; // Pega o ID do produto clicado (ex: "guidom-prata")
      const produto = produtosData[productId]; // Busca os detalhes desse produto no "catálogo"

      if (produto) {
        // Preenche a "mesa de leitura" com os detalhes do produto
        modalImagem.src = produto.imagem;
        modalImagem.alt = produto.titulo;
        modalTitulo.textContent = produto.titulo;
        modalTexto.textContent = produto.descricao;

        // Mostra a "mesa de leitura"
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