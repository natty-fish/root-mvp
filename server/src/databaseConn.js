const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// const createPool = () => {
//     const dbConfig = {
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         database: process.env.DB_DATABASE,
//         family: 4,
//     };

//     return new Pool(dbConfig);
// };

const createPool = () => {
    // const dbConfig = {
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     database: process.env.DB_DATABASE,
    //     family: 4,
    // };

    return new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'ESXTRADER',
        password: 'admin',
        port: 5433,
      });
};

module.exports = createPool;
