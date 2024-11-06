function fazerCalculo(primeiroNumero, segundoNumero, operacao) {
    switch(operacao) {
        case `+`:
            return primeiroNumero + segundoNumero;

        case `-`:
            return primeiroNumero - segundoNumero;

        case `*`:
            return primeiroNumero * segundoNumero;

        case `/`:
            return primeiroNumero / segundoNumero;
        
        default:
            return `Oooops algo deu errado!`;
    }
}