// EXAMPLE OF CLASS CONSUMES

import { DBConnection } from "./structures/DBConnection";
import { DBModel } from "./structures/DBModel";

export class MongoDB extends DBConnection {
    constructor(
        host: string,
        database: string,
        user: string,
        password: string,
        port: number
    ) {
        const config: DBModel = new DBModel();
        config.driver = "mongodb";
        config.host = host;
        config.database = database;
        config.user = user;
        config.password = password;
        config.port = port;

        super(config);
    }

    public connect() {
        // tslint:disable-next-line:no-console
        console.log("Connecting MONGODB");
    }
}
