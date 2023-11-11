import { DataSource } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import ConnectionSource from "./ConnectionSource";
import entities from "./databases/entities";


export default class DBConnectionHelper {

    async connect(connectionParameters: ConnectionSource): Promise<DataSource> {
        const dataSourceOptions: MysqlConnectionOptions = {
            type: "mysql",
            ...connectionParameters,
            entities: entities,
            logging: true,
            synchronize: false
        }
        return   await new DataSource( dataSourceOptions ).initialize();
    }
}