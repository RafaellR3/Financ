import {Entity, PrimaryColumn, Column} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("mes")
class Mes {

    @PrimaryColumn()
    readonly idmes: string;
    @Column()
    nome: string;

   constructor() {
       if(!this.idmes){
           this.idmes = uuid();
       }
   }
}

export {Mes};

