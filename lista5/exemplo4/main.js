function acharParImpar(valor) {
    switch(valor % 2) {
        case 0:
            return `É par!`;
        case 1:
            return `É ímpar!`;
        default:
            return `Número não encontrado / inválido!`;
    }
}