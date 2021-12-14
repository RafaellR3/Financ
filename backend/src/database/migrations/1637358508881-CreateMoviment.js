"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMoviment1637358508881 = void 0;
const typeorm_1 = require("typeorm");
class CreateMoviment1637358508881 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "movimento",
                columns: [
                    {
                        name: "idmovimento",
                        type: "uuid",
                        isPrimary: true
                    }
                ],
                // await queryRunner.createForeignKey("answer", new TableForeignKey({
                //     columnNames: ["questionId"],
                //     referencedColumnNames: ["id"],
                //     referencedTableName: "question",
                //     onDelete: "CASCADE"
                // }));   
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("movimento");
        });
    }
}
exports.CreateMoviment1637358508881 = CreateMoviment1637358508881;
