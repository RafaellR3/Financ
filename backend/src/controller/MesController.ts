import {Request, Response} from "express"
import {CreateMesService} from "../services/mesService/CreateMesService"

class MesController{
    async handle(request: Request, response: Response){
        const {nome} = request.body;

        const createMesServico = new CreateMesService();
        const mes = await createMesServico.execute({nome});
        return response.json(mes);
    }
}

export {MesController}