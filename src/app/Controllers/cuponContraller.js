const jwt = require("jsonwebtoken");
var sql = require("mssql");
require('dotenv').config();


const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: "DESKTOP-7991DKN",
    database: "E-shamDB",

}



class CopunContraller {


    insert = async (req, res) => {
        const name = req.query.Name;
        const startdate = new Date().toISOString().slice(0, 10);
        const enddate = req.query.Status;
         const copunStatus=req.query.CopunStausID;
         const storeID =req.query.StoreID;

         const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'INSERT INTO copuns (name,startdate,enddate,storeID,copunStatus) values(N\'' + name + '\',N\'' + startdate + '\',' + enddate + ',\'' + storeID+ '\,\'' + copunStatus+ '\)';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('Copun added sucsessfully...');
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
        const enddate = req.query.Status;
         const copunStatus=req.query.CopunStausID;
         const storeID =req.query.StoreID;
        const apikey = req.query.ApiKey;

        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'UPDATE copuns SET name=N\'' + name + '\',statues= N\'' + copunStatus + '\' where storeID= N\'' + storeID + '\'';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('copun updated sucsessfully...');
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const copunID = req.query.CopunID;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = "DELETE FROM copuns WHERE copunID = " +copunID ;
                console.log(qr); 2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {

                        res.send("the copun deleted");
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

                const qr = 'SELECT* FROM copuns GO';


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


module.exports = new CopunContraller();
