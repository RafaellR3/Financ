import {Request, Response} from "express"
import {CreateUsuarioService} from "../services/CreateUsuarioService"

class UsuarioController{
    async handle(request: Request, response: Response){
        const {nome, email, senha} = request.body;

        const createUsuarioServico = new CreateUsuarioService();
        const usuario = await createUsuarioServico.execute({nome, email,senha});
        return response.json(usuario);
    }
}

export {UsuarioController}