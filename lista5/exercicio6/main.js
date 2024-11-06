function calcularLucro(valorProduto) {
    switch(true) {
        case (valorProduto <= 10.00): 
            return "70%";

        case (valorProduto >= 10.00 && valorProduto < 30.00): 
            return "50%";

        case (valorProduto >= 30.00 && valorProduto < 50.00): 
            return "40%";

        case (valorProduto >= 50.00): 
            return "30%";

        default:
            return "Valor de produto inválido, tente novamente mais tarde!";   
    } 
}