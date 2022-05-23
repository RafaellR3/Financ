import {Request, Response} from "express"
import {Copiar, CreateMesService} from "../services/mesService/CreateMesService"
import {RecuperarFechamentoMes, RecuperarPorCodigo, RecuperarTodos} from "../services/mesService/FindMesService"

class MesController{
    async handle(request: Request, response: Response){
        const {nome} = request.body;

        const createMesServico = new CreateMesService();
        const mes = await createMesServico.execute({nome});
        return response.json(mes);
    }  
  
async Copiar(request: Request, response: Response) {
        const { descricao } = request.body;
        const  idmes  = request.params.id;
        const copiar = new Copiar();
        const mes = await copiar.execute(idmes, descricao);
        return response.json(mes);
      }  
      
async RecuperarPorCodigo(request: Request, response: Response) {
        const  idmes  = request.params.id;
        const recuperarPorCodigo = new RecuperarPorCodigo();
        const mes = await recuperarPorCodigo.execute(idmes);
    
        return response.json(mes);
      }

async RecuperarTodos(request: Request, response: Response) {
        const recuperarTodos = new RecuperarTodos();
        const mes = await recuperarTodos.execute();
    
        return response.json(mes);
      }

async RecuperarFechamentoMes(request: Request, response: Response) {
        const recuperarFechamentoMes = new RecuperarFechamentoMes();
        const mes = await recuperarFechamentoMes.execute();

        return response.json(mes);
    }
}

export {MesController}