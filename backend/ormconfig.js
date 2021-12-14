console.log('DATA BASE: ',process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": "postgres://dsfmzzemijfrtw:d29eb60e0cfa3b157132ccd4c6da6290c704dd879ec76b6404ca676cb44e57b9@ec2-54-225-203-79.compute-1.amazonaws.com:5432/d2lmtcosnvt7lu",
    "migrations": [
        "./dist/database/migrations/*.js"
     ],
     "ssl": true,
    "entities": [
        "./dist/entity/*.js"
    ],
    "cli":{
        "migrationsDir": "./src/database/migrations",
        "entitiesDir": "./src/entity"
    }
}
