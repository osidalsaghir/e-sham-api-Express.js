const jwt = require("jsonwebtoken");
var sql = require("mssql");
require('dotenv').config();


const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: "DESKTOP-7991DKN",
    database: "E-shamDB",

}



class NighborhoodContraller {


    insert = async (req, res) => {
        const name = req.query.Name;
        const cityID=req.query.CityID;
        const apikey =req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'INSERT INTO neighborhood (name,cityID) values(N\'' + name + '\',N\'' + cityID + '\')';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('neighborhood added sucsessfully...');
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
        const cityID=req.query.CityID;
        const apikey = req.query.ApiKey;

        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'UPDATE neighborhood SET name=N\'' + name + '\' where cityID= N\'' + cityID + '\'';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('neighborhood updated sucsessfully...');
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const neighborhoodID = req.query.NeighborhoodID;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = "DELETE FROM neighborhood WHERE neighborhoodID = " + neighborhoodID;
                console.log(qr); 2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {

                        res.send("the neighborhood deleted");
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

                const qr = 'SELECT* FROM neighborhood GO';


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


module.exports = new NighborhoodContraller();
