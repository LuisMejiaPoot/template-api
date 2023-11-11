import { Column } from "typeorm";


export default abstract class DefaultEntity {
        @Column({
            type: "int",
            length: 4,
            name: "status"
        })
        status: number;

        @Column({
            type:"varchar",
            length:100,
            name:"created_by"
        })
        createdBy:string;

        @Column({
            type: "datetime",
            name: "created_at"
        })
        createdAt: Date;

        @Column({
            type:"varchar",
            length:100,
            name:"updated_by"
        })
        updateddBy:string;

        @Column({
            type: "datetime",
            name: "updated_at"
        })
        updatedAt: Date;
    }

