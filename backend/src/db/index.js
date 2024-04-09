import mysql from "mysql";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {

        const connectionInstance = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: DB_NAME
        });

        console.log('Connected to mySql !!');

    } catch (error) {
        console.log('MYSQL connection error ', error);
        process.exit(1)
    }
}

export default connectDB