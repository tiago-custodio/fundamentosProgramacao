function calcularReajuste(salarioFuncionario) {

    switch(true) {
        case (salarioFuncionario <=945.00): 
            return "Reajuste de 25%";

        case (salarioFuncionario >= 945.00 && salarioFuncionario < 1025.00): 
            return "Reajuste de 10%";

        case (salarioFuncionario >= 1025.00): 
            return "Reajuste de 3%";

        default:
            return "Salário inválido! Verifique e tente novamente!";   
    }
}