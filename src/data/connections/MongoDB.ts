// EXAMPLE OF CLASS CONSUMES

import { DBConnection } from "./structures/DBConnection";
import { DBModel } from "./structures/DBModel";

export class MongoDB extends DBConnection {
    constructor(
        config: DBModel
    ) {
        super(config);
    }

    public connect() {
        // tslint:disable-next-line:no-console
        console.log("Connecting MONGODB");
    }
}
