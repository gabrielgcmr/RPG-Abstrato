"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batalha2 = exports.batalha = void 0;
const inicia__o_1 = require("./inicia\u00E7\u00E3o");
const ataque_1 = require("../scripts/ataque");
function batalha(Personagem1, Personagem2) {
    var iniciacao = (0, inicia__o_1.iniciativa)(Personagem1, Personagem2);
    var vencedor = iniciacao.vencendor;
    var perdedor = iniciacao.perdedor;
    while (vencedor.PontosDeVida > 0 || perdedor.PontosDeVida > 0) {
        (0, ataque_1.Ataque)(vencedor, perdedor);
        if (perdedor.PontosDeVida <= 0) {
            console.log(`${vencedor.nome} Saiu vitorioso do combate`);
            console.log(`${perdedor.nome} Morreu...`);
            break;
        }
        else if (vencedor.PontosDeVida <= 0) {
            console.log(`${perdedor.nome} Saiu vitorioso do combate`);
            console.log(`${vencedor.nome} Morreu...`);
            break;
        }
        else {
            (0, ataque_1.Ataque)(perdedor, vencedor);
        }
        if (perdedor.PontosDeVida <= 0) {
            console.log(`${vencedor.nome} Saiu vitorioso do combate`);
            console.log(`${perdedor.nome} Morreu...`);
            break;
        }
        else if (vencedor.PontosDeVida <= 0) {
            console.log(`${perdedor.nome} Saiu vitorioso do combate`);
            console.log(`${vencedor.nome} Morreu...`);
            break;
        }
    }
}
exports.batalha = batalha;
function batalha2(...Personagem) {
}
exports.batalha2 = batalha2;
