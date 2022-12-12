"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mordida = exports.Adaga = exports.ArcoCurto = exports.Machado = exports.EspadaLonga = void 0;
const ModelosDeArmas_1 = require("../../ModelsTs/ModelosDeArmas");
// Armas-----------------------------------------------------------------
exports.EspadaLonga = new ModelosDeArmas_1.Arma('Espada Longa', 15, 'corpo_a_corpo');
exports.Machado = new ModelosDeArmas_1.Arma('Machado', 13, 'corpo_a_corpo');
exports.ArcoCurto = new ModelosDeArmas_1.Arma('Arco Curto', 25, 'longo_alcance');
exports.Adaga = new ModelosDeArmas_1.Arma('Adaga', 10, 'corpo_a_corpo');
exports.Mordida = new ModelosDeArmas_1.Arma('mordida', 0, 'corpo_a_corpo');
//------------------------------------------------------------------------
