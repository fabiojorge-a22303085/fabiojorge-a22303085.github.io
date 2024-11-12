// 1 
const mudaTexto = () => {
    document.getElementById('transita').innerText = '1.Obrigado por passares!';
};


function restauraTexto() {
    document.getElementById('transita').innerText = '1.Passa por aqui!';
}

// 2
function textRed() {
    document.getElementById('pinta').style.color = 'red';
    }

function textGreen() {
    document.getElementById('pinta').style.color = 'green';
    }

    function textBlue() {
        document.getElementById('pinta').style.color = 'blue';
    }
    
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
function backgroundColor() {
    const selectedColor = document.getElementById('cor').value;
    document.body.style.backgroundColor = selectedColor;
}

document.getElementById('cor').addEventListener('change', backgroundColor);

//5
let counter = 72;
const heading = document.querySelector('span');
function count() {
   counter++;
   heading.textContent = counter;
} 

//6
function frase() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // Exibir a frase no elemento 'resultado'
    document.getElementById('resultado').innerHTML = `
        <p>O ${nome} tem ${idade}!</p>
    `;
}


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

