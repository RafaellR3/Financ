import { Router } from 'express';
import { MovimentoController } from '../controller/MovimentoController';

const movimentoRouter = Router();
const movimentoController = new MovimentoController();

movimentoRouter.post("/", movimentoController.handle);
movimentoRouter.put("/editar/:id", movimentoController.Editar);
movimentoRouter.put("/deletar/:id", movimentoController.Deletar);
movimentoRouter.put("/pagar/:id", movimentoController.Pagar);
movimentoRouter.put("/desfazerpagamento/:id", movimentoController.DesfazerPagamento);
movimentoRouter.get("/RecuperarTodos", movimentoController.RecuperarMovimentoTodos);
movimentoRouter.get("/RecuperarMovimentoPorId/:id", movimentoController.RecuperarMovimentoPorId);
movimentoRouter.get("/RecuperarPorMes", movimentoController.RecuperarMovimentoPorMes);
movimentoRouter.get("/RecuperarPorTipo", movimentoController.RecuperarMovimentoPorTipo);
movimentoRouter.get("/RecuperarDetalhesMovto/:idmes", movimentoController.RecuperarDetalhesMovto);
movimentoRouter.get("/RecuperarSaidasPorCategoria", movimentoController.RecuperarSaidasPorCategoria);

export default movimentoRouter;