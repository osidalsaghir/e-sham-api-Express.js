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

class StoreManagerController {

    
    add = async (req, res) => {
        const storeID = req.query.StoreID;
        const username = req.query.Username;
        const password = req.query.Password;
        const nid = req.query.NID;
        const email = req.query.Email;
        const startDate = new Date().toISOString().slice(0, 10);
        const phoneNumber = req.query.PhoneNumber;
        const seconphoneNumber = req.query.seconphoneNumber;
        const role = "C" ; 
        const apikey = req.query.ApiKey;
        
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO storeManager (storeID, username, password ,NID,email,startDate,phoneNumber,seconphoneNumber,role) VALUES  (N\'' + storeID + '\', N\'' + username + '\', N\'' + password + '\', N\'' + nid + '\',N\'' + email + '\',N\'' + startDate + '\',N\'' + phoneNumber + '\',N\'' + seconphoneNumber + '\',N\'' + role + '\')';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the maneger added successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const managerID = req.query.ManagerID
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM storeManager WHERE storeID = "+ managerID;
                console.log(qr);2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the manager deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
    update = async (req, res) => {
        const managerID = req.query.ManagerID
        const username = req.query.Username;
        const password = req.query.Password;
        const nid = req.query.NID;
        const email = req.query.Email;
        const startDate = new Date().toISOString().slice(0, 10);
        const phoneNumber = req.query.PhoneNumber;
        const seconphoneNumber = req.query.seconphoneNumber;        
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update storeManager set username = N\'' + username + '\' ,password = N\'' + password + '\' ,NID =  N\'' + nid + '\',email = N\'' + email + '\',startDate = N\'' + startDate + '\' , phoneNumber = N\'' + phoneNumber + '\' , seconphoneNumber = N\'' + seconphoneNumber + '\' where storeID = \'' + managerID + '\'';
                console.log(qr);2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the store updated successfully");
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
                
                const qr = "select *  from storeManager";
           
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

module.exports = new StoreManagerController();
