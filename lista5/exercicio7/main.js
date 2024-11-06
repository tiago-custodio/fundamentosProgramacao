function calcularVenda(valorProduto, formaPagamento) {
    switch(formaPagamento) {
        case 1:
            return `Você paga ${valorProduto - (valorProduto * 0.10)}, com 10 % de desconto`;            

        case 2:
            return `Você paga ${valorProduto - (valorProduto * 0.15)}, com 15% de desconto`;           

        case 3:
            return `Sem desconto. Você paga exatamente ${valorProduto}`;          

        case 4:
           return `Você paga um pouco a mais, totalizando ${valorProduto + (valorProduto * 0.10)}`;          

        default:
            return "Valor de produto inválido, tente novamente mais tarde!";   
    }
}