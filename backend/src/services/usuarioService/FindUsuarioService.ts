import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../../repositories/UsuarioRepositories";
import { ILike } from "typeorm";


class RecuperarUsuarioPorNome {
    async execute(_nome: string ) {

        const usuarioRepository = getCustomRepository(UsuarioRepositories);
        const usuario = await usuarioRepository.find({
            where: { nome: ILike("%"+_nome+"%"), }
        })
        return usuario;
    };
}
export { RecuperarUsuarioPorNome }

class RecuperarTodos {
    async execute() {

        const usuarioRepository = getCustomRepository(UsuarioRepositories);
        const usuario = await usuarioRepository.find()
        return usuario;
    };
}
export { RecuperarTodos }