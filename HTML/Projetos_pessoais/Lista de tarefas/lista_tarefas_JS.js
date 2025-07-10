    let quantidadeDeListas = 1;

function adicionarElemento() {
    const conteudo = document.createElement("div");
    const label = document.createElement("label");
    const elemento = document.getElementById("fundo-lista");
    const lista = document.createElement("div");
    const br = document.createElement("br");

    lista.className = "item-lista";

    label.innerHTML = "Texto exemplo";
    label.id = "label" + `${quantidadeDeListas}`;

    conteudo.innerHTML = "Exemplo de conteudo";
    conteudo.id = "conteudo" + `${quantidadeDeListas}`;

    quantidadeDeListas++;

    elemento.appendChild(lista);
    lista.appendChild(label);
    lista.appendChild(br);
    lista.appendChild(conteudo);        
}

let pressionouEditar = true;

function tornarEditavel() {
    let lapisDesativado = document.getElementById("mudar-texto-desativado");
    let lapisAtivado = document.getElementById("mudar-texto-ativado");

    for (let i = 0; i < quantidadeDeListas; i++ ) {

        let elementosLabel = document.getElementById("label" + `${i}`);
        let elementosConteudo = document.getElementById("conteudo" + `${i}`);

        if (i === quantidadeDeListas-1) {
            pressionouEditar = !pressionouEditar;
        }
        if (pressionouEditar === false ) {
            lapisDesativado.style.display = "none";
            lapisAtivado.style.display = "inline-block";
            elementosConteudo.contentEditable = "true";
            elementosLabel.contentEditable = "true";
        }
        else if (pressionouEditar === true) {
            lapisDesativado.style.display = "inline-block";
            lapisAtivado.style.display = "none";
            elementosConteudo.contentEditable = "false";
            elementosLabel.contentEditable = "false";
        }
    }
}
