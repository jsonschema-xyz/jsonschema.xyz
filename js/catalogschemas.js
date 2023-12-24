"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var schemas = fs_1.default.readdirSync("..").filter(file => file.endsWith(".schema"));
fs_1.default.writeFileSync("schemas.json", JSON.stringify(schemas));
