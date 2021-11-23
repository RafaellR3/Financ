import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../../repositories/UsuarioRepositories";
import { hash } from "bcryptjs"

interface IUsuarioRequest{
    nome: string;
    email: string;
    senha: string;
    admin: boolean
}

class CreateUsuarioService{
    async execute({ nome, email, senha, admin = false}: IUsuarioRequest){
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
        
        const senhaHash = await hash(senha, 8)

        const usuario = usuarioRepository.create({
            nome,
            email,
            senha: senhaHash,
            admin
        });

        await usuarioRepository.save(usuario);

        return usuario;
    }
}

export{CreateUsuarioService}