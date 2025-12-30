const mysql = require('mysql2/promise');

async function createDb() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS bid;`);
        console.log("Database 'bid' created or already exists.");
        await connection.end();
    } catch (err) {
        console.error('Error creating database:', err);
        process.exit(1);
    }
}

createDb();
