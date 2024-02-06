mes.onchange = () => {
    switch(mes.value.toLowerCase){
        case "Janeiro":
            nome.innerHTML = "Rei"
        break;
        case "Fevereiro":
            nome.innerHTML = "Mô"
        break;
    }
}