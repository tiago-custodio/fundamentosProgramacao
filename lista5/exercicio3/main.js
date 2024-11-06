function classificarCompetidor(idadeCompetidor){
    switch(true) {
        case (idadeCompetidor >= 5 && idadeCompetidor <= 7):
            return "Categoria Infantil A";

        case (idadeCompetidor >= 8 && idadeCompetidor <= 10):
            return "Categoria Infantil B";

        case (idadeCompetidor >= 11 && idadeCompetidor <= 13):
            return "Categoria Juvenil A";

        case (idadeCompetidor >= 14 && idadeCompetidor <= 17):
            return "Categoria Juvenil B";

         case (idadeCompetidor >= 18 && idadeCompetidor <= 59):
            return "Categoria Adulto";

        case (idadeCompetidor >= 60):
            return "Categoria Senior";
        
        default:
            return `Oooops algo deu errado!`;
    }
}