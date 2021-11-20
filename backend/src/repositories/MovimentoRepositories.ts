import {EntityRepository, Repository} from "typeorm"
import {Movimento} from "../entity/Movimento";

@EntityRepository(Movimento)
class MovimentoRepositories extends Repository<Movimento>{}

export {MovimentoRepositories}