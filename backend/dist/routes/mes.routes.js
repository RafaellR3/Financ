"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MesController_1 = require("../controller/MesController");
const mesRouter = (0, express_1.Router)();
const mesController = new MesController_1.MesController();
mesRouter.post("/", mesController.handle);
mesRouter.get("/recuperartodos", mesController.RecuperarTodos);
exports.default = mesRouter;
