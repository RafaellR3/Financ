import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class ForeingKeyMovto1637684623470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

     await queryRunner.createForeignKey(
        "movimento",
        new TableForeignKey({
            name: "FKmovimentomes",
                    referencedTableName: "mes",
                    referencedColumnNames: ["idmes"],
                    columnNames: ["idmes"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
        })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("movimento","FKmovimentomes");
    }

}
