import { DBConnection } from "../connections/structures/DBConnection";

export abstract class Repository {
    protected readonly connection: DBConnection;

    constructor(connection: DBConnection) {
        this.connection = connection;
    }
}
