"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificaAutenticacao = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function VerificaAutenticacao(request, response, next) {
    // Receber o token
    const authToken = request.headers.authorization;
    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        // Validar se token é válido
        const { sub } = (0, jsonwebtoken_1.verify)(token, "c60791440436aa6dac1d6a7f7b84602a");
        // Recuperar informações do usuário
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.VerificaAutenticacao = VerificaAutenticacao;
