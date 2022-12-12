"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nomeDoJogador, nome, raca, classe, nivel, experiencia, 
    //
    forca, destreza, constituicao, inteligencia, sabedoria, carisma, Arma
    //
    ) {
        this.tipo = "Personagem";
        this.nomeDoJogador = nomeDoJogador;
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.nivel = nivel;
        this.experiencia = experiencia;
        //
        this.forca = forca;
        this.destreza = destreza;
        this.constituicao = constituicao;
        this.inteligencia = inteligencia;
        this.sabedoria = sabedoria;
        this.carisma = carisma;
        //
        this.modforca = CalcularModificador(forca);
        this.moddestreza = CalcularModificador(destreza);
        this.modconstituicao = CalcularModificador(constituicao);
        this.modinteligencia = CalcularModificador(inteligencia);
        this.modsabedoria = CalcularModificador(sabedoria);
        this.modcarisma = CalcularModificador(carisma);
        //
        this.PontosDeVida = this.vidaTotal();
        this.ClasseDeArmadura = 10 + this.moddestreza;
        this.Arma = Arma;
        this.Vivo = this.estaVivo();
    }
    //------------------------------------------------------------------------------------------------------------------------
    estaVivo() {
        if (this.PontosDeVida > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------
    vidaTotal() {
        if (this.classe == "barbaro") {
            return this.nivel * 12;
        }
        else if (this.classe == "bardo") {
            return this.nivel * 8;
        }
        else if (this.classe == "clerigo") {
            return this.nivel * 8;
        }
        else if (this.classe == "druid") {
            return this.nivel * 12;
        }
        else if (this.classe == "lutador") {
            return this.nivel * 10;
        }
        else {
            return this.nivel * 6;
        }
    }
}
exports.Personagem = Personagem;
function CalcularModificador(x) {
    var resultado = Math.floor((x - 10) / 2);
    return resultado;
}
