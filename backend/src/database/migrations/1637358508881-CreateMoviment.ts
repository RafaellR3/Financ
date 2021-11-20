import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreateMoviment1637358508881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: "movimento",
                columns: [
                    {
                        name: "idmovimento",
                        type: "uuid",
                        isPrimary: true
                    }
                ] ,
                // await queryRunner.createForeignKey("answer", new TableForeignKey({
                //     columnNames: ["questionId"],
                //     referencedColumnNames: ["id"],
                //     referencedTableName: "question",
                //     onDelete: "CASCADE"
                // }));   
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movimento")
    }

}
