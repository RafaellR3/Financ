console.log('DATA BASE: ',process.env.DATABASE_URL, 'Porta:', process.env.PORT);
module.exports = {
    "type": "postgres",
    "url": "postgres://peezgvkknjfauz:78b5939c0d5e63039f566c224957bc7e632a835b3a6c97ed7a45eb2884999cc0@ec2-52-70-205-234.compute-1.amazonaws.com:5432/d4o6tpj7ab6h6h",
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
