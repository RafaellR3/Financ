import {EntityRepository, Repository} from "typeorm"
import {Mes} from "../entity/Mes";

@EntityRepository(Mes)
class MesRepositories extends Repository<Mes>{}

export {MesRepositories}