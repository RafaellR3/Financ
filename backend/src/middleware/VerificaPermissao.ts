import { Request, Response, NextFunction } from "express";
import { UsuarioRepositories } from "../repositories/UsuarioRepositories";
import { getCustomRepository } from "typeorm";
import { Usuario } from "../entity/Usuario"

export async function VerificaPermissao(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usuarioRepositories = getCustomRepository(UsuarioRepositories);

  const usuario = await usuarioRepositories.findOne(user_id);

  // Verificar se usuario admin

  if (usuario?.admin) {
    return next();
  }

  return response.status(401).json({
    error: "Usuário sem premissão.",
  });
}