const express = require('express');
const http = require('http');
const helmet = require('helmet');
const createPool = require('./src/databaseConn'); // Use a different name for clarity

const app = express();
const server = http.createServer(app);

app.use(helmet());
app.use(express.json());

const usersRouter = require('./src/routes/user.router'); // Pass the pool to the router

async function startServer() {
    try {
        const pool = createPool();
        console.log('Connected to PostgreSQL database');

        server.listen(process.env.PORT || 9000, () => {
            console.log(`Server running on port ${process.env.PORT || 9000}`);
        });
    } catch (error) {
        console.error('Error connecting to PostgreSQL database', error);
        process.exit(1);
    }
}

startServer();

app.use('/users', usersRouter);

module.exports = app;
