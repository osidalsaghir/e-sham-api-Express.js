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

class OrderController {

    
    add = async (req, res) => {
        const userID = req.query.userID; 
        const date = new Date().toISOString().slice(0, 10);
        const productID = req.query.productID; 
        const orderNumber = req.query.orderNumber;  
        const handlngStatus = req.query.handlngStatus; 
        const returnStatus = req.query.returnStatus; 
  

        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO orders (userID , date, productID, orderNumber, handlngStatus, returnStatus ) '+
                'VALUES  (N\'' + userID + '\' ,N\'' + date + '\' ,N\'' + productID + '\' ,N\'' + orderNumber + '\' ,N\'' + handlngStatus + '\' ,N\'' + returnStatus + ')';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the orders add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const orderID = req.query.orderID; 
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM orders WHERE orderID = "+ orderID;
                
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the orders deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
    update = async (req, res) => {
        const orderID = req.query.orderID; 
        const userID = req.query.userID; 
        const date = new Date().toISOString().slice(0, 10);
        const productID = req.query.productID; 
        const orderNumber = req.query.orderNumber;  
        const handlngStatus = req.query.handlngStatus; 
        const returnStatus = req.query.returnStatus; 

        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update orders set userID = N\'' + userID + '\' , date = N\'' + date +  '\' , productID = N\'' + productID +
                '\' , orderNumber = N\'' + orderNumber + '\' , handlngStatus = N\'' + handlngStatus + '\' , returnStatus = N\'' + returnStatus +'\'  WHERE orderID ='+ orderID;
               
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the orders updated successfully");
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
                
                const qr = "select *  from orders";
           
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

module.exports = new OrderController();
