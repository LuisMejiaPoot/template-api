import { DataSource } from "typeorm";

export default interface DBConnectionManager {
    connect(): Promise<DataSource>;
    disconnect(): Promise<void>;
    
}