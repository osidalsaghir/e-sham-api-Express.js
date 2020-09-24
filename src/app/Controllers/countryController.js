const jwt = require("jsonwebtoken");
var sql = require("mssql");
require('dotenv').config();


const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: "DESKTOP-7991DKN",
    database: "E-shamDB",

}



class CountryContraller {


    insert = async (req, res) => {
        const name = req.query.Name;
        const startdate = new Date().toISOString().slice(0, 10);
        const phonecode = req.query.Phonecode;
        const countrycode = req.query.Countrycode;
        const cashtype = req.query.Cashtype;
        const apikey = req.query.ApiKey;

        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'INSERT INTO countries (name,countryCode,phoneCode,startDate,cashType) values(N\'' + name + '\',N\'' + countrycode + '\',' + phonecode + ',\'' + startdate + '\',\'' + cashtype + '\')';
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
        const phonecode = req.query.Phonecode;
        const countrycode = req.query.Countrycode;
        const cashtype = req.query.Cashtype;
        const apikey = req.query.ApiKey;

        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'UPDATE countries SET name=N\'' + name + '\',countryCode= N\'' + countrycode + '\',startDate= N\'' + startdate + '\',cashType= N\'' + cashtype + '\',phoneCode= N\'' + phonecode + '\' where countryID=4';
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
        const countryID = req.query.CountryID;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = "DELETE FROM store WHERE storeID = " + countryID;
                console.log(qr); 2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {

                        res.send("the store deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

        read = async (req, res) => {
            const name = req.query.Name;
            const startdate = new Date().toISOString().slice(0, 10);
            const phonecode = req.query.Phonecode;
            const countrycode = req.query.Countrycode;
            const cashtype = req.query.Cashtype;
            const apikey = req.query.ApiKey;

            if (apikey === process.env.APIKEY) {


                sql.connect(sqlConfig, function (err) {

                    if (err) res.send(err);
                    // create Request object
                    var request = new sql.Request();

                    const qr = 'SELECT* FROM countries GO';


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
}

module.exports = new CountryContraller();
