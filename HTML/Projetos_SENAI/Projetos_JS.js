
function calcularIMC () {
    const textoSaude = document.getElementById("grau-saude").textContent;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    // Caso digite altura ou peso invalido
    if (altura <= 0 || peso <= 0) {
        return;
    }

    else {
        let classificacao = "";

            // Formula do IMC
            let IMC = peso / (altura*altura);
            
            // Verificacoes
            if (IMC < 18.5) {
                classificacao = "Você esta abaixo do normal";
            }
            else if (IMC >= 18.6 && IMC <= 24.9) {
                classificacao = "Você esta dentro do normal";
            }
            else if (IMC >= 25 && IMC <= 29.9) {
                classificacao = "Você esta sobrepeso";
            }
            else if (IMC >= 30 && IMC <= 34.9) {
                classificacao = "Você esta com grau de obesidade I";
            }
            else if (IMC >= 35 && IMC <= 39.9) {
                classificacao = "Você esta com grau de obesidade II";
            }
            else if (IMC >= 40) {
                classificacao = "Você esta com grau de obesidade III";
            }

            document.getElementById("grau-saude").textContent = `${classificacao}`;
            document.getElementById("imc").value = IMC.toFixed(1);
    }
}
    