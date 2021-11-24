import {Request, Response} from "express"
import {CreateMesService} from "../services/mesService/CreateMesService"
import {RecuperarPorCodigo, RecuperarTodos} from "../services/mesService/FindMesService"

class MesController{
    async handle(request: Request, response: Response){
        const {nome} = request.body;

        const createMesServico = new CreateMesService();
        const mes = await createMesServico.execute({nome});
        return response.json(mes);
    }  
    
    async RecuperarTodos(request: Request, response: Response) {
        const recuperarTodos = new RecuperarTodos();
        const usuario = await recuperarTodos.execute();
    
        return response.json(usuario);
      }
}

export {MesController}