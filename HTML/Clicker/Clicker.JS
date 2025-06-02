// Quantidade de picaretas compradas
let quantidadeDePicaretas = 0;

function comprarPicareta() {
    let custo = document.getElementById("custo-upgrade-picareta").textContent;
    
    if (quantidadeTotalCookies() >= custo) {
        quantidadeDePicaretas += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDePicaretas*quantidadeDePicaretas)*9) + 25; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-picareta").textContent = custo;
        document.getElementById("quantidade-picareta").textContent = quantidadeDePicaretas;
    }
}
// Quantidade de fazendas compradas
let quantidadeDeFazendas = 0;

function comprarFazenda() {
    let custo = document.getElementById("custo-upgrade-fazenda").textContent;
    
    if (quantidadeTotalCookies()  >= custo) {
        quantidadeDeFazendas += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeFazendas*quantidadeDeFazendas)*90) + 250; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-fazenda").textContent = custo;
        document.getElementById("quantidade-fazenda").textContent = quantidadeDeFazendas;
    }
}

// Quantidade de foguetes comprados
let quantidadeDeFoguetes = 0;

function comprarFoguete() {
    let custo = document.getElementById("custo-upgrade-foguete").textContent;
    
    if (quantidadeTotalCookies()  >= custo) {
        quantidadeDeFoguetes += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeFoguetes*quantidadeDeFoguetes)*300) + 1000; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-foguete").textContent = custo;
        document.getElementById("quantidade-foguete").textContent = quantidadeDeFoguetes;
    }
}

// Quantidade de magos comprados
let quantidadeDeMagos = 0;

function comprarMagos() {
    let custo = document.getElementById("custo-upgrade-mago").textContent;
    
    if (quantidadeTotalCookies()  >= custo) {
        quantidadeDeMagos += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeMagos*quantidadeDeMagos)*900) + 5000; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-mago").textContent = custo;
        document.getElementById("quantidade-mago").textContent = quantidadeDeMagos;
    }
}

// Quantidade de minas compradas
let quantidadeDeMinas = 0

function comprarMinas() {
    let custo = document.getElementById("custo-upgrade-mina").textContent;
    
    if (quantidadeTotalCookies()  >= custo) {
        quantidadeDeMinas += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeMinas*quantidadeDeMinas)*3000) + 12500; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-mina").textContent = custo;
        document.getElementById("quantidade-mina").textContent = quantidadeDeMinas;
    }
}

setInterval(cookiesPorSegundo, 200);
setInterval(verificarCustos, 10);

function verificarCustos () {
    let custoPicareta = document.getElementById("custo-upgrade-picareta").textContent;
    let custoMina = document.getElementById("custo-upgrade-mina").textContent;
    let custoFoguete = document.getElementById("custo-upgrade-foguete").textContent;
    let custoFazenda = document.getElementById("custo-upgrade-fazenda").textContent;
    let custoMago = document.getElementById("custo-upgrade-mago").textContent;
    let valorAtual = parseInt(document.getElementById("quantidade-cookies").textContent,10);

    if (valorAtual < custoMina) {
        document.getElementById("upgrade-mina").style.opacity = 0.3;
    }
    if (valorAtual < custoPicareta) {
        document.getElementById("upgrade-picareta").style.opacity = 0.3;
    }
    if (valorAtual < custoFazenda) {
        document.getElementById("upgrade-fazenda").style.opacity = 0.3;
    }
    if (valorAtual < custoFoguete) {
        document.getElementById("upgrade-foguete").style.opacity = 0.3;
    }
    if (valorAtual < custoMago) {
        document.getElementById("upgrade-mago").style.opacity = 0.3;
    }
    if (valorAtual >= custoMina) {
        document.getElementById("upgrade-mina").style.opacity = 1;
    }
    if (valorAtual >= custoPicareta) {
        document.getElementById("upgrade-picareta").style.opacity = 1;
    }
    if (valorAtual >= custoFazenda) {
        document.getElementById("upgrade-fazenda").style.opacity = 1;
    }
    if (valorAtual >= custoFoguete) {
        document.getElementById("upgrade-foguete").style.opacity = 1;
    }
    if (valorAtual >= custoMago) {
        document.getElementById("upgrade-mago").style.opacity = 1;
    }
}
function cookiesPorSegundo() {
    let valorAtual = parseInt(document.getElementById("quantidade-cookies").textContent,10);
    let cookiesPorSegundo = parseInt(document.getElementById("cookies-por-segundo").textContent,10);
 
    cookiesPorSegundo = (quantidadeDeFazendas*10)+(quantidadeDeFoguetes*25)+(quantidadeDeMagos*50)+(quantidadeDeMinas*100);

    valorAtual += cookiesPorSegundo;

    document.getElementById("cookies-por-segundo").textContent = cookiesPorSegundo;
    document.getElementById("quantidade-cookies").textContent = valorAtual;
}

function cookieClick() {
    let valor = parseInt(document.getElementById("quantidade-cookies").textContent,10);

    let cookies = 1+(quantidadeDePicaretas*5);
    parseInt(cookies,10)
    
    valor += cookies;
    document.getElementById("quantidade-cookies").textContent = valor;
    document.getElementById("cookies-por-click").textContent = cookies;
}

function quantidadeTotalCookies () {
    return parseInt(document.getElementById("quantidade-cookies").textContent,10); 
}
       


