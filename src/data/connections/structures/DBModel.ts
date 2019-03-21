export class DBModel {

    public driver: string;
    public port: number;
    public host: string;
    public database: string;
    public user: string;
    public password: string;

    /**
     * DBUri returns driver://user:password@host:port/database
     */
    public DBUri(): string {
        return `${this.driver}://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`;
    }
}
