const sql = require('mssql');
const env = require('./config.js');

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: process.env.INSTANCENAME  // SQL Server instance name
    },
    port: process.env.DB_PORT,
    pool: {
        max: 8,
        min: 0,
        idleTimeoutMillis: 30000,
        acquireTimeoutMillis: 20000
    }

};

const pool = new sql.ConnectionPool(config);

pool.connect()
    .then(pool => {
        console.log('Connected to MSSQL...')
        return pool
    })
    .catch(err => console.log('Database Connection Failed!: ', err));

module.exports = pool;