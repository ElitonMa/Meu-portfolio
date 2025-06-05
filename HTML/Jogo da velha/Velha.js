let rodadaAtual = 0;
let jaJogou = [false,false,false,false,false,false,false,false,false];
let jogadorAtual;

function incrementarRodada () {
    rodadaAtual++;
}

function verificarJogadorAtual () {

    if (rodadaAtual % 2 == 0) {
        jogadorAtual = 'X';
    }
    else {
        jogadorAtual = 'O';
    }
    return jogadorAtual;
}

function mostrarJogadorAtual (temporario, idReal) {

    let jogadaTemporaria = document.querySelector(`${temporario}`);
    let jogada = document.querySelector(`${idReal}`);
    console.log(jogada.textContent);
    if (jogada === "O" || jogada === "X") {
        return;
    }

    else {

    jogadaTemporaria.style.opacity = "0.8"
    jogadaTemporaria.textContent = verificarJogadorAtual();
    jogadaTemporaria.onmouseout = function() {naoMostrar()};

        function naoMostrar() {
            jogadaTemporaria.textContent = ""; 
            jogadaTemporaria.style.opacity = "1"
        };
    
    }
}

function fazerJogada (temporario, idReal, quadrado) { 
    
    document.querySelector(`${temporario}`).textContent = "";
    let jogada = document.querySelector(`${idReal}`); 

    if (jogada.textContent === "O" || jogada.textContent === "X") {
        return;
    }
    else {
        jogada.textContent = verificarJogadorAtual();
        document.querySelector(`${quadrado}`).textContent = jogada;
        incrementarRodada(); 
    }
}