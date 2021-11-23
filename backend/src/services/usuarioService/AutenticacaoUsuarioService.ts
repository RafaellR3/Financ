import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsuarioRepositories } from "../../repositories/UsuarioRepositories";

interface IAuthenticateRequest {
  email: string;
  senha: string;
}

class AutenticacaoUsuarioService {
  async execute({ email, senha }: IAuthenticateRequest) {
    const usuarioRepositories = getCustomRepository(UsuarioRepositories);

    const usuario = await usuarioRepositories.findOne({
      email,
    });

    if (!usuario) {
      throw new Error("Email/senha incorreta");
    }

    const senhaMatch = await compare(senha, usuario.senha);

    if (!senhaMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: usuario.email,
      },
      "c60791440436aa6dac1d6a7f7b84602a", //financrafaelr3
      {
        subject: usuario.idusuario,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AutenticacaoUsuarioService };