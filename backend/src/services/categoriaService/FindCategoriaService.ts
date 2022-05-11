import { getCustomRepository } from "typeorm";
import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";
import { ILike } from "typeorm";
import { TipoMovimento } from "../../entity/enum/Enums";


class RecuperarCategoriaPorTipo {
    async execute( tipo: string) {

        const categoriaRepository = getCustomRepository(CategoriaRepositories);
        const categoria = await categoriaRepository.find({
            where: {tipo: tipo }
        })
        return categoria;
    };
}
export { RecuperarCategoriaPorTipo }

class RecuperarTodos {
    async execute() {

        const categoriaRepository = getCustomRepository(CategoriaRepositories);
        const categoria = await categoriaRepository.find()
        return categoria;
    };
}
export { RecuperarTodos }