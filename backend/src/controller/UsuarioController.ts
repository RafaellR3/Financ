import {Request, Response} from "express"
import {CreateUsuarioService} from "../services/usuarioService/CreateUsuarioService"
import {RecuperarUsuarioPorNome} from "../services/usuarioService/FindUsuarioService"

class UsuarioController{
    async handle(request: Request, response: Response){
        const {nome, email, senha} = request.body;

        const createUsuarioServico = new CreateUsuarioService();
        const usuario = await createUsuarioServico.execute({nome, email,senha});
        return response.json(usuario);
    }

}

export {UsuarioController}

class ListUsuarioController {
    async RecuperarUsuarioPorNome(request: Request, response: Response) 
    {const {nome} = request.body;
      const recuperarUsuarioPorNome = new RecuperarUsuarioPorNome();
      const usuario = await recuperarUsuarioPorNome.execute(nome);
  
      return response.json(usuario);
    }
  }
  
  export { ListUsuarioController };