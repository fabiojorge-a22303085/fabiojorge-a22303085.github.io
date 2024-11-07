
   let counter = 0;
   const heading = document.querySelector('h1');
   function count() {
      counter++;
      heading.textContent = counter;
   } 

// 1 
function mudaTexto() {
    document.getElementById('transita').innerText = '1.Obrigado por passares!';
}

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

function alterarCorFundo() {
    var caixaTexto = document.getElementById('caixaTexto');
    var textoLength = caixaTexto.value.length;

    // Mudar a cor com base na ordem dos caracteres digitados
    var corAtual = cores[textoLength % cores.length];
    caixaTexto.style.backgroundColor = corAtual;
}

