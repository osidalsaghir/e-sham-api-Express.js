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

class AuthController {

    
    login = async (req, res) => {
        const email = req.query.Email;
        const pass = req.query.Password;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                const qr = 'select * from Users as u where u.user_Email = \'' + email + '\' and u.user_Password =\'' + pass + '\'';
                console.log(qr);
                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send("QUERY ERROR");
                    }

                    else {
                        if (recordset.recordset.length > 0) {
                            console.log("passed");
                            jwt.sign({ email: email }, "secretKey", (err, token) => {
                                if (err) {
                                    res.send(err);
                                }
                                res.json({
                                    token: token
                                });
                            });
                        }
                        else {
                            res.sendStatus(403);
                        }
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
}

module.exports = new AuthController();
