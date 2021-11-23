import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class columnAdminUsuario1637690777375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("usuario", new TableColumn({
            name: "admin",
            type: "boolean",
            default: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
