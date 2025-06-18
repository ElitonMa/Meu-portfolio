let contextoQuestoesC = ['Qual é a função de ponteiros em C','Qual é a funcionalidade de fgets em C','Para que serve structs em C','Qual é a definição de vetores?','Qual é o simbolo correto para atribuir um valor a outro?'];
let alternativasQuestoesC = [
 ['Armazenar o endereço de memória de outra variável','Verificar o endereço de memória de outra variável','Receber os valores de outra variável','Verificar o tipo de memória de outra variável'],
 ['Usado para ler um nome','Usado para ler uma lista de numeros','Usado para ler uma linha de texto','Usado para ler um vetor'],
 ['Usada para agrupar varias variaveis iguais','Usada para agrupar varias variáveis em uma so unidade','Usada para armazenar varios valores','Usada para agrupar somente characteres'],
 ['Uma variavel capaz de armazenar somente um unico valor','Uma variavel capaz de armazenar somente inteiros','Uma variavel capaz de armazenar nenhum valor','Uma variavel capaz de armazenar varios valores'],
 ['Simbolo de ===','Simbolo de >=','Simbolo de =','Simbolo de =='],
 ];
let respostasC = [1,3,2,4,3];

function aparecerQuiz(nomeQuiz) {
    
    document.getElementById(`${nomeQuiz}`).style.zIndex = 1;
    mudarPerguntaC(nomeQuiz);
}

let rodadaAtual = 0;

function mudarPerguntaC() {

    if (!verificarSeExcedeuLimite()) {

        document.querySelector("#pergunta-C").textContent = contextoQuestoesC[rodadaAtual];
        document.querySelector("#pergunta-1-C").textContent = alternativasQuestoesC[rodadaAtual][0];
        document.querySelector("#pergunta-2-C").textContent = alternativasQuestoesC[rodadaAtual][1];
        document.querySelector("#pergunta-3-C").textContent = alternativasQuestoesC[rodadaAtual][2];
        document.querySelector("#pergunta-4-C").textContent = alternativasQuestoesC[rodadaAtual][3];
    }
    else if (verificarSeExcedeuLimite() === true) {
        document.getElementById('quiz-C').style.zIndex = -1;
        rodadaAtual = 0;
    }
}

function verificarSeExcedeuLimite() {
    if (rodadaAtual === 5) {
        return true;
    }
    else {
        return false;
    }
}

function responderPerguntaC(escolha) {
    if (escolha === respostasC[rodadaAtual]) {
        console.log("Acertou!!!!!!!!!!!!!!!!!!!");
    }
    else {
        console.log("Errou!!!!!!!!!!!!!!!!!!!");
    }
    rodadaAtual++;
    mudarPerguntaC();
}