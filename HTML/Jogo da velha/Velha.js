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

    console.log(rodadaAtual);
    verificacaoDeVitoria();
    incrementarRodada(); 
}

function verificacaoDeVitoria() {
    let slideIn = document.querySelector(".slide-in");
    let quemGanhou = document.getElementById("ganhador");

    let quadrado1 = document.querySelector(".quadrado-1").textContent;
    let quadrado2 = document.querySelector(".quadrado-2").textContent;
    let quadrado3 = document.querySelector(".quadrado-3").textContent;

    let quadrado4 = document.querySelector(".quadrado-4").textContent;
    let quadrado5 = document.querySelector(".quadrado-5").textContent;
    let quadrado6 = document.querySelector(".quadrado-6").textContent;

    let quadrado7 = document.querySelector(".quadrado-7").textContent;
    let quadrado8 = document.querySelector(".quadrado-8").textContent;
    let quadrado9 = document.querySelector(".quadrado-9").textContent;

    if (rodadaAtual === 8) {
        quemGanhou.textContent = 'Ninguem ganhou :(';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }
    if (quadrado1 === quadrado2 && quadrado2 === quadrado3 && quadrado3 === quadrado1) {
        quemGanhou.textContent = 'A letra ' + quadrado1 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
        
    }
    if (quadrado4 === quadrado5 && quadrado5 === quadrado6 && quadrado6 === quadrado4) {
        quemGanhou.textContent = 'A letra ' + quadrado4 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }
    if (quadrado7 === quadrado8 && quadrado8 === quadrado9 && quadrado9 === quadrado7) {
        quemGanhou.textContent ='A letra ' + quadrado7 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }

    if (quadrado1 === quadrado4 && quadrado4 === quadrado7 && quadrado7 === quadrado1) {
        quemGanhou.textContent = 'A letra ' + quadrado1 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }

    if (quadrado2 === quadrado5 && quadrado5 === quadrado8 && quadrado8 === quadrado2) {
        quemGanhou.textContent = 'A letra ' + quadrado2 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }

    if (quadrado3 === quadrado6 && quadrado6 === quadrado9 && quadrado9 === quadrado3) {
        quemGanhou.textContent = 'A letra ' + quadrado3 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }

    if (quadrado1 === quadrado5 && quadrado5 === quadrado9 && quadrado9 === quadrado1) {
        quemGanhou.textContent = 'A letra ' + quadrado1 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }

    if (quadrado3 === quadrado5 && quadrado5 === quadrado7 && quadrado7 === quadrado3) {
        quemGanhou.textContent = 'A letra ' + quadrado3 + ' ganhou a partida!';
        slideIn.hidden = false;
        slideIn.style.animationPlayState = 'running';
    }
}

function limparVelha () {
    let esconderTela = document.querySelector(".tela-de-vitoria");
    rodadaAtual = 0;

    document.querySelector(".quadrado-1").textContent = " ";
    document.querySelector(".quadrado-2").textContent = " ";
    document.querySelector(".quadrado-3").textContent = " ";
    document.querySelector(".quadrado-4").textContent = " ";
    document.querySelector(".quadrado-5").textContent = " ";
    document.querySelector(".quadrado-6").textContent = " ";
    document.querySelector(".quadrado-7").textContent = " ";
    document.querySelector(".quadrado-8").textContent = " ";
    document.querySelector(".quadrado-9").textContent = " ";
    document.querySelector("#jogada1").textContent = "a";
    document.querySelector("#jogada2").textContent = "b";
    document.querySelector("#jogada3").textContent = "c";
    document.querySelector("#jogada4").textContent = "d";
    document.querySelector("#jogada5").textContent = "e";
    document.querySelector("#jogada6").textContent = "f";
    document.querySelector("#jogada7").textContent = "g";
    document.querySelector("#jogada8").textContent = "h";
    document.querySelector("#jogada9").textContent = "i";

    esconderTela.hidden = true; 
}

