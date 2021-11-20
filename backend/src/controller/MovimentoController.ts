import {Request, Response} from "express"
import {CreateMovimentoService} from "../services/CreateMovimentoService"

class MovimentoController{
    async handle(request: Request, response: Response){
        const {idmes, descricao, valor, tipo, datavencto} = request.body;

        const createMovimentoService = new CreateMovimentoService();
        const movimento = await createMovimentoService.execute({idmes, descricao, valor, tipo, datavencto});
        return response.json(movimento);
    }
}

export {MovimentoController}