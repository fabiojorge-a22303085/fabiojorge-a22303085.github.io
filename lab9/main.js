const container = document.querySelector('.container');  // Seleciona o container onde os produtos serão inseridos
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

const product = document.querySelector('.produtos');
const lista = document.querySelector('.lista');
const totalElement = document.querySelector('.total');

let total = 0;

produtos.forEach(produto => {
  const article = document.createElement('article');
  
  article.innerHTML = `
    <img src="${produto.image}" alt="${produto.title}" style="max-width: 100%; height: auto;">
    <h3>${produto.title}</h3>
    <p>${produto.description}</p>
    <p><strong>${produto.price.toFixed(2)}€</strong></p>
    <button class="add-cesto">Adicionar</button>
  `;

  const addButton = article.querySelector('.add-cesto');
  
  // Evento de clique para adicionar ao cesto
  addButton.addEventListener('click', () => {
    adicionarAoCesto(produto, addButton);
  });

  container.appendChild(article);
});

// Função para adicionar produtos ao cesto
function adicionarAoCesto(produto, button) {
  // Criar item na lista de selecionados
  const listItem = document.createElement('li');
  

  // Criar estrutura do produto selecionado
  listItem.innerHTML = `
    <article>
      <img src="${produto.image}" alt="${produto.title}" style="max-width: 100px; height: auto;">
      <h3>${produto.title}</h3>
      <p>${produto.description}</p>
      <p><strong>${produto.price.toFixed(2)}€</strong></p>
    </article>
  `;

  listaSelecionados.appendChild(listItem);

  // Atualizar o total
  total += produto.price;
  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;


  // Atualizar o total
  total += produto.price;
  totalElement.textContent = `Custo Total: ${total.toFixed(2)}€`;

  /*  Desativar duplicados
  button.disabled = true;
  button.textContent = "Adicionado"; */
}
