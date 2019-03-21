export class IDBModel {
    port: number;
    host: string;
    database: string;
    user: string;
    password: string;

    public DBUri(): string {
        return "";
    }
}

export abstract class IDBConnection {
    private _model: IDBModel;

    constructor(model: IDBModel) {
        this._model = model
    }

    protected abstract connect(): any;
}
