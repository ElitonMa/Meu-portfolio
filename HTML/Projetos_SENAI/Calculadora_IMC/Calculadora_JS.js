
function calcularIMC () {
    const textoSaude = document.getElementById("grau-saude");
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
                classificacao = "Você está abaixo do normal";
                textoSaude.style.color = "#7cf797";
            }
            else if (IMC >= 18.6 && IMC <= 24.9) {
                classificacao = "Você está dentro do normal";
                textoSaude.style.color = "#37f360";
            }
            else if (IMC >= 25 && IMC <= 29.9) {
                classificacao = "Você está sobrepeso";
                textoSaude.style.color = "#eb7575";
            }
            else if (IMC >= 30 && IMC <= 34.9) {
                classificacao = "Você está com grau de obesidade I";
                textoSaude.style.color = "#db3434";
            }
            else if (IMC >= 35 && IMC <= 39.9) {
                classificacao = "Você está com grau de obesidade II";
                textoSaude.style.color = "#db3434";
            }
            else if (IMC >= 40) {
                classificacao = "Você está com grau de obesidade III";
                textoSaude.style.color = "#db0e0e       ";
            }

            textoSaude.textContent = `${classificacao}`;
            document.getElementById("imc").textContent =  'IMC = ' + IMC.toFixed(1);
    }
}
    