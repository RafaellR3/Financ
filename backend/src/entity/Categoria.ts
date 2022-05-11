import {Entity, PrimaryColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {v4 as uuid} from "uuid"
import { TipoMovimento } from "./enum/Enums";
import { Movimento } from "./Movimento";

@Entity("categoria")
class Categoria {

    @PrimaryColumn()
    readonly idcategoria: string;

    @Column()
    descricao: string;

    @Column({
        type: "enum",
        enum: TipoMovimento,
        default: TipoMovimento.Entrada
    })
    tipo: TipoMovimento;
  
   constructor() {
       if(!this.idcategoria){
           this.idcategoria = uuid();
       }
   }
}

export {Categoria};