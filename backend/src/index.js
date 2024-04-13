import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import con from "./db/connecion.js";




import vehicle_details from "./models/vehicle.model.js";
import driver_details from "./models/driver.model.js";
import helper_details from "./models/helper.model.js";
import company_details from "./models/company.model.js"
dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log('MYSQL connection failed!!! ' + err);
    })

app.get('/vehiclesdata', (req, res) => {
    vehicle_details.getAll((err, vehicles) => {
        if (err) throw err;
        let vehiclesNo = JSON.stringify(vehicles)
        res.send(vehiclesNo)
    })
})
app.get('/driversdata', (req, res) => {
    driver_details.getAll((err, drivers) => {
        if (err) throw err;
        let data = JSON.stringify(drivers)
        res.send(data)
    })
})
app.get('/helpersdata', (req, res) => {
    helper_details.getAll((err, helpers) => {
        if (err) throw err;
        let data = JSON.stringify(helpers)
        res.send(data)
    })
})
app.get('/companyesdata', (req, res) => {
    company_details.getAll((err, companys) => {
        if (err) throw err;
        let data = JSON.stringify(companys)
        res.send(data)
    })
})

app.get('/api', async (req, res) => {
    const jsonString = Object.keys(req.query)[0];
    // Parse the JSON string
    const data = JSON.parse(jsonString);
    var sql = "INSERT INTO `tip_details`(`vehicleNumber`, `driverID`, `helperID`, `carOilAmount`, `inTime`, `outTime`) VALUES" + `('${data.carNo}','${data.driverID}','${data.helperID}','${data.oliAmount}','${data.time.in}','${data.time.out}')`

    con.query(sql, function (error, results) {
        if (error) throw error;
        console.log('The solution is: ', results);
    })

    console.log(sql);
    res.sendStatus(200);
})


