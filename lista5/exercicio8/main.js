function calcularCredito(saldoMedio) {
    switch (true) {
        case saldoMedio >= 0 && saldoMedio < 200:
            return "Nenhum crédito disponível.";
        
        case saldoMedio >= 200 && saldoMedio < 400:
            return `R$ ${(saldoMedio * 0.20).toFixed(2)}`;
        
        case saldoMedio >= 400 && saldoMedio < 600:
            return `R$ ${(saldoMedio * 0.30).toFixed(2)}`;
        
        case saldoMedio >= 600:
            return `R$ ${(saldoMedio * 0.40).toFixed(2)}`;
        
        default:
            return "Valor inválido, tente novamente!";
    }
}
