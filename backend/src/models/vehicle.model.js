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
const vehicle_details = {
    getAll: (callback) => {
        connection.query('SELECT * FROM vehicle_details', (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },
    create: (vehicle_detailsData, callback) => {
        connection.query('INSERT INTO vehicle_details SET ?', vehicle_detailsData, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.insertId); // Return the ID of the inserted vehicle_details
        });
    },

    // Add other CRUD methods as needed
};

// Export the vehicle_details model
export default vehicle_details;
