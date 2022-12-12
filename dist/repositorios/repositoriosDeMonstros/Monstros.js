"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobo = exports.AranhaGigante = exports.Esqueleto = void 0;
const ModeloDeMonstros_1 = require("../../ModelsTs/ModeloDeMonstros");
const Armas_1 = require("../RespositorioDeArmas/Armas");
// Monstros--------------------------------------------------------------- 
exports.Esqueleto = new ModeloDeMonstros_1.Monstro('esqueleto', 10, 14, 15, 6, 8, 5, Armas_1.EspadaLonga);
exports.AranhaGigante = new ModeloDeMonstros_1.Monstro('aranha gigante', 14, 16, 12, 2, 11, 4, Armas_1.Mordida);
exports.Lobo = new ModeloDeMonstros_1.Monstro('lobo atroz', 15, 12, 12, 5, 5, 3, Armas_1.Mordida);
//-----------------------------------------------------------------------------
