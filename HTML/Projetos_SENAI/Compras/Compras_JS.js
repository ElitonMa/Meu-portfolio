let compras = JSON.parse(localStorage.getItem("compras")) || []; /* Converte um JSON em um objeto e pega o item chamado compras*/
let comidas = JSON.parse(localStorage.getItem("comidas")) || [];
let bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];
let essenciais = JSON.parse(localStorage.getItem("essenciais")) || [];


function comprar() {
    let continuar = true;

        while (continuar) {
            let item = prompt("Digite um item:"); 

                if (item && item.trim() !== "") { /* .trim Remove '/0' e '/n' da string */
                    compras.push(item.trim()); /* Coloca o item digitado em compras */
                }
            let resposta = prompt("Adicionar outro item? (s/n)");
            if (!resposta || resposta.toLowerCase() !== "s") continuar = false; /* transforma a resposta em minusculo e compara */
        }
        localStorage.setItem("compras", JSON.stringify(compras)); /* cria um item chamado compras para a nossa JSON, stringify converte uma variável de javascript para uma string JSON */
}

function atualizarLista() {
    const lista = document.getElementById("listaCompras"); /* Salva a lista na div chamada 'listaCompras' */
    const listaComidas = document.getElementById("listaComidas");
    const listaBebidas = document.getElementById("listaBebidas");
    const listaEssenciais = document.getElementById("listaEssenciais");
    lista.innerHTML = "";
    listaComidas.innerHTML = "";
    listaBebidas.innerHTML = "";
    listaEssenciais.innerHTML = "";

    compras.forEach((item, i) => { /* Está percorrendo cada item do arquivo JSON */
        const li = document.createElement("li"); /*  Cria um elemento 'li' dentro da div 'listaCompras' */
        li.textContent = `${i + 1}. ${item}`; /* Numera cada item colocado */
        lista.appendChild(li); /* Coloca o elemento 'li' como um filho da div 'listaCompras' */
    });

    bebidas.forEach((item, i) => {
        const li = document.createElement("li"); 
        li.textContent = `${i + 1}. ${item}`; 
        listaBebidas.appendChild(li); 
    });
    
    comidas.forEach((item, i) => {
        const li = document.createElement("li"); 
        li.textContent = `${i + 1}. ${item}`; 
        listaComidas.appendChild(li); 
    });

    essenciais.forEach((item, i) => {
        const li = document.createElement("li"); 
        li.textContent = `${i + 1}. ${item}`; 
        listaEssenciais.appendChild(li); 
    });
}

function comprarEscolha () {
    let continuar = true;

    while (continuar) {
        let item = prompt("Digite um item:"); 

            if (item && item.trim() !== "") { 

                let opcao = prompt("Selecione uma categoria (compras, comidas, bebidas ou essenciais)");

                    if (opcao.toLowerCase() === "compras") {
                        escolhaCompras(item);
                    }
                    else if (opcao.toLowerCase() === "comidas") {
                        escolhaComidas(item);
                    }
                    else if (opcao.toLowerCase() === "bebidas") {
                        escolhaBebidas(item);
                    }
                    else if (opcao.toLowerCase() === "essenciais") {
                        escolhaEssenciais(item);
                    }
                    else {
                        alert("Não é uma opção valida!");
                        return;
                    }
            }
        let resposta = prompt("Adicionar outro item? (s/n)");
        if (!resposta || resposta.toLowerCase() !== "s") continuar = false; 
    }
}

function escolhaCompras(item) {
    compras.push(item.trim()); 
    localStorage.setItem("compras", JSON.stringify(compras));   
}

function escolhaComidas(item) {
    comidas.push(item.trim());
    localStorage.setItem("comidas", JSON.stringify(comidas));
}

function escolhaBebidas(item) {
    bebidas.push(item.trim());
    localStorage.setItem("bebidas", JSON.stringify(bebidas));
}

function escolhaEssenciais(item) {
    essenciais.push(item.trim());
    localStorage.setItem("essenciais", JSON.stringify(essenciais));
}

function limparLista() {

    let escolha = prompt("Qual lista deseja limpar? (compras, comidas, bebidas ou essenciais)");

        if (escolha.toLowerCase() === "compras") {
            compras = []; /* Remove todos os valores dentro de compras */
            localStorage.removeItem("compras"); /* Remove os valores da localstorage */
        }
        else if (escolha.toLowerCase() === "comidas") {
            comidas = []
            localStorage.removeItem("comidas");
        }
        else if (escolha.toLowerCase() === "bebidas") {
            bebidas = []
            localStorage.removeItem("bebidas");
        }
        else if (escolha.toLowerCase() === "essenciais") {
            essenciais = []
            localStorage.removeItem("essenciais");
        }   
        else {
            alert("Não é uma opção valida!");
            return;
        }
    atualizarLista();
}

window.addEventListener("DOMContentLoaded", atualizarLista); /* Quando todo o elemnto de HTML carregar ele irá acionar a função para atualizar a lista*/

