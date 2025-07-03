    const conteudo = document.createElement("div");
    const label = document.createElement("label");

function adicionarElemento() {
    const elemento = document.getElementById("fundo-lista");
    const lista = document.createElement("div");
    const br = document.createElement("br");

    label.innerHTML = "Texto exemplo";
    conteudo.innerHTML = "Exemplo de conteudo";

    lista.className = "item-lista";
    conteudo.id = "conteudo";

    elemento.appendChild(lista);
    lista.appendChild(label);
    lista.appendChild(br);
    lista.appendChild(conteudo);
}

function tornarMudavel() {
    let contador = 0;

    if (contador === 0) {
        contador++;
        document.getElementById("conteudo").contentEditable = "true";
    }
    else if (contador)
}