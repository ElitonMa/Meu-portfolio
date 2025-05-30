

function calcularIMC () {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let IMC = peso / (altura*altura)
    console.log(IMC)
    if (IMC < 18.5) {
        document.getElementById("sobrepeso").hidden = false;  
        document.getElementById("abaixo").hidden = true; 
        document.getElementById("normal").hidden = true; 
        document.getElementById("obesidadeGrau1").hidden = true; 
        document.getElementById("obesidadeGrau2").hidden = true;
        document.getElementById("obesidadeGrau3").hidden = true; 
    }
    else if (IMC >= 18.6 && IMC <= 24.9) {
        document.getElementById("sobrepeso").hidden = true;  
        document.getElementById("abaixo").hidden = false; 
        document.getElementById("normal").hidden = true; 
        document.getElementById("obesidadeGrau1").hidden = true; 
        document.getElementById("obesidadeGrau2").hidden = true;
        document.getElementById("obesidadeGrau3").hidden = true;
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        document.getElementById("sobrepeso").hidden = true;  
        document.getElementById("abaixo").hidden = true; 
        document.getElementById("normal").hidden = false; 
        document.getElementById("obesidadeGrau1").hidden = true; 
        document.getElementById("obesidadeGrau2").hidden = true;
        document.getElementById("obesidadeGrau3").hidden = true; 
    }
    else if (IMC >= 30 && IMC <= 34.9) {
        document.getElementById("sobrepeso").hidden = true;  
        document.getElementById("abaixo").hidden = true; 
        document.getElementById("normal").hidden = true; 
        document.getElementById("obesidadeGrau1").hidden = false; 
        document.getElementById("obesidadeGrau2").hidden = true;
        document.getElementById("obesidadeGrau3").hidden = true; 
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        document.getElementById("sobrepeso").hidden = true;  
        document.getElementById("abaixo").hidden = true; 
        document.getElementById("normal").hidden = true; 
        document.getElementById("obesidadeGrau1").hidden = true; 
        document.getElementById("obesidadeGrau2").hidden = false;
        document.getElementById("obesidadeGrau3").hidden = true;
    }
    else if (IMC >= 40) {
        document.getElementById("sobrepeso").hidden = true;  
        document.getElementById("abaixo").hidden = true; 
        document.getElementById("normal").hidden = true; 
        document.getElementById("obesidadeGrau1").hidden = true; 
        document.getElementById("obesidadeGrau2").hidden = true;
        document.getElementById("obesidadeGrau3").hidden = false;
    }
    document.getElementById("imc").value = IMC.toFixed(1)
}
    