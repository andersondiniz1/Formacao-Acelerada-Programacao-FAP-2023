var carta1 = 20;
var carta2 = 1;
var somacarta = carta1 + carta2;
var pontuacao = 0;


var cartaB1 = 2;
var cartaB2 = 4;
var cartaB3 = 1;
var cartaB4 = 5;
var somacartaB = cartaB1 + cartaB2 + cartaB3 + cartaB4;
var pontuacaoB = 0;

// if (somacartaB > 21) {
//     console.log("Banca, a soma das cartas foi:", somacartaB)
//     console.log("Pontuacão da banca não alterou, ficou:", pontuacaoB)
// } else if (somacartaB <= 20) {
//     console.log("Banca ganhou, a soma das cartas foi:", somacartaB)
//     pontuacaoB = pontuacaoB + 1;
//     console.log("Pontuacão da banca ficou:", pontuacaoB)
// } else if (somacartaB = 21) {
//     console.log("Banca ganhou pontuação maxima de 21, a soma das cartas foi:", somacartaB)
//     pontuacaoB = pontuacaoB + 2;
//     console.log("Sua pontuacão ficou:", pontuacaoB)
// }

// switch (somacarta) {
//     case (somacarta > 21):
//         console.log("Voce perdeu, a soma de suas cartas foi:", somacarta)
//         console.log("Sua pontuacão não alterou, ficou:", pontuacao)
//         break;
//     case (somacarta = 21):
//         console.log("Voce ganhou pontuação maxima de 21, a soma de suas cartas foi:", somacarta)
//         pontuacao = pontuacao + 2;
//         console.log("Sua pontuacão ficou:", pontuacao)
//         break;
//     case (somacarta <= 20):
//         console.log("Voce ganhou",)

//         break;       
//     default:
//         console.log("Não encontrado");
//         break;
// }

if (somacarta, somacartaB <= 20 && somacarta > somacartaB) {
    console.log("voce ganhou, pontuação anterior", pontuacao)
    pontuacao = pontuacao + 1;
    console.log("sua pontuacão ficou:", pontuacao)
}  else if (somacarta, somacartaB <= 20 && somacarta < somacartaB) {
    console.log("Banca ganhou, pontuação anterior da banca", pontuacaoB)
    pontuacaoB = pontuacaoB + 1;
    console.log("pontuacão da banca ficou:", pontuacaoB)
    console.log("sua pontuacão ficou:", pontuacao)
} else if (somacarta = 21) {
    console.log("voce ganhou pontuaçãom maxima, pontuação anterior", pontuacao)
    pontuacao = pontuacao + 3;
    console.log("sua pontuacão ficou:", pontuacao)
} else if (somacartaB = 21) {
    console.log("Banca ganhou pontuação maxima, pontuação anterior da banca", pontuacaoB)
    pontuacaoB = pontuacaoB + 3;
    console.log("pontuacão da banca ficou:", pontuacaoB)
    console.log("sua pontuacão ficou:", pontuacao)
} else if (somacarta > 21 && somacartaB < 21) {
    console.log("Ultrapassou 21, voce perdeu")
    console.log("Banca ganhou, pontuação anterior da banca", pontuacaoB)
    pontuacaoB = pontuacaoB + 1;
    console.log("pontuacão da banca ficou:", pontuacaoB)
    console.log("sua pontuacão ficou:", pontuacao)
} else if (somacartaB > 21 && somacarta < 21) {
    console.log("Ultrapassou 21, banca perdeu")
    console.log("voce ganhou, pontuação anterior", pontuacao)
    pontuacao = pontuacao + 1;
    console.log("sua pontuacão ficou:", pontuacao)
}
