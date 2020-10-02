const jwt = require("jsonwebtoken");
var sql = require("mssql");
require('dotenv').config();


const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: "DESKTOP-7991DKN",
    database: "E-shamDB",

}



class CityCOntraller {


    insert = async (req, res) => {
        const name = req.query.Name;
        const startdate = new Date().toISOString().slice(0, 10);
        const status = req.query.Status;
        const apikey = req.query.ApiKey;
         const countryID=req.query.CountryID;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'INSERT INTO cities (name,startdate,status,countryID) values(N\'' + name + '\',N\'' + startdate + '\',' + status + ',\'' + countryID+ '\)';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('City added sucsessfully...');
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    update = async (req, res) => {
        const name = req.query.Name;
        const startdate = new Date().toISOString().slice(0, 10);
        const status = req.query.Status;
        const apikey = req.query.ApiKey;
         const countryID=req.query.CountryID;
        

        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'UPDATE cities SET name=N\'' + name + '\',startdate= N\'' + startdate + '\',statues= N\'' + status + '\',countryID= N\'' + countryID + '\' where countryID=4';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('City updated sucsessfully...');
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const cityID = req.query.CityID;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = "DELETE FROM cities WHERE cityID = " +cityID ;
                console.log(qr); 2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {

                        res.send("the city deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }
    }
    read = async (req, res) => {
      
        const apikey = req.query.ApiKey;
        
        
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'SELECT* FROM cities GO';


                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send(recordset.recordsets);
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
}


module.exports = new CityCOntraller();
