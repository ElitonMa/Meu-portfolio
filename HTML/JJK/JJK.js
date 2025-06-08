function esconderBotoes () {
    document.getElementById("energia").hidden = true;
    document.getElementById("yuji").hidden = true;
    document.getElementById("toji").hidden = true;
    document.getElementById("nanami").hidden = true;
    document.getElementById("gojo").hidden = true;
}


function mudarParaEnergia () {
    esconderBotoes();
    document.getElementById("energia").hidden = false;

    /* Fundo imagem, Header, Texto */
    let fundoPrincipal = document.getElementById("fundo-imagem");
    let textoHabilidades = document.querySelector("#texto-informacao");
    let habilidadesHeader = document.querySelector("#habilidades-header");

    fundoPrincipal.style.backgroundImage = "url('https://criticalhits.com.br/wp-content/uploads/2022/12/0d39d-16706247084781.jpg')";
    habilidadesHeader.textContent = "Energia Amaldiçoada";
    textoHabilidades.textContent = "É um tipo de energia espiritual que vaza dos humanos como resultado de emoções negativas, compõe os corpos de espíritos amaldiçoados e é usada por feiticeiros e espíritos amaldiçoados para realizar feitiços. ";

}

function mudarParaYuji () {
    esconderBotoes();
    document.getElementById("yuji").hidden = false;

    /* Fundo imagem, Header, Texto */
    let fundoPrincipal = document.getElementById("fundo-imagem");
    let textoHabilidades = document.querySelector("#texto-informacao");
    let habilidadesHeader = document.querySelector("#habilidades-header");

    fundoPrincipal.style.backgroundImage = "url('https://senkai.com.br/wp-content/uploads/2024/12/curiosidades-yuji.webp')"
    habilidadesHeader.textContent = "Yuji Itadori";
    textoHabilidades.textContent = "Texto Yuji Itadori";

    document.getElementById("yuji").hidden = false;
}

function mudarParaGojo () {
    esconderBotoes();
    document.getElementById("gojo").hidden = false;

    /* Fundo imagem, Header, Texto */
    let fundoPrincipal = document.getElementById("fundo-imagem");
    let textoHabilidades = document.querySelector("#texto-informacao");
    let habilidadesHeader = document.querySelector("#habilidades-header");
    
    fundoPrincipal.style.backgroundImage = "url('https://sm.ign.com/ign_br/screenshot/default/captura-de-tela-277_j48m.png')"
    habilidadesHeader.textContent = "Gojo Satoru";
    textoHabilidades.textContent = "Texto Gojo Satoru";
    
    /* Icone habilidades */
    let habilidade1 = document.getElementById("habilidade-1");
    let habilidade2 = document.getElementById("habilidade-2");
    let habilidade3 = document.getElementById("habilidade-3");

    habilidade1.src = '';
    habilidade1.title = '';

    habilidade2.src = ''
    habilidade2.title = '';

    habilidade3.src = ''
    habilidade3.title = '';
}

function mudarParaNanami () {
    esconderBotoes();
    document.getElementById("nanami").hidden = false;

    /* Fundo imagem, Header, Texto */
    let fundoPrincipal = document.getElementById("fundo-imagem");
    let textoHabilidades = document.querySelector("#texto-informacao");
    let habilidadesHeader = document.querySelector("#habilidades-header");

    fundoPrincipal.style.backgroundImage = "url('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/collage-maker-09-aug-2023-09-51-pm-9.jpg')"
    habilidadesHeader.textContent = "Nanami Kento";
    textoHabilidades.textContent = "Texto Nanami Kento";

    /* Icone habilidades */
    let habilidade1 = document.getElementById("habilidade-1");
    let habilidade2 = document.getElementById("habilidade-2");
    let habilidade3 = document.getElementById("habilidade-3");

    habilidade1.src = '';
    habilidade1.title = '';

    habilidade2.src = ''
    habilidade2.title = '';

    habilidade3.src = ''
    habilidade3.title = '';
}

function mudarParaToji () {
    esconderBotoes();
    document.getElementById("toji").hidden = false;

    /* Fundo imagem, Header, Texto */
    let fundoPrincipal = document.getElementById("fundo-imagem");
    let textoHabilidades = document.querySelector("#texto-informacao");
    let habilidadesHeader = document.querySelector("#habilidades-header");

    fundoPrincipal.style.backgroundImage = "url('https://www.comboinfinito.com.br/principal/wp-content/uploads/2023/07/jujutsu-kaisen-toji-fushiguro.jpg')"
    habilidadesHeader.textContent = "Toji Fushiguro";
    textoHabilidades.textContent = "Texto Toji Fushiguro";

    /* Icone habilidades */
    let habilidade1 = document.getElementById("habilidade-1");
    let habilidade2 = document.getElementById("habilidade-2");
    let habilidade3 = document.getElementById("habilidade-3");

    habilidade1.src = '';
    habilidade1.title = '';

    habilidade2.src = ''
    habilidade2.title = '';

    habilidade3.src = ''
    habilidade3.title = '';
}




