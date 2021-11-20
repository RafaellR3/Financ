import {EntityRepository, Repository} from "typeorm"
import {Usuario} from "../entity/Usuario";

@EntityRepository(Usuario)
class UsuarioRepositories extends Repository<Usuario>{}

export {UsuarioRepositories}