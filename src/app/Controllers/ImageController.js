const jwt = require("jsonwebtoken");
var sql = require("mssql");
require('dotenv').config();


const sqlConfig = {
    user: "wwe",
    password: "wwe",
    server: "OS",
    database: "E-shamDB",
    port: 1433
}

class ImageController {

    
    add = async (req, res) => {
        const url = req.query.url;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO image (url) VALUES  (N\'' + url + '\')';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the image add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const imageID = req.query.imageID
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM image WHERE imageID = "+ imageID;
                console.log(qr);
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

    }
    update = async (req, res) => {
        const url = req.query.url;
        const imageID = req.query.imageID;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update image set url = N\'' + url + '\' WHERE imageID ='+ imageID;
                console.log(qr);2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the image updated successfully");
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
                
                const qr = "select *  from image";
           
                // query to the database and get the records
                request.query(qr, function (err , recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send(recordset.recordset);
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
}

module.exports = new ImageController();
