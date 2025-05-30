function verificarEmail() {

    const Email = document.getElementById("email_usuario").value;

    if (!Email) {
        document.getElementById('botao-registrar').disabled = true;
    }
    else if (validarEmail(Email)){
        document.getElementById('botao-registrar').disabled = false;
    }
    else {
        document.getElementById('botao-registrar').disabled = true;
    }
}

function registrarUsuario () {
    document.getElementById("registro-popup").hidden = false;
    document.getElementById("nome_usuario").value = "";
    document.getElementById("email_usuario").value = "";
    document.getElementById("senha_usuario").value = "";
    verificarEmail();
}

function mudarCorBackground (valorFundo) {  
    document.getElementById("fundo-principal").style.backgroundColor = `${valorFundo}`;
}   


function mostrarTextoBox (nome_variavel) {
    document.getElementById(`${nome_variavel}`).style.overflow = "visible";
    document.getElementById(`${nome_variavel}`).style.whiteSpace = "wrap";
    document.getElementById(`${nome_variavel}`).style.backgroundColor ="silver";
}

function naoMostrarTextoBox (nome_variavel) {
    document.getElementById(`${nome_variavel}`).style.overflow = "hidden";
    document.getElementById(`${nome_variavel}`).style.whiteSpace = "nowrap";
    document.getElementById(`${nome_variavel}`).style.backgroundColor = "";
}


function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function calcularValor() {
    let maisDeUmOperador = 0
    let valores = document.getElementById("resposta-calculadora").value.split(/([+\-*/])/g) /* separa a string em + - e * */
    let resultado = parseFloat(valores[0]) /* define o primero da lista como um numero */

    for (let i=0;i<valores.length; i+=1) {
        if (valores[i] === "+" || valores[i] === "-" || valores[i] === "*" || valores[i] === "/") {
            maisDeUmOperador+=1;
        }
    }

    if (maisDeUmOperador > 1) {
        document.getElementById("resposta-calculadora").value = "Não use mais de um operador!"
        return;
    }

    for (let i=1;i < valores.length; i+= 2) {
        let operador = valores[i] /*define o segundo da lista como o operador*/
        let numero = parseFloat(valores[i+1]) /* define o terceiro da lista como um numero */

        if (operador === "+") resultado += numero; 
        if (operador === "-") resultado -= numero;
        if (operador === "*") resultado *= numero;
        if (operador === "/") resultado /= numero;

        if (isNaN(resultado) === true) {
            document.getElementById("resposta-calculadora").value = ""
            return;
        }
        else {
        document.getElementById("resposta-calculadora").value = resultado
        }
    }
    
}

function limparCalculadora() {
    document.getElementById("resposta-calculadora").value = "";
}

function pegarValorCalculadora(valor) {
    
    if (document.getElementById("resposta-calculadora").value === "Não use mais de um operador!") document.getElementById("resposta-calculadora").value="";
    document.getElementById("resposta-calculadora").value += valor
    
}