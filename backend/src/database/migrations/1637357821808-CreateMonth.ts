import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMonth1637357821808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "mes",
                columns: [
                    {
                        name: "idmes",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "100"
                    }
                ]    
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mes");
    }

}
