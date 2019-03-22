import { DBModel } from "./structures/DBModel"

exports.createMongo = (nameDatabaseConfig = "default") => {
    const config = new DBModel(
        ...{
            driver: "mongodb",
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        }
    );

    return new MongoDB(config);
};
