// 1 
const mudaTexto = () => {
    document.getElementById('transita').innerText = '1.Obrigado por passares!';
};


function restauraTexto() {
    document.getElementById('transita').innerText = '1.Passa por aqui!';
}

// 2
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");
        document.getElementById('pinta').style.color = color;
    });
});
// 3
// Definindo um array com as cores
const cores = ['#8a8583', '#475c6c', '#eed7a1', '#cd8b62'];

function changeColor() {
    var caixaTexto = document.getElementById('caixaTexto');
    var textoLength = caixaTexto.value.length;

    // Mudar a cor com base na ordem dos caracteres digitados
    var corAtual = cores[textoLength % cores.length];
    caixaTexto.style.backgroundColor = corAtual;
}

//4
document.querySelector('select').onchange = function() {
    document.querySelector('body').style.backgroundColor = this.value;
};

//5
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

//let counter = ;
// const heading = document.querySelector('span');
function count() {
    let counter = localStorage.getItem('counter');
   counter++;
   document.querySelector('#contar').textContent = counter;
   localStorage.setItem('counter', counter);
} 

document.querySelector('#contar').textContent = localStorage.getItem('counter');

//6
document.querySelector('form').onsubmit = (e) => {
    // Impedir o envio padrão do formulário (evita recarregar a página)
    e.preventDefault();

    // Obter os valores dos campos de texto
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // Exibir a frase no elemento 'resultado'
    document.getElementById('resultado').innerHTML = `
        <p>O ${nome} tem ${idade}!</p>
    `;
};

//7
let segundos = 0;

function time() {
    // Incrementar o contador
    segundos++;
    
    // Atualizar o conteúdo do span com o novo valor
    document.getElementById('contador').innerText = segundos;
}

// Chamar a função count() a cada 1 segundo (1000 milissegundos)
setInterval(time, 1000);



//Eventos
//1
document.getElementById('clickB').addEventListener('click', textRed);

//2 e 3
function mudatxt() {
    document.getElementById('transforma').innerText = 'Importância';
}

function restauratxt() {
    document.getElementById('transforma').innerText = 'História';
}

document.getElementById('transforma').addEventListener('mouseover', mudatxt);

document.getElementById('transforma').addEventListener('mouseout', restauratxt);

//4 e 5
// Função para mudar a cor de fundo com keydown
function backColor(event) {
    if (event.key === 'v') {
        document.body.style.backgroundColor = 'red';  // Altera o fundo para vermelho
    } else if (event.key === 'a') {
        document.body.style.backgroundColor = 'blue'; // Altera o fundo para azul
    } else if (event.key === 'z') {
        document.body.style.backgroundColor = ''; // Restaura o fundo 
    }
}

document.addEventListener('keydown', backColor);

document.addEventListener('keyup', backAgain);

