exports.createMongo = (port, host, database, user, password) => {
    return new MongoDB(port, host, database, user, password);
}