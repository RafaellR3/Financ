import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ColumnsMovimento1637414542426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "idmes",
            type: "uuid"
        }));
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "descricao",
            type: "varchar"
        }));
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "valor",
            type: "numeric(10,2)"
        }));
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "tipo",
            type: "integer"
        }));
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "datavencto",
            type: "timestamp",
            default: "now()"
        }));
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "datapagto",
            type: "timestamp",
            isNullable: true
        }));
        await queryRunner.addColumn("movimento", new TableColumn({
            name: "status",
            type: "integer",
            default: 0
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
