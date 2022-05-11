import {Request, Response} from "express"
import {RecuperarCategoriaPorTipo, RecuperarTodos} from "../services/categoriaService/FindCategoriaService"

class CategoriaController{

    async RecuperarCategoriaPorTipo(request: Request, response: Response) 
    {
      const tipo = request.params.tipo;
      const recuperarCategoriaPorNome = new RecuperarCategoriaPorTipo();
      const categoria = await recuperarCategoriaPorNome.execute(tipo);
  
      return response.json(categoria);
    }

    async RecuperarCategoriaTodos(request: Request, response: Response) 
    {
      const recuperarTodos = new RecuperarTodos();
      const categoria = await recuperarTodos.execute();
  
      return response.json(categoria);
    }
}

 export { CategoriaController }