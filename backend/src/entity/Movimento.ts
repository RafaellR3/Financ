import { Entity, PrimaryColumn, Column } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { v4 as uuid } from "uuid"

@Entity("movimento")
class Movimento {

    @PrimaryColumn()
    readonly idmovimento: string;
    @Column()
    idmes: string;
    @Column()
    descricao: string;
    @Column("numeric", { precision: 8, scale: 2 })
    valor: number;
    @Column()
    tipo: number;
    @Column()
    datavencto: Date;
    @Column({ nullable: true })
    datapagto?: Date;
    @Column()
    status: number;

    constructor() {
        if (!this.idmovimento) {
            this.idmovimento = uuid();
            this.status = 0;
        }
    }
}

export { Movimento };

