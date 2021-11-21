import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../../repositories/UsuarioRepositories";

interface IUsuarioRequest{
    nome: string;
    email: string;
    senha: string;
}

class CreateUsuarioService{
    async execute({ nome, email, senha}: IUsuarioRequest){
        const usuarioRepository = getCustomRepository(UsuarioRepositories);
        if (!email){
            throw new Error("Email incorreto!");
        }

        const usuarioAlreadyExists = await usuarioRepository.findOne({
            email
        });

        if (usuarioAlreadyExists){
            throw new Error("Usuário já existe!");
        }
        
        const usuario = usuarioRepository.create({
            nome,
            email,
            senha
        });

        await usuarioRepository.save(usuario);

        return usuario;
    }
}

export{CreateUsuarioService}