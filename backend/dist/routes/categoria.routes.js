"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriaController_1 = require("../controller/CategoriaController");
const categoriaRouter = (0, express_1.Router)();
const categoriaController = new CategoriaController_1.CategoriaController();
categoriaRouter.get("/recuperarportipo/:tipo", categoriaController.RecuperarCategoriaPorTipo);
categoriaRouter.get("/recuperartodos", categoriaController.RecuperarCategoriaTodos);
exports.default = categoriaRouter;
