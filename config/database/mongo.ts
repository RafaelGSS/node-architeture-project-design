// This is an example of database driver
import { IDBConnection, IDBModel } from "./database";

export class MongoDB extends IDBConnection {
    constructor() {
        const config : IDBModel = new IDBModel();
        super(config)
    }

    public connect() {
        // tslint:disable-next-line:no-console
        console.log("Connecting MONGODB")
    }
}