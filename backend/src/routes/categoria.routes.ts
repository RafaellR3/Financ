import { Router } from 'express';
import { CategoriaController } from '../controller/CategoriaController';

const categoriaRouter = Router();
const categoriaController = new CategoriaController();

categoriaRouter.get("/recuperarportipo",  categoriaController.RecuperarCategoriaPorTipo);
categoriaRouter.get("/recuperartodos", categoriaController.RecuperarCategoriaTodos);

export default categoriaRouter;