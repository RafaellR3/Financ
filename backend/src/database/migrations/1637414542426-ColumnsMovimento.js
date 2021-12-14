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
exports.ColumnsMovimento1637414542426 = void 0;
const typeorm_1 = require("typeorm");
class ColumnsMovimento1637414542426 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "idmes",
                type: "uuid"
            }));
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "descricao",
                type: "varchar"
            }));
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "valor",
                type: "numeric(10,2)"
            }));
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "tipo",
                type: "integer"
            }));
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "datavencto",
                type: "timestamp",
                default: "now()"
            }));
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "datapagto",
                type: "timestamp",
                isNullable: true
            }));
            yield queryRunner.addColumn("movimento", new typeorm_1.TableColumn({
                name: "status",
                type: "integer",
                default: 0
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.ColumnsMovimento1637414542426 = ColumnsMovimento1637414542426;
