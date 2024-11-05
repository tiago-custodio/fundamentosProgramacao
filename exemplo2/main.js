function definirParImpar(num) {
    let resultado;
    switch(num){
        case 1:
        case 3:
        case 5:
        case 7:
        case 9: 
            resultado = `é ímpar!`   
            break;
        case 2:
        case 4: 
        case 6: 
        case 8: 
        case 10:
            resultado = `é par!`   
            break;
        default:
            resultado = "Número inválido!"
    }
    return resultado;
}