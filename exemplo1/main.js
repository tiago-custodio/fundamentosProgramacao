function analisarResposta(sexo) {
    switch (sexo) {
        case 'm':
        case 'M':
            document.write("Masculino<br>");
            break; // Impede a execução dos outros cases após este
        case 'f':
        case 'F':
            document.write("Feminino<br>");
            break; // Impede a execução do default
        default:
            document.write("Caracter inválido<br>");
            break; 
    } 
} 
