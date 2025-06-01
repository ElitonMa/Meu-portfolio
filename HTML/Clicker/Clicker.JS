// Quantidade de picaretas compradas
let quantidadeDePicaretas = 0;

function comprarPicareta() {
    let custo = document.getElementById("custo-upgrade-picareta").textContent;
    
    if (cookieClick() >= custo) {
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
    
    if (cookieClick() >= custo) {
        quantidadeDeFazendas += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeFazendas*quantidadeDeFazendas)*90) + 1250; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-fazenda").textContent = custo;
        document.getElementById("quantidade-fazenda").textContent = quantidadeDeFazendas;
    }
}

// Quantidade de foguetes comprados
let quantidadeDeFoguetes = 0;

function comprarFoguete() {
    let custo = document.getElementById("custo-upgrade-foguete").textContent;
    
    if (cookieClick() >= custo) {
        quantidadeDeFoguetes += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeFoguetes*quantidadeDeFoguetes)*900) + 12500; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-foguete").textContent = custo;
        document.getElementById("quantidade-foguete").textContent = quantidadeDeFoguetes;
    }
}

// Quantidade de magos comprados
let quantidadeDeMagos = 0;

function comprarMagos() {
    let custo = document.getElementById("custo-upgrade-mago").textContent;
    
    if (cookieClick() >= custo) {
        quantidadeDeMagos += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeMagos*quantidadeDeMagos)*15000) + 50000; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-mago").textContent = custo;
        document.getElementById("quantidade-mago").textContent = quantidadeDeMagos;
    }
}

// Quantidade de minas compradas
let quantidadeDeMinas = 0

function comprarMinas() {
    let custo = document.getElementById("custo-upgrade-mina").textContent;
    
    if (cookieClick() >= custo) {
        quantidadeDeMinas += 1;
        document.getElementById("quantidade-cookies").textContent -= custo;
        custo = ( (quantidadeDeMinas*quantidadeDeMinas)*30000) + 125000; // Para cada picareta que tiver
        document.getElementById("custo-upgrade-mina").textContent = custo;
        document.getElementById("quantidade-mina").textContent = quantidadeDeMinas;
    }
}

function cookieClick() {
    let valor = parseInt(document.getElementById("quantidade-cookies").textContent,10);

    let cookies = 1+(quantidadeDePicaretas*2)+(quantidadeDeFazendas*10)+(quantidadeDeFoguetes*250)+(quantidadeDeMagos*500)+(quantidadeDeMinas*1000);
    parseInt(cookies,10)
    
    valor += cookies;
    document.getElementById("quantidade-cookies").textContent = valor;
    document.getElementById("cookies-por-click").textContent = cookies;
    return valor;
}