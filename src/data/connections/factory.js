exports.createMongo = (host, database, user, password, port = 27017) => {
    return new MongoDB(host, database, user, password, port);
};
