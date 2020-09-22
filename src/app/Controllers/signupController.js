const jwt = require("jsonwebtoken");
var sql = require("mssql");
require('dotenv').config();


const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: "DESKTOP-7991DKN",
    database: "E-shamDB",

}



class SignupController {


    Signup = async (req, res) => {
        const name = req.query.Name;
        const surname = req.query.Surname;
        const birthdate = req.query.Birthdate;
        const nid = req.query.Nid;
        const gender = req.query.Gender;
        const phonenumber = req.query.PhoneNumber;
        const username = req.query.UserName;
        const startdate = new Date().toISOString().slice(0, 10);
        const email = req.query.Email;
        const pass = req.query.Password;
        const apikey = req.query.ApiKey;
        console.log('birthdate ' + startdate);
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();

                const qr = 'INSERT INTO users (name ,surname, birthdate,email,gender,NID,phoneNumber,username,password,startdate,role) values(N\'' + name + '\',N\'' + surname + '\',\'' + birthdate + '\',\'' + email + '\',\'' + gender + '\',\'' + nid + '\',\'' + phonenumber + '\',\'' + username + '\',\'' + pass + '\',\'' + startdate + '\',\'U\')';

                // query to the database and get the records
                request.query(qr, function (err, recordset) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        res.send('Signup done...');
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
}

module.exports = new SignupController();
