export class DBModel {

    driver: string;
    port: number;
    host: string;
    database: string;
    user: string;
    password: string;

    constructor(
        driver: string,
        host: string,
        database: string,
        user: string,
        password: string,
        port: number
    ){
        this.driver = driver;
        this.host = host;
        this.database = database,
        this.user = user;
        this.password = password;
        this.port = port
    }
    /**
     * DBUri returns driver://user:password@host:port/database
     */
    public DBUri(): string {
        return `${this.driver}://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`;
    }
}
