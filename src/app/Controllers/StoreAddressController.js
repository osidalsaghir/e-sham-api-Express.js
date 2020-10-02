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

class StoreAddressController {

    
    add = async (req, res) => {
        const discreption = req.query.discreption; 
        const cityID = req.query.cityID; 
        const neighborhoodID = req.query.neighborhoodID; 
        const storeID = req.query.storeID; 

        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO storeAddresses (discreption , cityID ,neighborhoodID,storeID) '+
                'VALUES  (N\'' + discreption + '\' ,N\'' + cityID + '\',N\'' + neighborhoodID + '\' ,N\'' + storeID + '\' )';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the storeAddresses add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const addressID = req.query.addressID; 
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM storeAddresses WHERE addressID = "+ addressID;
                
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the storeAddresses deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
    update = async (req, res) => {
        const addressID = req.query.addressID; 
        const discreption = req.query.discreption; 
        const cityID = req.query.cityID; 
        const neighborhoodID = req.query.neighborhoodID; 
        const storeID = req.query.storeID; 

        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update storeAddresses set discreption = N\'' + discreption + '\' , cityID = N\'' + cityID + '\',neighborhoodID = N\'' + neighborhoodID + '\' ,storeID = N\'' + storeID + '\'  WHERE addressID ='+ addressID;
               
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the storeAddresses updated successfully");
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
                
                const qr = "select *  from storeAddresses";
           
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

module.exports = new StoreAddressController();
