let rodadaAtual = 0;
let jogadorAtual;


function incrementarRodada () {
    rodadaAtual++;
}

function verificarJogadorAtual () {

    if (rodadaAtual % 2 === 0) {
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

    let jogadaTexto = jogada.textContent;

    if (jogadaTexto === "O" || jogadaTexto === "X") {
        return;
    }

    else {
        jogadaTemporaria.style.opacity = "0.8"
        jogadaTemporaria.textContent = verificarJogadorAtual();
    }
    
}

function naoMostrar(idReal,temporario) {

    let jogada = document.querySelector(`${idReal}`);
    let jogadaTemporaria = document.querySelector(`${temporario}`);
    let jogadaTexto = jogada.textContent;

    if (jogadaTexto === "O" || jogadaTexto === "X") {
        return;
    }
    else {
        jogadaTemporaria.textContent = ""; 
        jogadaTemporaria.style.opacity = "1"
    }
};


function fazerJogada (temporario, idReal, quadrado) { 
    
    document.querySelector(`${temporario}`).textContent = "";
    let jogada = document.querySelector(`${idReal}`); 
    jogada.textContent = verificarJogadorAtual();
    let jogadaTexto = jogada.textContent;
    
    document.querySelector(`${quadrado}`).textContent = jogadaTexto;

    verificacaoDeVitoria();
    incrementarRodada(); 
}

function verificacaoDeVitoria() {

    let quadrado1 = document.querySelector(".quadrado-1").textContent;
    let quadrado2 = document.querySelector(".quadrado-2").textContent;
    let quadrado3 = document.querySelector(".quadrado-3").textContent;
    let quadrado4 = document.querySelector(".quadrado-4").textContent;
    let quadrado5 = document.querySelector(".quadrado-5").textContent;
    let quadrado6 = document.querySelector(".quadrado-6").textContent;
    let quadrado7 = document.querySelector(".quadrado-7").textContent;
    let quadrado8 = document.querySelector(".quadrado-8").textContent;
    let quadrado9 = document.querySelector(".quadrado-9").textContent;

    if (quadrado1 === quadrado2 && quadrado2 === quadrado3 && quadrado3 === quadrado1) {
        alert(quadrado3 + " GANHOU!");
    }
    if (quadrado4 === quadrado5 && quadrado5 === quadrado6 && quadrado6 === quadrado4) {
        alert(quadrado6 + " GANHOU!");
    }
    if (quadrado7 === quadrado8 && quadrado8 === quadrado9 && quadrado9 === quadrado4) {
        alert(quadrado9 + " GANHOU!");
    }

}