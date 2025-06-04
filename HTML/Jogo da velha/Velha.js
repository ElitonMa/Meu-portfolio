let rodadaAtual = 0;
let jogadorAtual = "";
function incrementarRodada () {
    rodadaAtual++;
    return rodadaAtual;
}

function verificarJogadorAtual () {
    if (rodadaAtual % 2 === 0){
        jogadorAtual = "X";
    }
    else {
        jogadorAtual = "O";
    }
    return jogadorAtual;
}


function mostrarJogadorAtual (idMostrar) {
    console.log(rodadaAtual);
    console.log(jogadorAtual);
    document.getElementById(`${idMostrar}`).textContent = jogadorAtual;
}

function fazerJogada (idReal) {
    incrementarRodada();    
    document.getElementsByClassName(`${idReal}`).textContent = jogadorAtual;
}