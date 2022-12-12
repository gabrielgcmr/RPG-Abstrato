"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testeIniciativa4 = exports.iniciativa3 = exports.Iniciativa2 = void 0;
const dados_1 = require("../scripts/dados");
function Iniciativa2(...Personagens) {
    console.log(`Definindo iniciativa`);
    var ordemDeAtaque = Personagens.map(function (Personagem) {
        var Personagem_iniciativa = (0, dados_1.D20)() + Personagem.moddestreza;
        console.log(`${Personagem.nomeDoJogador} conseguiu ${Personagem_iniciativa}`);
        return Personagem_iniciativa;
    });
    return ordemDeAtaque;
}
exports.Iniciativa2 = Iniciativa2;
function iniciativa3(...Personagens) {
    console.log(`Definindo iniciativa`);
    console.log('-----------------------------------------------------------');
    var ordem = Personagens.map(function (Personagem) {
        var Personagem_iniciativa = (0, dados_1.D20)() + Personagem.moddestreza;
        //console.log(`${Personagem.nomeDoJogador} conseguiu ${Personagem_iniciativa}`);
        const Teste_Personagem = { Teste: Personagem_iniciativa, Personagem: Personagem };
        const Teste_Nome = { Teste: Personagem_iniciativa, Personagem: Personagem.nome };
        console.log(Teste_Nome);
        return Teste_Personagem;
    });
    var ordemDeAtaque = ordem.sort((a, b) => {
        return b.Teste - a.Teste;
    });
}
exports.iniciativa3 = iniciativa3;
function testeIniciativa4(Personagem) {
    var iniciativa = (0, dados_1.D20)() + Personagem.moddestreza;
    console.log(`${Personagem.nomeDoJogador} conseguiu ${iniciativa}`);
    var Personagem_iniciativa = {
        Personagem: Personagem,
        iniciativa: iniciativa
    };
    return Personagem_iniciativa;
}
exports.testeIniciativa4 = testeIniciativa4;
/**/
