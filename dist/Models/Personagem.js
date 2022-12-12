"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const personagemSchema = new mongoose_1.default.Schema({
    nomeDoJogador: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    raca: {
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        required: true
    },
    experiencia: {
        type: Number,
        required: true
    },
    // 
    forca: {
        type: Number,
        required: true
    },
    destreza: {
        type: Number,
        required: true
    },
    constituicao: {
        type: Number,
        required: true
    },
    inteligencia: {
        type: Number,
        required: true
    },
    sabedoria: {
        type: Number,
        required: true
    },
    carisma: {
        type: Number,
        required: true
    },
    //
    modforca: {
        type: Number,
        required: true
    },
    moddestreza: {
        type: Number,
        required: true
    },
    modconstituicao: {
        type: Number,
        required: true
    },
    modinteligencia: {
        type: Number,
        required: true
    },
    modsabedoria: {
        type: Number,
        required: true
    },
    modcarisma: {
        type: Number,
        required: true
    },
    //
    PontosDeVida: {
        type: Number,
        required: true
    },
    ClasseDeArmadura: {
        type: Number,
        required: true
    }
});
personagemSchema.pre('save', function (next) {
    if (this.classe == "barbaro") {
        this.PontosDeVida = 12;
    }
    else if (this.classe == "bardo") {
        this.PontosDeVida = 8;
    }
    else if (this.classe == "clerigo") {
        this.PontosDeVida = 8;
    }
    else if (this.classe == "druid") {
        this.PontosDeVida = 12;
    }
    else if (this.classe == "lutador") {
        this.PontosDeVida = 10;
    }
    else {
        this.PontosDeVida = 6;
    }
    next();
});
personagemSchema.pre('save', function (next) {
    //------------------------------------------------------------------------
    var modforca = Math.floor((this.forca - 10) / 2);
    this.modforca = modforca;
    //------------------------------------------------------------------------
    var moddestreza = Math.floor((this.destreza - 10) / 2);
    this.moddestreza = moddestreza;
    //------------------------------------------------------------------------
    var modconstituicao = Math.floor((this.constituicao - 10) / 2);
    this.modconstituicao = modconstituicao;
    //------------------------------------------------------------------------
    var modinteligencia = Math.floor((this.inteligencia - 10) / 2);
    this.modinteligencia = modinteligencia;
    //------------------------------------------------------------------------
    var modsabedoria = Math.floor((this.sabedoria - 10) / 2);
    this.modsabedoria = modsabedoria;
    //------------------------------------------------------------------------
    var modcarisma = Math.floor((this.carisma - 10) / 2);
    this.modcarisma = modcarisma;
    //------------------------------------------------------------------------
    next();
});
personagemSchema.pre('save', function (next) {
    var classeDeArmadura = 10 + this.moddestreza;
    this.ClasseDeArmadura = classeDeArmadura;
});
const Personagem = mongoose_1.default.model('Personagem', personagemSchema);
exports.default = Personagem;
