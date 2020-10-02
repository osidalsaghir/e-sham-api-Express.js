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

class VariantesController {

    
    add = async (req, res) => {
        const productID = req.query.productID; 
        const sizeID = req.query.sizeID; 
        const colorrID = req.query.colorrID; 
        const imageID = req.query.imageID; 
        const stock = req.query.stock; 
        const price = req.query.price; 
        const oldPrice = req.query.oldPrice; 

        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO variantes (productID , sizeID ,colorrID,imageID,stock,price,oldPrice) '+
                'VALUES  (N\'' + productID + '\' ,N\'' + sizeID + '\',N\'' + colorrID + '\' ,N\'' + imageID + '\' ,N\'' + stock + '\' ,N\'' + price + '\' ,N\'' + oldPrice + '\' )';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the variantes add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const vID = req.query.vID; 
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM variantes WHERE vID = "+ vID;
                
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the variantes deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
    update = async (req, res) => {
        const vID = req.query.vID; 
        const productID = req.query.productID; 
        const sizeID = req.query.sizeID; 
        const colorrID = req.query.colorrID; 
        const imageID = req.query.imageID; 
        const stock = req.query.stock; 
        const price = req.query.price; 
        const oldPrice = req.query.oldPrice; 
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update variantes set productID = N\'' + productID + '\' , sizeID = N\'' + sizeID + '\',colorrID = N\'' + colorrID + '\' ,imageID = N\'' + imageID +
                '\' , stock = N\'' + stock +'\' , price = N\'' + price +'\' , oldPrice = N\'' + oldPrice +'\'  WHERE vID ='+ vID;
               
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the variantes updated successfully");
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
                
                const qr = "select *  from variantes";
           
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

module.exports = new VariantesController();
