import {Entity, PrimaryColumn, Column} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("usuario")
class Usuario {

    @PrimaryColumn()
    readonly idusuario: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    admin: boolean;
    
   constructor() {
       if(!this.idusuario){
           this.idusuario = uuid();
       }
   }
}

export {Usuario};

