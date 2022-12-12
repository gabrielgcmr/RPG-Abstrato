"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Monstros_1 = require("./repositorios/repositoriosDeMonstros/Monstros");
const Personagens_1 = require("./repositorios/repositorioDePersonagem/Personagens");
const Turno_1 = require("./scripts/Turno");
//export function Turno(Monstros:IMonstro[],Personagens:IPersonagem[],...[]){
// var ordemAtaque = ordemDeAtaque(Monstros,Personagens)
//      
//   for(var i=0; i<ordemAtaque.length; i++) {
////        Ataque(ordemAtaque[i],Esqueleto)
//
//   }
//}
//console.log(iniciativa(Niendol,Pick))
//console.log(batalha(Julia,Pick))
//var ordemDeAtaque2 = Iniciativa2(Pick,Niendol,Julia,Emy)
//var arrayOrdenado = ordemDeAtaque2.sort(function(a, b) {
//    return b - a
//})
//var ordemDeAtaque2 = iniciativa3(Pick,Niendol,Julia,Emy)
//var arrayOrdenado = ordemDeAtaque3.sort(function(a, b) {
//})
//console.log(ordemDeAtaque2)
//console.log(iniciativaTime1(Pick,Emy))
console.log((0, Turno_1.Turno)(Personagens_1.Luiza, Personagens_1.Pick, Personagens_1.Niendol, Monstros_1.Esqueleto, Monstros_1.Lobo, Monstros_1.AranhaGigante));
//console.log(ordem)
//console.log(Pick.Vivo)
