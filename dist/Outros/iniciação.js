"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teste = exports.iniciativa = void 0;
const dados_1 = require("../scripts/dados");
function iniciativa(Personagem1, Personagem2) {
    console.log("Iniciando combate");
    //==================================================================================================================================
    //          PERSONAGEM 1!
    console.log(`${Personagem1.nomeDoJogador} teste de destreza`);
    let testep1 = Teste(Personagem1.moddestreza);
    console.log(`${testep1}`);
    //===================================================================================================================================
    //          PERSONAGEM 2!
    console.log(`${Personagem2.nomeDoJogador} teste de destreza`);
    let testep2 = Teste(Personagem2.moddestreza);
    console.log(`${testep2}`);
    //==================================================================================================================================== 
    do {
        if (testep1 > testep2) {
            console.log(`${Personagem1.nomeDoJogador} começa jogando!`);
            var vencendor = Personagem1;
            var perdedor = Personagem2;
            return { vencendor, perdedor };
        }
        else {
            console.log(`${Personagem2.nomeDoJogador} começa jogando!`);
            var vencendor = Personagem2;
            var perdedor = Personagem1;
            return { vencendor, perdedor };
        }
    } while (testep1 === testep2);
}
exports.iniciativa = iniciativa;
function Teste(habilidade) {
    var d20 = (0, dados_1.D20)();
    var resultadoFinal = d20 + habilidade;
    return resultadoFinal;
}
exports.Teste = Teste;
