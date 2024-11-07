function calcularPesoPlaneta(pesoTerra, planeta) {
    const gravidades = {
        1: { nome: "Mercúrio", gravidade: 0.37 },
        2: { nome: "Vênus", gravidade: 0.88 },
        3: { nome: "Marte", gravidade: 0.38 },
        4: { nome: "Júpiter", gravidade: 2.64 },
        5: { nome: "Saturno", gravidade: 1.15 },
        6: { nome: "Urano", gravidade: 1.17 }
    };

    if (gravidades[planeta]) {
        return {
            nome: gravidades[planeta].nome,
            peso: (pesoTerra / 10) * gravidades[planeta].gravidade
        };
    } else {
        return { nome: "um planeta inválido", peso: 0 };
    }
}