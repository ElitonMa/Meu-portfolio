let compras = JSON.parse(localStorage.getItem("compras")) || []; /* Converte um JSON em um objeto e pega o item chamado compras*/

function comprar() {
    let continuar = true;

        while (continuar) {
            let item = prompt("Digite um item:"); 

                if (item && item.trim() !== "") { /* Remove '/0' e '/n' da string */
                    compras.push(item.trim()); /* Coloca o item digita em compras */
                }
            let resposta = prompt("Adicionar outro item? (s/n)");
            if (!resposta || resposta.toLowerCase() !== "s") continuar = false; /* transforma a resposta em minusculo e compara */
        }
        localStorage.setItem("compras", JSON.stringify(compras)); /* cria um item chamado compras para a nossa JSON, stringify converte uma variável de javascript para uma string JSON */
}

function atualizarLista() {
    const lista = document.getElementById("listaCompras");
    lista.innerHTML = "";

    compras.forEach((item, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${item}`;
        lista.appendChild(li);
    });

}

function limparLista() {
  compras = [];
  localStorage.removeItem("compras");
  atualizarLista();
}

window.addEventListener("DOMContentLoaded", atualizarLista);
