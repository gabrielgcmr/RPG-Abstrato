"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const databaseconfig_1 = __importDefault(require("./database/databaseconfig"));
(0, databaseconfig_1.default)();
const app = (0, express_1.default)();
app.use(routes_1.default);
app.listen(3000, () => {
    console.log(`Rodando na porta 3000`);
});
exports.default = app;
