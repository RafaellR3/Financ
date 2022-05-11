"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Enums_1 = require("./enum/Enums");
let Categoria = class Categoria {
    constructor() {
        if (!this.idcategoria) {
            this.idcategoria = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Categoria.prototype, "idcategoria", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Categoria.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Enums_1.TipoMovimento,
        default: Enums_1.TipoMovimento.Entrada
    }),
    __metadata("design:type", Number)
], Categoria.prototype, "tipo", void 0);
Categoria = __decorate([
    (0, typeorm_1.Entity)("categoria"),
    __metadata("design:paramtypes", [])
], Categoria);
exports.Categoria = Categoria;
