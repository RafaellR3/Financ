import {Request, Response} from "express"
import {CreateUsuarioService} from "../services/usuarioService/CreateUsuarioService"
import {RecuperarUsuarioPorNome, RecuperarTodos} from "../services/usuarioService/FindUsuarioService"

class UsuarioController{
    async handle(request: Request, response: Response){
        const {nome, email, senha, admin} = request.body;

        const createUsuarioServico = new CreateUsuarioService();
        const usuario = await createUsuarioServico.execute({nome, email, senha, admin});
        return response.json(usuario);
    }

    async RecuperarUsuarioPorNome(request: Request, response: Response) 
    {
      const {nome} = request.body;
      const recuperarUsuarioPorNome = new RecuperarUsuarioPorNome();
      const usuario = await recuperarUsuarioPorNome.execute(nome);
  
      return response.json(usuario);
    }

    async RecuperarUsuarioTodos(request: Request, response: Response) 
    {
      const recuperarTodos = new RecuperarTodos();
      const usuario = await recuperarTodos.execute();
  
      return response.json(usuario);
    }
}

 export { UsuarioController }