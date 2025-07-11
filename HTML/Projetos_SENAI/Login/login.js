
const senhaInvisivel = document.getElementById("icone-olho");
const inputSenha = document.getElementById("senha");
let clicouOlho = false;

senhaInvisivel.addEventListener("click", function () {

    if (!clicouOlho) {
        senhaInvisivel.setAttribute("icon", "mdi:eye-off");
        inputSenha.setAttribute("type", "text");
        clicouOlho = true;
    }
    else if (clicouOlho) {
        inputSenha.setAttribute("type", "password");
        senhaInvisivel.setAttribute("icon", "mdi:eye");
        clicouOlho = false;
    }
})