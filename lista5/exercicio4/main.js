function calcularIMC(imcPessoa){   

    console.log(imcPessoa);

    switch(true) {
        case (imcPessoa < 20):
            return "Abaixo do peso";

        case (imcPessoa > 20 && imcPessoa <= 25):
            return "Peso Normal";

        case (imcPessoa > 25 && imcPessoa <= 30):
            return "Excesso de peso";

        case (imcPessoa > 30 && imcPessoa <= 35):
            return "Obesidade";

        case (imcPessoa > 35):
            return "Obesidade mórbida";      
        
        default:
            return `Oooops algo deu errado!`;
    }
}