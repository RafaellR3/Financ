"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMovto = exports.TipoMovimento = void 0;
var TipoMovimento;
(function (TipoMovimento) {
    TipoMovimento[TipoMovimento["Entrada"] = 0] = "Entrada";
    TipoMovimento[TipoMovimento["Saida"] = 1] = "Saida";
})(TipoMovimento = exports.TipoMovimento || (exports.TipoMovimento = {}));
var StatusMovto;
(function (StatusMovto) {
    StatusMovto[StatusMovto["Aberto"] = 0] = "Aberto";
    StatusMovto[StatusMovto["pago"] = 1] = "pago";
})(StatusMovto = exports.StatusMovto || (exports.StatusMovto = {}));
