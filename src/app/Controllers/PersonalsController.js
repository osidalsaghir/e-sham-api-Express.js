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

class PersonalsController {

    
    add = async (req, res) => {
        const username = req.query.username;
        const password = req.query.password;
        const name = req.query.name;
        const surname = req.query.surname;
        const birthDate = req.query.birthDate;
        const phoneNumber = req.query.phoneNumber;
        const nid = req.query.nid;
        const email = req.query.email;
        const startingDate = req.query.startingDate;
        const endDate = req.query.endDate;
        const role = req.query.role;
        const salary = req.query.salary;
        const salaryUpdatedDate = req.query.salaryUpdatedDate;
        const workingStatus = req.query.workingStatus;
        const workingType = req.query.workingType;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'INSERT INTO personals (username,password,name,surname ,birthDate, phoneNumber,'+
                                                    'NID,email,startingDate,endDate,role,salary,salaryUpdatedDate,'+
                                                    'workingStatus,workingType) VALUES  '+
                                                    '(N\'' + username + '\' ,N\'' + password + '\',N\'' + name + '\' ,N\'' + surname + '\' '+
                                                    ',N\'' + birthDate + '\' ,N\'' + phoneNumber + '\' ,N\'' + nid + '\' ,N\'' + email + '\' '+
                                                    ',N\'' + startingDate + '\' ,N\'' + endDate + '\' ,N\'' + role + '\' ,N\'' + salary + '\' '+
                                                    ',N\'' + salaryUpdatedDate + '\' ,N\'' + workingStatus + '\' ,N\'' + workingType + '\' )';
         
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the personal add successfully");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }

    delete = async (req, res) => {
        const pid = req.query.pid
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = "DELETE FROM personals WHERE PID = "+ pid;
                console.log(qr);2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the personal deleted");
                    }
                });
            });
        }
        else {
            res.send("Invalid Key");
        }

    }
    update = async (req, res) => {
        const pid = req.query.pid
        const username = req.query.username;
        const password = req.query.password;
        const name = req.query.name;
        const surname = req.query.surname;
        const birthDate = req.query.birthDate;
        const phoneNumber = req.query.phoneNumber;
        const nid = req.query.nid;
        const email = req.query.email;
        const startingDate = req.query.startingDate;
        const endDate = req.query.endDate;
        const role = req.query.role;
        const salary = req.query.salary;
        const salaryUpdatedDate = req.query.salaryUpdatedDate;
        const workingStatus = req.query.workingStatus;
        const workingType = req.query.workingType;
        const apikey = req.query.ApiKey;
        if (apikey === process.env.APIKEY) {


            sql.connect(sqlConfig, function (err) {

                if (err) res.send(err);
                // create Request object
                var request = new sql.Request();
                
                const qr = 'update tag set username = N\'' + username + '\' , password = N\'' + password + 
                            '\', name = N\'' + name + '\', surname = N\'' + surname + '\', birthDate = N\'' + birthDate + 
                            '\', phoneNumber = N\'' + phoneNumber + '\', NID = N\'' + nid + '\', email = N\'' + email + 
                            '\', startingDate = N\'' + startingDate + '\', endDate = N\'' + endDate + '\', role = N\'' + role + 
                            '\', salary = N\'' + salary + '\', salaryUpdatedDate = N\'' + salaryUpdatedDate + '\', workingStatus = N\'' + workingStatus + 
                            '\', workingType = N\'' + workingType + '\' WHERE PID ='+ pid;
                console.log(qr);2
                // query to the database and get the records
                request.query(qr, function (err) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                       
                        res.send("the personal updated successfully");
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
                
                const qr = "select *  from personals";
           
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

module.exports = new PersonalsController();
