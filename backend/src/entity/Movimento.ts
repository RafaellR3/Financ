import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Mes } from "../entity/Mes";
import { v4 as uuid } from "uuid";
import {TipoMovimento, StatusMovto} from "./enum/Enums";

@Entity("movimento")
class Movimento {

    @PrimaryColumn()
    readonly idmovimento: string;

    @Column()
    idmes: string;

    @JoinColumn({name: "idmes"})
    @ManyToOne(()=> Mes)
    mes: Mes;

    @Column()
    descricao: string;

    @Column("numeric", { precision: 8, scale: 2 })
    valor: number;

    @Column({
        type: "enum",
        enum: TipoMovimento,
        default: TipoMovimento.Entrada
    })
    tipo: number;

    @Column()
    datavencto: Date;

    @Column({ nullable: true })
    datapagto?: Date;

    @Column({
        type: "enum",
        enum: StatusMovto,
        default: StatusMovto.Aberto
    })
    status: number;

    constructor() {
        if (!this.idmovimento) {
            this.idmovimento = uuid();
            this.status = 0;
        }
    }
}
export { Movimento };

