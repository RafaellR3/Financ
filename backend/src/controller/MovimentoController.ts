import { Request, Response } from "express";
import { CreateMovimentoService } from "../services/movimentoService/CreateMovimentoService";
import { UpdateMovimentoService } from "../services/movimentoService/UpdateMovimentoService";
import { RecuperarTodos, RecuperarMovimentoPorMes, RecuperarMovimentoPorTipo } from "../services/movimentoService/FindMovimentoService"

class MovimentoController {
  async handle(request: Request, response: Response) {
    const { idmes, descricao, valor, tipo, datavencto } = request.body;

    const createMovimentoService = new CreateMovimentoService();
    const movimento = await createMovimentoService.execute({ idmes, descricao, valor, tipo, datavencto });
    return response.json(movimento);
  }

  async Editar( request: Request, response: Response) {
    const {idmes, descricao, valor, tipo, datavencto } = request.body;
    const idmovimento = request.params.id
    const updateMovimentoService = new UpdateMovimentoService();
    const movimento = await updateMovimentoService.execute({ idmovimento, idmes, descricao, valor, tipo, datavencto });
    
    return response.json(movimento);
  }

  async Pagar( request: Request, response: Response) {
    const idmovimento = request.params.id
    const updateMovimentoService = new UpdateMovimentoService();
    const movimento = await updateMovimentoService.pagar({idmovimento});
    
    return response.json(movimento);
  }

  async RecuperarMovimentoPorMes(request: Request, response: Response) {
    const { codigoMes } = request.body;
    const recuperarMovimentoPorMes = new RecuperarMovimentoPorMes();
    const movimentos = await recuperarMovimentoPorMes.execute(codigoMes);

    return response.json(movimentos);
  }

  async RecuperarMovimentoPorTipo(request: Request, response: Response) {
    const { codigoMes, tipo } = request.body;
    const recuperarMovimentoPorTipo = new RecuperarMovimentoPorTipo();
    const movimentos = await recuperarMovimentoPorTipo.execute(codigoMes, tipo);

    return response.json(movimentos);
  }

  async RecuperarMovimentoTodos(request: Request, response: Response) {
    const recuperarTodos = new RecuperarTodos();
    const usuario = await recuperarTodos.execute();

    return response.json(usuario);
  }
}

export { MovimentoController }