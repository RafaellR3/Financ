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
exports.Movimento = void 0;
const typeorm_1 = require("typeorm");
const Mes_1 = require("../entity/Mes");
const uuid_1 = require("uuid");
const Enums_1 = require("./enum/Enums");
let Movimento = class Movimento {
    constructor() {
        if (!this.idmovimento) {
            this.idmovimento = (0, uuid_1.v4)();
            this.status = Enums_1.StatusMovto.Aberto;
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Movimento.prototype, "idmovimento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movimento.prototype, "idmes", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "idmes" }),
    (0, typeorm_1.ManyToOne)(() => Mes_1.Mes),
    __metadata("design:type", Mes_1.Mes)
], Movimento.prototype, "mes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movimento.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { precision: 8, scale: 2 }),
    __metadata("design:type", Number)
], Movimento.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Enums_1.TipoMovimento,
        default: Enums_1.TipoMovimento.Entrada
    }),
    __metadata("design:type", String)
], Movimento.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Movimento.prototype, "datavencto", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Movimento.prototype, "datapagto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Enums_1.StatusMovto,
        default: Enums_1.StatusMovto.Aberto
    }),
    __metadata("design:type", String)
], Movimento.prototype, "status", void 0);
Movimento = __decorate([
    (0, typeorm_1.Entity)("movimento"),
    __metadata("design:paramtypes", [])
], Movimento);
exports.Movimento = Movimento;
