function calcularIpva(modelo, valorVeiculo, categoria) {
    switch (categoria) {
        case 1:
            return `Categoria: Passeio<br>Valor do IPVA: R$ ${(valorVeiculo * 0.035).toFixed(2)}`;
        
        case 2:
            return `Categoria: Utilitário<br>Valor do IPVA: R$ ${(valorVeiculo * 0.025).toFixed(2)}`;
        
        default:
            return "Categoria não reconhecida.";
    }
}