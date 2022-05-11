import { Router } from 'express';
import { MesController } from '../controller/MesController';

const mesRouter = Router();
const mesController = new MesController();

mesRouter.post("/", mesController.handle);
mesRouter.post("/Copiar/:id", mesController.Copiar);
mesRouter.get("/recuperartodos", mesController.RecuperarTodos);

export default mesRouter;