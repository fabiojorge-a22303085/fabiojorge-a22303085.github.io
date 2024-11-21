const container = document.querySelector('.container');  // Seleciona o container onde os produtos serão inseridos

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
