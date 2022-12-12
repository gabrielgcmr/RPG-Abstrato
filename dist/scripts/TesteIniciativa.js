"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemDeAtaque = exports.Participante_iniciativa = void 0;
const dados_1 = require("./dados");
class Participante_iniciativa {
    constructor(Participante) {
        this.Participante = Participante;
        this.iniciativa = (0, dados_1.D20)() + Participante.moddestreza;
    }
}
exports.Participante_iniciativa = Participante_iniciativa;
//----------------------------------------------------------------
function OrdemDeAtaque(...Participantes) {
    console.log('=============================================================================================//');
    console.log(`Definindo ordem de ataque`);
    console.log('=============================================================================================//');
    let arrayParticipantes_iniciativa = Participantes.map(function (Participante) {
        let Participant_iniciativa = new Participante_iniciativa(Participante);
        console.log(`${Participant_iniciativa.Participante.nome} tirou ${Participant_iniciativa.iniciativa}`);
        return Participant_iniciativa;
    });
    var ordemdeataque = arrayParticipantes_iniciativa.sort(function (a, b) {
        if (!a.iniciativa || !b.iniciativa) {
            return NaN;
        }
        else {
            if (a.iniciativa < b.iniciativa) {
                return +1;
            }
            else if (a.iniciativa > b.iniciativa) {
                return -1;
            }
            else {
                return 0;
            }
        }
    });
    console.log('=============================================================================================//');
    console.log('Ordem de Ataque!');
    console.log('=============================================================================================//');
    let OrdemFinal = ordemdeataque.map(ordemdeataque => {
        console.log(`${ordemdeataque.Participante.nome}`);
        delete ordemdeataque.iniciativa;
        return ordemdeataque.Participante;
    });
    return OrdemFinal;
}
exports.OrdemDeAtaque = OrdemDeAtaque;
