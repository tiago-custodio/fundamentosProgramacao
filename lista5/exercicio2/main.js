function fazerCalculo(primeiroNumero, segundoNumero, operacao) {
    switch(operacao) {
        case 1:
            return (primeiroNumero + segundoNumero) / 2;

        case 2:
            return primeiroNumero - segundoNumero;

        case 3:
            return primeiroNumero * segundoNumero;

        case 4:
            return primeiroNumero / segundoNumero;
        
        default:
            return `Oooops algo deu errado!`;
    }
}