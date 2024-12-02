const container = document.querySelector('.container');  
const listaSelecionados = document.querySelector('.selecionados');



produtos.forEach(produto => {  // Para cada produto na lista de produtos
  const article = document.createElement('article');  // Cria um novo elemento <article> para cada produto
  
  article.innerHTML = `
    <img src="${produto.image}" alt="${produto.title}" style="max-width: 100%; height: auto;">
    <h3>${produto.title}</h3>
    <p><strong>Custo Total:${produto.price}€</strong></p>
    <p>${produto.description}</p>
    <button>Adicionar ao cesto</button>
  `;  // Adiciona o conteúdo HTML dentro do <article>

  container.appendChild(article);  // Adiciona o <article> dentro do container
});


const totalElement = document.querySelector('.total'); 

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

// Função para renderizar um produto no carrinho
function renderizarProdutoSelecionado(produto) {
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
}

// Função para adicionar um produto ao carrinho
function adicionarAoCesto(produto) {
  // Depuração: verificar se o produto tem as propriedades esperadas
  if (!produto.title || !produto.price || !produto.image) {
    console.error('Produto inválido:', produto);
    return;
  }

  // Adiciona ao array do carrinho e salva no localStorage
  carrinho.push(produto);
  salvarCarrinho(carrinho);

  // Renderiza o produto no carrinho
  renderizarProdutoSelecionado(produto);

  // Atualiza o total
  total += produto.price;
  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;
}

// Renderizar todos os produtos na página
produtos.forEach((produto, index) => {
  // Depuração: verificar se o produto tem as propriedades esperadas
  if (!produto.title || !produto.price || !produto.image) {
    console.warn(`Produto inválido no índice ${index}:`, produto);
    return;
  }

  const article = document.createElement('article');
  
  article.innerHTML = `
    <img src="${produto.image}" alt="${produto.title}" style="max-width: 100%; height: auto;">
    <h3>${produto.title}</h3>
    <p>${produto.description}</p>
    <p><strong>${produto.price.toFixed(2)}€</strong></p>
    <button class="add-cesto">Adicionar</button>
  `;

  const addButton = article.querySelector('.add-cesto');
  
  // Evento de clique para adicionar ao carrinho
  addButton.addEventListener('click', () => {
    adicionarAoCesto(produto);
  });

  container.appendChild(article);
});

// Função para inicializar o carrinho ao carregar a página
function inicializarCarrinho() {
  carrinho.forEach(produto => {
    renderizarProdutoSelecionado(produto);
    total += produto.price;
  });

  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;
}

// Inicializar o carrinho ao carregar a página
inicializarCarrinho();


// Seleciona o botão correto com o ID "limpar"
const limparButton = document.getElementById('limpar'); // Corrigido para 'limpar', que é o ID no HTML

// Função para limpar o carrinho
function limparCarrinho() {
  // Limpa a lista de produtos selecionados na interface
  listaSelecionados.innerHTML = '';

  // Redefine o total
  total = 0;
  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;

  // Limpa o carrinho do localStorage
  carrinho = []; // Limpa a variável carrinho
  salvarCarrinho(carrinho); // Salva o carrinho vazio no localStorage

  console.log('Carrinho limpo!');
}

// Adiciona o evento de clique no botão para limpar o carrinho
limparButton.addEventListener('click', limparCarrinho);

