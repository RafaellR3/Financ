import { Request, Response } from "express";
import { CreateMovimentoService } from "../services/movimentoService/CreateMovimentoService";
import { UpdateMovimentoService } from "../services/movimentoService/UpdateMovimentoService";
import { DeleteMovimentoService } from "../services/movimentoService/DeleteMovimentoService";
import { RecuperarTodos, 
         RecuperarMovimentoPorMes, 
         RecuperarMovimentoPorTipo, 
         RecuperarDetalhesMovto,
         RecuperarMovimentoPorId,
         RecuperarSaidasPorCategoria } from "../services/movimentoService/FindMovimentoService"

class MovimentoController {
  async handle(request: Request, response: Response) {
    const { idmes, descricao, valor, tipo, datavencto, idcategoria } = request.body;

    const createMovimentoService = new CreateMovimentoService();
    const movimento = await createMovimentoService.execute({ idmes, descricao, valor, tipo, datavencto, idcategoria });
    return response.json(movimento);
  }

  async Editar( request: Request, response: Response) {
    const {idmes, descricao, valor, tipo, datavencto, idcategoria } = request.body;
    const idmovimento = request.params.id
    const updateMovimentoService = new UpdateMovimentoService();
    const movimento = await updateMovimentoService.execute({ idmovimento, idmes, descricao, valor, tipo, datavencto, idcategoria });
    
    return response.json(movimento);
  }

  async Deletar( request: Request, response: Response) {
    const idmovimento = request.params.id
    const deleteMovimentoService = new DeleteMovimentoService();
    const movimento = await deleteMovimentoService.execute({ idmovimento});
    
    return response.json(movimento);
  }

  async Pagar( request: Request, response: Response) {
    const idmovimento = request.params.id
    const{ datapagto }= request.body
    const updateMovimentoService = new UpdateMovimentoService();
    const movimento = await updateMovimentoService.pagar({idmovimento}, {datapagto});
    
    return response.json(movimento);
  }

  async DesfazerPagamento( request: Request, response: Response) {
    const idmovimento = request.params.id
    const updateMovimentoService = new UpdateMovimentoService();
    const movimento = await updateMovimentoService.desfazerPagamento({idmovimento});
    
    return response.json(movimento);
  }

  async RecuperarMovimentoPorId(request: Request, response: Response) {
    const idmovimento  = request.params.id
    const recuperarMovimentoPorId = new RecuperarMovimentoPorId();
    const movimentos = await recuperarMovimentoPorId.execute(idmovimento);

    return response.json(movimentos);
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
    const movimentos = await recuperarTodos.execute();

    return response.json(movimentos);
  }

  async RecuperarDetalhesMovto(request: Request, response: Response) {
    const codigoMes = request.params.idmes;
    const recuperarDetalhesMovto = new RecuperarDetalhesMovto();
    const movimentos = await recuperarDetalhesMovto.execute(codigoMes);

    return response.json(movimentos);
  }

  async RecuperarSaidasPorCategoria(request: Request, response: Response) {
    const recuperarSaidasPorCategoria =new RecuperarSaidasPorCategoria();
    const movimentos = await recuperarSaidasPorCategoria.execute();

    return response.json(movimentos);
  }
}

export { MovimentoController }