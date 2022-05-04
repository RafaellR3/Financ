import {EntityRepository, Repository} from "typeorm"
import {Categoria} from "../entity/Categoria";

@EntityRepository(Categoria)
class CategoriaRepositories extends Repository<Categoria>{}

export {CategoriaRepositories}