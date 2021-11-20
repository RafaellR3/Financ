import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1637342549532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns: [
                    {
                        name: "idusuario",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"nome",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name:"email",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name:"senha",
                        type: "varchar",
                        length: "10"
                    }
                ]    
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario");
    }

}
