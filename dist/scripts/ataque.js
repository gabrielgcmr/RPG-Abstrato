"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ataque = void 0;
const dados_1 = require("./dados");
function Ataque(Atacante, Alvo) {
    console.log(`${Atacante.nome} vai desferir um ataque em ${Alvo.nome}`);
    var d20 = (0, dados_1.D20)();
    var ataque = d20 + Atacante.modforca;
    if (d20 == 20) {
        console.log('Acerto crítico!');
        var dano = Atacante.modforca + Atacante.Arma.dado + Atacante.Arma.dado + Atacante.modforca;
        var vidaAtual = Alvo.PontosDeVida - dano;
        Alvo.PontosDeVida = vidaAtual;
        console.log(`Ataque de ${Atacante.nome} causou ${dano} de dano`);
        console.log(`Pontos de vida de ${Alvo.nome} são ${Alvo.PontosDeVida}`);
    }
    else if (d20 == 1) {
        console.log('Falha crítica!');
    }
    else if (ataque >= Alvo.ClasseDeArmadura) {
        console.log(`${Atacante.nome} tirou ${ataque}`);
        console.log('Ataque bem sucecido');
        var dano = Atacante.Arma.dado + Atacante.modforca;
        var vidaAtual = Alvo.PontosDeVida - dano;
        Alvo.PontosDeVida = vidaAtual;
        console.log(`Ataque de ${Atacante.nome} causou ${dano} de dano`);
        console.log(`Pontos de vida de ${Alvo.nome} são ${Alvo.PontosDeVida}`);
    }
    else {
        console.log(`${Atacante.nome} tirou ${ataque}`);
        console.log('Ataque falhou!');
    }
}
exports.Ataque = Ataque;
