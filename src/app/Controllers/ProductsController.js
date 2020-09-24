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

class ProductsController {

    
    add = async (req, res) => {
        const storeID = req.query.storeID; 
        const publishDate = req.query.publishDate; 
        const storeDescription = req.query.storeDescription; 
        const description = req.query.description; 
        const priceType = req.query.priceType; 
        const viewPriceType = req.query.viewPriceType; 
        const staatues = req.query.staatues; 
        const orderCounter = req.query.orderCounter; 
        const catID = req.query.catID; 
        const tagID = req.query.tagID; 
        const slugID = req.query.slugID; 
        
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO products (storeID , publishDate,storeDescription,description,priceType,'+
                'viewPriceType,staatues,orderCounter,catID,tagID,slugID)'+
                ' VALUES  (N\'' + storeID + '\' ,N\'' + publishDate + '\',N\'' + storeDescription + '\',N\'' + description + 
                '\',N\'' + priceType + '\',N\'' + viewPriceType + '\',N\'' + staatues + '\',N\'' +
                orderCounter + '\',N\'' + catID + '\',N\'' + tagID + '\',N\'' + slugID + '\')';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the category add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const productID = req.query.productID
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM products WHERE productID = "+ productID;
                
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
        const storeID = req.query.storeID; 
        const publishDate = req.query.publishDate; 
        const storeDescription = req.query.storeDescription; 
        const description = req.query.description; 
        const priceType = req.query.priceType; 
        const viewPriceType = req.query.viewPriceType; 
        const staatues = req.query.staatues; 
        const orderCounter = req.query.orderCounter; 
        const catID = req.query.catID; 
        const tagID = req.query.tagID; 
        const slugID = req.query.slugID; 
        const productID = req.query.productID
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update products set storeID = N\'' + storeID + '\' , publishDate = N\'' + publishDate + '\' , storeDescription = N\'' + storeDescription +
                '\' , description = N\'' + description +'\' , priceType = N\'' + priceType +'\' , viewPriceType = N\'' + viewPriceType +
                '\' , staatues = N\'' + staatues +'\' , orderCounter = N\'' + orderCounter +'\' , catID = N\'' + catID +
                '\' , tagID = N\'' + tagID +'\' , slugID = N\'' + slugID + 
                    '\' WHERE productID ='+ productID;
               
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the category updated successfully");
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
                
                const qr = "select *  from products";
           
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

module.exports = new ProductsController();
