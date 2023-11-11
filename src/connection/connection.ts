import { DataSource } from "typeorm"
import DBConnectionManager from "./DBConnectionManager";
import ConnectionSource from "./ConnectionSource";
import DBConnectionHelper from "./DBConnectionHelper";
export default class DBConnection  implements DBConnectionManager{


    private connection: DataSource | undefined;
    //private queryRunner: QueryRunner | undefined;

        private async getConnectionParameters(): Promise<ConnectionSource>{
            return {
                database: 'tierran2_pedidos',
                port: 3306,
                password: '',
                host: '174.136.53.220',
                username: 'tierran2'
            }
        };
        
        public async connect(): Promise<DataSource> {
           try {
            const connectionParameters = await this.getConnectionParameters();
            if(!this.connection){
                this.connection= await new DBConnectionHelper().connect(connectionParameters);
            }
            else if(!this.connection.isInitialized){
                await this.connection.initialize();
            }
            console.log( "🚀 ~ DBConnectionManager: Connected" );
            return this.connection;
           } catch (error) {
            console.log("🚀 ~ file: connection.ts:32 ~ DBConnection ~ connect ~ error:", error)
            throw error
           }
        }
        public async disconnect(): Promise<void> {
            try {
                await this.connection?.destroy();
            } catch (error) {
                console.log( error );
            }
        }

        async getConnection(): Promise<DataSource> {
            return this.connection && this.connection.isInitialized ? this.connection : this.connect();
          }


    }

