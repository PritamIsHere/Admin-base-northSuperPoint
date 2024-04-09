// Import necessary modules
import mysql from 'mysql';
import { DB_NAME } from '../constants.js';
// Create MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: DB_NAME
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Define the model functions
const company_details = {
    getAll: (callback) => {
        connection.query('SELECT * FROM company_details', (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },
    create: (company_detailsData, callback) => {
        connection.query('INSERT INTO company_details SET ?', company_detailsData, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.insertId); // Return the ID of the inserted company_details
        });
    },

    // Add other CRUD methods as needed
};

// Export the company_details model
export default company_details;
