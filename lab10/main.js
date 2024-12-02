const container = document.querySelector('.container');
const listaSelecionados = document.querySelector('.selecionados');
const totalElement = document.querySelector('.total');
const limparButton = document.getElementById('limpar');
const filtroCategoria = document.getElementById('categoria-filtro');

let total = 0; // Total inicial
let carrinho = carregarCarrinho(); // Carrega o carrinho do localStorage

// Função para salvar o carrinho no localStorage
function salvarCarrinho(carrinho) {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para carregar o carrinho do localStorage
function carregarCarrinho() {
  const carrinhoJSON = localStorage.getItem('carrinho');
  return carrinhoJSON ? JSON.parse(carrinhoJSON) : [];
}

// Função para renderizar produtos na página
function renderizarProdutos(produtos) {
  container.innerHTML = ''; // Limpa o container antes de renderizar

  produtos.forEach(produto => {
    const article = document.createElement('article'); // Cria um elemento para cada produto

    article.innerHTML = `
      <img src="${produto.image}" alt="${produto.title}" style="max-width: 100%; height: auto;">
      <h3>${produto.title}</h3>
      <p>${produto.description}</p>
      <p><strong>${produto.price.toFixed(2)}€</strong></p>
      <p>Classificação: ${produto.rating.rate} ⭐ (${produto.rating.count} avaliações)</p>
      <button class="add-cesto">Adicionar ao cesto</button>
    `;

    // Adiciona funcionalidade ao botão
    const addButton = article.querySelector('.add-cesto');
    addButton.addEventListener('click', () => {
      adicionarAoCesto(produto);
    });

    container.appendChild(article); // Adiciona o artigo ao container
  });
}

// Função para adicionar produto ao carrinho
function adicionarAoCesto(produto) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <article style="border: 1px solid #ddd; padding: 10px; margin: 5px; display: flex; flex-direction: column; align-items: center; text-align: center;">
      <img src="${produto.image}" alt="${produto.title}" style="max-width: 100px; height: auto;">
      <h3 style="color: black;">${produto.title}</h3>
      <p>${produto.description}</p>
      <p><strong>${produto.price.toFixed(2)}€</strong></p>
    </article>
  `;
  listaSelecionados.appendChild(listItem);

  total += produto.price;
  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;

  carrinho.push(produto);
  salvarCarrinho(carrinho);
}

// Função para inicializar carrinho
function inicializarCarrinho() {
  carrinho.forEach(produto => {
    adicionarAoCesto(produto);
  });
}

// Função para limpar carrinho
function limparCarrinho() {
  listaSelecionados.innerHTML = '';
  total = 0;
  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;
  carrinho = [];
  salvarCarrinho(carrinho);
}

// Adiciona evento de clique no botão para limpar carrinho
limparButton.addEventListener('click', limparCarrinho);

// AJAX para buscar produtos
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://deisishop.pythonanywhere.com/products/')
    .then(response => response.json())
    .then(produtos => {
      renderizarProdutos(produtos); // Renderiza os produtos na página
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
});

// Adiciona filtro de categorias
filtroCategoria.addEventListener('change', function () {
  const categoriaSelecionada = this.value;

  fetch('https://deisishop.pythonanywhere.com/products/')
    .then(response => response.json())
    .then(produtos => {
      const produtosFiltrados = categoriaSelecionada
        ? produtos.filter(produto => produto.category === categoriaSelecionada)
        : produtos;

      renderizarProdutos(produtosFiltrados);
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
});

// Inicializa o carrinho
inicializarCarrinho();
