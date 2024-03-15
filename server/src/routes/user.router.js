const express = require('express');
const bcrypt = require('bcrypt');
const { isValidPhoneNumber } = require('libphonenumber-js');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const saltRounds = 10;

const createPool = require('../databaseConn');
const UsersRouter = express.Router();
const pool = createPool();

// Endpoint for inserting a new user
UsersRouter.post('/', async (req, res) => {
    try {
        // Extract user data from the request body
        var { username, first_name, last_name, fayda_identification_number, email, phone_number, password_hash } = req.body;

        const anyNull = Object.values(req.body).some(value => value === null || value === undefined || value === "");

        if (anyNull) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Some properties in the request body are null or undefined. Please provide valid values for all properties."
            });
        }

        if (username.length < 8) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Invalid username. Please provide a username with at least 8 characters."
            });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Email is not valid. Please provide a valid email address."
            });
        }

        if (!isValidPhoneNumber(phone_number, 'ET')) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Phone Number is not valid. Please provide a valid phone number."
            });
        }

        if (!passwordRegex.test(password_hash)) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Password is not valid. Please provide a valid password."
            });
        }

        // Hash the password
        try {
            const hash = await bcrypt.hash(password_hash, saltRounds);
            password_hash = hash;
        } catch (hashError) {
            console.error('Error hashing password', hashError);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // SQL query to insert a user
        const insertQuery = `
            INSERT INTO public.trading_user
                (username, first_name, last_name, fayda_identification_number, email, phone_number, password_hash)
            VALUES
                ($1, $2, $3, $4, $5, $6, $7)
        `;

        const values = [username, first_name, last_name, fayda_identification_number, email, phone_number, password_hash];
        const insertedUser = await pool.query(insertQuery, values);

        return res.status(201).json(insertedUser);
    } catch (error) {
        console.error('Error inserting user', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});



UsersRouter.get('/', async (req, res) => {
    try {

       const users = await pool.query('SELECT * FROM trading_user ORDER BY user_id ASC');
       console.log(users);
       res.status(200).json({ message: 'All users queried sucessfully' })
        
    } catch (error) {
        console.error('Error inserting user', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


UsersRouter.get('/:user_id', async (req, res) =>{
    try {
        const user = await pool.query('SELECT * FROM trading_user WHERE ')
    } catch (error) {
        console.error('Error fetching user', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

UsersRouter.post('/users/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    const result = await pool.query('SELECT * FROM trading_user WHERE username = $1 OR email = $2', [usernameOrEmail, usernameOrEmail])

    if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid username or email or password' });
      }

    const user = result.rows[0];
})


module.exports = UsersRouter;
