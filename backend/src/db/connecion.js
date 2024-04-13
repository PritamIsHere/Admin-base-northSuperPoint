import mysql from "mysql";
import { DB_NAME } from "../constants.js";

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: DB_NAME
});

export default con;