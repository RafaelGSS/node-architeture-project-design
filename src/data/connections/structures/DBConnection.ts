import { DBModel } from "./DBModel";

export abstract class DBConnection {
    private model: DBModel;

    constructor(model: DBModel) {
        this.model = model;
    }

    protected abstract connect(): any;
}
