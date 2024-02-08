mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case "janeiro":
            nome.innerHTML = "Rei"
        break;
        case "fevereiro":
            nome.innerHTML = "Mô"
        break;
        case "março":
            nome.innerHTML = "Cupido"
        break;
        case "abril":
            nome.innerHTML = "Apaixonado"
        break;
        case "maio":
            nome.innerHTML = "Pagodeiro"
        break;
        case "junho":
            nome.innerHTML = "Cara perfeito"
        break;
        case "julho":
            nome.innerHTML = "Mensageiro"
        break;
        case "agosto":
            nome.innerHTML = "Perturbado"
        break;
        case "setembro":
            nome.innerHTML = "Gueri gueri"
        break;
        case "outubro":
            nome.innerHTML = "Coração"
        break;
        case "novembro":
            nome.innerHTML = "Linda voz"
        break;
        case "dezembro":
            nome.innerHTML = "Criado mudo"
        break;
    }
}
dia.onchange = () => {
    if(dia.value >= 1 && dia.value <=3){
        nome.innerHTML += " que tanto fez ou tanto faz"
    }
    if(dia.value >= 4 && dia.value <=6){
        nome.innerHTML += " que desabou o barraco"
    }
}