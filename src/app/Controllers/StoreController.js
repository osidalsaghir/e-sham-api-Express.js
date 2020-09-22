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

class StoreController {

    
    add = async (req, res) => {
        const address = req.query.address;
        const stroreName = req.query.stroreName;
        const ownerName = req.query.ownerName;
        const ownerSurname = req.query.ownerSurname;
        const logo = req.query.logo;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO store (address, stroreName, ownerName ,ownerSurname,logo ) VALUES  (N\'' + address + '\', N\'' + stroreName + '\', N\'' + ownerName + '\', N\'' + ownerSurname + '\',N\'' + logo + '\')';
                console.log(qr);2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the store added %s successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
}

module.exports = new StoreController();
