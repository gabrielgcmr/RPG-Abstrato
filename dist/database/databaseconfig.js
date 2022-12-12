"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const mongoURI = process.env.MONGO_URI;
async function connectToMongoDB() {
    if (mongoURI) {
        await mongoose_1.default.connect(mongoURI, () => console.log('Conectado a base de dados'));
    }
    else {
        console.log('Base de dados não conectada');
    }
    console.log(mongoURI);
}
exports.default = connectToMongoDB;
const closeMongoDB = () => mongoose_1.default.connection.close();
exports.closeMongoDB = closeMongoDB;
