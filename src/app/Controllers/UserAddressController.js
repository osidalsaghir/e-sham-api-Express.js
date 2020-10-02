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

class UserAddressController {

    
    add = async (req, res) => {
     
        const description = req.query.description; 
        const cityID = req.query.cityID; 
        const neighborhoodID = req.query.neighborhoodID; 
        const userID = req.query.userID; 

        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO userAddresses (description , cityID ,neighborhoodID,userID) '+
                'VALUES  (N\'' + description + '\' ,N\'' + cityID + '\',N\'' + neighborhoodID + '\' ,N\'' + userID + '\' )';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the userAddresses add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const addressID = req.query.addressID
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM userAddresses WHERE addressID = "+ addressID;
                
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the userAddresses deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
    update = async (req, res) => {
        const addressID = req.query.addressID
        const description = req.query.description; 
        const cityID = req.query.cityID; 
        const neighborhoodID = req.query.neighborhoodID; 
        const userID = req.query.userID; 
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update adminManeger set description = N\'' + description + '\' , cityID = N\'' + cityID + '\',neighborhoodID = N\'' + neighborhoodID + '\' ,userID = N\'' + userID + '\'  WHERE addressID ='+ addressID;
               
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the userAddresses updated successfully");
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
                
                const qr = "select *  from userAddresses";
           
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

module.exports = new UserAddressController();
