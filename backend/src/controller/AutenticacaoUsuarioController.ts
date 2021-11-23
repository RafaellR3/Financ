import { Request, Response } from "express";
import { AutenticacaoUsuarioService } from "../services/usuarioService/AutenticacaoUsuarioService";

class AutenticacaoUsuarioController {
  async handle(request: Request, response: Response) {
    const { email, senha } = request.body;

    const autenticacaoUsuarioService = new AutenticacaoUsuarioService();

    const token = await autenticacaoUsuarioService.execute({
      email,
      senha,
    });

    return response.json(token);
  }
}

export { AutenticacaoUsuarioController };