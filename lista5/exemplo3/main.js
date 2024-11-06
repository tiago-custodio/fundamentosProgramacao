function retornarConceito(nota) {
    switch(true) {
        case (nota >=0 && nota <= 50):
            return `Insuficiente`;
        case nota <= 65:
            return `Regular`;
        case nota < 85:
            return `Bom`;
        case (nota <= 85 && nota <=100):
            return `Ótimo`;
        default:
            return `Valor fora do intervalo 0-100`;
    }

}